import ContactForm from "@/components/ContactForm";
import DescriptionItem from "@/components/DescriptionItem";
import Details from "@/components/Details";
import HeroText from "@/components/HeroText";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <Image
          className="object-cover rotate-180 absolute z-0 -top-48 right-0 scale-x-[-1]"
          src="/leaves.png" width={862} height={1440} />
        <HeroText />
      </header>
      <DescriptionItem />
      <WhatWeBelieve />
      <Details />
      <ContactForm />
    </main>
  );
};
