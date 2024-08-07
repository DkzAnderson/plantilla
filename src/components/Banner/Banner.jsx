import React from 'react'
import caitImgs from '../../assets/cait/caitBoxImgs'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

export const Banner = () => {

    const styles = {
        main : ' sm:min-h-[550px] flex justify-center items-center py-12 sm:py-0',

        image: 'max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover',

        details : {
            main : 'flex flex-col px-5 sm:px-0 justify-center gap-6 sm:pt-0 ',
            title: 'text-3xl sm:text-4xl font-bold',
            description : 'text-sm text-gray-500 tracking-wide leading-5',

            mainLowerBox: 'flex flex-col gap-2',
            lowerBox : 'flex items-center gap-4',
            icon : 'text-4xl h-12 w-12 shadow-sm p-3.5 rounded-full bg-violet-200 dark:bg-violet-400',
            icon2: 'text-4xl h-12 w-12 shadow-sm p-3.5 rounded-full bg-orange-200 dark:bg-orange-400',
            icon3: 'text-4xl h-12 w-12 shadow-sm p-3.5 rounded-full bg-lime-200 dark:bg-lime-400',
            icon4: 'text-4xl h-12 w-12 shadow-sm p-3.5 rounded-full bg-yellow-200 dark:bg-orange-400'
        }
    }

  return (
    <div className={styles.main}>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/*image section */}
                <div>
                    <img
                        className={styles.image} 
                        src="https://th.bing.com/th/id/R.a65cded49f6281d666687ec548598c91?rik=LUYwdee07dmtNg&riu=http%3a%2f%2fwww.mobafire.com%2fimages%2fchampion%2fskins%2flandscape%2fcaitlyn-classic.jpg&ehk=uj26Cb2GjJ%2bRarJwtOPdDa3EznlB4LAj6K0RYgmBwFI%3d&risl=&pid=ImgRaw&r=0"
                        alt="" 
                    />
                </div>
                {/* text details section */}
                <div className={styles.details.main}>
                    <h1 data-aos="fade-up" className={styles.details.title}>
                        Winter Sale upto 50% Off
                    </h1>
                    <p data-aos="fade-up" className={styles.details.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci laborum commodi eum laboriosam possimus illum voluptas fuga animi. Quisquam!
                    </p>

                    <div data-aos="fade-up" className={styles.details.mainLowerBox}>
                        <div className={styles.details.lowerBox}>
                            <GrSecure className={styles.details.icon}/>
                            <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className={styles.details.lowerBox}>
                            <IoFastFood className={styles.details.icon2}/>
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos="fade-up" className={styles.details.lowerBox}>
                            <GiFoodTruck className={styles.details.icon3}/>
                            <p>Easy Payment method</p>
                        </div>
                        <div data-aos="fade-up" className={styles.details.lowerBox}>
                            <GiFoodTruck className={styles.details.icon4}/>
                            <p>Get Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
