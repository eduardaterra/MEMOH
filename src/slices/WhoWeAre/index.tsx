import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./styles.scss";
import MemohWhite from "@/app/assets/memoh-white";

/**
 * Props for `WhoWeAre`.
 */
export type WhoWeAreProps = SliceComponentProps<Content.WhoWeAreSlice>;

/**
 * Component for "WhoWeAre" Slices.
 */
const WhoWeAre = (): JSX.Element => {
  return (
    <section className="who-we-are">
      <MemohWhite />
      <h3>QUEM SOMOS</h3>
      <p>
        O MEMOH é um ecossistema de educação e conteúdo que convoca homens a
        refletirem em conjunto sobre os seus comportamentos, atuando por meio de
        Grupos Reflexivos, Produção de Conteúdo e Serviços de Consultoria
        voltados para o ambiente corporativo. Nosso propósito é mobilizar homens
        pela equidade de gênero por meio do debate de masculinidades.
      </p>
    </section>
  );
};

export default WhoWeAre;

