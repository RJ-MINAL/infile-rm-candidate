import React from 'react'
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';

function ViewPdfFile({ viewPdf }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <React.Fragment>
                  <h4>View PDF</h4>
      <div className='pdf-container'>
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {!viewPdf&&<>No pdf file selected</>}
      </div>
        </React.Fragment>
    )
}

export default ViewPdfFile
