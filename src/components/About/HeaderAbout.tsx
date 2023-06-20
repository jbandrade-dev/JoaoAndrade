import { Text } from "../Text";

export function HeaderAbout() {
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="flex justify-center text-4xl uppercase font-bold pc:pt-28 mob:pt-16 tablet:pt-16">
        Sobre mim
      </h2>
      <hr className="w-16 h-1 mx-auto bg-purple-500 border-0 rounded my-4 " />
      <Text className="flex justify-center text-center text-xl mx-auto pc:px-36 mob:px-4 tablet:px-4 leading-8 text-gray-900">
        Aqui você encontrará mais informações sobre mim, o que faço e minhas
        habilidades atuais principalmente em termos de programação e tecnologia
      </Text>
    </div>
  );
}
