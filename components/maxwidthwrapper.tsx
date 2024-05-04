import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function MaxWidthWrapper({ children, className }: Props) {
    return (
        <div className={cn(className, "mx-auto w-full max-w-screen-2xl px-6 md:px-20")}>
            { children }
        </div>
    );
}