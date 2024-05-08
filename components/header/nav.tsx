"use client";
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
            label: "Home",
            active: pathname === "/",
        },
        {
            href: `/accound/${Session.data?.user?.id}`,
            label: "My Accound",
            active: pathname === `/accound/${Session.data?.user?.id}`,
            cancel: Session.data?.user ? false : true,
        }
    ];

    return (
        <div className="flex items-center gap-4">
            {routes.map((route) => (
                <>
                {route.cancel ? null : 
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            'text-sm font-medium transition-colors hover:text-primary',
                            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                        )}
                        {...props}
                    >
                        {route.label}
                    </Link>
                    }
                </>
            ))}
        </div>
    );
};