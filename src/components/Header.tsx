
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white dark:bg-mk-black border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl leading-tight text-mk-orange">MK</span>
            <span className="font-medium text-sm leading-tight">Creative Lab</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#servicos" className="font-medium hover:text-mk-orange transition-colors">
            Serviços
          </a>
          <a href="/#portfolio" className="font-medium hover:text-mk-orange transition-colors">
            Portfólio
          </a>
          <Link to="/servicos/pos-producao" className="font-medium hover:text-mk-orange transition-colors">
            Pós-Produção
          </Link>
          <a href="/#sobre" className="font-medium hover:text-mk-orange transition-colors">
            Sobre Nós
          </a>
          <a href="/#contato" className="btn-primary">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-mk-black hover:text-mk-orange dark:text-white dark:hover:text-mk-orange"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-mk-black border-t border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="container flex flex-col py-4 space-y-4">
            <a
              href="/#servicos"
              className="font-medium py-2 hover:text-mk-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="/#portfolio"
              className="font-medium py-2 hover:text-mk-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfólio
            </a>
            <Link
              to="/servicos/pos-producao"
              className="font-medium py-2 hover:text-mk-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pós-Produção
            </Link>
            <a
              href="/#sobre"
              className="font-medium py-2 hover:text-mk-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="/#contato"
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
