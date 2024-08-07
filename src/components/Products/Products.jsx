import React from 'react'
import { FaStar } from 'react-icons/fa6'
import caitBoxImgs from '../../assets/cait/caitBoxImgs'

export const Products = () => {

    const styles = {
        main : 'mt-14 mb-12',

        header: {
            main: 'text-center mb-10 max-w[600px] mx-auto',
            title: 'text-sm text-primary',
            subTitle: 'text-3xl font-bold ',
            txt : 'text-xs text-gray-400 px-4 sm:px-0'
        },
        
        body  : {
            main: '',
            box : 'grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6',

            productCardMain: 'space-y-3',
            prodcutImg : 'h-[220px] w-[150px] object-cover rounded-md',
            productTitle: 'h-10 text-center leading-4 font-semibold',
            productRatingBox: 'flex items-center gap-1',
            RatingIcon: 'text-yellow-400',
            RatingTxt : ''
        }
    }

    const ProductsData = [
        {
            id: 0,
            img: caitBoxImgs[0],
            title: 'Caitly, Orginal',
            rating: 3.3,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 1,
            img: caitBoxImgs[1],
            title: 'Resistance, Caitlyn',
            rating: 4,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 2,
            img: caitBoxImgs[2],
            title: 'Sheriff Caitlyn',
            rating: 2,
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
        {
            id: 5,
            img: caitBoxImgs[5],
            title: 'Officer Caitlyn',
            rating: 3,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 6,
            img: caitBoxImgs[6],
            title: 'Headhunter',
            rating: 8.3,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 7,
            img: caitBoxImgs[7],
            title: 'Lunar Wraith Caitlyn',
            rating: 9.5,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 8,
            img: caitBoxImgs[8],
            title: 'Pulsefire Caitlyn',
            rating: 6.9,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 9,
            img: caitBoxImgs[9],
            title: 'Pool Party Caitlyn',
            rating: 8.9,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 10,
            img: caitBoxImgs[10],
            title: 'Arcade Caitlyn',
            rating: 10,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 11,
            img: caitBoxImgs[11],
            title: 'Prestige Arcade Caitlyn',
            rating: 10,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 12,
            img: caitBoxImgs[12],
            title: 'Battle Academia Caitlyn',
            rating: 9.5,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 13,
            img: caitBoxImgs[13],
            title: 'Arcane Caitlyn',
            rating: 8.8,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 14,
            img: caitBoxImgs[14],
            title: 'Prestige Arcade Caitlyn',
            rating: 10,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 15,
            img: caitBoxImgs[15],
            title: 'Snow Moon Caitlyn',
            rating: 7.7,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 16,
            img: caitBoxImgs[16],
            title: 'Hearthrob Caitlyn',
            rating: 5.7,
            color: 'white',
            aosDelay: ''
        },
        {
            id: 17,
            img: caitBoxImgs[17],
            title: 'DRX Caitlyn',
            rating: 4.8,
            color: 'white',
            aosDelay: ''
        },
    ]

  return (
      <div className={styles.main}>
          <div className='container'>
              {/* Header section */}
              <div className={styles.header.main}>
                  <p data-aos="fade-up" className={styles.header.title}>
                      Top Selling Products for you
                  </p>
                  <h1 data-aos="fade-up" className={styles.header.subTitle}>
                      Products
                  </h1>
                  <p data-aos="fade-up" className={styles.header.txt}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis perspiciatis cumque eum?
                  </p>
              </div>
              {/* Body section */}
              <div>
                  <div className={styles.body.box}>
                    {/* Card section */}
                    {ProductsData.map((data)=>(
                        <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className={styles.body.productCardMain}
                        >
                            <img
                                src={data.img}
                                alt=''
                                className={styles.body.prodcutImg}
                            />
                            <div>
                                <h3 className={styles.body.productTitle}>
                                    {data.title}
                                </h3>
                                <div className={styles.body.productRatingBox}>
                                    <FaStar className={styles.body.RatingIcon} />
                                    <span className={styles.body.RatingTxt}>
                                        {data.rating}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
              </div>
          </div>
      </div>
  )
}
