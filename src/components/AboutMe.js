import SubTitle from "./props/Subtitle";
import Image from "next/image";
import AboutMeImage from "../../public/aboutme.png"

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-32 relative border-b-[1px] border-white/10"
    >
      <div className="container mx-auto my-0 px-24 max-[1300px]:px-4">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:items-center">
          <div className="max-w-[600px] max-lg:w-full max-lg:mb-10">
            <SubTitle title="Sobre" bold="mim" />
            <p className="text-justify text-lg mt-3 font-normal">
              Olá, sou um <b>programador web</b> apaixonado por transformar
              ideias em realidade digital. Nasci em <b>2004</b>, sou{" "}
              <b>brasileiro</b> e estudo{" "}
              <b>Análise e Desenvolvimento de Sistemas (ADS)</b> na Estácio.
              <br />
              <br />
              Minha jornada no desenvolvimento web é marcada pelo desejo
              constante de <b>aprender</b> e <b>evoluir</b>. Estou sempre em
              busca de novos <b>desafios</b> e <b>oportunidades</b> para
              aprimorar minhas habilidades em <b>design</b> e <b>programação</b>
              . Além de escrever código, sou um entusiasta da tecnologia e um
              curioso por natureza. Estou ansioso para enfrentar desafios
              futuros e contribuir para o mundo da web com inovação e
              criatividade.
            </p>
          </div>
          <div>
            <span>
              <Image src={AboutMeImage} alt="Ilustração" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;