import "./globals.css";

export const metadata = {
  title: "Mural de Automação",
  description: "Homepage de vídeos de automação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
