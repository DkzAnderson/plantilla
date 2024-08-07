
import React from 'react'
import Slider from 'react-slick'

export const Testimonials = () => {

    const styles = {
        main : 'py-10',

        container: {
            main : 'text-center mb-10 max-w-[600px] mx-auto',
            p : 'text-sm text-primary',
            title: 'text-3xl font-bold',
            texto: 'text-xs text-gray-400'
        },

        cards : {
            main: 'relative flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative',
            img : 'rounded-full w-20 h-20 object-cover',
            imgBox: 'flex flex-col items-start gap-4',
            dataBox : 'flex flex-col items-start gap-4',
            data : 'text-xs text-gray-500',
            title: 'text-xl font-bold dark:text-primary text-black/80 dark:text-light'
        }

    }

    const TestimonialData = [
        {
            id:1,
            name:"Victor",
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis consectetur laudantium fugit delectus accusamus voluptatum asperiores iusto quisquam ullam.',
            img : 'https://www.mobafire.com/images/avatars/viktor-classic.png'
        },
        {
            id:2,
            name:"Ví",
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis consectetur laudantium fugit delectus accusamus voluptatum asperiores iusto quisquam ullam.',
            img : 'https://th.bing.com/th/id/R.2ec35cd5d94ad32695d7c4a437adcf66?rik=iccgSulNaOQ8ig&pid=ImgRaw&r=0'
        },
        {
            id:3,
            name:"Aurelion",
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis consectetur laudantium fugit delectus accusamus voluptatum asperiores iusto quisquam ullam.',
            img : 'https://www.mobafire.com/images/champion/square/aurelion-sol.png'
        },
        {
            id:4,
            name:"Teemo",
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis consectetur laudantium fugit delectus accusamus voluptatum asperiores iusto quisquam ullam.',
            img : 'https://th.bing.com/th/id/OIP.PnDQZzV0VlJ0EOWp_kOxAAAAAA?rs=1&pid=ImgDetMain'
        },
        {
            id:5,
            name:"Lux",
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis consectetur laudantium fugit delectus accusamus voluptatum asperiores iusto quisquam ullam.',
            img : 'https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/01/LuxSquare.png'
        },
        {
            id:6,
            name:"Ezreal",
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem perferendis consectetur laudantium fugit delectus accusamus voluptatum asperiores iusto quisquam ullam.',
            img : 'https://th.bing.com/th/id/OIP.lLphGJCwt7pp-A8CWWfCpAAAAA?rs=1&pid=ImgDetMain'
        },


    ]

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive : [
            {
                breakpoint: 10000,
                settings : {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },

            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
    <div className={styles.main}>
        <div className='container'>
            {/* Header section */}
            <div className={styles.container.main}>
                <p data-aos="fade-up" className={styles.container.p}>
                    What our customers are yaying
                </p>
                <h1 data-aos="fade-up" className={styles.container.title}>
                    Testimonials
                </h1>
                <p data-aos="fade-up" className={styles.container.texto}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat pariatur dolores suscipit? Doloribus, quam quia quaerat exercitationem iste debitis sint dicta expedita repudiandae qui veritatis officiis, saepe numquam, ullam esse.
                    Aperiam, ex voluptatibus. Illo, dicta dolorem! Rem, explicabo? Assumenda praesentium, a quisquam hic optio beatae tenetur libero eligendi laboriosam laudantium nam delectus harum, excepturi voluptas? Ipsum quos fuga nihil quidem.
                    Dolorum distinctio eveniet eos labore rerum nemo? Eligendi, sit commodi? Corrupti ipsa nostrum dolorum, aliquam dignissimos veniam odit porro, inventore qui quae delectus alias vitae quod! Inventore iure quos laborum?
                    Enim vel, accusantium ea delectus tenetur officiis minus nulla dolorum ipsam aspernatur quaerat facilis neque sit dolores illo et nostrum iure itaque perferendis accusamus labore voluptatem eos. Provident, assumenda reiciendis?
                    Minima neque excepturi qui, nisi in ea eos esse cum quae natus, totam laudantium, dolorem sapiente voluptas aliquid quas ab debitis officia facere ratione voluptatem atque. Harum aliquid enim cumque.
                </p>
            </div>
            {/* Testimonial cards */}
                <Slider {...settings}>
                    {TestimonialData.map((data)=>(
                        <div data-aos="zoom-in" key={data.id} className='my-6'>
                            <div
                                key={data.id}
                                className={styles.cards.main}
                            >
                                <div className={styles.cards.imgBox}>
                                    <img
                                        className={styles.cards.img}
                                        src={data.img}
                                        alt=""
                                    />
                                </div>

                                <div className={styles.cards.dataBox}>
                                    <p className={styles.cards.data}>
                                        {data.text}
                                    </p>
                                    <h1 className={styles.cards.title}>
                                        {data.name}
                                    </h1>
                                </div>
                                <p className='absolute text-7xl font-serif text-black/20 dark:text-white/50 top-5 right-5'>
                                    ``
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>
    </div>
  )
}
