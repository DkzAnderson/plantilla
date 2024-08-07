import React from 'react'
import { FaStar } from 'react-icons/fa6'
import caitBoxImgs from '../../assets/cait/caitBoxImgs'

export const TopProducts = () => {

    const ProductsData = [
        {
            id: 1,
            img: caitBoxImgs[1],
            title: 'Resistance, Caitlyn',
            rating: 4,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 3,
            img: caitBoxImgs[3],
            title: 'Safari Caitlyn',
            rating: 2,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 4,
            img: caitBoxImgs[4],
            title: 'Arctic Warfare Caitlyn',
            rating: 7,
            color: 'white',
            aosDelay: ''
        },
    ]

    const styles = {
        main : '',

        header: {
            main: 'text-left mb-16',
            title: 'text-sm text-primary',
            subTitle: 'text-3xl font-bold ',
            txt : 'text-xs text-gray-400 '
        },

        body : {
            main : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center',

            productCardMain: 'rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group/card max-w-[300px]',
            prodcutImg : 'max-w-[140px] rounded-lg block mx-auto transform -translate-y-5 group-hover/card:scale-105 duration-300 drop-shadow-md',
            productTitle: 'text-xl font-bold',
            detailBox : 'p-4 text-center',
            iconsBox : 'w-full flex items-center justify-center gap-1',
            icons  : 'text-yellow-500 dark:group-hover/card:text-blue-800',
            productRatingBox: 'flex items-center gap-1',
            RatingTxt : '',
            productDetails: 'text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2',
            button : 'bg-primary z-20 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover/card:bg-white group-hover/card:text-primary'
        }
    }

  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className={styles.header.main}>
                <p data-aos="fade-up" className={styles.header.title}>
                    Top Rated Products for you
                </p>
                <h1 data-aos="fade-up" className={styles.header.subTitle}>
                    Best Products
                </h1>
                <p data-aos="fade-up" className={styles.header.txt}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam ipsa a, neque nisi rem voluptatibus ut doloremque. Commodi, fugiat.
                </p>
            </div>
            {/* Body section */}
            <div className={styles.body.main}>
                {
                    ProductsData.map((data)=>(
                        <div 
                            key={data.id} 
                            className={styles.body.productCardMain}
                        >
                            {/* image section */}
                            <div
                                
                            >
                                <img 
                                    className={styles.body.prodcutImg}
                                    src={data.img} 
                                    alt="" 
                                />
                            </div>
                            {/* details section */}
                            <div className={styles.body.detailBox}>
                                <div className={styles.body.iconsBox}>
                                    <FaStar className={styles.body.icons}/>
                                    <FaStar className={styles.body.icons}/>
                                    <FaStar className={styles.body.icons}/>
                                    <FaStar className={styles.body.icons}/>
                                    <FaStar className={styles.body.icons}/>
                                </div>
                                <h1 className={styles.body.productTitle}>
                                    {data.title}
                                </h1>
                                <p 
                                    className={styles.body.productDetails}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vero.
                                </p>
                                <button
                                    className={styles.body.button}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
