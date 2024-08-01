import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import "./styles.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESTUDOS DE HOMENS E CUIDADO | MEMOH",
  authors: [
    {
      name: "Pedro de Figueiredo",
      url: "https://www.linkedin.com/in/pedroschneider",
    },
  ],
  icons: {
    icon: "/assets/icon.svg",
  },
  description:
    "O MEMOH tem o prazer de compartilhar este estudo autoral que tem como objetivo aproximar os homens do Cuidado. Uma aposta ético-política de contra-atacar o individualismo, o culto à violência, a falta de solidariedade. Esse estudo é para nós homens, que queremos contribuir na luta pela equidade de gênero, nos aproximarmos deste tema e tomá-lo como causa.",
};
export default async function EstudosDeCuidadoPage() {
  const client = createClient();
  const page = await client.getSingle("estudo_de_cuidado");

  return (
    <div className="study">
      <SliceZone components={components} slices={page.data.slices} />
    </div>
  );
}

