"use client"

import React, { useState } from 'react';
import { ArrowRight, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import logo from "../../../../../public/logo.png"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        setEmail('');
    };

    return (

        <>
            <footer className="bg-black flex justify-between text-white py-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Subscribe Section */}
                        <div className="col-span-2">
                            <h2 className="text-4xl font-bold leading-tight mb-8">
                                Subscribe to get tips and tactics to grow the way you want.
                            </h2>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="flex-1 bg-transparent border-b border-white/20 py-2 px-4 focus:outline-none text-white placeholder-white/50 focus:border-pink-400"
                                />
                                <Button
                                    type="submit"
                                    className="bg-pink-400 p-3 rounded-lg hover:bg-pink-400 "
                                >
                                    <ArrowRight className="w-5 h-5 text-black" />
                                </Button>
                            </form>
                        </div>

                        {/* Links Section */}
                        <div>
                            <ul className="space-y-4">
                                <li><Link href="#" className='text-white font-semibold hover:text-pink-400 transition-colors'>Taxes</Link></li>
                                <li><Link href="#" className='text-white font-semibold hover:text-pink-400 transition-colors'>Terms of Service</Link></li>
                                <li><Link href="#" className='text-white font-semibold hover:text-pink-400 transition-colors'>Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-4">
                                <li><Link href="/features" className='text-white font-semibold hover:text-pink-400 transition-colors'>Features</Link></li>
                                <li><Link href="/pricing" className='text-white font-semibold hover:text-pink-400 transition-colors'>Pricing</Link></li>
                                <li><Link href="/about" className='text-white font-semibold hover:text-pink-400 transition-colors'>About</Link></li>
                                <li><Link href="/Contact us" className='text-white font-semibold hover:text-pink-400 transition-colors'>Contact us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                <Image src={logo} alt='logo' />
                            </div>
                            <span className="text-sm">&copy; Glimroad, Inc.</span>
                        </div>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-pink-400 transition-colors"><Twitter className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Youtube className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Instagram className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Facebook className="w-6 h-6" /></a>
                            {/* <a href="#" className="hover:text-gray-300"><Pinterest className="w-6 h-6" /></a> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;