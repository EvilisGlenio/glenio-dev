import React from "react";

const About = () => {
  return (
    <main className="flex w-full h-full flex-col items-center dark:bg-zinc-950 pt-32">
      <section className="flex flex-col w-2/3 max-w-7xl items-center justify-start gap-9 md:gap-7 max-sm:gap-5">
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl dark:text-gray-50">
          Meu objetivo é criar pontes entre as pessoas e seus sonhos usando a
          tecnologia.
        </h1>

        <div className="flex flex-col gap-6 max-md:gap-4 max-sm:gap-3 max-md:text-xs text-gray-700 dark:text-gray-400 ">
          <p>
            Sou apaixonado por programação e pelo impacto que a tecnologia pode
            ter na vida das pessoas. Minha missão é utilizar minhas habilidades
            e conhecimentos para criar experiências inovadoras e envolventes que
            conectem as pessoas aos seus objetivos. Como desenvolvedor, estou
            sempre aprendendo e crescendo, buscando sempre melhorar minha
            técnica e me manter atualizado com as últimas tendências e
            tecnologias.
          </p>
          <p>
            Atualmente, colocando minhas habilidades em prática criando
            aplicações do mundo real que gere resultados. Como desenvolvedor
            junior, estou ansioso para adquirir experiência em um ambiente
            profissional e trabalhar com outros desenvolvedores para criar
            projetos incríveis.
          </p>
          <p>
            Fora do trabalho, adoro viajar de moto e curtir animes na companhia
            de minha esposa. Acredito que ter uma vida equilibrada é importante,
            e tento cuidar da minha saúde física e mental, mantendo-me ativo e
            passando tempo com as pessoas que amo. Estou animado para ver para
            onde minha carreira me levará e continuar aprendendo e crescendo
            como desenvolvedor.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
