import React from 'react'
import { DarkMode } from './DarkMode'
import { FaCartShopping, FaShopify } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown } from 'react-icons/fa'


export const Navbar = () => {

    const Menu = [
        {
            id: 1,
            name: "Home",
            link: "/#"
        },
        {
            id: 2,
            name: 'Top Rated',
            link: '/#services'
        },
        {
            id: 3,
            name: 'Kids Wear',
            link: '/#'
        },
        {
            id: 4,
            name: 'Mens Wear',
            link: '/#'
        },
        {
            id: 5,
            name: 'Electronics',
            link: '/#'
        }
    ];

    const DropdownLinks = [
        {
            id:1,
            name: "Trending Products",
            link: "/#"
        },
        {
            id:2,
            name: "Best Selling",
            link: "/#"
        },
        {
            id:3,
            name: "Top Rated",
            link: "/#"
        }

    ]

    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; 

    let styles = {
        main: 'shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40',
        upper:'bg-primary/40 py-3 px-2 transition-all duration-300',
        upperBox: 'container flex justify-between items-center gap-3',
        logo: 'text-4xl ',
        logoBox: 'container flex justify-between items-center',
        link: 'font-bold text-2xl sm:text-3xl flex gap-2',

        searchBar: {
            main: 'flex justify-between items-center gap-4 ',
            input: 'w-[200px] sm:w-[200px] group-hover/input:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 border focus:border-primary dark:border-gray-500 dark:bg-gray-800 focus:outline-none focus:border-orange-400',
            inputBox: 'relative group/input hidden sm:block',
            searchIcon: 'text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3',

        },

        orderBtn : {
            main : 'bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group/order',
            span : 'group-hover/order:block hidden transition duration-300',
            icon : 'text-xl text-white drop-shadow-sm cursor-pointer'
        },

        lower: {
            main: 'flex justify-center',
            ul  : 'sm:flex hidden items-center gap-4',
            li  : '',
            link: 'inline-block px-4 hover:text-primary duration-300',
            liList: 'flex items-center gap-[2px] py-2 group/list',
            liIcon: 'transition-all duration-300 group-hover/list:rotate-180'
        },

        dropDown: {
            main : 'absolute hidden z-[9999] group-hover/dropdown:block top-[40px] w-[150px] shadow-md rounded-md bg-white p-2 text-black',
            ul   : '',
            li   : '',
            link : 'inline-block w-full rounded-md p-2 hover:bg-primary/20'
        }
    }

    React.useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);


    theme === "dark" ? styles.logo+= 'text-yellow-500': styles.logo+='text-yellow-600'

    return (
        <div className={styles.main}>
            {/* upper Navbar */}
            <div className={styles.upper}>
                <div className={styles.upperBox}>
                    <div className={styles.logoBox}>
                        <a href='#'
                            className={styles.link}
                        >
                            <FaShopify className={styles.logo}/>
                            Shopsy
                        </a>
                    </div>
                    {/* search bar */}
                    <div className={styles.searchBar.main}>
                        <div className={styles.searchBar.inputBox}>
                            <input
                                className={styles.searchBar.input}
                                type="text"
                                placeholder='search'
                            />
                        <IoMdSearch
                            className={styles.searchBar.searchIcon}
                        />
                        </div>
                    </div>
                    {/* order button */}
                    <button
                        onClick={()=>alert("Ordering not available yet")}
                        className={styles.orderBtn.main}
                    >
                        <span
                            className={styles.orderBtn.span}
                        >Order</span>
                        <FaCartShopping
                            className={styles.orderBtn.icon}
                        />
                    </button>

                    {/*Dark mode Switch */}

                    <div>
                        <DarkMode theme={theme} setTheme={setTheme} element={element}/>
                    </div>
                </div>
            </div>
            {/* lowe Navbar */}
            <div className={styles.lower.main}>
                <ul className={styles.lower.ul}>
                    {Menu.map((data) => (
                        <li key={data.id} className={styles.lower.li}>
                            {data.name}
                        </li>
                    ))}
                    {/* Simple Dropdown and Links */}
                    <li className={'relative group/dropdown cursor-pointer'}>
                        <div href="#" className={styles.lower.liList}>
                            Trending Products
                            <span>
                                <FaCaretDown
                                    className={styles.lower.liIcon}
                                />
                            </span>
                            <div className={styles.dropDown.main}>
                                <ul className={styles.dropDown.ul}>
                                    {/* Dropdown Links */}
                                    {DropdownLinks.map((data)=>(
                                        <li key={data.id} className={styles.dropDown.li}>
                                            {data.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
