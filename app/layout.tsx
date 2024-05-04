import "./globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/siteConfig"
import { fontSans } from "@/utils/fonts"
import { cn } from "@/lib/utils"
import Providers from "@/providers/providers"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import MaxWidthWrapper from "@/components/maxwidthwrapper"

export const metadata: Metadata = {
    title: {
        default: siteConfig.metadata.title,
        template: `%s | ${siteConfig.metadata.title}`,
    },
	description: siteConfig.metadata.description,
	applicationName: siteConfig.metadata.applicationName,
	authors: [{ name: siteConfig.metadata.author, url: siteConfig.links.github }],
	keywords: siteConfig.metadata.keywords,
	category: siteConfig.metadata.category,
	generator: siteConfig.metadata.generator,
	icons: siteConfig.metadata.icons,
};

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body className={cn("relative h-full font-sans antialiased", fontSans.variable)}>
                <main className="relative flex min-h-screen flex-col">
                    <Providers>
                        <Header />
                            <MaxWidthWrapper className="flex-1 grow">
                                {children}
                            </MaxWidthWrapper>
                        <Footer />
                        <TailwindIndicator />
                    </Providers>
                </main>
            </body>
        </html>
    );
};