"use client"

import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const BentoGrid = ({
                       children,
                       className
                   }) => {
    return (
        <div
            className={cn("grid w-full auto-rows-[22rem] grid-cols-5 gap-4", className)}>
            {children}
        </div>
    );
};

const BentoCard = ({
                       name,
                       className,
                       background,
                       Icon,
                       description,
                       content
                   }) => {
    const [isMobileHovered, setIsMobileHovered] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            console.log(entries)
            entries.forEach(entry => {
                if (entry.isIntersecting && window.innerWidth <= 768) {
                    setIsMobileHovered(true);
                } else {
                    setIsMobileHovered(false)
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 1
        });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            key={name}
            className={cn(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                "h-[350px]",
                className
            )}>
            <div className={"w-full h-full absolute bg-white"}>
                {background}
            </div>
            <div className={"absolute h-full w-full"}></div>
            <div
                className={cn(
                    "pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 absolute top-[170px] bg-gradient-to-t from-gray-50 from-90% to-transparent min-h-[350px] w-full",
                    "group-hover:-translate-y-[175px]",
                    {
                        "-translate-y-[175px]": isMobileHovered
                    }
                )}>
                <div className={""}>
                    <Icon
                        className={cn(
                            "h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out",
                            "group-hover:scale-75",
                            {
                                "scale-75": isMobileHovered
                            }
                        )}
                    />
                    <h3 className="text-md lg:text-xl font-semibold text-neutral-800 ">
                        {name}
                    </h3>
                    <p className="text-xs md:text-base max-w-lg text-neutral-700">{description}</p>
                </div>
                <div className={"text-xs md:text-base text-neutral-600 p-6"}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export { BentoCard, BentoGrid };