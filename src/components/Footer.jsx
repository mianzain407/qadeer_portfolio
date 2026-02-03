import { Facebook, Youtube, Linkedin, MessageCircle, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full border-t bg-muted/50 text-foreground">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "'Satisfy', cursive" }}>Dr . Abdul Qadeer</h3>
                        <p className="text-sm text-muted-foreground">
                            Consultant Physiotherapist, Educator and Psychologist. Dedicated to excellence in healthcare, knowledge, and public service.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Me</Link></li>
                            <li><Link to="/podcast-library" className="hover:text-primary transition-colors">Podcast</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Lahore, Pakistan</li>
                            <li>drabdulqadeerahmad18@gmail.com</li>
                            <li>+92 3224426531</li>
                            <li>+92 3454287571</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Follow Socially</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1Kc28jKXKD/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="https://www.instagram.com/aq_intellectualtalks?utm_source=qr&igsh=MXhkN25wYWQ2NG9tNA==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="https://wa.me/923224426531" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle className="h-5 w-5" /></a>
                            <a href="https://www.linkedin.com/in/dr-abdul-qadeer-ahmad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="https://youtube.com/@drabdulqadeerahmadofficial?si=_9GbweFb_aesday7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Dr. Abdul Qadeer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
