import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
    weight: "800",
    subsets: ["latin"]
});

const HeroText = () => {
    return (
        <div className="container mx-auto h-screen relative z-10">
            <div className="h-4/5 flex flex-col justify-center w-1/2">
                <div className={outfit.className}>
                    <p className="text-3xl font-light text-[#747474]">You can also</p>
                    <p className="text-[101px] font-extralight text-transparent bg-clip-text bg-gradient-to-r from-[#607EB3] to-50% to-[#748B1D]">
                        <span className={plus_jakarta_sans.className}>f</span>eel the essence
                    </p>
                    <p className="font-normal text-base text-[#747474]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="flex border border-[#748B1D] text-[#748B1D] items-center px-6 py-4 gap-x-3 mt-8 hover:bg-[#748B1D] hover:text-white duration-300 ease-in-out drop-shadow-md">
                        <p className="text-base font-light">SEE MORE</p>
                        <svg width={16} height={16} className="fill-current rotate-90" data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroText;