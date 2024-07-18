"use client"
import {LineSection} from "@/components/ui/line-section";
import {VStack} from "@/components/ui/v-stack";
import {Button} from "@/components/ui/button";
import {useState} from "react";

const discordWebhook = "https://discord.com/api/webhooks/1263124178916347974/jHoBe1W_6NDeUBEasQ4t2F7B22huZoqfwGy33zSfQWeKw0kwEeakTbPkhdPXnDH3DO_o"
export function Contact({className}) {
    const [isSent, setIsSent] = useState(null)

    const  submitMessage = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const subject = e.target.subject.value
        const description = e.target.message.value

        const res = await fetch(discordWebhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "content": `Nouveau message de: ${email}`,
                "embeds": [
                    {
                        "title": subject,
                        "description": description,
                        "color": 5814783
                    }
                ],
                "attachments": []
            })
        })

        if (res.ok) {
            setIsSent(true)
            e.target.reset()
        } else {
            setIsSent(false)
        }
    }

    return (
        <LineSection
            title={"Get in touch"}
            id={"contact"}
        >
            <VStack className={"items-start w-full"}>
                <h3 className={"mb-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"}>
                    Want to talk about your project ? Reach me via the form or <a href={"https://www.linkedin.com/in/plebs/"} className={"text-primary font"}>LinkedIn</a> !
                </h3>
                <VStack className=" px-4 -md w-full">
                    <form onSubmit={submitMessage} className="space-y-8  w-full">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                email</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="name@flowbite.com" required/>
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                message</label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Leave a comment..."></textarea>
                        </div>
                        <Button type={"submit"}>{isSent === null ?
                            "Send message" :
                            isSent ? "Message sent !" : "An error occured"
                        }</Button>
                    </form>
                </VStack>
            </VStack>
        </LineSection>
    )
}