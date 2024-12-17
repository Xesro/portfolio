import Image from "next/image";
import {AboutMe} from "@/components/about-me";
import {HStack} from "@/components/ui/h-stack";
import {VStack} from "@/components/ui/v-stack";
import {SubHeadLine} from "@/components/sub-headline";
import {Navbar} from "@/components/navbar";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {Section} from "@/components/section";
import {TechStack} from "@/components/tech-stack";
import {Experiences} from "@/components/experiences";
import {Contact} from "@/components/contact";
import {Footer} from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        <div className={"textured-background w-screen px-8 md:px-24 pt-10 pb-32  max-w-[1500px]"}>
            <Navbar/>
            <HStack className={'w-full h-full items-start mt-20 md:mt-0 md:items-center'} id={"home"}>
                <div className={"w-full md:w-[40%]"}>
                    <div className={" text-6xl md:text-7xl font-bold"}>
                        <h1>Hi !</h1>
                        <h1>I am <span className={"text-primary"}>Arthur</span></h1>
                        <h1>Software Engineer 🚀</h1>
                    </div>
                    <h2 className={"text-lg  text-gray-300 mt-4"}>Willing to build Blockchain and AI
                        software of tomorrow</h2>
                    <SubHeadLine/>
                    <ShimmerButton  className={"mt-4 cursor-pointer"} background={"hsl(var(--primary))"} href={"#contact"}>Contact me</ShimmerButton>
                </div>
                <VStack className={"gap-6 relative w-[60%] hidden md:flex"}>
                    <Image src={'/hex_glow.svg'} alt={'blob'} width={1000} height={950} className={"absolute top-0 z-0"} style={{"maxWidth": "none"}}/>
                    <Image
                        src="/pp_nobg.png"
                        width={400}
                        height={0}
                        alt="Arthur Plebs"
                        className={"opacity-100 z-10"}
                    />
                   <div className={"absolute bottom-0 bg-gradient-to-b h-[500px] w-[500px]"}/>
                </VStack>
            </HStack>
        </div>

        <Section className={"relative max-w-[1500px]"}>
            <Image src={"/shape_bg.svg"} alt={"shape-bg"} width={"600"} height={"1900"} className={"absolute -right-3 -top-56 -rotate-45 opacity-10"}/>
            <AboutMe className={"mb-28"}/>
            <TechStack className={"mb-28"}/>
            <Experiences className={"mb-28"}/>
            <Contact/>
        </Section>
        <Footer/>
    </main>
  );
}
