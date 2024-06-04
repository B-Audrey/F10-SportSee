import Link from 'next/link';
import Image from 'next/image';
import './nav.component.scss';
import {Logo} from '../../../assets/index';

/**
 * NavComponent functional component to display the navigation bar on the top of the page
 */
export default function NavComponent () {
   return <nav>
       <Image src={Logo} alt={'sportSee logo'} className={'nav-logo'} priority></Image>
       <Link href={"/dashboard"}>Accueil</Link>
        <Link href={"/profile"}>Profil</Link>
        <Link href={"/settings"}>Réglages</Link>
        <Link href={"/community"}>Communauté</Link>

    </nav>
}

