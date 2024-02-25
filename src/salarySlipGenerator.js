import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const SalarySlipGenerator = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    basicSalary: '',
    allowances: '',
    deductions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set properties of the PDF document
    doc.setFontSize(12);

    // Add title
    doc.text("Salary Slip", 105, 10, null, null, 'center');

    // Add table header
    doc.text("Description", 20, 30);
    doc.text("Amount (USD)", 100, 30);

    // Add table rows for each field
    let yPos = 40;
    Object.entries(formData).forEach(([key, value]) => {
      doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}`, 20, yPos);
      doc.text(value, 100, yPos);
      yPos += 10;
    });

    // Calculate net salary
    const netSalary = parseFloat(formData.basicSalary) + parseFloat(formData.allowances) - parseFloat(formData.deductions);

    // Add net salary in numbers at the bottom
    doc.text(`Net Salary (in numbers): $${netSalary.toFixed(2)}`, 20, yPos + 10);

    // Save the PDF document
    doc.save('salary_slip.pdf');
  };

  return (
    <div>
      <h2>Salary Slip Generator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employeeName">Employee Name:</label>
          <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="employeeId">Employee ID:</label>
          <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="basicSalary">Basic Salary:</label>
          <input type="number" id="basicSalary" name="basicSalary" value={formData.basicSalary} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="allowances">Allowances:</label>
          <input type="number" id="allowances" name="allowances" value={formData.allowances} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="deductions">Deductions:</label>
          <input type="number" id="deductions" name="deductions" value={formData.deductions} onChange={handleChange} />
        </div>
        <button type="submit">Generate Salary Slip</button>
      </form>
    </div>
  );
};

export default SalarySlipGenerator;
