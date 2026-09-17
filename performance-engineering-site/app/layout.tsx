import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Performance Engineering",description:"Performance engineering for computational software."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
