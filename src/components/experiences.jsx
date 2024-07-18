import {LineSection} from "@/components/ui/line-section";
import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid";
import { Droplet, Book, Truck, Video} from "lucide-react";
import Image from "next/image";
import {cn} from "@/lib/utils";


const experiences = [
    {
        Icon: Truck,
        name: "Ownest",
        description: "Responsible for the evolution of the NFT platform API",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Image
                src={'/ownest_bg.png'}
                alt={"lilo"}
                width={0}
                height={0}
                style={{width: "100%", height: "auto"}}
                   sizes="100vw"/>
        ),
        content: (
            <ul className={"list-disc"}>
                <li>Lead the developement of the NFT platform API built on Nestjs and MongoDB.</li>
                <li>Maintain CI/CD pipelines</li>
                <li>Security reviews</li>
                <li>Evolution of GCP infrastructure</li>
                <li>Smart contracts development & blockchain interactions</li>
            </ul>
        )
    },
    {
        Icon: Book,
        name: "Learnz",
        description: "Co-founder of the learning platform powered by AI",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Image
                src={'/learnz_bg.jpeg'}
                alt={"lilo"}
                width={0}
                height={0}
                style={{width: "100%", height: "auto"}}
                sizes="100vw"/>
        ),
        content: (
            <ul className={"list-disc"}>
                <li>R&D on closed and open source LLM models to optimise results and costs</li>
                <li>Build and maintain the whole infrastructure orchestrated with Docker Swarm</li>
                <li>Business development</li>
            </ul>
        )
    },
    {
        Icon: Video,
        name: "Tiktools",
        description: "Co-founder of an automation tool for social media content creators",
        className: "col-span-3 lg:col-span-1",
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
            </ul>
        )
    },
    {
        Icon: Droplet,
        name: "Lilo",
        description: "Use the calendar to filter your files by date.",
        className: "col-span-3 lg:col-span-2",
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