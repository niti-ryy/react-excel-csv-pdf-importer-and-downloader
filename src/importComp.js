import React, { useState } from 'react';
import * as XLSX from 'xlsx'; // Importing xlsx library

const ImportComp = () => {
    const [data, setData] = useState([]); // State to store data from Excel file

    // Function to handle file import
    const handleImport = (e) => {
        const files = e.target.files; // Retrieve files from input event
        console.log(files)
        if (files.length) { // Check if any file is selected
            const file = files[0]; // Get the first file (assuming only one file is selected)
            const reader = new FileReader(); // Create FileReader object
            console.log(reader,"reader")
            reader.onload = (e) => { // Event handler for when file reading is complete
                const wb = XLSX.read(e.target.result, { type: 'binary' }); // Read file contents and create workbook read all the columsn and rows
                console.log("WB",wb);
                const sheets = wb.SheetNames[0]; // Get sheet names from workbook
                console.log(sheets,"sheet names")

                if (sheets.length) { // Check if there are any sheets in the workbook
                    const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheets]); // Convert first sheet to JSON
                    setData(rows); // Set data state with extracted rows
                    console.log(rows,"rows"); // Log the extracted data
                }
            };
            reader.readAsBinaryString(file); // Read file as binary string
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImport} /> {/* File input to trigger import */}
            <p>Select an Excel file to import data.</p>
        </div>
    );
};

export default ImportComp;
