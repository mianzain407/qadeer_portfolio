import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[80vh] items-center justify-center bg-background text-foreground overflow-hidden">
                {/* Background placeholder - normally this would be a hero image */}
                <div className="absolute inset-0 bg-background z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-15 opactiy-90" />
                    {/* Placeholder for Hero Image - If used as background */}
                    <img src="/images/home-hero.png" alt="Dr. Abdul Qadeer Hero" className="w-full h-full object-cover opacity-100" />
                </div>

                <div className="container relative z-20 flex flex-col items-center px-4 md:px-8 text-center ring-offset-background">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-7xl text-primary drop-shadow-sm">
                        Dr. Abdul Qadeer
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-2xl">
                        Physiotherapist, Educator, Islamic Scholar, Intellectual and Poet.
                        Inspiring minds and uniting Muslim intellect across disciplines for a higher purpose.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Link
                            to="/about"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="grid gap-12 md:grid-cols-3">
                        {[
                            {
                                title: "Expert Physiotherapist",
                                description: "Professional physiotherapy practice grounded in modern medical science."
                            },
                            {
                                title: "Islamic Speaker",
                                description: "Presenting Islam in a clear, rational, and relevant manner for the modern mind."
                            },
                            {
                                title: "Educator & Poet",
                                description: "Teaching with a focus on clarity, purpose, and critical thinking"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-start space-y-4 rounded-xl border bg-card text-card-foreground p-8 hover:shadow-lg transition-all hover:border-primary/50 cursor-default">
                                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
