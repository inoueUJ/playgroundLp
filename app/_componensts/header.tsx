import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-10 w-full">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="font-bold text-4xl text-white">
          Boss Baby
        </Link>
        <ul className="flex flex-wrap items-center space-x-5 text-white">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/profile">PROFILE</Link>
          </li>
          <li>
            <Link href="/video">VIDEO</Link>
          </li>
          <li className="flex items-center space-x-5">
            <span>CONTACT</span>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
