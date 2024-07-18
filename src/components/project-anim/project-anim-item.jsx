import {HStack} from "@/components/ui/h-stack";
import {cn} from "@/lib/utils";
import {forwardRef} from "react";

const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});
export const  ProjectAnimItem = forwardRef( ({icon, title, end}, ref ) => {
    return (
        <HStack className={"items-center gap-x-2"}>
            {!end && <p>{title}</p>}
            <Circle ref={ref}>
                {icon}
            </Circle>
            {end && <p>{title}</p>}
        </HStack>
    )
})