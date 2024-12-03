import {
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const iconStyle =
  "w-10 h-10 p-2 rounded-full bg-customBlue text-white flex justify-center items-center";

const benefitOne = {
  title: "Destaque os benefícios dos seus e-mails",
  desc: "Crie e-mails profissionais que encantam sua audiência. Nossos templates são projetados para destacar sua marca e gerar engajamento de forma eficaz.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Entenda seus clientes",
      desc: "Utilize layouts pensados para atrair e reter a atenção do seu público.",
      icon: (
        <div className={iconStyle}>
          <FaceSmileIcon />
        </div>
      ),
    },
    {
      title: "Melhore a conversão",
      desc: "Templates otimizados para aumentar cliques e engajamento.",
      icon: (
        <div className={iconStyle}>
          <ChartBarSquareIcon />
        </div>
      ),
    },
    {
      title: "Fidelize seus clientes",
      desc: "Comunique-se de forma personalizada para fortalecer relacionamentos.",
      icon: (
        <div className={iconStyle}>
          <CursorArrowRaysIcon />
        </div>
      ),
    },
  ],
};

const benefitTwo = {
  title: "Vantagens dos nossos templates",
  desc: "Os templates EmailBlue são projetados para atender às suas necessidades de comunicação. Personalizáveis, modernos e prontos para entregar resultados.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Design responsivo",
      desc: "Funciona perfeitamente em dispositivos móveis e desktops.",
      icon: (
        <div className={iconStyle}>
          <DevicePhoneMobileIcon />
        </div>
      ),
    },
    {
      title: "Pronto para integração",
      desc: "Compatível com as principais ferramentas de e-mail marketing.",
      icon: (
        <div className={iconStyle}>
          <AdjustmentsHorizontalIcon />
        </div>
      ),
    },
    {
      title: "Modo claro e escuro",
      desc: "Design ajustável ao modo claro e escuro automaticamente.",
      icon: (
        <div className={iconStyle}>
          <SunIcon />
        </div>
      ),
    },
  ],
};

export { benefitOne, benefitTwo };
