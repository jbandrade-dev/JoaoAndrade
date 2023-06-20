import { Text } from "../Text";

export function HeaderProjects() {
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="flex justify-center text-4xl uppercase font-bold pc:pt-28 mob:pt-16 tablet:pt-16">
        Projetos
      </h2>
      <hr className="w-16 h-1 mx-auto bg-purple-500 border-0 rounded my-4 " />
      <Text className="flex justify-center text-center text-xl mx-auto pc:px-36 tablet:px-4 mob:px-4 leading-8 text-gray-900">
        Aqui você encontra alguns dos meus projetos de estudo e de clientes que
        criei, cada projeto contem seu próprio estudo de caso e as ferramentas utilizadas no projeto
      </Text>
    </div>
  );
}
