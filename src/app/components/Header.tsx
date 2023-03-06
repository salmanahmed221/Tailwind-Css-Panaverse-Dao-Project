import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
    return <div className="flex justify-around items-center shadow-xl sticky top-0 bg-gray-100 z-10">
        {/* Logo */}
        <div>
            <Image src="/fulllogo.png" alt="logo" height={130} width={130} />
        </div>

        {/* Links */}
        <div >
            <ul className="md:flex space-x-6 font-semibold hidden">
                <li>
                    <Link href={"/"} title="click to visit">Home</Link>
                </li>
                <li>
                    <Link href={"/about"} title="click to visit">
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"/syallbus"} title="click to visit">
                        Syallbus
                    </Link>
                </li>
            </ul>
        </div>

        {/* Button */}
        <div >
            <button type="button" className="focus:outline-none text-white bg-[#bd132a] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hidden md:block">
                <Link href="https://portal.piaic.org/" target="_blank" title="click to visit">Apply</Link>
            </button>
        </div>

        {/* Hamburger */}
        <div className="text-2xl md:hidden">
            <GiHamburgerMenu />
        </div>
    </div>
}
