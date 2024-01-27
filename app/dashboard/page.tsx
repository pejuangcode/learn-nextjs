"use client"

import { useState } from 'react'
import Posts from './_components/Posts'
import Stats from './_components/Stats'
import Image from 'next/image'

export default function Page() {

    const [show,setShow] = useState(false)

    return <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 mb-5">
                    <h1 className="text-3xl font-bold mb-10">Messaging ID framework development for the marketing branch</h1>
                    <div className="flex items-center justify-between">
                    <div className="flex items-stretch">
                        <div className="text-gray-400 text-xs">Members<br/>connected</div>
                            <div className="h-100 border-l mx-4"></div>
                            <div className="flex flex-nowrap -space-x-3">
                                <div className="h-9 w-9">
                                    <Image
                                    src="https://ui-avatars.com/api/?background=random"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    />
                                {/* <Image alt="Picture of the author" className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random"/> */}
                                </div>
                                <div className="h-9 w-9">
                                    <Image
                                        src="https://ui-avatars.com/api/?background=random"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                    {/* <Image alt="Picture of the author" className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random"/> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                                </svg>
                            </button>
                            <button 
                            type="button"
                             onClick={()=>setShow(!show)}
                              className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                Open
                            </button>
                        </div>
                    </div>
                    {show &&
                    <div className="grid grid-cols-2 gap-x-20">
                        <Posts />
                        <Stats />
                    </div>
                    } 

                    {/* <hr className="my-10"> */}
                </div>
            </div>
        </div>
    </main>
}