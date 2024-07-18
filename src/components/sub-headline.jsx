import TypingAnimation from "@/components/magicui/typing-animation";

export async function SubHeadLine() {
    return (
        <TypingAnimation
            className="font-normal text-left text-md text-gray-300 mt-4"
            text="MVP - SaaS - API - Website"
            duration={150}
        />
    );
}
