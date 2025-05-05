
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Shield } from "lucide-react";
import MetaTags from "../components/MetaTags";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Termos de Uso | MK Creative Lab"
        description="Nossos termos de uso definem as condições para o acesso e a utilização do site e serviços da MK Creative Lab."
        keywords="termos de uso, condições de uso, termos de serviço"
      />
      <Header />

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="h-10 w-10 text-mk-orange" />
              <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-lg text-gray-700 mb-8">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar ou usar o site da MK Creative Lab (www.mkcreativelab.com.br), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com algum aspecto destes termos, não utilize nosso site ou serviços.
              </p>

              <h2>2. Alterações nos Termos</h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade verificar periodicamente se houve atualizações.
              </p>

              <h2>3. Uso do Site</h2>
              <p>Você concorda em:</p>
              <ul>
                <li>Usar o site apenas para fins legais e de acordo com estes termos;</li>
                <li>Não utilizar o site de maneira que possa danificar, desativar ou sobrecarregar nossos servidores;</li>
                <li>Não tentar acessar áreas restritas do site sem autorização;</li>
                <li>Não utilizar robôs, spiders ou outros meios automáticos para acessar ou copiar conteúdo do site.</li>
              </ul>

              <h2>4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do site, incluindo texto, gráficos, logotipos, ícones, imagens, áudio, vídeo e software, é propriedade da MK Creative Lab ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais. A reprodução não autorizada é proibida.
              </p>

              <h2>5. Serviços e Produtos</h2>
              <p>
                As informações sobre serviços e produtos apresentadas no site são apenas para fins informativos. A MK Creative Lab reserva-se o direito de modificar ou descontinuar qualquer serviço sem aviso prévio.
              </p>

              <h2>6. Conteúdo do Usuário</h2>
              <p>
                Ao enviar qualquer conteúdo para nosso site (como comentários, formulários ou feedback), você concede à MK Creative Lab uma licença mundial, não exclusiva, isenta de royalties, para usar, reproduzir, modificar e publicar esse conteúdo.
              </p>

              <h2>7. Links para Sites de Terceiros</h2>
              <p>
                Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo ou práticas desses sites e não somos responsáveis por eles. A inclusão de links não implica em endosso.
              </p>

              <h2>8. Limitação de Responsabilidade</h2>
              <p>
                A MK Creative Lab não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nosso site ou serviços.
              </p>

              <h2>9. Legislação Aplicável</h2>
              <p>
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes termos será sujeita à jurisdição exclusiva dos tribunais de Curitiba, Paraná.
              </p>

              <h2>10. Contato</h2>
              <p>
                Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco pelo e-mail mkcreativelab@empresa.com.br ou pelo telefone +55 41 99916-7996.
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

export default TermsOfService;
