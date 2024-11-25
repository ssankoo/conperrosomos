import React from 'react'
import styles from './styles/Main.css'
import logo from '../imgs/logo-bg-blanco-color.png'
import Image from 'next/image'



export default function Main() {
    return (
        <main className='main-logo h-screen flex items-center'>
            <Image
                src={logo}
                width={700}
                alt='lgoo'
                className='image-logo'
            />
            <p className='title-logo'>
            Lorem ipsum dolor sit amet
            </p>
            
        </main>
    )
}
