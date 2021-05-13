import React,{useState} from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ViewPdfFile from './viewPdfFile'
import http from "../services/httpService";

export const UploadForm = ({userUrl}) => {
  
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');
  const [viewPdf, setViewPdf]=useState(null);

  // onchange event
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else{
      console.log('select your file');
    }
  }

  // form submit
  const handlePdfFileSubmit=async (e)=>{
    e.preventDefault();
    // const urlApi = `${http.API.USUARIOS }/${userUrl}/cargar_cv`;
    // const respuesta = await http.post(urlApi, { curriculum: pdfFile });
    // console.log("UPLOAD PDF respuesta: ",respuesta);

    if(pdfFile!==null){ setViewPdf(pdfFile); }
    else{ setViewPdf(null); }
  }

  return (
    <React.Fragment>
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control'
          required onChange={handlePdfFileChange}
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
          UPLOAD
        </button>
      </form>
      <br />
      <ViewPdfFile viewPdf={viewPdf} ></ViewPdfFile>
      </React.Fragment>
  )
}

export default UploadForm;
