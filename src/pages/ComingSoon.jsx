import { Link } from 'react-router-dom';
import { Hammer, Home, ArrowRight } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className="bg-background min-h-[80vh] flex flex-col items-center justify-center px-4 selection:bg-primary selection:text-primary-foreground">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                    <Hammer className="w-20 h-20 text-primary mx-auto animate-bounce relative z-10" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">
                        Under <span className="text-primary italic">Development</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                        We are currently crafting a premium intellectual experience for this program. Stay tuned for something extraordinary.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 border border-primary/20 hover:border-primary/50 text-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all hover:bg-primary/5"
                    >
                        Inquire Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="pt-12 flex justify-center gap-4 text-primary/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
            </div>
        </div>
    );
}
