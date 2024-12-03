import { Container } from "@/components/Container";
import Image from "next/image";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap items-center justify-between">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Crie E-mails Profissionais para o seu negócio
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Transforme sua comunicação com templates de e-mail personalizados
              e otimizados para gerar resultados. Ideal para empresas que querem
              se destacar!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row">
              <a
                href="https://forms.gle/FFcAePxLQRBh5sPe6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#68b2f8] rounded-md hover:bg-[#569de0] focus:outline-none focus:ring focus:ring-[#8fc5f9]">
                Fale Agora Conosco
              </a>           
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={heroImg}
            width="916"
            height="817"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </Container>
    </>
  );
};
