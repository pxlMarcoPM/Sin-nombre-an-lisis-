
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { href: '#introduccion', label: 'Introducción' },
    { href: '#desarrollo', label: 'Desarrollo' },
    { href: '#otredad', label: 'Otredad' },
    { href: '#identidad', label: 'Identidad' },
    { href: '#conclusion', label: 'Conclusión' },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-pink-500/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white text-shadow">Análisis Cinematográfico</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
