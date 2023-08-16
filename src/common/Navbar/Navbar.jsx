import React, { useState } from 'react'
import Image from 'next/image'
const Navbar = () => {
    const [active, setActive] = useState(false);
    const showNavMobMenu = () => {
        setActive((prevState) => {
            return !prevState
        });
    }
    return (
        <>
            <header className='md:px-20 px-2 '>
                <nav className="flex  py-2 items-center justify-end ">
                    <div className="md:flex hidden items-center md:justify-end justify-start  w-10/12 gap-1">
                        <div className='md:w-2/12 '>
                            <div className="relative" data-te-dropdown-ref>
                                <a className="flex items-center whitespace-nowrap rounded bg-accent px-6 py-2 text-xs  text-primary  " href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                                    مزاد مباشر متعدد
                                    <span className="ml-3 w-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center   md:w-10/12 h-9 ">
                            <input dir='rtl' className=" bg-accent outline-none h-full p-2 w-full hidden md:block "
                                type="text" name="search" id="search" placeholder="ابحث هنا" />
                            <div className='py-2 px-4 bg-primary  h-full rounded'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="h-5 w-5 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex md:hidden justify-start w-10/12' onClick={()=>showNavMobMenu()}>
                        <svg viewBox="0 0 100 80" width={30} height={30} fill='#D20653'>
                            <rect width={100} height={20} rx={10} />
                            <rect y={30} width={100} height={20} rx={10} />
                            <rect y={60} width={100} height={20} rx={10} />
                        </svg>
                    </div>
                    <div className='w-4/12 flex justify-end'>
                        <Image
                            src="/Layer 2.png"
                            width={109}
                            height={34}
                            alt="Picture of the logo"
                        />
                    </div>
                </nav>
            </header>
            <header className='md:px-20 px-2 md:block hidden nav-height primary_header' >
                <nav className="flex h-full  py-6 items-center justify-between">
                    <ul role="list" className=" items-center text-xs  flex text-right  text-white nav_gap">
                        <li><a href="#">الرئيسية</a></li>
                        <li><a href="#"></a>التصنيفات</li>
                        <li><a href="#"></a>مشترياتى</li>
                        <li><a href="#"></a>حسابى</li>
                    </ul>
                    <div className="relative flex nav_gap items-center" >
                        <Image src={'/price_change_black_24dp.png'} alt='price_change_black' width={24} height={24} />
                        <Image src={'/notifications_black_24dp.png'} alt='notifications_black' width={24} height={24} />
                        <Image src={'/favorite_black_24dp.png'} alt='favorite_black_24dp' width={24} height={24} />
                        <a className="flex items-center whitespace-nowrap  bg-secondary px-4 rounded-full py-2 text-xs  text-white  " href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                            عربية
                            <span className="ml-3 w-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </nav>
            </header>
            <header className={`md:hidden nav_mobile ${active ? 'active' : ''} p-3 flex gap-3 flex-col border bg-primary `}>
                <div className="items-center flex justify-end   w-full gap-3">
                    <div className=' '>
                        <div className="relative" data-te-dropdown-ref>
                            <a className="flex items-center whitespace-nowrap rounded bg-accent px-6 py-2 text-xs  text-primary  " href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                                مزاد مباشر متعدد
                                <span className="ml-3 w-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center bg-accent rounded pr-1  w-10/12 h-9 ">
                        <input dir='rtl' className=" bg-accent outline-none h-full p-2 w-full  "
                            type="text" name="search" id="search" placeholder="ابحث هنا" />
                        <div className='py-2 px-4   h-full '>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="h-5 w-5 text-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <ul role="list" className=" items-start gap-1 font-semibold text-x flex-col flex text-right  text-white ">
                    <li><a href="#">الرئيسية</a></li>
                    <li><a href="#"></a>التصنيفات</li>
                    <li><a href="#"></a>مشترياتى</li>
                    <li><a href="#"></a>حسابى</li>
                </ul>
                <div className="relative flex justify-around items-center" >
                    <Image src={'/price_change_black_24dp.png'} alt='price_change_black' width={24} height={24} />
                    <Image src={'/notifications_black_24dp.png'} alt='notifications_black' width={24} height={24} />
                    <Image src={'/favorite_black_24dp.png'} alt='favorite_black_24dp' width={24} height={24} />
                    <a className="flex items-center whitespace-nowrap  bg-secondary px-4 rounded-full py-2 text-xs  text-white  " href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                        عربية
                        <span className="ml-3 w-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </a>
                </div>

            </header>
        </>
    )
}

export default Navbar