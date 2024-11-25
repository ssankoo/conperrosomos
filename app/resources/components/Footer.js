import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PersonIcon from '@mui/icons-material/Person';



function Footer() {
    return (
   

<footer class="bg-[#F24B04] rounded-lg shadow m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-white sm:text-center">© 2024 <a href="https://flowbite.com/" class="hover:underline">ConPerroSomos</a>. Todos los derechos reservados
        </span>
        
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <a href="https://www.instagram.com/" target="_blank"><InstagramIcon/></a>
            <a href="https://www.facebook.com/" target="_blank"><FacebookIcon/></a>
            <a href="https://x.com/home?lang=en" target="_blank"><XIcon/></a>
            <a href="https://open.spotify.com/" target="_blank"><PodcastsIcon/></a>
        </ul>
    </div>
</footer>

    )
}

export default Footer