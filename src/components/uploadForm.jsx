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
        // console.log("selectedFile", selectedFile);
        setPdfFile(selectedFile);
        setPdfFileError('');
              //         setPdfFile(e.target.result);
      //         setPdfFileError('');
      // let reader = new FileReader();
      //     reader.readAsDataURL(selectedFile);
      //       reader.onloadend = (e) =>{
      //         setPdfFile(e.target.result);
      //         setPdfFileError('');
      //       }
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
  const handlePdfFileSubmit= async (e) =>{
    e.preventDefault();
    if(!pdfFile){ setViewPdf(null); return; }
    const urlApi = `${http.API.USUARIOS }/${userUrl}/cargar_cv`;
    
    let formData = new FormData();
    formData.append("curriculum", pdfFile);
    const config = { headers: { "content-type": "multipart/form-data" } };

    try {
      const { data } = await http.post(urlApi, formData, config);
      console.log("CARGA_CV response", data);

    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("ERRORS", ex.response.data);
      }
    }
};

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
