"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {ProjectAnimItem} from "@/components/project-anim/project-anim-item";
import {LineSection} from "@/components/ui/line-section";
import Image from "next/image";

// import images
import audience from "../../public/about/audience.png"
import business from "../../public/about/business.png"
import data from "../../public/about/data.png"
import fast from "../../public/about/fast.png"
import features from "../../public/about/features.png"
import product from "../../public/about/product.png"
import agile from "../../public/about/agile.png"

const Circle = forwardRef(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AboutMe({className}) {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);

    return (
        <LineSection
            title={"About me"}
            className={cn("relative", className)}
            id={"about"}
        >
            <div className={"w-full md:w-[40%] h-fit"}>
                <p className={'font-semibold text-xl mb-4'}>
                    +3 years of experience in software engineering
                </p>
                <p className={'font-semibold text-xl mb-4'}>
                    Master's degree in computer science ( EPITA Cybersecurity Engineer )
                </p>
                <p className={'font-semibold text-xl mb-4'}>
                    AWS Associate Solution Architect - In progress
                </p>

                <p className={'font-semibold text-xl mb-4'}>
                    French and English speaker
                </p>

                <p className={"text-gray-300"}>
                    I am a software engineer with a passion for Blockchain and AI technology.
                    I have a strong background in software engineering and have worked on a variety of projects in the
                    past.
                    I am currently looking for new opportunities to work on exciting projects
                    that will allow me to use my skills and knowledge to make a positive impact on the
                    world.
                </p>
            </div>
            <div
                className="relative w-full items-center justify-center overflow-hidden p-10 h-full hidden md:flex"
                ref={containerRef}
            >
                <div
                    className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                    <div className="flex flex-row items-center justify-between">
                        <ProjectAnimItem
                            icon={<Image src={business} alt={"agile"}/>}
                            title="Business centric"
                            ref={div1Ref}
                            end={false}
                        />
                        <ProjectAnimItem
                            icon={<Image src={features} alt={"agile"}/>}
                            title="Core features"
                            ref={div5Ref}
                            end={true}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <ProjectAnimItem
                            icon={<Image src={fast} alt={"agile"}/>}
                            title="Rapid prototyping"
                            ref={div2Ref}
                            end={false}
                        />
                        <Circle ref={div4Ref} className="size-16">
                            <Image src={product} alt={"agile"}/>
                        </Circle>
                        <ProjectAnimItem
                            icon={<Image src={audience} alt={"agile"}/>}
                            title="Target audience"
                            ref={div6Ref}
                            end={true}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <ProjectAnimItem
                            icon={<Image src={agile} alt={"agile"}/>}
                            title="Agile iterations"
                            ref={div3Ref}
                            end={false}
                        />
                        <ProjectAnimItem
                            icon={<Image src={data} alt={"agile"}/>}
                            title="Data analysis"
                            ref={div7Ref}
                            end={true}
                        />
                    </div>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div4Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div4Ref}
                    curvature={-75}
                    endYOffset={-10}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div4Ref}
                    reverse
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div7Ref}
                    toRef={div4Ref}
                    curvature={75}
                    endYOffset={10}
                    reverse
                />
            </div>
        </LineSection>
    );
}
