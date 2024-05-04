import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    preload: true,
});

export const fontJapan = localFont({
    src: [{
            path: "../fonts/NikkyouSans-mLKax.ttf",
            weight: "700",
        }],
    variable: "--font-japan",
});