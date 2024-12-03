import { Benefits } from "@/components/Benefits";
import { Container } from "@/components/Container";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Team } from "@/components/Team";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Por que escolher a EmailBlue?"
        title="Transforme a comunicação da sua empresa"
      >
        EmailBlue é uma solução completa para criar templates de e-mail
        personalizados que destacam a sua marca e cativam seus clientes. Com
        designs modernos e otimizados, garantimos que suas mensagens se
        destaquem na caixa de entrada.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Conheça Nossa Equipe"
        title="Os talentos por trás do EmailBlue"
      >
        Nossa equipe é composta por profissionais apaixonados e especializados,
        dedicados a criar soluções que transformam a comunicação das empresas.
        Conheça os experts que tornam o EmailBlue possível!
      </SectionTitle>

      <Team />

      <SectionTitle preTitle="Perguntas Frequentes" title="Dúvidas?">
        Resolvemos as perguntas mais comuns sobre nossos serviços para garantir
        que você tome a melhor decisão. Precisa de mais ajuda? Nossa equipe está
        pronta para conversar com você!
      </SectionTitle>

      <Faq />
    </Container>
  );
}
