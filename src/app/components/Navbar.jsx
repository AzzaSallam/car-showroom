"use client"

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';


const Navbar = () => {

  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: t("navbar.home"), href: "#" },
    { label: t("navbar.about"), href: "#" },
    { label: t("navbar.gallery"), href: "#" },
    { label: t("navbar.services"), href: "#" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className='bg-gray-950 z-50 text-white relative top-0 w-full ' style={{paddingRight : '1rem' , paddingLeft:'1rem'}}>
        <div className='flex items-center justify-between py-4 max-w-6xl mx-auto w-full'>
            <Image className=' bg-gray-200 rounded-full relative top-2 shrink-0' src='/assets/logo.png' width={60} height={60} alt='عربيتك موتورز' ></Image>

            {/* DESKTOP NAV */}
            <ul className='hidden md:flex justify-between gap-9 links font-semibold'>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className='hidden md:flex'>
              <LanguageSwitcher/>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className='md:hidden inline-flex items-center justify-center rounded-md border border-white/30 px-3 py-2'
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className='text-sm font-semibold'>{isMenuOpen ? '✕' : '☰'}</span>
            </button>
        </div>

        {/* MOBILE MENU PANEL */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-white/10 pb-4'>
            <ul className='flex flex-col gap-3 px-4 pt-4 text-sm font-semibold'>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={closeMenu} className='block py-2 border-b border-white/10 last:border-b-0'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='px-4 pt-4'>
              <LanguageSwitcher/>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar
