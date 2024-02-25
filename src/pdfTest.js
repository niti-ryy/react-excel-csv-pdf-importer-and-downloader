
import React, { useState } from 'react'
import {jsPDF} from "jspdf"

export const PdfCreator = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
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
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
  
      // Add image to the PDF document
      const img = new Image();
      img.src = 'https://picsum.photos/536/354'; // Replace with the URL of your image
      doc.addImage(img, 'JPEG', 20, 20, 50, 50); // Add image at (20, 20) with width 50 and height 50
  
      // Add borders and styling to fields
      doc.rect(20, 80, 150, 10); // Add border to name field
      doc.text(`Name: ${formData.name}`, 25, 88); // Add text for name field
  
      doc.rect(20, 100, 150, 10); // Add border to email field
      doc.text(`Email: ${formData.email}`, 25, 108); // Add text for email field
  
      doc.rect(20, 120, 150, 40); // Add border to message field
      doc.text(`Message: ${formData.message}`, 25, 128); // Add text for message field
  
      // Save the PDF document
      doc.save('generated_document.pdf');
    };
  
    return (
      <div>
        <h2>PDF Generator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit">Generate PDF</button>
        </form>
      </div>
    );
  };
  


  
   


