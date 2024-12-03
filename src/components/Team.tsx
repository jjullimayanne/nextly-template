import { Container } from "@/components/Container";
import Image from "next/image";
import React from "react";

import userOneImg from "../../public/img/user1.png";
import userTwoImg from "../../public/img/user2.png";
import user3Img from "../../public/img/user3.png";
import user4Img from "../../public/img/user4.png";


export const Team = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Jota Test é o nosso <Mark>Product Designer</Mark>, focado em criar 
              experiências visuais que elevam nossos templates a um novo nível.
            </p>
            <Avatar
              image={user3Img}
              name="Jota Test"
              title="Product Designer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Julli Mayanne é uma <Mark>Engenheira de Software</Mark> que garante 
              a eficiência e a robustez dos nossos templates personalizados.
            </p>
            <Avatar
              image={user4Img}
              name="Julli Mayanne"
              title="Engenheira de Software"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Isis Noronha, nossa segunda <Mark>Engenheira de Software</Mark>, 
              traz inovação e segurança para a nossa plataforma.
            </p>
            <Avatar
              image={userOneImg}
              name="Isis Noronha"
              title="Engenheira de Software"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Vitória Cramer é a <Mark>Copywriter</Mark> responsável por textos 
              envolventes que aumentam o impacto das nossas mensagens.
            </p>
            <Avatar
              image={userTwoImg}
              name="Vitória Cramer"
              title="Copywriter"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
