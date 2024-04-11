import Link from 'next/link';
import Logo from '../../assets/logo.png';
import Image from 'next/image';
import './nav.scss';

const Nav = () => {
   return <nav>
        <Image src={Logo} alt={'sportSee logo'} className={'nav-logo'}></Image>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/profile"}>Profil</Link>
        <Link href={"/settings"}>Réglages</Link>
        <Link href={"/community"}>Communauté</Link>

    </nav>
}

export default Nav;
