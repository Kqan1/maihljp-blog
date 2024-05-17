"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useSession } from "next-auth/react";

interface Routes {
    href: string;
    label: string;
    active: boolean;
    cancel?: boolean;
}

export default function Nav({ ...props }: HTMLAttributes<HTMLAnchorElement>) {
    const pathname = usePathname();
    const Session = useSession();

    const routes: Routes[] = [
        {
            href: "/",
            label: "Ev",
            active: pathname === "/",
        },
        {
            href: "/follows",
            label: "Takip Ettiklerim",
            active: pathname === "/follows",
        },
        {
            href: "/accound/posts",
            label: "Gönderilerim",
            active: pathname === "/follows",
        },
        {
            href: `/account/${Session.data?.user?.id}`,
            label: "Hesabım",
            active: pathname === `/account/${Session.data?.user?.id}`,
            cancel: !Session.data?.user,
        }
    ];

    return (
        <div className="flex items-center gap-4">
            {routes.map((route, index) => (
                <Fragment key={route.href}>
                    {!route.cancel && (
                        <Link
                            href={route.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                            )}
                            {...props}
                        >
                            {route.label}
                        </Link>
                    )}
                </Fragment>
            ))}
        </div>
    );
};
