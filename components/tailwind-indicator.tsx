export function TailwindIndicator() {
    if (process.env.NODE_ENV === "production") return null;

    return (
        <>
            <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full bg-zinc-800 p-3 font-mono text-xs text-white">
                <div className="block sm:!hidden">xs</div>
                <div className="hidden sm:block md:hidden">sm</div>
                <div className="hidden md:block lg:hidden">md</div>
                <div className="hidden lg:block xl:hidden">lg</div>
                <div className="hidden xl:block 2xl:hidden">xl</div>
                <div className="hidden 2xl:block">2xl</div>
            </div>
            {/* <p className="fixed bottom-2 left-1/2 -translate-x-1/2 text-accent-foreground">This is website is under development. Do not shows the last product.</p> */}
        </>
    );
};