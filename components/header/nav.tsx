"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Routes {
    href: string;
    label: string;
    active: boolean;
}

export default function Nav({ ...props }: HTMLAttributes<HTMLAnchorElement>) {
    const pathname = usePathname();

    const routes: Routes[] = [
        {
            href: `/`,
            label: "Overview",
            active: pathname === `/`,
        },
        {
            href: `/projects`,
            label: "Projects",
            active: pathname === `/projects`,
        }
    ];

    return (
        <div className="flex items-center gap-4">
            {routes.map((route) => (
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
            ))}
        </div>
    );
};