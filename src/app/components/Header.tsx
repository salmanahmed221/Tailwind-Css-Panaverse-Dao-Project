"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


export default function Header() {
    const [nav, setNav] = useState(true);

    return <div className="flex justify-around items-center shadow-xl sticky top-0 bg-gray-100 z-10">
        {/* Logo */}
        <div className="z-10">
            <Link href={"/"}>
                <Image src="/fulllogo.png" alt="logo" height={130} width={130} />
            </Link>
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
        <div className="text-2xl md:hidden z-10" onClick={() => { setNav(!nav) }}>
            {nav ? <GiHamburgerMenu /> : <ImCross />}
        </div>

        {/* overlay */}
        {!nav ? <div className="gap-6 md:hidden fixed top-0 left-0 h-[50%] bg-white text-black w-full flex flex-col font-bold text-xl justify-center items-center">
            <Link href={"/"} title="click to visit">Home</Link>
            <Link href={"/about"} title="click to visit">About</Link>
            <Link href={"/syallbus"} title="click to visit">Syallbus</Link>
        </div>
            : null}
    </div>
}
