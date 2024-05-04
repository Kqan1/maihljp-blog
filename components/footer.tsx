import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/siteConfig";
import { Instagram, LucideIcon, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center py-2 gap-4 divide-x divide-zinc-700/60">
            <span className="">
                &copy; MAİHLJP 2024 - {new Date().getFullYear()}
            </span>
            <span className="pl-4">
                Made by {" "}
                <Link 
                    href={siteConfig.links.github}
                    target="_blank"
                    className="text-lg font-semibold hover:text-red-700 transition-colors duration-100"
                >
                    Kqan
                </Link>
            </span>
            <div className="flex gap-4 pl-4">
                <FooterLink Icon={Youtube} href={siteConfig.links.youtube} />
                <FooterLink Icon={Instagram} href={siteConfig.links.instagram} />
                <FooterLink Icon={Twitter} href={siteConfig.links.twitter} />
            </div>
        </footer>
    );
};

function FooterLink({ Icon, href, className }: { Icon: LucideIcon; href: string; className?: string; }) {
    return (
        <Link href={href} target="_blank">
            <Icon className={cn("hover:stroke-red-700 transition-all hover:scale-125", className)} />
        </Link>
    );
};