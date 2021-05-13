import React,{useState} from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ViewPdfFile from './viewPdfFile'
import axios from 'axios';
import http from "../services/httpService";
import auth from "../services/authService";

// const FormData = require('form-data');
const fs = require('fs');

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
  const handlePdfFileSubmit= (e) =>{
    e.preventDefault();
    if(!pdfFile){ setViewPdf(null); return; }
    axios.defaults.headers.common['Authorization'] = auth.getJwt();
    const urlApi = `${http.API.USUARIOS }/${userUrl}/cargar_cv`;
    // const urlApi = "https://httpbin.org/post";
    
    let formData = new FormData();
    formData.append("curriculum", pdfFile);
    const config = { headers: { "content-type": "multipart/form-data" } };

    
    axios.post(urlApi, formData, config)
    .then(res => console.log("FILE UPLOADED SUCCESSFULLY", res))
    .catch(err => console.log("ERROR WHILE UPLOADING FILE", err));
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
