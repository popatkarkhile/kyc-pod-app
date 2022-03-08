const axios = require('axios');
// var PdfTable = require('voilab-pdf-table');
const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = {

    getAadhaarPDF: async (data) => {
        try {
            const doc = new PDFDocument();

            doc.pipe(fs.createWriteStream(`aadhaarPDF/${data.pdfFileName}.pdf`));

            doc.moveDown(1.0);
            doc.lineJoin('bevel')
                .rect(50, 50, 510, 250)
                .fillOpacity(0.8)
                .fillAndStroke("#fff", "#0000FF")
                .stroke()

            // Adding functionality
            doc.moveDown(1.5);
            doc.image('uploads/' + data.aadhaarNumber + '.png', { width: 100, height: 130, align: 'left', valign: 'center' })
                .fillColor('#444444')
                .fontSize(15)
                .text('Aaadhaar details as per Digi-Locker XML File', 160, 57, { align: 'left', underline: true })
                .fontSize(10)
                .text(' ', 200, 65, { align: 'right' })
                .moveDown(1.0);

            doc.moveDown(0.3);
            doc.text("Name : " + data.name, { align: 'left' })
                .moveDown(0.5);
            doc.text("DOB : " + data.dob, { align: 'left' })
                .moveDown(0.5);
            doc.text("Gender : " + data.gender, { align: 'left' })
                .moveDown(0.5);
            doc.text("Address : " + data.address, { align: 'left', lineBreak: true })
                .moveDown(0.5);
            doc.text("Village/ Town/ City : " + data.city, { align: 'left' })
                .moveDown(0.5);
            doc.text("Sub-district : " + data.subDistrict, { align: 'left' })
                .moveDown(0.5);
            doc.text("District : " + data.district, { align: 'left' })
                .moveDown(0.5);
            doc.text("State : " + data.state, { align: 'left' })
                .moveDown(0.5);
            doc.text("Pin Code : " + data.pincode, { align: 'left' })
                .moveDown(0.5);
            doc.text("Aadhaar Number : " + data.aadhaarNumber, { align: 'left' })

            doc.end();
            return "path to file - " + data.pdfFileName + ".pdf";
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
