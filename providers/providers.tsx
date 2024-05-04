import NextThemesProvider from "@/providers/next-themes-provider";
import NextAuthProvider from "@/providers/next-auth-provider";
import ToasterProvider from "@/providers/toaster";

export default function Providers({ children, ...props }: { children: React.ReactNode; }) {
    return (
        <>
            <NextThemesProvider>
                <NextAuthProvider>
                    <ToasterProvider />
                    { children }
                </NextAuthProvider>
            </NextThemesProvider>
        </>
    );
};