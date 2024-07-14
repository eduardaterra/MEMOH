import MemohBlack from "@/app/assets/memoh-black";
import {
  email,
  instagram,
  linkedin,
  spotifyBlack,
  whatsapp,
} from "@/app/assets";
import "./styles.scss";

const institutionalLinks = [
  { name: "Quem somos", link: "https://memoh.com.br/#proposito" },
  { name: "Como atuamos", link: "https://memoh.com.br/#como-atuamos" },
  { name: "Dúvidas", link: "https://memoh.com.br/#FAQ" },
  { name: "Contato", link: "https://memoh.com.br/#contatos" },
  { name: "Podcast", link: "https://memoh.com.br/#podcast" },
  { name: "Grupos Reflexivos", link: "https://memoh.com.br/#como-atuamos" },
  { name: "Serviços exclusivos", link: "https://memoh.com.br/#memoh-co" },
  { name: "Na mídia", link: "https://memoh.com.br/#na-midia" },
];

const socialMediasLinks = [
  {
    icon: spotifyBlack,
    link: "https://open.spotify.com/show/0IT6Qhu5mWrKc9mpeN3dyg?si=817e46805a2443db",
  },
  { icon: instagram, link: "https://www.instagram.com/projeto.memoh/" },
  {
    icon: whatsapp,
    link: "https://api.whatsapp.com/send/?phone=5521971638030&text&type=phone_number&app_absent=0&utm_medium=email&_hsmi=233019099&_hsenc=p2ANqtz-9GFbNW_oVJ6SR2JFkOHaBLNgoSKBvh0IVJWAvjpUhZHAt92LhuFqcZFGvmLPTJWNE_oTeHdOH478KUgo8R6GRNuCCRHQ&utm_content=233019099&utm_source=hs_email",
  },
  { icon: email, link: "mailto:contato@memoh.com.br" },
  { icon: linkedin, link: "https://www.linkedin.com/company/memoh/" },
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

