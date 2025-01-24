'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Lokesh Darne
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#about" className="hover:text-primary">About</Link>
            <Link href="/#projects" className="hover:text-primary">Projects</Link>
            <Link href="/#blog" className="hover:text-primary">Blog</Link>
            <Link href="/#contact" className="hover:text-primary">Contact</Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#about" className="block px-3 py-2 hover:text-primary">About</Link>
            <Link href="/#projects" className="block px-3 py-2 hover:text-primary">Projects</Link>
            <Link href="/#blog" className="block px-3 py-2 hover:text-primary">Blog</Link>
            <Link href="/#contact" className="block px-3 py-2 hover:text-primary">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}