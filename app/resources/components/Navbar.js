import Image from "next/image";
import Link from "next/link"
import logo from '../imgs/logo-bg-blanco-color.png'
import styles from './styles/Navbar.css'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PersonIcon from '@mui/icons-material/Person';


import React from 'react'

export default function Navbar() {
    return (


<nav class="bg-[#F24B04] fixed w-full z-20 top-0 start-0 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <Image 
      src={logo}
      width={85}
      alt="logo"
      />
  </a>

  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href="https://www.instagram.com/" target="_blank"><InstagramIcon/></a>
      <a href="https://www.facebook.com/" target="_blank"><FacebookIcon/></a>
      <a href="https://x.com/home?lang=en" target="_blank"><XIcon/></a>
      <a href="https://open.spotify.com/" target="_blank"><PodcastsIcon/></a>
  </div>

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
      <li>
        <Link href="#sobre-mi" class="block py-2 px-3 text-white md:hover:text-[#582770] md:p-0">Sobre mi</Link>
      </li>
      <li>
      <Link href="#podcast" class="block py-2 px-3 text-white md:hover:text-[#582770] md:p-0">Podcast</Link>
      </li>
      <li>
        <Link href="#blog" class="block py-2 px-3 text-white md:hover:text-[#582770] md:p-0">Blog</Link>
      </li>
      <li>
        <Link href="#acedemia-online" class="block py-2 px-3 text-white md:hover:text-[#582770] md:p-0">Academia Online</Link>      </li>
    </ul>
  </div>
  </div>
</nav>


    )
}
