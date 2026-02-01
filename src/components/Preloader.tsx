import { useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                {/* Zenjourney Logo Text */}
                <div className="mb-8 animate-fade-in">
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-2">
                        Zenjourney
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base tracking-wide mb-6">
                        Balance Your Time, Elevate Your Life
                    </p>

                    {/* Copyright and Business Info */}
                    <div className="space-y-2 text-muted-foreground/80 text-xs md:text-sm">
                        <p className="font-medium">© 2026 ZENJOURNEY. ALL RIGHTS RESERVED.</p>
                        <p className="leading-relaxed">
                            Powered by Custom SaaS Solutions & Business Consultant developed by ZENJOURNEY.{" "}
                            <a
                                href="https://zenjourney.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline transition-colors font-medium"
                            >
                                Visit ZENJOURNEY.IN
                            </a>
                            {" "}or call{" "}
                            <a
                                href="tel:+919092406569"
                                className="text-primary hover:underline transition-colors font-medium"
                            >
                                9092406569
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* Loading Spinner */}
                <div className="flex justify-center">
                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
