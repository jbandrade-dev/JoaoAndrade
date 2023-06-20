import Link from "next/link";
import { Text } from "../Text";

export function KnowMe() {
  return (
    <section className="grid">
      <div className="grid gap-3 col-span-1">
        <h3 className="text-2xl pc:text-left mob:text-center tablet:text-center font-bold text-base-title">
          Conheça meu trabalho!
        </h3>
        <Text size="lg" className="text-base-text mt-5 mob:px-4 tablet:px-4 pc:px-0 pc:text-left mob:text-center tablet:text-center">
          Com formação em tecnologia da informação, sou desenvolvedor web
          especialista em React, crio sites e aplicativos que
          impulsionam o sucesso da sua marca. Confira alguns dos meus trabalhos
          na seção
          <Link className="font-bold px-1" href="/">
            Projetos
          </Link>
          .
        </Text>

        <Text size="lg" className="text-base-text mob:px-4 tablet:px-4 pc:px-0 pc:text-left mob:text-center tablet:text-center">
          Sinta-se à vontade para se conectar ou seguir meu
          <Link className="pl-1 font-bold" href="/">
            Linkedin
          </Link>
          , onde irei postar conteúdo útil relacionado a desenvolvimento
          e programação Web.
        </Text>

        <Text size="lg" className="text-base-text">
          
        </Text>
      </div>
    </section>
  );
}
