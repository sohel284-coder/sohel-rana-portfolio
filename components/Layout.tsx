import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation Bar */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                        : "bg-transparent py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <a
                        href="#home"
                        className={`text-2xl font-serif font-bold tracking-tight ${
                            scrolled ? "text-slate-900" : "text-white"
                        }`}
                    >
                        SR.
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${
                                    scrolled
                                        ? "text-slate-600 hover:text-academic-600"
                                        : "text-slate-200 hover:text-white"
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Resume Download Button */}
                        <a
                            href="/Sohel_Rana_CV.pdf"
                            download="Sohel_Rana_CV.pdf"
                            className={`px-4 py-1.5 rounded text-sm font-medium border transition-all ${
                                scrolled
                                    ? "border-academic-600 text-academic-600 hover:bg-academic-50"
                                    : "border-white text-white hover:bg-white/10"
                            }`}
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-current"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className={scrolled ? "text-slate-900" : "text-white"} />
                        ) : (
                            <Menu className={scrolled ? "text-slate-900" : "text-white"} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-700 font-medium py-2 border-b border-slate-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Mobile Resume Download Button */}
                        <a
                            href="/Sohel_Rana_CV.pdf"
                            download="Sohel_Rana_CV.pdf"
                            className="text-academic-600 font-medium py-2 border-b border-slate-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                )}
            </nav>

            {/* Page Content */}
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};
