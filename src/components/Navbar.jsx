import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Courses',
            path: '#',
            dropdown: [
                { name: 'Arabic Language', path: '/courses/arabic' },
                { name: 'STEM Courses', path: '/courses/stem' },
                { name: 'Skills & Development', path: '/courses/skills' },
                { name: 'Islamic Foundation', path: '/courses/islamic' },
                { name: 'Advance Courses', path: '/courses/advance' },
            ]
        },
        {
            name: 'Podcast',
            path: '#',
            dropdown: [
                { name: 'Podcast Library', path: '/podcast-library' },
                { name: 'Invite for Podcast', path: '/contact' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo / Brand */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary" style={{ fontFamily: "'Satisfy', cursive" }}>Dr . Abdul Qadeer</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            link.dropdown ? (
                                <div key={link.name} className="relative group">
                                    <button
                                        className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus:outline-none"
                                    >
                                        {link.name}
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md border bg-popover p-2 shadow-md outline-none animate-in fade-in zoom-in-95 invisible group-hover:visible transition-all duration-200">
                                        <div className="grid gap-1">
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className="block rounded-sm px-3 py-2 text-sm font-medium text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <ModeToggle />
                        <Link
                            to="/contact"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Appointment
                        </Link>
                    </div>

                    {/* Mobile Menu Button + Toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ModeToggle />
                        <button
                            className="flex items-center justify-center p-2 text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-b bg-background md:hidden">
                    <div className="grid gap-1 px-4 py-4">
                        {navLinks.map((link) => (
                            link.dropdown ? (
                                <div key={link.name} className="space-y-1">
                                    <div className="px-3 py-2 text-base font-medium text-foreground">
                                        {link.name}
                                    </div>
                                    <div className="pl-6 space-y-1">
                                        {link.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                to={subItem.path}
                                                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block select-none rounded-md px-3 py-2 text-base font-medium leading-none text-foreground no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
