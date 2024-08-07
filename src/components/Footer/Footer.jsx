import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { FaShopify } from 'react-icons/fa6'

export const Footer = () => {

    const imgL = 'https://images2.alphacoders.com/611/thumb-1920-611981.jpg'
    const imgD = 'https://th.bing.com/th/id/R.76e71269e349085667e957bb2c9b1997?rik=STJGOJDQhABSNA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-JWZsqAN54AE%2fVHH0VcbnKXI%2fAAAAAAAAeJE%2f7kPFU2vxAc8%2fs1600%2fsdad.png&ehk=seWHBRWIa6H7g4J9q15rigPe1EkjJxAn8Oy8hjJygrE%3d&risl=&pid=ImgRaw&r=0'


    const FooterLink = [
        {
            title: "Home",
            link: '/#'
        },
        {
            title: "About",
            link: '/#'
        },
        {
            title: "Contact",
            link: '/#'
        },
        {
            title: "Blog",
            link: '/#'
        }
    ]

    const styles = {
        main : 'text-white relative',

    }

  return (
    <div 
        className={styles.main}
    >
        <div className='relative w-full py-10'>

            <div className='grid gap-5 md:gap-0 md:grid-cols-3'>
                {/* company details */}
                <div className='flex flex-col gap-3 py-8 px-4 text-black dark:text-white z-50 bg-primary/10 sm:bg-transparent'>
                    <span className='flex gap-3 items-center text-4xl'>
                    <FaShopify className='text-yellow-600 dark:text-primary'/>
                    <h1 className='font-bold'>
                        Shopsy
                    </h1>
                    </span>
                    <p className='font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab reprehenderit asperiores tempore quaerat voluptas nobis accusantium ipsam doloremque quos consequuntur fugiat eos, facere aliquid, harum rem explicabo architecto aliquam!
                    </p>
                </div>
                {/* Footer Links */}
                <div className='grid  md:pl-10 z-50 py-8 px-4'>
                    <div className='w-full'>  
                        <h1 className='text-black dark:text-white font-semibold text-lg mb-2'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLink.map((link)=>(
                                    <li key={link.title} className='cursor-pointer hover:text-orange-600 dark:hover:text-primary  duration-300 hover:translate-x-1 text-black dark:text-white font-semibold'>
                                        <span>
                                            {link.title}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* social links */}

                <div className='z-50 py-8 px-4 font-bold text-black dark:text-white'>
                    <div className='flex gap-3'>
                            <a href="#">
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl'/>
                            </a>
                    </div>
                    <div className='mt-6 flex flex-col gap-3'>
                            <div className='flex gap-2 items-center'>
                                <FaLocationArrow/>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaMobileAlt/>
                                <p>+51 933 388 202</p>
                            </div>
                    </div>
                </div>
            </div>
                {/* Backgrounds  */}
              <div className='w-full h-full absolute left-0 top-0 z-0 '>
                  <div className='absolute z-20 size-full top-0 right-0 bg-gradient-to-b from-transparent to-primary/40 dark:to-primary/30'></div>
                  <img
                      className=' size-full object-cover dark:hidden'
                      src={imgL}
                      alt=""
                  />
                  <img
                      className=' hidden dark:flex size-full object-cover'
                      src={imgD}
                      alt=""
                  />
              </div>
        </div>
    </div>
  )
}
