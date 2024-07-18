import {cn} from "@/lib/utils";
import {Guideline} from "@/components/ui/guideline";
import {HStack} from "@/components/ui/h-stack";
import {VStack} from "@/components/ui/v-stack";

export function LineSection({className, children, title, id}) {
    return (
        <HStack className={cn("items-stretch w-full", className)} id={id}>
            <Guideline/>
            <VStack className={"items-start grow"}>
                <h2 className={'text-6xl font-semibold  h-fit mb-6'}>{title}</h2>
                <HStack className={"content-evenly w-full"}>
                    {children}
                </HStack>
            </VStack>
        </HStack>
    )
}