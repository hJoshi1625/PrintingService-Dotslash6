import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { signOutAuth } from '../../utils/firebase'

export default function Navbar() {
    const { currentUser } = useContext(UserContext)
    return (
        <div>
            <header class="text-white body-font bg-blue-500">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link
                        to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl text-white">Printf</span>
                    </Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-xxl">
                        <Link to="/" class="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
                        <a class="mr-5 hover:text-gray-900 cursor-pointer" href='#about-us'>About us</a>
                        <Link
                            to='/add-shop'
                            class="mr-5 hover:text-gray-900 cursor-pointer" >Add Your shop</Link>
                    </nav>
                    {
                        !currentUser ? <>
                            <Link to='login'>
                                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">LogIn
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                        </> : <>
                            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black"
                                onClick={() => {
                                    signOutAuth()
                                }
                                }
                            >LogOut
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </>
                    }

                </div>
            </header>
        </div>
    )
}
