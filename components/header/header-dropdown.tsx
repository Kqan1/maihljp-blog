"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { type Session } from "next-auth";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    LucideIcon,
    LogOut,
    User,
    BookMarked,
    LifeBuoy,
    Ambulance,
    Settings
} from "lucide-react";

export function HeaderDropdown() {
    const { data: Session, status } = useSession();

    switch (status) {
        case "authenticated":
            return <Authenticated Session={Session} />;
        case "unauthenticated":
            return <UnAuthenticated />;
        case "loading":
            return <Loading />;
        default:
            return <small className="red-text-500">Error...</small>
    };
};

interface DropdownMenuLinkProps {
    Icon: LucideIcon;
    text: string;
    href: string;
};

function DropdownMenuLink({ Icon, text, href }: DropdownMenuLinkProps) {
    return (
        <Link href={href}>
            <DropdownMenuItem>
                <Icon className="mr-2 h-4 w-4" />
                <span>{text}</span>
            </DropdownMenuItem>
        </Link>
    );
};

function Authenticated({ Session }: { Session: Session }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
                <>
                    <Image
                        src={Session?.user?.image ?? "/pp/default.svg"}
                        alt={`${Session?.user?.username}'nin fotoğrafı`}
                        width={36}
                        height={36}
                    />
                    <p className="text-sm">{Session.user?.username}</p>
                </>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{Session.user?.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLink 
                        Icon={User}
                        text="Hesabım"
                        href={`/accound/${Session?.user?.id}`}
                    />
                    <DropdownMenuLink 
                        Icon={BookMarked}
                        text="Kaydedilenlerim"
                        href="bookmarks"
                    />
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLink 
                        Icon={LifeBuoy}
                        text="SSS"
                        href="SSS"
                    />
                    <DropdownMenuLink 
                        Icon={Ambulance}
                        text="Yardım"
                        href="help"
                    />
                    <DropdownMenuLink 
                        Icon={Settings}
                        text="Ayarlar"
                        href="settings"
                    />
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

function UnAuthenticated() {
    return (
        <Button onClick={() => signIn()}>Giriş Yap</Button>
    );
};

function Loading() {
    return (
        <div className="flex items-center gap-2">
            <Skeleton className="size-9 rounded-full" />
            <Skeleton className="h-4 w-24" />
        </div>
    );
};