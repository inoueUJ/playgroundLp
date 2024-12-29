import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white">
      <div className="container mx-auto flex items-center justify-center space-x-8">
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="h-6 w-6" />
        </Link>
      </div>
      <div className="mt-2 text-center">
        {/* TODO追加 */}
        <p>&copy; 2023 Band Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
