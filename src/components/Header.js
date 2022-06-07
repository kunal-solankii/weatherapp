/* This example requires Tailwind CSS v2.0+ */

export default function Header() {
    return (
        <div className="bg-indigo-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center flex-wrap">
                    <div className="flex items-center text-xl text-white hover:text-2xl font-sans ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 input-box" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                        </svg>
                        Weather App
                    </div>
                </div>
            </div>
        </div>
    )
}
