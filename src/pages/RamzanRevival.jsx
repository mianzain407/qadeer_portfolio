import { Calendar, Clock, Globe, BookOpen, Brain, Zap, Heart, Users, Target, CheckCircle2 } from 'lucide-react';

export default function RamzanRevival() {
    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Hero Section */}
            <div className="relative w-full aspect-[21/9] min-h-[400px] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-white/90 dark:bg-black/60 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center space-y-4 max-w-4xl">
                    <h1 className="text-primary font-bold uppercase tracking-[0.2em] text-2xl sm:text-3xl md:text-5xl animate-in fade-in slide-in-from-top-4 duration-700">
                        🌙 RAMZAN: REBUILDING FAITH, MIND & PURPOSE
                    </h1>
                    <p className="text-foreground dark:text-white text-lg md:text-xl font-medium tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        A 30-Day Intellectual, Spiritual & Behavioral Transformation Program
                    </p>
                    <div className="pt-6 animate-in fade-in zoom-in duration-700 delay-500">
                        <a
                            href="https://wa.me/923224426531?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20register%20for%20the%20Ramzan%20Revival%20Program."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)] text-center flex items-center justify-center"
                        >
                            Join the Transformation
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 md:px-8 space-y-32">

                {/* Intro Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase border-l-4 border-primary pl-6">
                                Why This Ramzan Course is Different
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Ramzan is not merely about hunger and rituals. It is a divinely designed behavioral reprogramming system — targeting the human brain, psychology, habits, social behavior, and worldview.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "A biological reset", icon: <Zap className="w-5 h-5" /> },
                                { title: "A neuroscientific discipline", icon: <Brain className="w-5 h-5" /> },
                                { title: "A psychological restructuring", icon: <Heart className="w-5 h-5" /> },
                                { title: "A social and civilizational training", icon: <Globe className="w-5 h-5" /> },
                                { title: "A Quran-centered ideological revival", icon: <BookOpen className="w-5 h-5" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-primary/10 hover:border-primary/30 transition-colors group">
                                    <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="font-semibold text-lg">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-primary font-bold text-lg italic border-t border-primary/20 pt-6">
                            "This is not a motivational talk series. This is a systematic 30-day transformation model rooted in Islam, science, psychology, and rational thought."
                        </p>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden border border-primary/20 shadow-2xl relative group">
                            <img
                                src="/images/ramzan.jpeg"
                                alt="Ramzan Spiritual Growth"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-white font-bold text-2xl uppercase tracking-wider">Scientific Fasting</h3>
                                <p className="text-white/80 mt-2">Precision-based biological and psychological training.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Questions Section */}
                <section className="bg-accent/5 rounded-3xl p-8 md:p-16 border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Brain className="w-64 h-64 text-primary" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Questions This Course <span className="text-primary">Answers</span></h2>
                        </div>
                        <div className="grid gap-6">
                            {[
                                "Why does Allah command fasting for 30 consecutive days?",
                                "What happens to the brain, hormones, and nervous system during fasting?",
                                "How does fasting rewire self-control, impulse regulation, and habits?",
                                "Why is Ramzan timed exactly the way it is — medically and psychologically?",
                                "How does Ramzan restructure individual and collective Muslim behavior?",
                                "Why is Laylat-ul-Qadr placed strategically in the final phase?",
                                "How do Salah, Quran, Zikr, and discipline integrate into one system?"
                            ].map((q, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1.5 flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-xs ring-4 ring-primary/10">
                                            ?
                                        </div>
                                    </div>
                                    <p className="text-lg text-muted-foreground font-medium">{q}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Pillars */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Biology & Neuroscience */}
                    <div className="bg-card p-10 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all group">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                            <Brain className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary uppercase mb-6">Biology & Neuroscience</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>Explaining fasting through modern metabolic science, neuroscience of self-control, and dopamine regulation.</p>
                            <ul className="space-y-2">
                                <li className="flex gap-2"><span>•</span> Neuroscientific discipline</li>
                                <li className="flex gap-2"><span>•</span> Hormonal balance & cognitive clarity</li>
                                <li className="flex gap-2"><span>•</span> Biological detox + neural discipline</li>
                            </ul>
                        </div>
                    </div>

                    {/* Psychology & Social Science */}
                    <div className="bg-black/30 backdrop-blur p-10 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all group">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary uppercase mb-6">Psychology & Behavior</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>How Ramzan molds personality, reconstructs character, and produces leadership qualities through social training.</p>
                            <ul className="space-y-2">
                                <li className="flex gap-2"><span>•</span> Resets desire-driven habits</li>
                                <li className="flex gap-2"><span>•</span> Builds delayed gratification</li>
                                <li className="flex gap-2"><span>•</span> Strengthens emotional regulation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* The 30-Day Structure */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase">The <span className="text-primary">30-Day</span> Structure</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">Ramzan is a training camp, not a temporary ritual.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
                        {[
                            { phase: "Phase 1", title: "Reconditioning", desc: "Setting the biological and psychological stage for deep change." },
                            { phase: "Phase 2", title: "Internalization", desc: "Diving deep into the spiritual and behavioral transformation." },
                            { phase: "Phase 3", title: "Stabilization", desc: "Solidifying new habits and preparing for life after Ramzan." }
                        ].map((p, i) => (
                            <div key={i} className={`p-10 text-center space-y-4 ${i !== 2 ? 'md:border-r border-primary/20' : ''} bg-card hover:bg-primary/5 transition-colors`}>
                                <div className="text-primary font-bold text-sm tracking-widest uppercase">{p.phase}</div>
                                <h4 className="text-2xl font-bold">{p.title}</h4>
                                <p className="text-muted-foreground text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practical Mindset Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="/images/ramzan1.jpeg" alt="Conscious Living" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase border-l-4 border-primary pl-6">Daily Life Design</h2>
                            <p className="text-muted-foreground text-lg">You won’t just fast — you’ll live Ramzan consciously with practical daily mindset guidelines.</p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: "Philosophy of Ibadat", desc: "Reconstructing understanding of Salah, Quran, Dua, and Zikr as tools for discipline and mental alignment." },
                                { title: "Special Events Reconstructed", desc: "The psychology of Night Worship and the strategic placement of Laylat-ul-Qadr." },
                                { title: "Life After Ramzan", desc: "Transforming temporary spirituality into permanent directional change for your life." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-xl font-bold text-white flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                        {item.title}
                                    </h4>
                                    <p className="text-muted-foreground ml-9">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call To Action / Course Details */}
                <section id="register" className="relative p-8 md:p-20 rounded-[3rem] bg-primary text-black overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                        <Target className="w-96 h-96" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">Join the<br />Revival Program</h2>
                                <p className="text-xl font-bold opacity-80 uppercase tracking-widest">Rebuild Your Faith, Mind & Purpose</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-black/5 p-6 rounded-2xl">
                                    <h4 className="font-black text-sm uppercase tracking-wider mb-2">Duration</h4>
                                    <p className="text-2xl font-bold">30 Days</p>
                                </div>
                                <div className="bg-black/5 p-6 rounded-2xl">
                                    <h4 className="font-black text-sm uppercase tracking-wider mb-2">Mode</h4>
                                    <p className="text-2xl font-bold">Live Online (Zoom)</p>
                                </div>
                                <div className="bg-black/5 p-6 rounded-2xl">
                                    <h4 className="font-black text-sm uppercase tracking-wider mb-2">Language</h4>
                                    <p className="text-2xl font-bold">Urdu / English</p>
                                </div>
                                <div className="bg-black/5 p-6 rounded-2xl">
                                    <h4 className="font-black text-sm uppercase tracking-wider mb-2">Fee</h4>
                                    <p className="text-2xl font-bold">Rs. 2,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-8 border border-white/10">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary uppercase">Commitment-Based Refund</h3>
                                <p className="text-white/60">
                                    <span className="text-white font-bold">100% refund</span> for participants who:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary">✓</div>
                                        <span>Attend the complete program</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary">✓</div>
                                        <span>Remain consistent and engaged</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-white/40 pt-4 border-t border-white/10">
                                    This ensures seriousness, sincerity, and discipline.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary uppercase">Certification</h3>
                                <p className="text-white/60">Digital Certificate of Completion provided upon finishing the course.</p>
                            </div>

                            <a
                                href="https://wa.me/923224426531?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20register%20for%20the%20Ramzan%20Revival%20Program."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-primary hover:bg-white text-black font-black py-4 rounded-xl text-lg transition-all active:scale-95 shadow-lg uppercase tracking-widest"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Final Vision */}
                <section className="text-center space-y-8 max-w-4xl mx-auto pb-20">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase italic">"This is not just Ramzan preparation — <br /><span className="text-primary">it is life preparation.</span>"</h2>
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        <div className="w-2 h-2 rounded-full bg-primary/30" />
                    </div>
                </section>
            </div>
        </div>
    );
}
