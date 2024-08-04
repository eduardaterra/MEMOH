import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "./styles.scss";

/**
 * Props for `Podcast`.
 */
export type PodcastProps = SliceComponentProps<Content.PodcastSlice>;

/**
 * Component for "Podcast" Slices.
 */
const Podcast = (): JSX.Element => {
  return (
    <section className="podcast">
      <span>Ouça nosso podcast sobre Homens e Cuidado</span>
      <div className="podcast--spotify">
        <iframe
          style={{ border: "none", borderRadius: "14px" }}
          src="https://open.spotify.com/embed/episode/3QlgdcC5CSIPUBfxzqpJwN?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Podcast;

