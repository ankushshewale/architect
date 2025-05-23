'use client'
import React, { useState } from 'react'


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <div>
            <nav className="bg-white drop-shadow-lg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded={mobileMenuOpen} onClick={toggleMobileMenu}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* <!-- Icon when menu is closed. Menu open: "hidden", Menu closed: "block" --> */}
                                {/* {!mobileMenuOpen && ( */}
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* )} */}
                                {/* <!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden" --> */}
                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                            <div className="flex shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-white">Dashboard</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-white">Team</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-white">Projects</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:text-white">Calendar</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar