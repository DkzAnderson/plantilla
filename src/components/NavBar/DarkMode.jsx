import React from 'react'
import { FaShopify } from "react-icons/fa";
import Light from '../../assets/Light.jpeg'
import Dark from '../../assets/Dark.jpeg'

export const DarkMode = ({theme,setTheme,element}) => {

    let styles = {
        main        : '',
        backgroundL : 'size-full absolute top-0 right-0 object-cover z-10 transition-all duration-300 ',
        backgroundD : 'size-full absolute top-0 right-0 object-cover z-10 transition-all duration-300 ',
        wraper      : 'relative w-12 h-5 p-0.5 rounded-full overflow-hidden cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300',
        button      : 'absolute size-4 z-20 rounded-full right-0.5 top-0.5',
        
    }

    theme === 'light' ? styles.button+= ' -translate-x-7 bg-yellow-500 ' : styles.button+=' bg-white' ; 

    React.useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);

  return (
    <div className=''>
          <div 
            className={styles.wraper}
            onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
          >
              <img
                  className={(theme === "light" ? styles.backgroundL : 'hidden')}
                  src={Light}
                  alt=''
              />
              <img
                  className={(theme === "dark" ? styles.backgroundD : 'hidden')}
                  src={Dark}
                  alt=''
              />
              <div className={styles.button}></div>
          </div>
    </div>
  )
}
