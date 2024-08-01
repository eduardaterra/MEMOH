import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import "./styles.scss";

export default async function EstudosDeCuidadoPage() {
  const client = createClient();
  const page = await client.getSingle("estudo_de_cuidado");

  return (
    <div className="study">
      <SliceZone components={components} slices={page.data.slices} />
    </div>
  );
}

