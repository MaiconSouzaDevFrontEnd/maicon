import "./globals.css";

export const metadata = {
  title: "Maicon Souza - Frontend Developer",
  description: "Este site contém informações sobre mim, Maicon Souza. Sou desenvolvedor frontend e aqui você pode conhecer melhor a minha trajetória, os meus projetos e as minhas redes sociais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
