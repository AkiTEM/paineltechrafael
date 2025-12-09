import "./globals.css";

export const metadata = {
  title: "Automation Panel - Rafael Tech",
  description: "Painel de vídeos de automação e tecnologia com YouTube Shorts",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>',
  },
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
