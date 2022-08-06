import React from 'react'
import { useState } from "react";
import Link from 'next/link'



    const Navbar = () => {

        const [navbar, setNavbar] = useState(false);

        return (
            <div>
                <nav className="container w-full bg-white shadow">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                               <Link href="/"> 
                                <a >
                                    <h2 className='text-xl md:text-2xl font-semibold'>Coinranking</h2>
                                </a>
                                </Link>
                                <div className="lg:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                    <li className="text-gray-600 hover:text-blue-600">
                                    <Link href='/'><a>Cryptocurrency</a></Link>
                                    </li>
                                    <li className="text-gray-600 hover:text-blue-600">
                                    <Link href='/Exchanges'><a>Exchanges</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    export default Navbar