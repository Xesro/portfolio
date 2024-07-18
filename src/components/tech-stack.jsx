"use client"

import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {CircularProgressBar} from "@/components/ui/circular-progress-bar";
import {VStack} from "@/components/ui/v-stack";
import {HStack} from "@/components/ui/h-stack";
import {cn} from "@/lib/utils";
import {LineSection} from "@/components/ui/line-section";
import Meteors from "@/components/magicui/meteors";
import Image from "next/image";


// Tech icons imports
import ansible from "../../public/tech-icons/ansible.svg"
import css3 from "../../public/tech-icons/css3.svg"
import docker from "../../public/tech-icons/docker.svg"
import gcp from "../../public/tech-icons/gcp.svg"
import html5 from "../../public/tech-icons/html5.svg"
import javascript from "../../public/tech-icons/javascript.svg"
import mongo from "../../public/tech-icons/mongo.png"
import mysql from "../../public/tech-icons/mysql.svg"
import nestjs from "../../public/tech-icons/nestjs.svg"
import nextjs from "../../public/tech-icons/nextjs.svg"
import postgres from "../../public/tech-icons/postgres.svg"
import python from "../../public/tech-icons/python.svg"
import react from "../../public/tech-icons/react.svg"
import symfony from "../../public/tech-icons/symfony.svg"
import terraform from "../../public/tech-icons/terraform.svg"
import typescript from "../../public/tech-icons/typescript.svg"
import git from "../../public/tech-icons/git.svg"
import {useEffect, useState} from "react";

const innerCircleIcons = [
    ansible,
    terraform,
    gcp,
    git,
    docker,
]

const outerCircleIcons = [
    typescript,
    javascript,
    nestjs,
    nextjs,
    react,
    mongo,
    postgres,
    mysql,
    python,
    symfony,
    css3,
    html5,
]



export function TechStack({className}) {
    return (
        <LineSection
            title={"Technical Skills"}
            className={cn("relative", className)}
            id={"tech-stack"}
        >
            <Meteors number={3} />
            <OrbitingTechIcons className={"w-[50%]"}/>
            <VStack className={'items-start relative '}>
                <Meteors number={2} />
                <p className={"font-semibold"}>
                    Languages & Frameworks
                </p>
                <HStack className={"mt-4 items-start justify-start flex-wrap"}>
                    <CircularProgressBar percentage={100} name={"JS / TS"}/>
                    <CircularProgressBar percentage={100} name={"Nest"}/>
                    <CircularProgressBar percentage={90} name={"React"}/>
                    <CircularProgressBar percentage={80} name={"NextJs"}/>
                    <CircularProgressBar percentage={90} name={"HTML CSS"}/>
                    <CircularProgressBar percentage={90} name={"Python"}/>
                    <CircularProgressBar percentage={100} name={"PHP"}/>
                    <CircularProgressBar percentage={90} name={"Symfony"}/>
                    <CircularProgressBar percentage={90} name={"C"}/>
                </HStack>
                <p className={"mt-4 font-semibold"}>
                    Devops
                </p>
                <HStack className={"mt-4 items-start justify-start flex-wrap"}>
                    <CircularProgressBar percentage={100} name={"CI / CD"}/>
                    <CircularProgressBar percentage={100} name={"Git"}/>
                    <CircularProgressBar percentage={60} name={"Terraform"}/>
                    <CircularProgressBar percentage={60} name={"Ansible"}/>
                    <CircularProgressBar percentage={80} name={"GCP"}/>
                    <CircularProgressBar percentage={100} name={"Docker"}/>
                    <CircularProgressBar percentage={70} name={"Swarm / K3S"}/>
                </HStack>
                <p className={"mt-4 font-semibold"}>
                    Databases
                </p>
                <HStack className={"mt-4 items-start"}>
                    <CircularProgressBar percentage={100} name={"PGSQL"}/>
                    <CircularProgressBar percentage={100} name={"MYSQL"}/>
                    <CircularProgressBar percentage={100} name={"MongoDB"}/>
                </HStack>
            </VStack>
        </LineSection>
    )
}


function OrbitingTechIcons({className}) {
    const [isMd, setIsMd] = useState(false)
    const [isLg, setIsLg] = useState(false)


    useEffect(() => {
        setIsMd(window.screen.width > 768)
        setIsLg(window.screen.width > 1024)
        const updateState = () => {
            setIsMd(window.screen.width > 768)
            setIsLg(window.screen.width > 1024)
        }
        window.addEventListener("resize", updateState);

        return () => window.removeEventListener("resize", updateState)

    }, [window.screen.width])

    return (
        <div
            className={cn("relative flex h-[290px] md:h-[450px] lg:h-[500px] w-full flex-col items-center justify-center", className)}>
      <span
          className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Stack
      </span>

            {innerCircleIcons.map((icon, index) => (
                <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={20}
                    delay={20 / innerCircleIcons.length * index}
                    radius={isLg ? 80: isMd ? 56: 50}
                    key={index}
                >
                    <Image src={icon} alt={"tech icon"}/>
                </OrbitingCircles>
            ))}

            {outerCircleIcons.map((icon, index) => (
                <OrbitingCircles
                    className="size-[50px] border-none bg-transparent"
                    duration={20}
                    delay={20 / outerCircleIcons.length * index}
                    radius={isLg ? 190 : isMd ? 145 : 105}
                    key={index}
                >
                    <Image src={icon} alt={"tech icon"}/>
                </OrbitingCircles>
            ))}
        </div>
    );
}
