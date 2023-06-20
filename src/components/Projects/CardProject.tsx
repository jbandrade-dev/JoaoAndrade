import Image from "next/image";
import { Text } from "../Text";

interface CardProjectsProps {
  project: {
    id: string;
    title: string;
    subTitle: string;
    textCard: string;
    link: string;
    projectLink: string;
    image: string;
    alt: string;
    type: string;
    tools: string[];
  };
}

export function CardProject({ project }: CardProjectsProps) {
  return (
    <section>
      <div className="grid pc:grid-cols-5 tablet:grid-cols-1 mob:grid-cols-1 items-center pc:gap-16 mob:gap-12 tablet:gap-12">
        <Image
          className="pc:col-span-3 mob:col-span-1 tablet:col-span-1"
          src={project.image}
          alt={project.alt}
          width={1841}
          height={1083}
        />

        <div className="grid pc:col-span-2 mob:col-span-1">
          <h3 className="pc:text-left mob:text-center text-3xl font-bold mb-6">
            {project.title}
          </h3>
          <Text
            size="lg"
            className="text-base-text pc:px-0 mob:px-4 tablet:px-4 pc:text-left mob:text-center tablet:text-center"
          >
            {project.textCard}
          </Text>
          <div className="flex pc:justify-start mob:justify-center tablet:justify-center ">
            <button className="flex justify-center items-center px-16 py-3 w-fit rounded-md bg-purple-500 uppercase mt-8 tracking-widest font-bold">
              Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
