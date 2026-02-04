import { Stethoscope, Activity, UserCheck, MapPin, Video, Home, Phone, CheckCircle2, Award, Heart, Brain, Zap, Target } from 'lucide-react';

export default function PhysioConsultation() {
    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Hero Section */}
            <div className="relative w-full aspect-[21/9] min-h-[400px] bg-[url('/images/physio-hero.jpg')] bg-cover bg-center flex flex-col items-center justify-center px-4 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-white/90 dark:bg-black/70 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center space-y-4 max-w-4xl">
                    <h1 className="text-primary font-bold uppercase tracking-[0.2em] text-2xl sm:text-3xl md:text-5xl animate-in fade-in slide-in-from-top-4 duration-700">
                        🩺 PHYSIOTHERAPY CONSULTATION
                    </h1>
                    <p className="text-foreground dark:text-white text-lg md:text-xl font-medium tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 uppercase">
                        Evidence-Based Care | Personalized Rehabilitation | Professional Guidance
                    </p>
                    <div className="pt-6 animate-in fade-in zoom-in duration-700 delay-500">
                        <a
                            href="https://wa.me/923224426531?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20Physiotherapy%20Consultation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)] inline-flex items-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Physiotherapy Appointment
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
                                Physiotherapy is a specialized clinical discipline focused on restoring movement, function, and quality of life across all age groups. Through detailed assessment, clinical reasoning, and personalized rehabilitation strategies, physiotherapy addresses pain, dysfunction, injury, and recovery in a structured and scientific manner.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg pt-2">
                                This platform offers professional physiotherapy consultations designed to help patients understand their condition, identify root causes, and follow an effective rehabilitation pathway.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden border border-primary/20 shadow-2xl relative group">
                            <img
                                src="/images/physio.jpeg"
                                alt="Physiotherapy Assessment"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </section>

                {/* Consultation Types */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase">Types of <span className="text-primary">Consultation</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">Flexible structure for ease of access and transparency.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: "In-Clinic Consultation",
                                desc: "Detailed physical and functional assessment, manual examination, and targeted treatment planning in a professional clinic setting.",
                                suitable: "Musculoskeletal pain, sports injuries, neurological rehab, post-surgical recovery."
                            },
                            {
                                icon: <Video className="w-8 h-8" />,
                                title: "Online Consultation",
                                desc: "Video-based assessment, postural guidance, and home-based exercise prescription for those who prefer remote care.",
                                suitable: "Lifestyle-related pain, follow-up cases, guidance-based rehabilitation."
                            },
                            {
                                icon: <Home className="w-8 h-8" />,
                                title: "Home Visit Session",
                                desc: "Quality care at your residence, focusing on mobility, balance, and functional training in your real-life environment.",
                                suitable: "Elderly patients, post-surgical cases, mobility-restricted individuals."
                            }
                        ].map((type, i) => (
                            <div key={i} className="bg-card p-10 rounded-3xl border border-primary/10 hover:border-primary/40 transition-all group flex flex-col h-full">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-black transition-all">
                                    {type.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary uppercase mb-4">{type.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{type.desc}</p>
                                <div className="pt-6 border-t border-primary/10">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-2">Suitable For</span>
                                    <p className="text-sm font-medium">{type.suitable}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Charges & Fee Confirmation */}
                <section className="bg-accent/5 rounded-[3rem] p-8 md:p-16 border border-primary/10 relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase">Consultation <span className="text-primary">Charges</span></h2>
                            <div className="space-y-4">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl font-black text-primary">Rs. 2k – 5k</span>
                                    <span className="text-muted-foreground font-bold uppercase tracking-widest text-sm">per session</span>
                                </div>
                                <p className="text-muted-foreground max-w-md">Fees vary based on the type of consultation, nature of condition, and duration.</p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {[
                                "Type of consultation (Clinic / Online / Home Visit)",
                                "Nature and complexity of the condition",
                                "Duration and clinical requirements"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/5">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                            <p className="text-primary font-bold italic mt-4">
                                📞 Please contact directly for fee confirmation and appointment details.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Clinical Expertise */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase">Clinical <span className="text-primary">Expertise</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-widest text-sm">Specialized care for a wide range of conditions.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Musculoskeletal Conditions", items: ["Neck & Cervical problems", "Shoulder & Rotator cuff", "Back pain", "Knee pain & Joint stiffness"] },
                            { title: "Neurological Rehabilitation", items: ["Stroke rehabilitation", "Nerve injuries", "Balance disorders", "Muscle weakness"] },
                            { title: "Cardiopulmonary Physiotherapy", items: ["Breathing difficulties", "Reduced endurance", "Post-illness recovery", "Chest physiotherapy"] },
                            { title: "Post-Surgical Rehabilitation", items: ["Orthopedic surgery recovery", "Joint replacement", "Post-op mobility", "Strength restoration"] },
                            { title: "Sports Rehabilitation", items: ["Sports injuries", "Overuse injuries", "Movement correction", "Performance-oriented rehab"] },
                            { title: "General Functional Issues", items: ["Reduced mobility", "Chronic pain conditions", "Muscle imbalances", "Lifestyle physical discomfort"] }
                        ].map((category, i) => (
                            <div key={i} className="bg-card/50 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all group">
                                <h4 className="text-xl font-bold text-primary uppercase mb-6 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    {category.title}
                                </h4>
                                <ul className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="text-muted-foreground flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Treatment Approach */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="/images/physio-approach.jpg" alt="Structured Treatment" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase border-l-4 border-primary pl-6">Treatment Approach</h2>
                            <p className="text-muted-foreground text-lg">Focusing on long-term recovery, function, and prevention, not just temporary relief.</p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "Clinical History", desc: "Detailed case understanding and history" },
                                { title: "Comprehensive Assessment", desc: "Physical, functional, and movement analysis" },
                                { title: "Cause Identification", desc: "Identification of underlying issues" },
                                { title: "Personalized Strategy", desc: "Bespoke rehabilitation and exercise plan" },
                                { title: "Guidance & Follow-up", desc: "Continuous monitoring and progress evaluation" }
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
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative p-8 md:p-20 rounded-[3.5rem] bg-primary text-black overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.2)] text-center">
                    <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">Book Your<br />Physiotherapy Consultation</h2>
                            <p className="text-xl font-bold opacity-80 uppercase tracking-widest">In-Clinic • Online • Home Visit</p>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                href="https://wa.me/923224426531?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20book%20a%20Physiotherapy%20Consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black hover:bg-white text-white hover:text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xl transition-all hover:scale-105 shadow-2xl"
                            >
                                Book Physiotherapy Appointment
                            </a>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Click above to schedule or contact for details</p>
                        </div>
                    </div>
                </section>

                {/* Feature highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-20">
                    {[
                        { label: "Consultant Level Care", icon: <Award className="w-5 h-5 text-primary" /> },
                        { label: "Evidence-Based", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
                        { label: "Ethical Practice", icon: <Heart className="w-5 h-5 text-primary" /> },
                        { label: "Personalized Plans", icon: <Target className="w-5 h-5 text-primary" /> }
                    ].map((feature, i) => (
                        <div key={i} className="text-center space-y-3 p-6 rounded-2xl bg-card border border-primary/5">
                            <div className="flex justify-center">{feature.icon}</div>
                            <div className="text-xs font-bold uppercase tracking-widest">{feature.label}</div>
                        </div>
                    ))}
                </div>
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
