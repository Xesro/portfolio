export function Footer() {
    return (
        <footer className="rounded-lg shadow  m-4 w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:justify-between">
                    <a href="#home"
                       className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logo_portfolio.png" className="h-8" alt="Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Arthur</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#tech-stack" className="hover:underline me-4 md:me-6">Stack</a>
                        </li>
                        <li>
                            <a href="#experiences" className="hover:underline me-4 md:me-6">Experiences</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>


    )
}