import React from 'react'

const FileDisplay = ({file}) => {
  return (
    <div key={Math.random()} className='block border-2 w-3/4 p-2 border-[#11AF22] rounded m-2 mb-3'>
        {file}
    </div>
  )
}

export default FileDisplay