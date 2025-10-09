import React from 'react'
import logoPath from '../assets/media/logo-2.png'

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="relative">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="#">
                            Blogs
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="/contact">
                            Contact
                        </a>
                    </div>
                    <div className="">
                        <a className="text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary  text-black dark:text-white  null" href="/documentation">
                            Documentation
                        </a>
                    </div>
                </nav>

                <div className="flex items-center space-x-4">
                    <button aria-label="Toggle theme" className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white">
                        <svg viewBox="0 0 23 23" className="h-8 w-8 text-dark dark:hidden text-white">
                            <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                        </svg>
                    </button>

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
