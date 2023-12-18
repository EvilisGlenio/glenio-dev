import Image from "next/image";

interface AboutContentProps {
  index: number;
  src: string;
  alt: string;
}

export const AboutContent: Array<AboutContentProps> = [
  {
    index: 1,
    src: "https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image6.jpg",
    alt: "",
  },
  {
    index: 2,
    src: "https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image7.jpg",
    alt: "",
  },
  {
    index: 3,
    src: "https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image9.jpg",
    alt: "",
  },
  {
    index: 4,
    src: "https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image8.jpg",
    alt: "",
  },
  {
    index: 5,
    src: "https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image2.jpg",
    alt: "",
  },
  {
    index: 6,
    src: "https://raw.githubusercontent.com/EvilisGlenio/glenio-dev/master/public/images/image5.jpg",
    alt: "",
  },
];

export const AboutContentComp = ({ index, src, alt }: AboutContentProps) => {
  return (
    <div key={index} className="grid gap-4 ">
      <div>
        <Image
          src={src}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-lg "
          alt={alt}
        />
      </div>
    </div>
  );
};
