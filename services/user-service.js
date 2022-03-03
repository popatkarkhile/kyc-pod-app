const axios = require('axios');
// require dependencies
const PDFDocument = require('pdfkit');
const fs = require('fs');
const { json } = require('express/lib/response');
module.exports = {
    getAadhaarPDF: async (data) => {
        try {
            const doc = new PDFDocument();

            // doc.addPage() // for adding new page in pdf
            doc.pipe(fs.createWriteStream(`aadhaarPDF/${data.aadhaarNumber}.pdf`));

            // Adding functionality
            doc
                .fontSize(15)
                .fillColor('black')
                .text("Aadhar details as per Digi-Locker XML File", 100, 100, { align: 'center' });
            doc.moveDown(1.5);

            doc.image('uploads/' + data.aadhaarNumber, { width: 100, height: 100, align: 'left' });

            doc.text("Name : " + data.name, { align: 'center' })
            doc.text("DOB : " + data.dob, { align: 'center' })
            doc.text("Gender : " + data.gender, { align: 'center' })
            doc.text("Address : " + data.address, { align: 'center' })
            doc.text("Village/ Town/ City : " + data.city, { align: 'center' })
            doc.text("Sub-district : " + data.subDistrict, { align: 'center' })
            doc.text("District : " + data.district, { align: 'center' })
            doc.text("State : " + data.state, { align: 'center' })
            doc.text("Pin Code : " + data.pincode, { align: 'center' })
            doc.text("Aadhar Number : " + data.aadhaarNumber, { align: 'center' })
            doc.end();
            return `aadhaarPDF/${data.aadhaarNumber}.pdf`;
        }
        catch (error) {
            throw error;
        };
    },

    getUsers: async () => {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts')
        }
        catch (error) {
            throw error;
        };
    }

} // Module closing
