import React, { useState } from "react";
import FileDisplay from "./FileDisplay";
import UploadBox from "./UploadBox";


const Uploader = () => {
    const [files, setFiles] = useState(null);
    const [fileList,updateList] = useState([])

    const onUpload = (file) => {
        setFiles(file);

        fileList.push(file[0].name)
        updateList(fileList);
        
        // console.log(file)
        // console.log(fileList)
        alert("File Uploaded Succesfully")
      };
  return (
    <div className="bg-white w-120 flex flex-col pt-5 items-center rounded shadow-lg font-mulish">
        <h1 className="text-xl font-bold">Upload Files</h1>
        <UploadBox onUpload={onUpload}/>
        {files? fileList.map((item)=>{
            //Render each item
            return(
                <FileDisplay file={item} />
            )
        }) : <p>No files</p> }
        <button className="bg-[#483EA8] block p-4 rounded m-5 w-3/4 text-white">UPLOAD FILES</button>
    </div>
  )
}
export default Uploader