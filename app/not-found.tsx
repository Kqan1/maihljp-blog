import "@/styles/sakura-rain.css";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-[calc(100dvh-6.75rem)]">
            <div className="sakura pointer-events-none">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="flex flex-col items-center justify-end h-1/3 w-full">
                <h2 className="text-9xl font-mono mutuş">404</h2>
                <p className="">Arama Sonucu Bulunamadı.</p>
                <Link href="/" className="pt-2">Ana Menüye dönmek için tıkla &#x2794;</Link>
            </div>
        </div>
    );
};