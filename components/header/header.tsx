import MaxWidthWrapper from "@/components/maxwidthwrapper";
import Nav from "@/components/header/nav";
import { ThemeToggle } from "@/components/theme-toggle";
// import { cn } from "@/lib/utils";
// import { fontJapan } from "@/utils/fonts";
import Image from "next/image";
import { HeaderDropdown } from "@/components/header/header-dropdown";

export default function Header() {
    return (
        <header className="flex items-center sticky top-0 h-16 py-2 dark:backdrop-blur-lg backdrop-blur-sm bg-white/60 dark:bg-transparent border-b-2 border-zinc-200/60 dark:border-zinc-700/40">
            <MaxWidthWrapper className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative flex items-center size-14">
                        <Image 
                            src="/logo.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    {/* <h1 className={cn("font-japan text-nowrap text-xl", fontJapan.variable)}>MAİHL JAPONCA</h1> */}
                    <Nav />
                </div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <HeaderDropdown />
                </div>
            </MaxWidthWrapper>
        </header>
    );
};