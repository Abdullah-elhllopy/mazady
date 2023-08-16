import Image from 'next/image'
import { Tajawal } from 'next/font/google';
import CustomImageGallery from '@/common/CustomImageGallery/CustomImageGallery';
import Navbar from '@/common/Navbar/Navbar';

import Link from 'next/link'
const tajawal = Tajawal({ subsets: ['arabic'], weight: ["200", "300", "400", "500", "700", "800", "900"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  main_background ${tajawal.className}`}
    >
<Link href="/form">About helle world</Link> 

      <Navbar />
      <section className='md:px-20 px-2 flex md:flex-row gap-2 flex-col items-start mt-5'>
        <div className='flex flex-col   md:w-10/12 w-full '>
          <CustomImageGallery />
          <div className='flex md:gap-7 gap-0 w-full'>
            <div className='md:w-1/12' />
            <div className='md:w-11/12 w-full'>
              <div className='content_data w-full flex flex-col gap-1'>
                <div className='flex items-start gap-2'>
                  <Image width={44} className='inline-block rounded-full  ring-2 ring-white' height={44} src={'/Max-R_Headshot (1).jpg'} alt='user' />
                  <div className='flex gap-1 pt-1 flex-col items-start'>
                    <h2 className='text-natural text-base'>اسم البائع</h2>
                    <span className='text-natural text-xs'>+966598398</span>
                  </div>
                  <div className="flex pt-2 items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className='text-info text-xl font-semibold'>شراء مجموعة من السيارات من موديلات1990</h1>
                </div>
                {/* <div>
                  <span>code 1234</span>
                </div> */}
                <div className='flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-2'>
                  <div className=' flex  items-center gap-1'>
                    <span className='number_data'>
                      10000+
                      <span />
                    </span>
                    <span className='number_data'>
                      10010+
                      <span />
                    </span>
                    <span className='number_data'>
                      10020+
                      <span />
                    </span>
                  </div>
                  <div className='flex items-center gap-2 search_term'>
                    <input dir='rtl' className=" border outline-none h-full p-2 w-full  "
                      type="text" name="search" id="search" placeholder="ابحث هنا" />
                    <button>تأكيد</button>
                  </div>
                </div>
              </div>
              <div className='content_data mt-7 flex flex-col w-full gap-2'>
                <div>
                  <h1 className='text-info text-xl font-semibold'>ارسال رسالة الى البائع</h1>
                </div>
                <div>
                  <p className='text-info text-sm'>يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <input dir='rtl' className="bg-input rounded-full border outline-none h-full p-2 w-full "
                    type="text" name="search" id="search" placeholder="ابحث هنا" />
                  <button style={{ cursor: 'pointer' }} >
                    <Image src={'/Group 5452.png'} alt='group' width={44} height={44} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-4/12 w-full gap-6 flex-col  justify-end flex'>
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
            <div className='flex flex-col justify-between items-center gap-3'>
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
          <div className='custom_Card gap-3 items-center pt-3 pb-4 px-3'>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>القيمة الابتدائية</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>القيمة التقريبية</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>العربون</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>سعر الشراء الفورى</span>
              <span className='text-2xl'>50000</span>
            </div>
            <div className='bg-realValue w-full p-2 text-semiDark rounded flex justify-between items-center'>
              <span className='text-xs'>قيمة ذيادة المزاد</span>
              <span className='text-2xl'>50000</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
