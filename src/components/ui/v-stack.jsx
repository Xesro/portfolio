import {cn} from "@/lib/utils";

export function VStack({children, className}) {
    return (
        <div className={cn(" flex flex-col items-center ", className)}>
            {children}
        </div>
    )
}