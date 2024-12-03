"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Quanto tempo leva para receber um orçamento?",
    answer:
      "Nós enviamos o orçamento em até um dia útil após a solicitação via WhatsApp. Nossa equipe está pronta para atender você!",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer:
      "Você pode solicitar um orçamento enviando uma mensagem pelo WhatsApp. Basta clicar no botão de contato na nossa página inicial.",
  },
  {
    question: "Os templates são totalmente personalizáveis?",
    answer:
      "Sim, todos os nossos templates podem ser ajustados para atender às necessidades específicas da sua marca.",
  },
  {
    question: "Vocês oferecem suporte técnico?",
    answer:
      "Sim, oferecemos suporte técnico para ajudar na personalização e utilização dos templates. Fale com nossa equipe pelo WhatsApp para saber mais.",
  },
];
