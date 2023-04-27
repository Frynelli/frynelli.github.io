import friniCvpdf from "../../../assets/Frynelli-Oikonomou-CV.pdf";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
    
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    


    function CvPdf() {
    
      
   return (
        <div className="cv">
          <iframe src={friniCvpdf} width="100%" height="90%"></iframe> 
               <div className="button">
           <button><a href="/about">Back</a></button>
           </div>
        </div>
      );
    }
    
    export default CvPdf;
    

