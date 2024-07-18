import {cn} from "@/lib/utils";

export function Section({ children, className }) {
    return (
        <section className={cn("px-8 md:px-24 py-10 w-screen", className)}>
            {children}
        </section>
    );
}