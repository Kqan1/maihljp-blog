import MaxWidthWrapper from "@/components/maxwidthwrapper";
import Nav from "@/components/header/nav";
import { ThemeToggle } from "@/components/theme-toggle";
// import { cn } from "@/lib/utils";
// import { fontJapan } from "@/utils/fonts";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center h-16 py-2 border-b-2 border-zinc-700/60">
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
                <div className="">
                    <ThemeToggle />
                </div>
            </MaxWidthWrapper>
        </header>
    );
};