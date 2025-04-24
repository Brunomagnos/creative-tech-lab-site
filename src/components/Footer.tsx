
import { ArrowUp, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
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
            <p className="text-gray-400 mb-6">
              Somos um laboratório criativo que integra arte e tecnologia para entregar 
              soluções de alto impacto em Curitiba e para todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mk-orange rounded-full p-2.5 transition-colors">
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-mk-orange transition-colors">Produção Audiovisual</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mk-orange transition-colors">Marketing & Performance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mk-orange transition-colors">Automação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mk-orange transition-colors">Impressão 3D</a></li>
                <li><a href="#" className="text-gray-400 hover:text-mk-orange transition-colors">Pós-Produção</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-mk-orange transition-colors">Home</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-mk-orange transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-mk-orange transition-colors">Nossos Serviços</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-mk-orange transition-colors">Portfólio</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-mk-orange transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">+55 41 99916-7996</li>
                <li className="text-gray-400">mkcreativelab@empresa.com.br</li>
                <li className="text-gray-400">Curitiba, Paraná, Brasil</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MK Creative Lab. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-mk-orange hover:bg-opacity-80 text-white p-3 rounded-full mt-4 md:mt-0 transition-colors"
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
