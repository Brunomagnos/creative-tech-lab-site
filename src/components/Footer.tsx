
import { ArrowUp, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-mk-black text-white pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="max-w-md">
            <a href="#" className="inline-block mb-4">
              <Logo variant="full" colorMode="white" size="lg" />
            </a>
            <p className="text-white/80 mb-6">
              Somos um laboratório criativo que integra arte e tecnologia para entregar 
              soluções de alto impacto em Curitiba e para todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors hover-scale">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors hover-scale">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors hover-scale">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors hover-scale">
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#servicos" className="text-white/80 hover:text-mk-orange transition-colors">Produção Audiovisual</a></li>
                <li><a href="#servicos" className="text-white/80 hover:text-mk-orange transition-colors">Marketing & Performance</a></li>
                <li><a href="#servicos" className="text-white/80 hover:text-mk-orange transition-colors">Automação</a></li>
                <li><a href="#servicos" className="text-white/80 hover:text-mk-orange transition-colors">Impressão 3D</a></li>
                <li><Link to="/servicos/pos-producao" className="text-white/80 hover:text-mk-orange transition-colors">Pós-Produção</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-mk-orange transition-colors">Home</a></li>
                <li><a href="#sobre" className="text-white/80 hover:text-mk-orange transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="text-white/80 hover:text-mk-orange transition-colors">Nossos Serviços</a></li>
                <li><a href="#portfolio" className="text-white/80 hover:text-mk-orange transition-colors">Portfólio</a></li>
                <li><a href="#contato" className="text-white/80 hover:text-mk-orange transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Contato</h3>
              <ul className="space-y-2">
                <li className="text-white/80">+55 41 99916-7996</li>
                <li className="text-white/80">mkcreativelab@empresa.com.br</li>
                <li className="text-white/80">Curitiba, Paraná, Brasil</li>
              </ul>
              <div className="mt-6">
                <h3 className="font-bold mb-2 text-lg">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/politica-de-privacidade" className="text-white/80 hover:text-mk-orange transition-colors">Política de Privacidade</Link></li>
                  <li><Link to="/termos-de-uso" className="text-white/80 hover:text-mk-orange transition-colors">Termos de Uso</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} MK Creative Lab. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-mk-orange hover:bg-opacity-80 text-white p-3 rounded-full mt-4 md:mt-0 transition-colors hover-scale"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
