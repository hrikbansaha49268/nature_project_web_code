import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const Nav = () => {
    return (
        <ul className="flex w-1/3 justify-between p-4 border-b border-black z-10">
            <li className="font-light text-base"><Link className={outfit.className} href="">Home</Link></li>
            <li className="font-light text-base"><Link className={outfit.className} href="">About</Link></li>
            <li className="font-light text-base"><Link className={outfit.className} href="">Products</Link></li>
            <li className="font-light text-base"><Link className={outfit.className} href="">Contact Us</Link></li>
        </ul>
    );
};

export default Nav;