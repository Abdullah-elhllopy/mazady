import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import ImageGallery from 'react-image-gallery';
import { Player } from '@lottiefiles/react-lottie-player';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './styles.module.css'// Create this CSS file for custom styling
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
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];
const renderItem = (item , showThumbnail) => {
    return (
        <div className="image-gallery-image" style={{ position: 'relative', width: '100%', maxHeight: '360px' }}>
            <img src={item.original} alt="" width={'100%'} />
            <div className="icon-row">
                <div className='flex flex-wrap items-center watch  text-white h-8 w-45   '>
                    <div className='flex-1 bg-white h-full w-full flex items-center justify-center'>
                        <Player
                            autoplay
                            loop
                            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                            className='w-full h-full'
                        >
                        </Player>
                    </div>
                    <div className='flex flex-1   h-full w-full items-center justify-center'>
                        <span className='text-sm text-time2'>02:00</span>
                    </div>
                    <span className='border  border-x-1 h-4/5' />
                    <div className='flex flex-1   gap-1 h-full w-full items-center justify-center'>
                        <span className='text-verySmall gap-1 text-time2'>3000 </span> <Image src={'/noun_show_3052148.png'} width={16} height={10} alt='show-eye' />
                    </div>
                </div>
                <ul role='list' className='flex items-center gap-2'>
                    <li className=' w-12 h-12 bg-bgIcon flex items-center justify-center rounded-full'>
                        <Image src={'/flag_black_24dp.png'} color='white' width={24} height={24} alt='flg' />
                    </li>
                    <li className=' w-12 h-12 bg-bgIcon flex items-center justify-center rounded-full'>
                        <Image src={'/noun_Love_1033573.png'} width={15} height={15} alt='love' />
                    </li>
                    <li className=' w-12 h-12 bg-bgIcon flex items-center justify-center rounded-full'>
                        <Image src={'/share_black_24dp.png'} width={24} height={24} alt='share' />
                    </li>
                </ul>

            </div>
        </div>
    );
};
const CustomImageGallery = () => {
    const { width } = useWindowDimensions();
    const [showThumbnail, setShowThumbnail] = useState(true)
    useEffect(() => {
        setShowThumbnail(width > 800)
    }, [width])
    return (
        <div className={styles.custom_image_gallery}>
            <ImageGallery items={images} showThumbnails={showThumbnail} renderItem={(item) => renderItem(item , showThumbnail)}
                thumbnailPosition={'left'} showNav={showThumbnail ?false : true} isRTL={true} showPlayButton={false} showBullets={false}
                showFullscreenButton={false} />

            <div className={styles.arrows}>
                <div
                    className={styles.thumbnails_arrow_top}
                // onClick={() => this.slideToIndex(currentIndex - 1)}
                >
                    <Image src={'/arrowtop.png'} width={24} height={24} alt='top' />
                </div>
                <div
                    className={styles.thumbnails_arrow_bottom}
                // onClick={() => this.slideToIndex(currentIndex + 1)}
                >
                    <Image src={'/arrow_forward_ios_black_24dp@2x.png'} width={24} height={24} alt='bottom' />
                </div>
            </div>
        </div>
    );
}

export default CustomImageGallery;