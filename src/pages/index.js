import Image from 'next/image'
import { Tajawal } from 'next/font/google';
import ImageGallery from "react-image-gallery";
import Navbar from '@/common/Navbar/Navbar';

// import Link from 'next/link'
{/* <Link href="/form">About helle world</Link> */ }
const tajawal = Tajawal({ subsets: ['arabic'], weight: ["200", "300", "400", "500", "700", "800", "900"] });
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const renderItem = (item) => {
  return (
    <div className="image-gallery-image" style={{position:'relative'}}>
      <img src={item.original} alt="" />
      <div className="icon-row">
          <ul role='list' className='flex items-center gap-2'>
              <li className=' w-12 h-12 bg-primary flex items-center justify-center rounded-full'>
                <Image src={'/noun_show_3052148.png'} width={15} height={15} alt='heart' />
              </li>
              <li className=' w-12 h-12 bg-primary flex items-center justify-center rounded-full'>
                <Image src={'/noun_show_3052148.png'} width={15} height={15} alt='heart' />
              </li>
              <li className=' w-12 h-12 bg-primary flex items-center justify-center rounded-full'>
                <Image src={'/noun_show_3052148.png'} width={15} height={15} alt='heart' />
              </li>
          </ul>
          <div>
          hello
          </div>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  main_background ${tajawal.className}`}
    >
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
            <div className='flex md:hidden justify-start w-10/12'>
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
      </>
      <section className='md:px-20 px-2 flex md:flex-row gap-2 flex-col items-start mt-5'>
        <div className='flex flex-col border gap-5 md:w-10/12 w-full '>
          <ImageGallery items={images} renderItem={renderItem} thumbnailPosition = {'left'} showNav={false} isRTL={true} showPlayButton={false} showBullets={false} showFullscreenButton={false} />;
        </div>
        <div className='md:w-4/12 w-full gap-5 flex-col  justify-end flex'>
          <div className='custom_Card gap-1.5 items-center pt-3 pb-4 px-3'>
            <div className='  flex items-center bg-info  p-2.5 text-white rounded w-full justify-between'>
              <span className='text-xs'>تاريخ البث </span>
              <span className='text-base'>22-1-2022 </span>
            </div>
            <div className='d-flex gap-1  w-full '>
              <div className='bg-natural rounded text-white mazad_value w-6/12  pt-2  gap-1'>
                <span className='text-xs font-medium'>القيمة الحالية للمزاد</span>
                <h4 className='text-2xl font-semibold'>5000 $ </h4>
              </div>
              <div className='bg-tax w-6/12 text-natural  mazad_value rounded  pt-2  gap-1'>
                <span className='text-xs font-medium'>القيمة الحالية بعد الضريبة</span>
                <h4 className='text-2xl font-semibold'> 5050 $ </h4>
              </div>
            </div>
          </div>
          <div className='custom_Card gap-2 it pt-3 pb-4 px-5'>
            <h3 className='text-xl font-semibold'>المتنافسون</h3>
            <div className='flex flex-col justify-between items-center gap-2'>
              <div className='flex items-center justify-between gap-1  w-full '>
                <div className='d-flex items-center gap-2'>
                  <Image width={44} className='inline-block rounded-full  ring-2 ring-white' height={44} src={'/Max-R_Headshot (1).jpg'} alt='user' />
                  <div>
                    <h2 className='text-sm font-semibold'>اسم المزايد </h2>
                    <span className='mt-1 text-time'>13:59:00</span>
                  </div>
                </div>
                <span className='computation' >
                  +20
                  <span />
                </span>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-2'>
              <div className='flex items-center justify-between gap-1  w-full '>
                <div className='d-flex items-center gap-2'>
                  <Image width={44} className='inline-block rounded-full  ring-2 ring-white' height={44} src={'/Max-R_Headshot (1).jpg'} alt='user' />
                  <div>
                    <h2 className='text-sm font-semibold'>اسم المزايد </h2>
                    <span className='mt-1 text-time'>13:59:00</span>
                  </div>
                </div>
                <span className='computation' >
                  +20
                  <span />
                </span>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-2'>
              <div className='flex items-center justify-between gap-1  w-full '>
                <div className='d-flex items-center gap-2'>
                  <Image width={44} className='inline-block rounded-full  ring-2 ring-white' height={44} src={'/Max-R_Headshot (1).jpg'} alt='user' />
                  <div>
                    <h2 className='text-sm font-semibold'>اسم المزايد </h2>
                    <span className='mt-1 text-time'>13:59:00</span>
                  </div>
                </div>
                <span className='computation' >
                  +20
                  <span />
                </span>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-2'>
              <div className='flex items-center justify-between gap-1  w-full '>
                <div className='d-flex items-center gap-2'>
                  <Image width={44} className='inline-block rounded-full  ring-2 ring-white' height={44} src={'/Max-R_Headshot (1).jpg'} alt='user' />
                  <div>
                    <h2 className='text-sm font-semibold'>اسم المزايد </h2>
                    <span className='mt-1 text-time'>13:59:00</span>
                  </div>
                </div>
                <span className='computation' >
                  +20
                  <span />
                </span>
              </div>
            </div>
          </div>
          <div className='custom_Card gap-1.5 items-center pt-3 pb-4 px-3'>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>القيمة الابتدائية</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>القيمة الابتدائية</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>القيمة الابتدائية</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>القيمة الابتدائية</span>
              <span className='text-2xl'>50000</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
