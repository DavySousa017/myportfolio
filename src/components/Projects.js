import SubTitle from "./props/Subtitle";
import ScarletIMG from "../../public/gfscarlet.png";
import ExempleProject from "../../public/exempleproject.png";
import PropsProject from "./props/PropsProject";

const Projects = () => {
  return (
    <div id="projects" className="flex items-center justify-center">
      <section className="bg-black/20 w-full py-36">
        <div className="container mx-auto rounded-3xl">
          <div>
            <SubTitle title="Projetos" bold="recentes" />
            <div className="flex flex-wrap pl-5 gap-4 mt-4 items-center">
              <a className="py-3 px-8 bg-secundary rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                all
              </a>
              <a className="py-3 px-8 bg-white/30 rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                front-end
              </a>
              <a className="py-3 px-8 bg-white/30 rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                back-end
              </a>
              <a className="py-3 px-8 bg-white/30 rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                full-stack
              </a>
            </div>
          </div>
          <div className="mt-12 space-y-36">
            <PropsProject
              status="(desenvolvimento)"
              name="GF-Scarlet"
              description="O GF-Scarlet, é um projeto full-stack em desenvolvimento para um servidor privado de Grand-Fantasia, um MMORPG. Esse projeto conta com um sistema de Login e Cadastros (CRUD) de novos usuários por meio de um banco de dados PostgreSQL."
              img={ScarletIMG}
            />
            <PropsProject
              status="(desenvolvimento)"
              name="exemple project 02"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro laborum quibusdam, quaerat quisquam maiores cumque necessitatibus repellat sit libero fugit sunt dolore eos illum autem consectetur unde velit, laudantium."
              img={ExempleProject}
            />
            <PropsProject
              status="(desenvolvimento)"
              name="exemple project 02"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro laborum quibusdam, quaerat quisquam maiores cumque necessitatibus repellat sit libero fugit sunt dolore eos illum autem consectetur unde velit, laudantium."
              img={ExempleProject}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
