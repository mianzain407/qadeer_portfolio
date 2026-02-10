import { Facebook, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    const expertise = [
        "Physiotherapy & Rehabilitation", "Health & Human Behavior", "Psychology & Mental Wellbeing",
        "Education & Academic Leadership", "Islamic Thought & Systemic Understanding of Islam", "Youth Mentorship & Motivation",
        "Knowledge Integration (Science, Psychology & Islam)", "Community Building & Intellectual Leadership"
    ];

    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Header Section */}
            <div className="w-full aspect-[1920/600] bg-[url('/images/aboutme.png')] bg-cover bg-center flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-3">
                    <h1 className="text-primary font-bold uppercase tracking-widest text-2xl sm:text-3xl md:text-5xl">OUR MISSION</h1>
                    <h3 className="text-muted-foreground font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base max-w-[200px] sm:max-w-md">Uniting Muslim minds across disciplines for a higher purpose.</h3>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:px-8 space-y-24">

                {/* Section 1: Dr. Abdul Qadeer */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase">Dr. Abdul Qadeer</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Consultant Physiotherapist | Psychologist | Educator | Islamic Scholar | Intellectual | Poet
                            Bridging modern sciences with Islamic guidance to develop purposeful individuals, integrate knowledge with ethics, and empower the next generation of Muslim leaders.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-primary">Academic Credentials</h3>
                            <p className="text-muted-foreground">Dr. Abdul Qadeer holds the following academic and professional qualifications:</p>
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5 marker:text-primary">
                                <li>BS (Bachelor of Science in Psychology)</li>
                                <li>BS (Bachelor in Islamic Education)</li>
                                <li>DPT (Doctor of Physiotherapy )</li>

                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Prof Image */}
                        <div className="aspect-[4/4] rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl">
                            <img
                                src="/images/aboutstand.jpeg"
                                alt="Dr. Abdul Qadeer"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Career */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl">
                            <img
                                src="/images/aboutsit.jpeg"
                                alt="Medical Career"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl md:text-3xl font-bold text-primary uppercase border-l-4 border-primary pl-4">Career in Healthcare and Education</h2>

                        <div className="space-y-2 pt-2">
                            <h3 className="text-xl font-bold text-primary">Professional Roles</h3>
                            <p className="text-muted-foreground">Dr. Abdul Qadeer is actively involved in various professional and academic capacities:</p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-5 marker:text-primary">
                                <li><strong>Clinical Physiotherapy</strong></li>
                                <li><strong>Academic Leadership & Teaching</strong></li>
                                <li><strong>Public Speaking & Mentorship</strong></li>
                                <li><strong>Islamic Speaking & Thought Leadership</strong></li>
                                <li><strong>Community & Intellectual Leadership</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 3: Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title="Social Influence" text="Actively engaging youth and professionals through lectures, digital platforms, and community initiatives to promote critical thinking, ethical awareness, and responsibility toward Islam and society." />
                    <Card title="Poetry & Literature" text="Using writing and poetry as reflective tools to explore faith, identity, struggle, purpose, and intellectual awakening, bridging emotion with reasoned thought." />
                    <Card title="Global Perspective & Contribution" text="Committed to contributing toward the revival of Muslim intellectual leadership by promoting interdisciplinary collaboration, ethical professionalism, and Islam-centered thought relevant to global challenges." />
                    <Card title="Philosophy" text="Islam is a complete system of life. Knowledge, power, and professional skill must be aligned with divine guidance to establish justice, responsibility, and meaningful leadership in the world." />
                    <Card title="Vision & Legacy" text="To prepare a generation of Muslims who are intellectually competent, professionally skilled, and ideologically clear—capable of implementing Islam as a system in personal, social, and global spheres." />
                    <Card title="Knowledge Integration" text="Bridging modern sciences, psychology, and education with Islamic thought while mentoring students and empowering intellectual growth." />
                </div>

                {/* Section 4: Expertise */}
                <div className="text-center space-y-12">
                    <div className="space-y-2">
                        <h3 className="text-primary font-bold tracking-widest uppercase">Expertise</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground uppercase leading-tight">
                            Dr. Abdul Qadeer's Proven<br /><span className="text-muted-foreground">In Various Topics</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {expertise.map((item, i) => (
                            <div key={i} className="px-8 py-3 bg-primary text-black font-bold rounded-full text-sm md:text-base hover:bg-white transition-colors cursor-default shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-primary font-bold tracking-widest uppercase">Media & Gallery</h1>
                        <h3 className="text-3xl md:text-5xl font-bold text-primary uppercase leading-tight">
                            Moments & Milestones
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <GalleryItem
                            src="/images/mn2.jpeg"
                            alt="Consultation Session"
                            caption="Healthcare Consultation"
                        />
                        <GalleryItem
                            src="/images/teaching.jpeg"
                            alt="Teaching Session"
                            caption="Academic Teaching"
                        />
                        <GalleryItem
                            src="/images/publicspeaking.jpeg"
                            alt="Public Speaking"
                            caption="Public Speaking"
                        />
                        <GalleryItem
                            src="/images/physio2.jpeg"
                            alt="Physiotherapy Session"
                            caption="Rehabilitation Therapy"
                        />
                        <Link to="/courses/mentorship">
                            <GalleryItem
                                src="/images/aboutmntrship.jpeg"
                                alt="Mentorship Program"
                                caption="Youth Mentorship"
                            />
                        </Link>
                        <GalleryItem
                            src="/images/aboutresaerchwork.jpeg"
                            alt="Research Work"
                            caption="Academic Research"
                        />
                    </div>
                </div>

                {/* Footer / Stats */}
                <div className="pt-12 border-t border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <StatItem icon={<Facebook className="w-8 h-8 mb-2 mx-auto text-primary" />} label="2K+" sub="Followers" />
                        <StatItem icon={<Linkedin className="w-8 h-8 mb-2 mx-auto text-primary" />} label="1k+" sub="Connections" />
                        <StatItem icon={<Youtube className="w-8 h-8 mb-2 mx-auto text-primary" />} label="1K+" sub="Subscribers" />
                        <StatItem icon={<Instagram className="w-8 h-8 mb-2 mx-auto text-primary" />} label="1K+" sub="Followers" />
                    </div>
                </div>

            </div>
        </div>
    );
}

function Card({ title, text }) {
    return (
        <div className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] group">
            <h3 className="text-xl font-bold text-primary mb-4 uppercase group-hover:text-white transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {text}
            </p>
        </div>
    );
}

function StatItem({ icon, label, sub }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 hover:bg-white/5 rounded-lg transition-colors">
            {icon}
            <div className="text-3xl md:text-4xl font-bold text-white my-2">{label}</div>
            <div className="text-muted-foreground uppercase text-xs tracking-wider">{sub}</div>
        </div>
    );
}

function GalleryItem({ src, alt, caption }) {
    return (
        <div className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/5 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">{caption}</h4>
                </div>
            </div>
        </div>
    );
}
