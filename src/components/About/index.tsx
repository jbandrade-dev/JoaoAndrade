import { Text } from "../Text";
import { HeaderAbout } from "./HeaderAbout";
import { KnowMe } from "./KnowMe";
import { Skills } from "./Skills";

export function About() {
  return (
    <section className="bg-gray-300 mt-64">
      <div className="mx-auto max-w-[1120px] pb-28">
        <HeaderAbout />
        <div className="grid pc:grid-cols-2 mob:grid-cols-1 tablet:grid-cols-1 pc:gap-24 mob:gap-14 tablet:gap-14 mt-16">
          <KnowMe />
          <Skills />
        </div>
        <div className="flex pc:justify-start mob:justify-center tablet:justify-center ">
          <button className="flex justify-center items-center px-16 py-3 w-fit rounded-md bg-purple-500 uppercase mt-6 tracking-widest font-bold">
            Contato
          </button>
        </div>
      </div>
    </section>
  );
}
