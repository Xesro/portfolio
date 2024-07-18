import {cn} from "@/lib/utils";

export function HStack({children, className, id}) {
    return (
        <div className={cn("flex flex-row justify-center items-center gap-4",  className)} id={id}>
            {children}
        </div>
    )
}