import React from 'react'

const Sidebar = () => {

    const LogoSvg = ()=>{
        return(<svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1.30941C19.4752 -0.119656 22.5248 -0.119656 25 1.30941L37.7846 8.6906C40.2598 10.1197 41.7846 12.7607 41.7846 15.6188V30.3812C41.7846 33.2393 40.2598 35.8803 37.7846 37.3094L25 44.6906C22.5248 46.1197 19.4752 46.1197 17 44.6906L4.21539 37.3094C1.74018 35.8803 0.215393 33.2393 0.215393 30.3812V15.6188C0.215393 12.7607 1.74018 10.1197 4.21539 8.6906L17 1.30941Z" fill="#272B30"/>
        <path d="M19 19C19 17.8954 19.8954 17 21 17C22.1046 17 23 17.8954 23 19V27C23 28.1046 22.1046 29 21 29C19.8954 29 19 28.1046 19 27V19Z" fill="white"/>
        <path d="M11 21C11 19.8954 11.8954 19 13 19C14.1046 19 15 19.8954 15 21V25C15 26.1046 14.1046 27 13 27C11.8954 27 11 26.1046 11 25V21Z" fill="url(#paint0_linear_304_177)"/>
        <path d="M27 21C27 19.8954 27.8954 19 29 19C30.1046 19 31 19.8954 31 21V25C31 26.1046 30.1046 27 29 27C27.8954 27 27 26.1046 27 25V21Z" fill="url(#paint1_linear_304_177)"/>
        <defs>
        <linearGradient id="paint0_linear_304_177" x1="29" y1="19" x2="29" y2="27" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#D0D0D0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_304_177" x1="29" y1="19" x2="29" y2="27" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#D0D0D0"/>
        </linearGradient>
        </defs>
        </svg>);
    }
    const HomeSvg = ()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.99311 9.10619C2.36096 9.67512 2 10.4856 2 11.3361V19C2 20.6568 3.34315 22 5 22H19C20.6569 22 22 20.6568 22 19V11.3361C22 10.4856 21.639 9.67512 21.0069 9.10619L14.0069 2.80619C12.866 1.77937 11.134 1.77937 9.9931 2.80619L2.99311 9.10619ZM11 13C9.89543 13 9 13.8954 9 15V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V15C15 13.8954 14.1046 13 13 13H11Z" fill="#1A1D1F"/>
        </svg>);
    }
    const ProductsSvg = ()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1598 7.1842L19.2327 3.21844C18.6671 2.45219 17.7713 2 16.8189 2H7.18107C6.22871 2 5.33291 2.45219 4.76735 3.21844L1.84025 7.1842C1.04652 8.25957 1.05993 9.73033 1.87315 10.791L9.61919 20.8946C10.82 22.4609 13.18 22.4609 14.3808 20.8946L22.1269 10.791C22.9401 9.73033 22.9535 8.25957 22.1598 7.1842ZM3.72389 8L6.3765 4.40615C6.56502 4.15073 6.86362 4 7.18107 4H16.8189C17.1364 4 17.435 4.15073 17.6235 4.40615L20.2761 8H3.72389ZM3.78682 10L11.2064 19.6777C11.6067 20.1998 12.3933 20.1998 12.7936 19.6777L20.2132 10H3.78682Z" fill="#6F767E"/>
        </svg>);
    }
    const CustSvg = ()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="#6F767E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33284 17.7154 5.44116 19.5488C7.19693 21.0756 9.49052 22 12 22C14.4162 22 16.6323 21.143 18.3609 19.7165C18.4276 19.6614 18.4936 19.6055 18.5588 19.5488ZM12.2579 19.9959C12.1723 19.9986 12.0863 20 12 20C11.9914 20 11.9827 20 11.9741 20C11.8937 19.9997 11.8135 19.9983 11.7337 19.9956C10.3914 19.9517 9.13273 19.5772 8.03655 18.9508C8.95181 17.7632 10.3882 17 12 17C13.6118 17 15.0482 17.7632 15.9634 18.9508C14.865 19.5785 13.6033 19.9533 12.2579 19.9959ZM17.5624 17.7498C16.2832 16.0781 14.2675 15 12 15C9.73249 15 7.7168 16.0781 6.43759 17.7498C4.93447 16.2953 4 14.2568 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2568 19.0655 16.2953 17.5624 17.7498Z" fill="#6F767E"/>
        </svg>);
    }
    const ShopSvg = ()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.51812 2C8.50537 1.99976 8.49264 1.99976 8.47996 2H6.55221C5.31497 2 4.20463 2.75954 3.75619 3.91266L1.96825 8.51023C1.53386 9.62723 2.01111 10.8522 3 11.4121V19C3 20.6568 4.34315 22 6 22H18C19.6569 22 21 20.6568 21 19V11.4121C21.9889 10.8522 22.4662 9.62723 22.0318 8.51023L20.2438 3.91266C19.7954 2.75955 18.685 2 17.4478 2H15.5201C15.5074 1.99976 15.4947 1.99976 15.4819 2H8.51812ZM19 11.7384C18.5515 11.6859 18.1119 11.5559 17.7016 11.3508L17.0005 11.0002L16.9994 11.0002L16.357 11.2572C15.1649 11.734 13.8351 11.734 12.6431 11.2572L12 11L11.357 11.2572C10.1649 11.734 8.83511 11.734 7.64305 11.2572L7.00058 11.0002L6.99955 11.0002L6.29844 11.3508C5.88814 11.5559 5.44854 11.6859 5 11.7384V19C5 19.5523 5.44772 20 6 20H8V17C8 15.3431 9.34315 14 11 14H13C14.6569 14 16 15.3431 16 17V20H18C18.5523 20 19 19.5523 19 19V11.7384ZM17.8944 9.21115C17.8793 9.2036 17.8642 9.19626 17.849 9.18912L16.737 4H17.4478C17.8602 4 18.2303 4.25318 18.3798 4.63755L20.1678 9.23512C20.2451 9.4341 20.1304 9.65585 19.9233 9.70763C19.4776 9.81904 19.0069 9.76736 18.596 9.56193L17.8944 9.21115ZM15.8303 9.31382L14.6916 4H13V9.24593L13.3858 9.40027C14.1011 9.68636 14.8989 9.68636 15.6142 9.40027L15.8303 9.31382ZM11 4H9.30844L8.16976 9.31384L8.38583 9.40027C9.10107 9.68636 9.89894 9.68636 10.6142 9.40027L11 9.24594V4ZM6.15109 9.1891L7.26304 4H6.55221C6.13979 4 5.76968 4.25318 5.6202 4.63755L3.83226 9.23512C3.75488 9.4341 3.8696 9.65585 4.07673 9.70763C4.52237 9.81904 4.99315 9.76736 5.40401 9.56193L6.10558 9.21115C6.12068 9.2036 6.13585 9.19625 6.15109 9.1891ZM14 17V20H10V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17Z" fill="#6F767E"/>
        </svg>);
    }
    const IncomeSvg = ()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8.08392C8.16919 8.22435 7.37341 8.53889 6.66658 9.01118C5.67989 9.67047 4.91085 10.6075 4.45673 11.7039C4.0026 12.8003 3.88378 14.0067 4.11529 15.1705C4.3468 16.3344 4.91825 17.4035 5.75736 18.2426C6.59648 19.0818 7.66558 19.6532 8.82946 19.8847C9.99335 20.1162 11.1997 19.9974 12.2961 19.5433C13.3925 19.0892 14.3295 18.3201 14.9888 17.3334C15.4611 16.6266 15.7757 15.8308 15.9161 15H10C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V8.08392ZM5.55544 7.34824C6.87104 6.46919 8.41775 6 10 6C10.5523 6 11 6.44772 11 7V13H17C17.5523 13 18 13.4477 18 14C18 15.5823 17.5308 17.129 16.6518 18.4446C15.7727 19.7602 14.5233 20.7855 13.0615 21.391C11.5997 21.9965 9.99113 22.155 8.43928 21.8463C6.88743 21.5376 5.46197 20.7757 4.34315 19.6569C3.22433 18.538 2.4624 17.1126 2.15372 15.5607C1.84504 14.0089 2.00347 12.4003 2.60897 10.9385C3.21447 9.47672 4.23985 8.22729 5.55544 7.34824Z" fill="#6F767E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 2.29289C13.4804 2.10536 13.7348 2 14 2C16.1217 2 18.1566 2.84285 19.6569 4.34314C21.1571 5.84344 22 7.87827 22 10C22 10.5523 21.5523 11 21 11L14 11C13.7348 11 13.4804 10.8946 13.2929 10.7071C13.1054 10.5196 13 10.2652 13 10V3C13 2.73478 13.1054 2.48043 13.2929 2.29289ZM15 4.08389V9L19.9161 9C19.7098 7.77969 19.1293 6.64405 18.2426 5.75736C17.3559 4.87067 16.2203 4.29016 15 4.08389Z" fill="#6F767E"/>
        </svg>);
    }
    const DownArrow=()=>{
        return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L6.70711 8.29289ZM12 15L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L12 15ZM18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L18.7071 9.70711ZM5.29289 9.70711L11.2929 15.7071L12.7071 14.2929L6.70711 8.29289L5.29289 9.70711ZM12.7071 15.7071L18.7071 9.70711L17.2929 8.29289L11.2929 14.2929L12.7071 15.7071Z" fill="#6F767E"/>
        </svg>)
    }

  return (
    <div className="sidebar min-h-screen h-[90rem] bg-white w-1/4 shadow-lg z-10 border">
        <div className="content flex flex-col">
            <div className="p-2 m-1 mb-5 rounded ml-5 mr-5 logo">
                <LogoSvg />
            </div>
            <div className="p-2 m-1 hover:shadow-lg rounded ml-5 mr-5 hover:bg-gray-200 home flex ">
                <HomeSvg />&nbsp;Home</div>
            <div className="p-2 m-1 hover:shadow-lg rounded ml-5 mr-5 hover:bg-gray-200 flex products justify-between">
                <div className='flex'><ProductsSvg />&nbsp;Products</div><DownArrow /></div>
            <div className="p-2 m-1 hover:shadow-lg rounded ml-5 mr-5 hover:bg-gray-200 flex customer justify-between">
                <div className='flex'><CustSvg />&nbsp;Customers</div><DownArrow /></div>
            <div className="p-2 m-1 hover:shadow-lg rounded ml-5 mr-5 hover:bg-gray-200 flex shop">
                <ShopSvg />&nbsp;Shop</div>
            <div className="p-2 m-1 hover:shadow-lg rounded ml-5 mr-5 hover:bg-gray-200 flex income justify-between">
                <div className='flex'><IncomeSvg />&nbsp;Income</div><DownArrow /></div>
        </div>
    </div>
  )
}

export default Sidebar