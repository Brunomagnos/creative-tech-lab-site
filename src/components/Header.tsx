
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-mk-black/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo variant="full" colorMode="auto" size="md" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#servicos" className="font-medium hover:text-mk-orange transition-colors dark:text-gray-200">
            Serviços
          </a>
          <a href="/#portfolio" className="font-medium hover:text-mk-orange transition-colors dark:text-gray-200">
            Portfólio
          </a>
          <Link to="/servicos/pos-producao" className="font-medium hover:text-mk-orange transition-colors dark:text-gray-200">
            Pós-Produção
          </Link>
          <a href="/#sobre" className="font-medium hover:text-mk-orange transition-colors dark:text-gray-200">
            Sobre Nós
          </a>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href="/#contato" className="btn-primary dark:bg-opacity-90 dark:hover:bg-opacity-100">
              Contato
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-mk-black dark:text-white hover:text-mk-orange"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-mk-black shadow-lg transition-colors duration-300">
          <div className="container flex flex-col py-4 space-y-4">
            <a
              href="/#servicos"
              className="font-medium py-2 hover:text-mk-orange transition-colors dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="/#portfolio"
              className="font-medium py-2 hover:text-mk-orange transition-colors dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfólio
            </a>
            <Link
              to="/servicos/pos-producao"
              className="font-medium py-2 hover:text-mk-orange transition-colors dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pós-Produção
            </Link>
            <a
              href="/#sobre"
              className="font-medium py-2 hover:text-mk-orange transition-colors dark:text-gray-200"
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
