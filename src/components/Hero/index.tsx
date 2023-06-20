import { SocialMedia } from "../SocialMedia";

export function Hero() {
  return (
    <section className="flex flex-col max-w-[1120px] mx-auto pc:mt-40 mob:pt-32 tablet:pt-32">
      <h1 className="flex font-source justify-center uppercase pc:text-6xl mob:text-2xl mob:text-center pc:text-left font-black mx-auto">
        Olá, eu sou João Andrade
      </h1>

      <span className="flex justify-center text-center text-xl mx-auto mt-8 pc:px-36 mob:px-4 leading-8">
        Desenvolvedor Web especializado em Frontend, criando Sites, Aplicativos
        e Sistemas que impulsionam o sucesso do seu serviço ou produto
      </span>

      <button className="flex justify-center items-center px-16 py-3 w-fit rounded-md bg-purple-500 uppercase mx-auto mt-11 tracking-widest font-bold ">
        Projetos
      </button>

    </section>
  );
}
