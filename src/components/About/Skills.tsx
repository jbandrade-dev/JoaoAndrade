import { skills } from "@/utils/skills";
import Link from "next/link";

export function Skills() {
  return (
    <section>
      <h3 className="pc:text-left mob:text-center tablet:text-center text-2xl font-bold text-base-title">Minhas Skills</h3>
      <ul className="flex flex-wrap mob:justify-center pc:justify-start tablet:justify-center gap-4 mt-8 mob:px-4 tablet:px-4 pc:px-0">
        {skills.map((skill) => {
          return (
            <li className="flex justify-center rounded-md px-4 py-2 bg-gray-400" key={skill.name}>
              <Link href={skill.link}>{skill.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
