import Image from "next/image";
import FBSvg from "../../public/fb.svg";
import InstaSvg from "../../public/insta.svg";
import YtSvg from "../../public/yt.svg";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const FooterCom = () => {
    return (
        <footer style={{ marginTop: "256px" }} className={outfit.className}>
            <div className="flex justify-between px-8 py-12 bg-[#748B1D]">
                <div className="flex gap-x-9 text-white">
                    <p className="font-light text-base">&#169; Copyright reserved Our Nature 2024. All rights reserved.</p>
                    <p className="font-light text-base">Privacy Policy</p>
                    <p className="font-light text-base">Terms and Conditions</p>
                </div>
                <div className="flex gap-x-9">
                    <Image src={FBSvg} width={20} height={20} />
                    <Image src={InstaSvg} width={20} height={20} />
                    <Image src={YtSvg} width={20} height={20} />
                </div>
            </div>
        </footer>
    );
}

export default FooterCom;