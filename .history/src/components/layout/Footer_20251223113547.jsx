import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { COLORS } from '../../constants/config';

// Use COLORS.PRIMARY directly for theme color

const Footer = ({ onNavigate }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Add your subscription logic here
        setEmail('');
    };

    return (
    <footer className="text-white pt-12 pb-6" style={{ backgroundColor: COLORS.PRIMARY }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Quick Links Section - Takes up more space */}
                    <div className="lg:col-span-6">
                        <h4 className="text-xl font-bold mb-6 border-b-2 border-white pb-2 inline-block">Quick Links</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
                            {/* Get Involved */}
                            <div>
                                <h5 className="font-bold mb-4">Get Involved</h5>
                                <ul className="space-y-3">
                                    <li><a href="/internship" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Internship</a></li>
                                    <li><a href="/volunteer" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Volunteer</a></li>
                                    <li><a href="/clubs" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Clubs (SSIC)</a></li>
                                    <li><a href="/awards" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Awards</a></li>
                                </ul>
                            </div>

                            {/* Causes & Programs */}
                            <div>
                                <h5 className="font-bold mb-4">Causes & Programs</h5>
                                <ul className="space-y-3">
                                    <li><a href="/support" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Support a Cause</a></li>
                                    <li><a href="/elderly-care" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Elderly Care</a></li>
                                    <li><a href="/mental-health" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Mental Health</a></li>
                                    <li><a href="/girl-child" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Girl Child</a></li>
                                </ul>
                            </div>

                            {/* Explore */}
                            <div>
                                <h5 className="font-bold mb-4">Explore</h5>
                                <ul className="space-y-3">
                                    <li><a href="/events" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Events</a></li>
                                    <li><a href="/gallery" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Gallery</a></li>
                                    <li><a href="/publications" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Publications</a></li>
                                    <li><a href="/media" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Media</a></li>
                                    <li><a href="/contact" className="flex items-center text-white/90 hover:text-white transition duration-200"><ChevronRight className="w-4 h-4 mr-1" />Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Branding & Newsletter Section */}
                    <div className="lg:col-span-3 lg:col-start-10">
                        <h2 className="text-3xl font-bold mb-4">SabriHelpAge</h2>
                        <p className="text-white/90 mb-8">
                            Dedicated to serving humanity through comprehensive welfare programs for the elderly, women, and children.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-3 border-b-2 border-white pb-2 inline-block">Stay Updated</h3>
                            <p className="text-white/90 mb-4 mt-4">Subscribe to our newsletter for the latest impact stories.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button className="bg-white text-[#C85C5C] px-6 py-3 rounded-r-lg hover:bg-gray-100 transition duration-300">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-white/30 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 order-2 md:order-1">
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300" aria-label="YouTube">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300" aria-label="Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="text-center order-1 md:order-2">
                            <p className="text-white text-sm">© {new Date().getFullYear()} Sabri Helpage. All rights reserved.</p>
                        </div>

                        {/* Footer Links */}
                        <div className="flex space-x-4 order-3">
                            <a href="/about" className="text-white hover:text-gray-200 text-sm font-bold transition duration-300">About</a>
                            <a href="/terms" className="text-white hover:text-gray-200 text-sm font-bold transition duration-300">Terms</a>
                            <a href="/privacy" className="text-white hover:text-gray-200 text-sm font-bold transition duration-300">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;