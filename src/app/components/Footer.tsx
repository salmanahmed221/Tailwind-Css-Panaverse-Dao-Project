import Link from "next/link";


export default function Footer() {
    return <div className="">
        <footer className="p-4 bg-gray-100 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 font-semibold">
            <span className="text-sm text-black sm:text-center">© 2023 <Link href="" className="hover:underline">Salman Ahmed™</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-black sm:mt-0 space-x-5">
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
        </footer>
    </div>;
}
