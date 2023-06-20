import { SocialMedia } from "../SocialMedia";
import { Text } from "../Text";

export function Footer() {
  return (
    <footer className="bg-black text-white w-full pc:pt-28 mob:pt-16 tablet:pt-16 pc:px-0 mob:px-4 tablet:px-4">
      <div className="grid mx-auto max-w-[1120px]">
        <div className="pc:flex pc:justify-between mob:grid">
          <div className="pc:order-1 mob:order-2 tablet:order-2 pc:pt-0 mob:pt-12 tablet:pt-12">
            <h3 className="text-xl font-bold uppercase tracking-widest">
              João Andrade
            </h3>
            <div className="grid pt-6">
              <Text size="md" className="text-white">
                A Frontend focused Web Developer building the Frontend of
                Websites
              </Text>
              <Text size="md" className="text-white">
                and Web Applications that leads to the success of the overall
                product
              </Text>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase tracking-widest">
              Social
            </h3>
            <SocialMedia tailwind="flex pt-6 gap-4 w-fit" isFooter={true} />
          </div>
        </div>
        <hr className="w-full h-[0.5px] mx-auto bg-gray-900 border-0 rounded pc:mt-24 mob:mt-16 " />
        <Text className="text-center text-white text-2xs py-8">
          @ Copyright 2023. Made by João Andrade
        </Text>
      </div>
    </footer>
  );
}
