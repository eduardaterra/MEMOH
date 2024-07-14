import MemohBlack from "@/app/assets/memoh-black";
import {
  email,
  instagram,
  linkedin,
  spotifyBlack,
  whatsapp,
} from "@/app/assets";
import "./styles.scss";
import { px } from "framer-motion";

const institutionalLinks = [
  { name: "Quem somos", link: "" },
  { name: "Como atuamos", link: "" },
  { name: "Dúvidas", link: "" },
  { name: "Contato", link: "" },
  { name: "Podcast", link: "" },
  { name: "Grupos Reflexivos", link: "" },
  { name: "Serviços exclusivos", link: "" },
  { name: "Na mídia", link: "" },
];

const socialMediasLinks = [
  { icon: spotifyBlack, link: "" },
  { icon: instagram, link: "" },
  { icon: whatsapp, link: "" },
  { icon: email, link: "" },
  { icon: linkedin, link: "" },
];

export default async function Footer() {
  return (
    <section id="footer" className="footer footer--container">
      <div className="footer--content">
        <div className="footer--navigation">
          <div className="footer--links-container">
            {institutionalLinks.map((link) => (
              <a key={link.name} href={link.link}>
                {link.name}
              </a>
            ))}
          </div>
          <MemohBlack />
        </div>
        <div className="footer--media-container">
          <p className="footer--media-title">Nos acompanhe nas nossas redes</p>
          <div className="footer--media-links">
            {socialMediasLinks.map((SocialMedia) => (
              <a key={SocialMedia.link} href={SocialMedia.link}>
                <SocialMedia.icon width={32} height={32} color="#000000" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

