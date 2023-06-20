import { projects } from "@/utils/projects";
import { HeaderProjects } from "./HeaderProjects";
import { CardProject } from "./CardProject";

export function Projects() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1120px] pb-20">
        <HeaderProjects />
      </div>

      <div className="grid pc:gap-28 mob:gap-20 tablet:gap-20 mx-auto max-w-[1120px] pb-28">
        {projects.map((project)=>{
          return(
            <CardProject key={project.id} project={project} />
          )
        })}
      </div>
    </section>
  );
}
