import Image from "next/image";
import HomeContent, { HContent } from "./content";
//document.documentElement.clientWidth > 640
export default function Home() {
  return (
    <main className="flex w-full min-h-[90%] flex-col items-center dark:bg-zinc-950 pt-32 max-md:pt-16">
      <section className="flex flex-col w-2/3 max-w-7xl items-center max-sm:justify-center sm:justify-start gap-9 md:gap-7 max-sm:gap-5">
        <div className="flex w-full max-sm:flex-col max-sm:items-center max-sm:gap-3 gap-2 sm:flex-row-reverse sm:items-center sm:justify-between  ">
          <div className="relative -z-0 flex-none max-sm:w-20 sm:w-24 md:w-28 max-sm:h-20 sm:h-24 md:h-28">
            <Image
              src="https://avatars.githubusercontent.com/u/69771563?v=4"
              className="rounded-full border-double border-8 dark:border-sky-700 border-zinc-900"
              fill
              alt=""
            />
          </div>
          <h1 className="flex-initial text-5xl max-sm:text-center max-lg:text-3xl max-md:text-2xl max-sm:text-xl dark:text-gray-50">
            Sou o Evilis — Desenvolvedor Front End apaixonado por tecnologia e
            motociclismo.
          </h1>
        </div>

        <ul className="flex gap-5 items-center max-sm:justify-center w-full ">
          {HContent.map(({ index, href, icon }) => {
            return (
              <HomeContent key={index} href={href} index={index}>
                {icon}
              </HomeContent>
            );
          })}
        </ul>
        <div className="flex flex-col max-sm:text-center gap-6 max-md:gap-4 max-sm:gap-3 max-md:text-xs text-gray-700 dark:text-gray-400 ">
          <p>
            Desenvolvedor dedicado com experiência sólida em projetos
            inovadores, especializado em React, Node e Next.js. Busco
            constantemente aprimorar minha lógica de programação, mantendo
            elevados padrões de qualidade em cada desenvolvimento.
          </p>
          <p>
            Minha paixão por aprendizado constante me impulsiona a enfrentar
            desafios, aprimorando minhas habilidades técnicas. Confio que minha
            experiência e busca pela excelência são ativos valiosos para equipes
            de desenvolvimento.
          </p>
          <p>
            Entusiasmado com oportunidades de contribuir para projetos
            inovadores, estou pronto para superar novos desafios no mundo do
            desenvolvimento web.
          </p>
        </div>
      </section>
    </main>
  );
}
