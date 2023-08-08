import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";


const metadata = {
    title: "Bindle",
    description : "A Next.js 13 Meta Threads Application"
}

export default function RootLayout({ children }: {children:React.ReactNode}){
    return (
        <ClerkProvider>
            
        </ClerkProvider>
    )
}