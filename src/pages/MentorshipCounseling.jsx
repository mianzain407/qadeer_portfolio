import { Brain, Target, Award, Clock, IndianRupee, CheckCircle2, Heart, Shield, MessageSquare, Zap, UserPlus, BookOpen } from 'lucide-react';

export default function MentorshipCounseling() {
    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Hero Section */}
            <div className="relative w-full aspect-[21/9] min-h-[400px] bg-[url('/images/mentorship-hero.jpg')] bg-cover bg-center flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-white/90 dark:bg-black/70 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center space-y-4 max-w-4xl">
                    <h1 className="text-primary font-bold uppercase tracking-[0.2em] text-2xl sm:text-3xl md:text-5xl animate-in fade-in slide-in-from-top-4 duration-700">
                        🧭 MENTORSHIP & COUNSELING PROGRAMS
                    </h1>
                    <p className="text-foreground dark:text-white text-lg md:text-xl font-medium tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 uppercase">
                        Clarity of Thought | Purposeful Direction | Intellectual & Personal Growth
                    </p>
                    <div className="pt-6 animate-in fade-in zoom-in duration-700 delay-500">
                        <a
                            href="https://wa.me/923224426531?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20Mentorship%20or%20Counseling%20Appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)] inline-flex items-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Counseling Session
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 md:px-8 space-y-32">

                {/* Overview Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase border-l-4 border-primary pl-6">
                                Overview
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Mentorship and counseling are not about giving instant solutions — they are about helping individuals think clearly, realign their purpose, and make informed decisions.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg pt-2">
                                Through structured dialogue, intellectual clarity, and ethical guidance, these sessions aim to address personal confusion, academic pressure, career uncertainty, faith-related questions, and psychological stress.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg pt-2 italic">
                                With over 6–7 years of experience in mentoring students, professionals, and young minds, this platform offers one-on-one online counseling and mentorship sessions rooted in psychology, education, life experience, and Islamic intellectual thought.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl relative group">
                            <img
                                src="/images/mn1.jpeg"
                                alt="Mentorship & Counseling"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </section>

                {/* Mode of Counseling */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase">Mode of <span className="text-primary">Counseling</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">A secure and focused environment for profound change.</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card p-10 rounded-3xl border border-primary/10 hover:border-primary/40 transition-all group flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-24 h-24 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-all">
                                <Shield className="w-12 h-12" />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary uppercase">One-on-One Online Counseling Session</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Conducted via secure online platform",
                                        "Private, focused, and confidential",
                                        "Interactive dialogue-based session",
                                        "Structured guidance with practical direction"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm italic text-muted-foreground pt-4 border-t border-primary/10">
                                    📌 Online counseling is currently the primary mode to ensure accessibility, focus, and consistency.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consultation Duration & Fee */}
                <section className="bg-accent/5 rounded-[3rem] p-8 md:p-16 border border-primary/10 relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase">Session Details <span className="text-primary">& Fee</span></h2>
                            <div className="flex items-center gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Clock className="w-6 h-6" />
                                        <span className="font-bold uppercase tracking-widest text-sm">Duration</span>
                                    </div>
                                    <div className="text-4xl font-black">60 Minutes</div>
                                </div>
                                <div className="w-px h-16 bg-primary/20 hidden sm:block" />
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary">
                                        <IndianRupee className="w-6 h-6" />
                                        <span className="font-bold uppercase tracking-widest text-sm">Fee</span>
                                    </div>
                                    <div className="text-4xl font-black">PKR 5,000</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 bg-background/50 p-8 rounded-2xl border border-primary/5">
                            <p className="text-muted-foreground leading-relaxed">
                                The fee reflects the depth of discussion, experience, preparation, and personalized intellectual engagement provided during the session.
                            </p>
                            <div className="flex items-center gap-4 text-primary font-bold italic">
                                <Zap className="w-5 h-5" />
                                <span>Personalized intellectual engagement at every step.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas of Counseling */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase">Areas of <span className="text-primary">Counseling & Mentorship</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">Comprehensive guidance for the various challenges of life.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Personal & Life", items: ["Personal clarity & life direction", "Confidence building & self-development", "Ethical decision-making & life planning"] },
                            { title: "Academic & Career", items: ["Academic stress & student mentorship", "Career guidance (Medical, Science & Allied Fields)", "Youth guidance & intellectual grooming"] },
                            { title: "Intellectual & Spiritual", items: ["Faith-related questions & intellectual doubts", "Identity, purpose & worldview alignment", "Clarifying Ideological patterns"] },
                            { title: "Psychological & Emotional", items: ["Psychological stress & emotional regulation", "Addressing burnout & confusion", "Rational, non-judgmental dialogue"] }
                        ].map((category, i) => (
                            <div key={i} className="bg-card/50 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all group">
                                <h4 className="text-xl font-bold text-primary uppercase mb-6 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    {category.title}
                                </h4>
                                <ul className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="text-muted-foreground flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Counseling Approach */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="/images/mn2.jpeg" alt="Counseling Approach" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase border-l-4 border-primary pl-6">Counseling Approach</h2>
                            <p className="text-muted-foreground text-lg">A structured yet flexible movement towards clarity and empowerment.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Understanding", desc: "Understanding the individual’s concern and background" },
                                { title: "Identification", desc: "Identifying underlying cognitive, emotional, or ideological patterns" },
                                { title: "Clarification", desc: "Clarifying confusion through rational dialogue" },
                                { title: "Perspective", desc: "Providing perspective grounded in psychology, experience, and ethics" },
                                { title: "Practicality", desc: "Offering practical steps for growth and improvement" }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="text-primary font-black text-4xl opacity-20">0{i + 1}</div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">{step.title}</h4>
                                        <p className="text-muted-foreground">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-primary font-bold uppercase tracking-widest text-sm text-center p-4 border border-primary/20 rounded-xl">
                            The goal is clarity, not dependency — empowerment, not emotional reliance.
                        </p>
                    </div>
                </section>

                {/* Why Book & Who Should Consider */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <section className="bg-card p-10 rounded-3xl border border-primary/10">
                        <h3 className="text-2xl font-bold text-primary uppercase mb-8 flex items-center gap-3">
                            <Award className="w-6 h-6" />
                            Why Book a Session?
                        </h3>
                        <div className="space-y-4">
                            {[
                                "6–7 years of real mentoring and counseling experience",
                                "Background in healthcare, psychology, education, and Islamic thought",
                                "Rational, calm, and non-judgmental guidance",
                                "Intellectual depth with practical applicability",
                                "Youth-focused understanding of modern challenges",
                                "Confidential, respectful, and ethical engagement",
                                "No motivational gimmicks — only meaningful conversation"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="bg-card p-10 rounded-3xl border border-primary/10">
                        <h3 className="text-2xl font-bold text-primary uppercase mb-8 flex items-center gap-3">
                            <UserPlus className="w-6 h-6" />
                            Who Should Consider?
                        </h3>
                        <div className="space-y-4">
                            {[
                                "Students struggling with direction or pressure",
                                "Professionals facing confusion or burnout",
                                "Individuals seeking intellectual clarity",
                                "Youth dealing with faith, identity, or purpose questions",
                                "Anyone who prefers thoughtful guidance over emotional hype"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Final CTA */}
                <section className="relative p-8 md:p-20 rounded-[3.5rem] bg-primary text-black overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.2)] text-center">
                    <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">Book Your<br />Mentorship Session</h2>
                            <p className="text-xl font-bold opacity-80 uppercase tracking-widest">Available Format: One-on-One Online</p>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                href="https://wa.me/923224426531?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20Mentorship%20or%20Counseling%20Appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black hover:bg-white text-white hover:text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xl transition-all hover:scale-105 shadow-2xl"
                            >
                                Book Counseling Session
                            </a>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">👉 Click above to request a mentorship or counseling appointment</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function Calendar(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    )
}
