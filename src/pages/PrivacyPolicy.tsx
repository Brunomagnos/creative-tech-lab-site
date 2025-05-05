
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Shield } from "lucide-react";
import MetaTags from "../components/MetaTags";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Política de Privacidade | MK Creative Lab"
        description="Nossa política de privacidade explica como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nosso site ou serviços."
        keywords="política de privacidade, dados pessoais, privacidade, proteção de dados"
      />
      <Header />

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="h-10 w-10 text-mk-orange" />
              <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-lg text-gray-700 mb-8">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <h2>1. Introdução</h2>
              <p>
                A MK Creative Lab valoriza a privacidade dos seus usuários e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos seus dados quando você usa nosso site ou serviços.
              </p>

              <h2>2. Informações que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul>
                <li><strong>Informações de Contato:</strong> nome, e-mail, telefone, empresa.</li>
                <li><strong>Dados de Uso:</strong> como você interage com nosso site e serviços.</li>
                <li><strong>Informações Técnicas:</strong> endereço IP, tipo de navegador, dispositivo utilizado.</li>
                <li><strong>Comunicações:</strong> mensagens que você nos envia através do formulário de contato.</li>
              </ul>

              <h2>3. Como Usamos Suas Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul>
                <li>Fornecer, manter e melhorar nossos serviços;</li>
                <li>Responder a suas solicitações e enviar informações solicitadas;</li>
                <li>Enviar atualizações, notícias e materiais promocionais;</li>
                <li>Analisar tendências e melhorar a experiência do usuário;</li>
                <li>Personalizar nosso site e comunicações.</li>
              </ul>

              <h2>4. Compartilhamento de Informações</h2>
              <p>
                Não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar suas informações apenas nas seguintes circunstâncias:
              </p>
              <ul>
                <li>Com prestadores de serviços que nos auxiliam em nossas operações;</li>
                <li>Quando exigido por lei, processo judicial ou autoridades governamentais;</li>
                <li>Para proteger nossos direitos, propriedade ou segurança.</li>
              </ul>

              <h2>5. Segurança</h2>
              <p>
                Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.
              </p>

              <h2>6. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar tendências e administrar o site. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>

              <h2>7. Seus Direitos</h2>
              <p>Você tem direito a:</p>
              <ul>
                <li>Acessar as informações pessoais que temos sobre você;</li>
                <li>Corrigir informações imprecisas;</li>
                <li>Solicitar a exclusão de suas informações;</li>
                <li>Optar por não receber comunicações de marketing;</li>
                <li>Apresentar uma reclamação à autoridade de proteção de dados.</li>
              </ul>

              <h2>8. Alterações a Esta Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer mudanças. Alterações significativas serão notificadas por e-mail ou através de um aviso em nosso site.
              </p>

              <h2>9. Contato</h2>
              <p>
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco pelo e-mail mkcreativelab@empresa.com.br ou pelo telefone +55 41 99916-7996.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
