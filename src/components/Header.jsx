import React from 'react'
import logoPath from '/assets/media/logo-2.png'

export default function Header() {
    return (
        <header className="fixed h-24 top-0 py-1 z-50 w-full bg-transparent transition-all shadow-lg dark:shadow-darkmd bg-white dark:bg-semidark">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4 py-6">
                <a href="/">
                    <img alt="logo" loading="lazy" width={160} height={50} decoding="async" className="dark:hidden" style={{ color: 'transparent', width: 'auto', height: 'auto' }} src={logoPath} />
                    <img alt="logo" loading="lazy" width={160} height={50} decoding="async" className="dark:block hidden" style={{ color: 'transparent', width: 'auto', height: 'auto' }} src={logoPath} />
                </a>

                <nav className="hidden lg:flex flex-grow items-center justify-center space-x-6">
                    <div className="">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary !text-primary null" href="/">Home</a>
                    </div>
                    <div className="relative">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="#">
                            Properties
                        </a>
                    </div>
                    <div className="relative">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="#">
                            Blogs
                        </a>
                    </div>
                    <div className="">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="/contact">
                            About Us
                        </a>
                    </div>
                    <div className="">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="/contact">
                            Contact Us
                        </a>
                    </div>
                </nav>

                <div className="flex items-center space-x-4">

                    <a className="hidden lg:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white" href="/signin">Sign In</a>
                    <a className="hidden lg:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700" href="/signup">Sign Up</a>

                    <button className="block lg:hidden p-2 rounded-lg" aria-label="Toggle mobile menu">
                        <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
                    </button>
                </div>

                {/* mobile menu (kept markup structure) */}
                <div className="lg:hidden fixed top-0 z-50 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs translate-x-full">
                    <div className="flex items-center justify-between p-4">
                        <h2 className="text-lg font-bold text-midnight_text dark:text-white">Menu</h2>
                        <button aria-label="Close mobile menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="dark:text-white">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col items-start p-4">
                        <div className="mt-4 flex flex-col space-y-4 w-full">
                            <a className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white" href="/signin">Sign In</a>
                            <a className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700" href="/signup">Sign Up</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
