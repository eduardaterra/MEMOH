import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./styles/globals.scss";

const tillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "GRUPO REFLEXIVO",
  authors: [
    {
      name: "Pedro de Figueiredo",
      url: "https://www.linkedin.com/in/pedroschneider",
    },
  ],
  description:
    "Essa é uma convocação pra você, homem incomodado que quer refletir e agir sobre questões de gênero. Os nossos grupos são espaços seguros onde podemos discutir e questionar as masculinidades, onde ele nos trouxe e pra qual lugar não queremos que ela nos leve enquanto sociedade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={tillium.className}>{children}</body>
    </html>
  );
}

