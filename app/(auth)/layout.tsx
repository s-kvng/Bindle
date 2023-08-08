import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";


const metadata = {
    title: "Bindle",
    description : "A Next.js 13 Meta Threads Application"
}

//font
const inter = Inter({subsets : ["latin"]});

export default function RootLayout({ children }: {children:React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}