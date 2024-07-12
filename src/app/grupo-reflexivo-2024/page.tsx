import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import "./styles.scss";

export default async function GrupoReflexivoPage() {
  const client = createClient();
  const page = await client.getSingle("grupo_reflexivo");
  const desktop = page.data.slices;

  const mobile = page.data.slices1;

  return (
    <div className="home">
      <section className="desktop">
        <SliceZone components={components} slices={desktop} {...page} />
      </section>
      <section className="mobile">
        <SliceZone components={components} slices={mobile} {...page} />
      </section>
    </div>
  );
}

