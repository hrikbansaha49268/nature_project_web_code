import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const DescriptionItem = () => {
    return (
        <section className="flex flex-wrap justify-between items-center text-[#1E1E1E] container mx-auto">
            <div className="w-2/3">
                <div className="w-11/12 flex flex-col gap-y-14">
                    <p className={outfit.className}>
                        <span className="font-medium text-6xl text-[#607EB3]">What to look at</span>
                    </p>
                    <p className={outfit.className}>
                        <span className="text-base leading-6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
                    </p>
                    <button className="bg-[#748B1D] text-white flex items-center gap-x-3 px-6 py-5 w-fit shadow-lg hover:scale-90 hover:rounded-md duration-300 ease-in-out">
                        <p className="font-light">SEE MORE</p>
                        <svg width={16} height={16} className="fill-current rotate-90" data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" /></svg>
                    </button>
                </div>
            </div>
            <div className="w-1/3 relative h-[50vh]">
                <Image fill className="object-cover" src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </section>
    );
}

export default DescriptionItem; 