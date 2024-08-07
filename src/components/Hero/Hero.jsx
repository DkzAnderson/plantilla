import React from 'react'
import Slider from 'react-slick'

export const Hero = () => {

    const ImageList = [
        {
            id: 1,
            img: 'https://th.bing.com/th/id/OIP.MgIJGb8JEg0-DmQy2qJrRgAAAA?rs=1&pid=ImgDetMain',
            title: 'Jinx , Jinxed League Of Legends',
            description:'Habitante de Záun'
        },
        {
            id: 2,
            img: 'https://th.bing.com/th/id/OIP.CqecLtPHsSidhSlYLCLVSQAAAA?rs=1&pid=ImgDetMain',
            title: 'Vi, League Of Legends',
            description:'Habitante de Záun'
        },
        {
            id: 3,
            img: 'https://th.bing.com/th/id/OIP.ROY7VoM7c4mQ9f8-o8Us0AAAAA?rs=1&pid=ImgDetMain',
            title: 'Caitlyn Kiraman, League Of Legends',
            description:'Habitante de Piltover'
        },

    ]

    const styles = {
        main : 'relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-300 ',

        pattern : {
            main: 'h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'
        },

        hero : {
            main: 'container pb-8 sm:pb-0',

            txtContent: 'flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10',
            title: 'text-3xl md:text-6xl font-bold',
            description: 'text-sm',
            button: 'bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full'
        },
        heroImageSection:{
            main:'order-1 sm:order-2',
            img :'size-[300px] sm:[450px]  sm:scale-125 lg:scale-120 object-contain mx-auto',
            imgBox: 'relative z-10'
        }
    }

    let settings = {
        dots : false ,
        arrows: false ,
        infinite : true,
        speed : 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }


  return (
    <div className={styles.main}>
        {/* background pattern */}
        <div className={styles.pattern.main}></div>
        {/* hero section */}
          <div className={styles.hero.main}>
              <Slider {...settings}>
                  {ImageList.map((data) => (
                      <div key={data.id}>
                          <div className='grid grid-cols-1 sm:grid-cols-2'>
                              {/* text content section */}
                              <div className={styles.hero.txtContent}>
                                  <h2 
                                    className={styles.hero.title}
                                    data-aos="zoom-out"
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                  >
                                      {data.title}
                                  </h2>

                                  <p 
                                    className={styles.hero.description}
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="500"
                                  >
                                      {data.description}
                                  </p>

                                  <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="500"
                                  >
                                      <button
                                          className={styles.hero.button}
                                      >
                                          Order Now
                                      </button>
                                  </div>
                              </div>
                              {/* image section*/}
                              <div className={styles.heroImageSection.main}>
                                  <div 
                                    className={styles.heroImageSection.imgBox}
                                    data-aos="zoom-out"
                                    data-aos-once="true"
                                    data-aos-duration="500"
                                  >
                                      <img
                                          className={styles.heroImageSection.img}
                                          src={data.img}
                                          alt=""
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </Slider>
          </div>
    </div>
  )
}
