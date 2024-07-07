import { Outfit } from "next/font/google";

const outfit = Outfit({
    weight: "variable",
    subsets: ["latin"]
});

const Details = () => {
    return (
        <section style={{ margin: "256px 0" }} className={outfit.className}>
            <div className="flex flex-col items-center tracking-wider gap-y-16">
                <p className="text-[#607EB3] text-6xl font-medium">Reach us at</p>
                <ul className="flex flex-col items-center font-light text-3xl gap-y-8">
                    <li><span className="font-semibold">E-mail:</span> natural.essence@oliver.com</li>
                    <li><span className="font-semibold">Phone:</span> +11 1234567890</li>
                    <li><span className="font-semibold">Address:</span> 12, Street name, locality, State, Country</li>
                </ul>
            </div>
        </section>
    );
};

export default Details;