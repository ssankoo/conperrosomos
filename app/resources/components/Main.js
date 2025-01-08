import React from 'react'
import Image from 'next/image'
import logo from '../imgs/logo-bg-blanco-color.png'
import Link from 'next/link'

export default function Main() {
    return (
        <main className="h-screen bg-[#582770] flex items-center justify-center px-4">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <Image
                        src={logo}
                        width={700}
                        height={400}
                        alt="Con Perro Somos Logo"
                        className="w-full h-auto max-w-[700px]"
                        priority
                    />
                </div>
                
                <div className="flex flex-col items-center md:items-start gap-6 flex-1">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold overflow-hidden">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla, ratione odit dicta labore quam quia dolorem minima, reiciendis magni cum doloremque facilis. Eos cupiditate distinctio, iste delectus soluta numquam.</p>
                    
                    <Link href="#sobre-mi" className="bg-white text-purple-800 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors duration-300">
                        APRENDE MÁS
                    </Link>
                </div>
            </div>
        </main>
    )
}