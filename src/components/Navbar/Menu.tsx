import { Text } from "../Text";

export const menu = [
  { name: "Home", href: "#" },
  { name: "Sobre", href: "#" },
  { name: "Projetos", href: "#" },
  { name: "Contato", href: "#" }
];

export function Menu() {
  return (
    <menu className="mob:hidden tablet:hidden pc:flex justify-center gap-3 uppercase">
      <ul className="flex-1 inline-flex gap-20">
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.href}>
                <Text size="md" className="font-bold tracking-widest">{item.name}</Text>
              </a>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}