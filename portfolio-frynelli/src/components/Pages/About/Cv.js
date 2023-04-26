import friniCvpdf from "../../../assets/Frynelli-Oikonomou-CV.pdf";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
    
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
{/* <div className="cv">
    
    <iframe src={friniCvpdf} width="100%" height="90%"></iframe> 
    <div className="button">
           <button><a href="/about">Back</a></button>
           </div>
    </div> */}

    function Cv() {
      const [numPages, setNumPages] = useState(null);
    
      function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
      function downloadPdf() {
        const element = document.createElement('a');
        element.setAttribute('href', '/path/to/pdf/file.pdf');
        element.setAttribute('download', 'file.pdf');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    
      return (
        <div className="cv">
          <Document
            file={friniCvpdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page key={`page_${index 
            }`} pageNumber={index} />
            ))}
          </Document>
          <button onClick={downloadPdf}>Download PDF</button>
        </div>
      );
    }
    
    export default Cv;
    

