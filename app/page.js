import styles from "./page.module.css";

import Navbar from "./resources/components/Navbar";
import Main from "./resources/components/Main";
import Sobremi from "./resources/components/Sobremi";
import Blog from "./resources/components/Blog"

import Podcast from "./resources/components/Podcast";
import AcademiaOnline from "./resources/components/AcademiaOnline";
import Footer from "./resources/components/Footer"


import perro from "./resources/perroDefault.jpg"
import logo from './resources/imgs/logo-bg-blanco-color.png'

import Image from "next/image";
import Link from "next/link";


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PersonIcon from '@mui/icons-material/Person';




export default function Home() {
  return (
<section class="layout">

  <div className="navbar" id="top"><Navbar/></div>


  <div class="main"><Main/></div>
  <div class="sobre-nosotros"><Sobremi/></div>
  <div class="podcast"><Podcast/></div>
  <div class="blog"><Blog/></div>
  <div class="academia-online"><AcademiaOnline/></div>
  <div class="footer"><Footer/></div>
 

</section>



  );
}
