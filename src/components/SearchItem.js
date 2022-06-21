import Man from '../man.png'
const SearchItem = () => {
  return (
    <div className="recent p-2 flex w-[90%] bg-white h-[20%]">
        
        <img src={Man} alt=''/>
        <div className="content flex flex-col pl-3">
            <div className="light text-gray-400 text-sm">Small Caption</div>
            <div className="dark text-gray-800">Put your title here</div>
        </div>
    </div>
  )
}

export default SearchItem