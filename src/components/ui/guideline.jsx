import Image from "next/image";
import {VStack} from "@/components/ui/v-stack";

export function Guideline() {
    return (
        <VStack className={"min-w-[40px]"}>
            <Image src={'/code-icon-white.svg'} alt={'code icon'} width={25} height={25} className={"mb-4"}/>
            <div className={'h-full w-1 bg-gradient-to-b from-orange-100 to-orange-400 rounded-3xl  shadow-orange-glow'}/>
        </VStack>
    )
}