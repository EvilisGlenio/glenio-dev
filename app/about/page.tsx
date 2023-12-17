import Image from "next/image";

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
            Apaixonado por programação e pelo impacto da tecnologia na vida das
            pessoas, minha missão é criar experiências inovadoras que conectem
            as pessoas aos seus objetivos. Como desenvolvedor, estou sempre
            aprendendo e crescendo, buscando melhorar minha técnica e me manter
            atualizado com as últimas tendências e tecnologias.
          </p>
          <p>
            Fora do trabalho, sou apaixonado por viajar de moto, assistir animes
            com minha esposa e manter um equilíbrio entre minha saúde física e
            mental. Ansioso para ver o rumo da minha carreira, continuando a
            aprender e crescer como desenvolvedor.
          </p>
        </div>

        <div className="grid h-full grid-cols-2 md:grid-cols-3 gap-4">
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image6.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              alt=""
            />
          </div>
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image9.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              alt=""
            />
          </div>
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image7.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              alt=""
            />
          </div>
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image2.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              alt=""
            />
          </div>
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image5.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              alt=""
            />
          </div>
          <div className="">
            <Image
              src="https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image8.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
