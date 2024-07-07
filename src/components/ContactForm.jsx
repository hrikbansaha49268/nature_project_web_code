import { Outfit } from "next/font/google";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const ContactForm = () => {
    return (
        <section className={outfit.className}>
            <div className="flex flex-col items-center w-1/2 mx-auto gap-y-16">
                <p className="text-[#607EB3] text-6xl font-medium">Message Us</p>
                <form action="/" className="flex flex-col items-center w-full gap-y-16">
                    <div className="flex flex-col w-full gap-y-8">
                        <label className="text-3xl font-semibold" htmlFor="fullName">Full Name</label>
                        <input className="py-6 pl-6 border-2 border-[#8F9393] bg-transparent outline-none focus:bg-[#8F9393] focus:bg-opacity-20 duration-300 ease-in-out" type="text" name="fullName" id="fullName" placeholder="John Smith" />
                    </div>
                    <div className="flex flex-col w-full gap-y-8">
                        <label className="text-3xl font-semibold" htmlFor="custEmail">Your Email</label>
                        <input className="py-6 pl-6 border-2 border-[#8F9393] bg-transparent outline-none focus:bg-[#8F9393] focus:bg-opacity-20 duration-300 ease-in-out" type="email" name="custEmail" id="custEmail" placeholder="exampleemail@etc.com" />
                    </div>
                    <div className="flex flex-col w-full gap-y-8">
                        <label className="text-3xl font-semibold" htmlFor="custQuery">Your Message</label>
                        <textarea rows={10} className="bg-transparent border-2 border-[#8F9393] pt-6 pl-6 resize-none outline-none focus:bg-[#8F9393] focus:bg-opacity-20 duration-300 ease-in-out" name="custQuery" id="custQuery" placeholder="Write your message here"></textarea>
                    </div>
                </form>
                <button className="flex items-center gap-x-3 px-6 py-3 bg-[#748B1D] text-white drop-shadow-md">
                    <p className="font-light text-base">Send Message</p>
                    <svg width={16} height={16} className="fill-current rotate-90" data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" /></svg>
                </button>
            </div>
        </section>
    );
};

export default ContactForm;