import Man2 from '../man2.png'
import React from 'react'
import SearchItem from './SearchItem';

const Header = () => {

    const MessageSvg = () =>{
        return(
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9Z" fill="#6F767E"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H8C7.44772 14 7 13.5523 7 13Z" fill="#6F767E"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.71963 17.4636C7.07906 17.164 7.53213 17 8 17H19C19.5523 17 20 16.5523 20 16V6C20 5.44771 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6V19.7299L6.71963 17.4636ZM8 19H19C20.6569 19 22 17.6569 22 16V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V19.7299C2 21.4256 3.97771 22.3519 5.28037 21.2664L8 19Z" fill="#6F767E"/>
                </svg>
        );
    }

    const BellSvg = ()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H3.40408C2.62863 18 2 17.3714 2 16.5959ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM18 13.1716C18 14.2324 18.4214 15.2499 19.1716 16L4.87851 16C5.64222 15.246 6.07136 14.2161 6.06813 13.1416L6.05867 9.9886C6.04875 6.6841 8.7248 4 12.0293 4C15.3268 4 18 6.67316 18 9.97067L18 13.1716Z" fill="#6F767E"/>
    </svg>);
    }
    const headerBox = React.useRef(null)
    const [visible,setVisible] = React.useState(false)
    const showModal =()=>{
        setVisible(true)
    }
    const removeModal =()=>{
        setVisible(false)
    }
    React.useEffect(()=>{
        headerBox.current.addEventListener('focus',showModal)
        headerBox.current.addEventListener('blur',removeModal)
    },[])

  return (
    <header className="w-3/4 absolute inset-x-1/4 bg-white flex justify-between">
        <input ref={headerBox} type='text' className="search-bar shadow-sm focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 w-1/4 m-3 rounded-md bg-gray-200 ml-4 pt-1 pl-2" 
        placeholder='Click Here'/>

        {visible&& <div className="absolute items-center pt-3 rounded-lg shadow-lg w-[290px] h-[250px] bg-white top-[50px] left-[10px]">
        <p className='p-2 text-sm text-gray-500'>Recent Search</p>
            <SearchItem />
            <SearchItem />
        <p className='p-2 text-sm text-gray-500 mt-2'>Suggestions</p>
            <SearchItem />
            </div>
            }

        <div className="item-cont flex mr-4 mt-1">

            <div className="create mt-1">
                <button className="bg-blue-400 p-2 rounded-md">+ Create</button>
            </div>
            <div className="messages p-2 m-2 mt-1">
                <MessageSvg />                
            </div>
            <div className="notification p-2 m-2 mt-1">
                <BellSvg />               
            </div>
            <div className="user">
                <img width='45px' src={Man2} alt="" />     
            </div>
      </div>
    </header>
  )
}

export default Header