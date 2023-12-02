import HomeContent, { HContent } from "./content";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center dark:bg-zinc-950 pt-32">
      <section className="flex flex-col w-2/3 max-w-7xl items-center justify-start gap-9 dark:text-white">
        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl max-md:text-3xl">
          Sou o Evilis — Desenvolvedor Front End apaixonado por tecnologia e
          motociclismo.
        </h1>
        <ul className="flex gap-5 items-center w-full ">
          {HContent.map(({ index, href, icon }) => {
            return (
              <HomeContent key={index} href={href} index={index}>
                {icon}
              </HomeContent>
            );
          })}
        </ul>
        <div className="flex flex-col gap-6 max-md:gap-4 max-md:text-xs">
          <p>
            Desenvolvedor Frontend dedicado com experiência sólida em projetos
            web inovadores. Minhas habilidades incluem o desenvolvimento
            eficiente de aplicações com foco em React e Node, bem como a
            implementação de soluções avançadas com Next.js. Ao longo da minha
            jornada, foquei em aprimorar minha lógica de programação, buscando
            constantemente elevados padrões de qualidade.
          </p>
          <p>
            Minha paixão por aprendizado contínuo e crescimento me impulsiona a
            enfrentar desafios que ampliem minha capacidade de resolver
            problemas e aprimorar minhas habilidades técnicas. Estou confiante
            de que minha experiência e comprometimento com a excelência me
            tornam um ativo valioso para equipes de desenvolvimento.
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
