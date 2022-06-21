import PropTypes from 'prop-types';
import { useState,useEffect, useRef } from 'react';
import greenLogo from '../green.png';
const fileTypes = ["JPG", "PNG", "GIF", "JPEG", "MP4", "PDF", "PSD", "AI", "DOC", "DOCX", "ODT", "PPT", "PPTX"];

const UploadBox = ({onUpload}) => {
    const drop = useRef(null)
    const [dragActive, updateDrag] = useState(false)

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        updateDrag(true)
      };
      
    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        updateDrag(false);

        const files = [...event.dataTransfer.files];


        if (files.some((file) => !fileTypes.some((fileType) => file.name.toUpperCase().endsWith(fileType) ))) {
            alert(`Only following file formats are acceptable: ${fileTypes.join(', ')}`);
            return;
        }

        if (files && files.length) {
        onUpload(files);
        }
      };

    const handleDragLeave =(event)=>{
      updateDrag(false);
    }
    useEffect( ()=> {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
        drop.current.addEventListener('dragleave', handleDragLeave);

        return () => {
            drop.current.removeEventListener('dragover', handleDragOver);
            drop.current.removeEventListener('drop', handleDrop);
          };
    } ,[])

    

  return (
    <div ref={drop} className='flex flex-col items-center justify-center m-5 mt-10 p-10 bg-purple-100 rounded border-dashed border-2 border-indigo-400'>
    <img width='30%' className="p-1" 
    src={!dragActive?"https://img.icons8.com/external-becris-lineal-becris/64/undefined/external-upload-mintab-for-ios-becris-lineal-becris.png":
    `${greenLogo}`}/>

    {!dragActive?<>
    <p className="p-5">Drag & drop files or Browse</p> 
    <p className='text-sm text-center text-gray-600 font-thin'>Supported Formats: {fileTypes.join(', ')}</p></>
  :<p className="p-5 text-green-800">Just drop your file to upload</p>}
    
    </div>
    
  )
}
UploadBox.propTypes = {
    onUpload: PropTypes.func.isRequired,
  };
  
export default UploadBox