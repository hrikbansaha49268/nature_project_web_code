import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const WhatWeBelieve = () => {
    return (
        <section className={outfit.className}>
            <div className="flex flex-col items-center container mx-auto gap-y-14 mt-64">
                <div className="flex flex-col items-center mx-auto tracking-[0.05em] gap-y-6">
                    <p className="font-light text-[34px] leading-[28px] text-[#607EB3]">WE BELIEVE IN A</p>
                    <p className="font-bold text-[64px] tracking-[0.24em] leading-[43px] text-[#748B1D] drop-shadow-lg">GREENER</p>
                    <p className="font-black text-[120px] leading-[90px] bg-clip-text text-transparent bg-gradient-to-r from-black to-[#748B1D]">FUTURE</p>
                </div>
                <p className="text-sm font-normal text-[#797979] text-center tracking-[0.03em] leading-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                </p>
            </div>
            <div className="flex gap-x-4 mx-auto w-fit mt-64">
                <Image className="object-cover drop-shadow-md" width={650} height={1024} src="https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="flex flex-col gap-y-4">
                    <Image className="object-cover drop-shadow-md" width={764} height={500} src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Image className="object-cover drop-shadow-md" width={764} height={500} src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </div >
        </section >
    );
}

export default WhatWeBelieve;