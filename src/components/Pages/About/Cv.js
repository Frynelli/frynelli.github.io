
import cv1 from "../../../assets/CV.pdf"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Cv() {
    
    return<div className="main-cont">
    <Document file={cv1}>
        <Page  pageNumber={1}/>
        <Page pageNumber={2}/>
    </Document>
   
    </div>
}
    
export default Cv;