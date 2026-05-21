'use client';

import { useState, useEffect } from 'react';

const BeanIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="#794c0a"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 326.05 326.05"
    stroke="#794c0a"
  >
    <g>
      <path d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16 c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8 C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169 C322.479,191.585,343.526,103.869,310.81,48.75z" />
    </g>
  </svg>
);

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = ['Shop', 'Origins', 'Process', 'Subscribe'];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center mix-blend-multiply">
        <div />

        {/* Desktop links */}
        <ul className="flex gap-10 list-none max-lg:hidden">
          {links.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                className="text-xs tracking-widest uppercase text-[#2a2825] opacity-70 hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden z-[60] relative p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            /* Close X */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="3" x2="17" y2="17" stroke="#f5efe6" strokeWidth="2" strokeLinecap="round" />
              <line x1="17" y1="3" x2="3" y2="17" stroke="#f5efe6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <BeanIcon />
          )}
        </button>
      </nav>

      {/* Expanding circle overlay */}
      <div
        aria-hidden={!menuOpen}
        className={`
          fixed z-50 pointer-events-none
          transition-[clip-path] ease-[cubic-bezier(0.76,0,0.24,1)]
          ${menuOpen ? 'duration-700' : 'duration-500'}
        `}
        style={{
          inset: 0,
          backgroundColor: '#2a2825',
          /* Circle originates from top-right where button lives (~px-12 py-6 → roughly top:40px right:58px) */
          clipPath: menuOpen
            ? 'circle(200% at calc(100% - 58px) 40px)'
            : 'circle(0% at calc(100% - 58px) 40px)',
        }}
      />

      {/* Menu content */}
      <div
        className={`
          fixed inset-0 z-58 flex flex-col items-center justify-center gap-10
          transition-opacity duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          lg:hidden
        `}
        style={{ transitionDelay: menuOpen ? '300ms' : '0ms' }}
      >
        <ul className="list-none flex flex-col items-center gap-8 p-0 m-0">
          {links.map((item, i) => (
            <li
              key={item}
              className="overflow-hidden"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.76,0,0.24,1), opacity 0.5s ease`,
                transitionDelay: menuOpen ? `${350 + i * 70}ms` : '0ms',
              }}
            >
              <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.25em] uppercase text-[#f5efe6] opacity-80 hover:opacity-100 transition-opacity duration-300 no-underline"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
              {item}
            </a>
            </li>
          ))}
      </ul>

      {/* Subtle decorative bean at bottom */}
      <div
        className="absolute bottom-16 opacity-10"
        style={{
          transform: menuOpen ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-30deg)',
          transition: 'transform 0.7s cubic-bezier(0.76,0,0.24,1)',
          transitionDelay: menuOpen ? '500ms' : '0ms',
        }}
      >
        <BeanIcon className="!fill-[#f5efe6] !stroke-[#f5efe6] w-24 h-24" />
      </div>
    </div >
    </>
  );
}