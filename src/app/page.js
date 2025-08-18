
export default function Home() {
  // Lista de vídeos (substitua os links pelo que desejar)
  const videos = [
    {
      title: "Automação YouTube #1",
      url: "https://www.youtube.com/shorts/DEPwJq_2_t8",
      embed: "https://www.youtube.com/embed/DEPwJq_2_t8",
      cover: "/automation-cover1.jpg",
    },
    {
      title: "Automação YouTube #2",
      url: "https://www.youtube.com/shorts/KvoKxY9JmcE",
      embed: "https://www.youtube.com/embed/KvoKxY9JmcE",
      cover: "/automation-cover2.jpg",
    },
    {
      title: "Automação YouTube #3",
      url: "https://www.youtube.com/shorts/gt3onrCr2F4",
      embed: "https://www.youtube.com/embed/gt3onrCr2F4",
      cover: "/automation-cover3.jpg",
    },
    {
      title: "Automação YouTube #4",
      url: "https://www.youtube.com/shorts/Ua9xjUDwM5E",
      embed: "https://www.youtube.com/embed/Ua9xjUDwM5E",
      cover: "/automation-cover4.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] font-sans flex flex-col items-center p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-2 tracking-tight drop-shadow-lg">Automation Panel</h1>
        <p className="text-lg text-gray-200 mb-4">Mural inovador de vídeos de automação e tecnologia</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://www.instagram.com/rafael.gsantos_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-transform font-semibold flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-5 h-5" />
            Instagram: @rafael.gsantos_
          </a>
          <a href="https://wa.me/5511960303166?text=menu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 via-green-600 to-blue-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-transform font-semibold flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
            Rafael Assistente (WhatsApp)
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-300">Também é possível assistir os vídeos no Instagram! <span className="text-cyan-400">(Clique nos botões acima para acessar)</span></div>
      </header>
      <main className="w-full max-w-5xl grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-[#181818] rounded-xl shadow-2xl p-6 flex flex-col items-center border border-cyan-700 hover:scale-[1.03] transition-transform">
            <h2 className="text-xl font-bold mb-3 text-cyan-300 text-center drop-shadow">{video.title}</h2>
            <div className="w-full aspect-video bg-gradient-to-tr from-cyan-700 via-blue-800 to-indigo-900 rounded-lg flex items-center justify-center overflow-hidden relative">
              <iframe
                width="100%"
                height="100%"
                src={video.embed}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-full"
              ></iframe>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-black/60 text-cyan-300 px-2 py-1 rounded text-xs hover:bg-cyan-700 transition-colors">Abrir no YouTube</a>
            </div>
          </div>
        ))}
      </main>
      <footer className="mt-16 text-gray-400 text-sm flex flex-col items-center gap-2">
        <span>© {new Date().getFullYear()} Automation Panel</span>
        <a href="https://www.instagram.com/rafael.gsantos_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Perfil Instagram: @rafael.gsantos_</a>
        <a href="https://wa.me/5511960303166?text=menu" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">WhatsApp</a>
      </footer>
    </div>
  );
}
