"use client"

import {LineSection} from "@/components/ui/line-section";
import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid";
import { Droplet, Book, Truck, Video, CloudCog} from "lucide-react";
import Image from "next/image";
import {cn} from "@/lib/utils";


const experiences = [
    {
        Icon: CloudCog,
        name: "Arrow Sphere - Freelance Cloud Engineer on AWS",
        description: "Migrating a Laravel monolith to a serverless architecture for scalability purposes",
        className: "col-span-5 lg:col-span-3",
        background: (
            <Image
                src={'/arrow_bg.webp'}
                alt={"arrow"}
                width={0}
                height={0}
                style={{width: "100%", height: "auto"}}
                sizes="100vw"/>
        ),
        content: (
            <ul className={"list-disc"}>
                <li>Reimplement key features using AWS lambda, Event Bridge and Step function</li>
                <li>Audit legacy monolith to implement features seamlessly</li>
                <li>Continuous deployement with Jenkins and Cloud Formation</li>
                <li>Unit test</li>
            </ul>
        )
    },
    {
        Icon: Truck,
        name: "Ownest - Freelance Blockchain Engineer",
        description: "Responsible for the evolution of the NFT platform API",
        className: "col-span-5 lg:col-span-2",
        background: (
            <Image
                src={'/ownest_bg.png'}
                alt={"ownest"}
                width={0}
                height={0}
                style={{width: "100%", height: "auto"}}
                   sizes="100vw"/>
        ),
        content: (
            <ul className={"list-disc"}>
                <li>Lead the developement of the NFT platform API built on Nestjs and MongoDB.</li>
                <li>Smart contracts development & blockchain interactions</li>
                <li>Maintain CI/CD pipelines</li>
                <li>Security reviews</li>
                <li>Evolution of GCP infrastructure</li>
            </ul>
        )
    },
    {
        Icon: Video,
        name: "Tiktools - Co-founder - Sold",
        description: "Automation tool for social media content creators",
        className: "col-span-5 lg:col-span-2",
        background: (
            <Image
                src={'/tiktools_bg.png'}
                alt={"lilo"}
                width={0}
                height={0}
                style={{width: "100%", height: "auto"}}
                sizes="100vw"/>
        ),
        content: (
            <ul className={"list-disc"}>
                <li>Business development</li>
                <li>Build an application that can handle video creation workloads and IA process using Python for workers ans Nestjs app for the main backend</li>
                <li>Ci/CD pipeline</li>
                <li>Manage a Docker Swarm infrastructure hosted a VPS</li>
            </ul>
        )
    },
    {
        Icon: Droplet,
        name: "Lilo - Backend engineer",
        description: "Socially responsible Search Engine",
        className: "col-span-5 lg:col-span-3",
        background: (
            <Image
                src={'/lilo_bg.png'}
                alt={"lilo"}
                width={0}
                height={0}
                style={{width: "100%", height: "auto"}}
                sizes="100vw"
            />
        ),
        content: (
            <ul className={"list-disc"}>
                <li>Integrate new features into the API built with Symfony</li>
                <li>Architect a monitoring system</li>
                <li>Develop an anti-bot system</li>
                <li>Ensure test coverage</li>
            </ul>
        )
    },
]

export function Experiences({className}) {
    return (
        <LineSection
            title={"Experiences"}
            className={cn( className)}
            id={"experiences"}
        >
            <BentoGrid>
                {experiences.map((experience, idx) => (
                    <BentoCard key={idx} {...experience} />
                ))}
            </BentoGrid>
        </LineSection>
    )
}