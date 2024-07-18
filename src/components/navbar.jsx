import Image from "next/image";
import {HStack} from "@/components/ui/h-stack";

export function Navbar() {
    return (
        <HStack className={"w-full relative"}>
            <HStack className={"absolute left-0"}>
                <Image
                    src={"/logo_portfolio.png"}
                    alt={"logo"}
                    width={40}
                    height={40}
                />
                <p className={"h-fit text-lg font-semibold"}>Portfolio</p>
            </HStack>

            <HStack className={"gap-6 hidden md:flex"}>
                <a href={"#about"}>About</a>
                <a href={"#tech-stack"}>Stack</a>
                <a href={"#experiences"}>Experiences</a>
                <a href={"#contact"}>Contact</a>
            </HStack>
        </HStack>
    )
}