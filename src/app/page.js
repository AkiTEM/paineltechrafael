
export default function Home() {
  // Lista de vídeos (substitua os links pelo que desejar)
  const videos = [
    {
      title: "Automação YouTube #1",
      url: "https://youtube.com/shorts/wcbVq_GZEBA?feature=share",
      embed: "https://www.youtube.com/embed/wcbVq_GZEBA",
      cover: "/automation-cover1.jpg",
    },
    {
      title: "Automação YouTube #2",
      url: "https://youtube.com/shorts/HDHAU3WlZOc?feature=share",
      embed: "https://www.youtube.com/embed/HDHAU3WlZOc",
      cover: "/automation-cover2.jpg",
    },
    {
      title: "Automação YouTube #3",
      url: "https://youtube.com/shorts/65EhlNStwFM?feature=share",
      embed: "https://www.youtube.com/embed/65EhlNStwFM",
      cover: "/automation-cover3.jpg",
    },
    {
      title: "Automação YouTube #4",
      url: "https://youtube.com/shorts/eGV-WWpjpJM?feature=share",
      embed: "https://www.youtube.com/embed/eGV-WWpjpJM",
      cover: "/automation-cover4.jpg",
    },
    {
      title: "Automação YouTube #5",
      url: "https://youtube.com/shorts/KM0tZEAGgGA?feature=share",
      embed: "https://www.youtube.com/embed/KM0tZEAGgGA",
      cover: "/automation-cover5.jpg",
    },
    {
      title: "Automação YouTube #6",
      url: "https://youtube.com/shorts/P-l3Srk8Mo8?feature=share",
      embed: "https://www.youtube.com/embed/P-l3Srk8Mo8",
      cover: "/automation-cover6.jpg",
    },
    {
      title: "Automação YouTube #7",
      url: "https://youtube.com/shorts/E1OuUXcgniI?feature=share",
      embed: "https://www.youtube.com/embed/E1OuUXcgniI",
      cover: "/automation-cover7.jpg",
    },
    {
      title: "Automação YouTube #8",
      url: "https://youtube.com/shorts/Py-gaxrJ_aM?feature=share",
      embed: "https://www.youtube.com/embed/Py-gaxrJ_aM",
      cover: "/automation-cover8.jpg",
    },
    {
      title: "Automação YouTube #9",
      url: "https://youtube.com/shorts/7-9-7QDx1_g?feature=share",
      embed: "https://www.youtube.com/embed/7-9-7QDx1_g",
      cover: "/automation-cover9.jpg",
    },
    {
      title: "Automação YouTube #10",
      url: "https://youtube.com/shorts/ADqhguEBRwU?feature=share",
      embed: "https://www.youtube.com/embed/ADqhguEBRwU",
      cover: "/automation-cover10.jpg",
    },
    {
      title: "Automação YouTube #11",
      url: "https://youtube.com/shorts/Wb1rxCmXyj4?feature=share",
      embed: "https://www.youtube.com/embed/Wb1rxCmXyj4",
      cover: "/automation-cover11.jpg",
    },
    {
      title: "Automação YouTube #12",
      url: "https://youtube.com/shorts/THtwwbI_Ews?feature=share",
      embed: "https://www.youtube.com/embed/THtwwbI_Ews",
      cover: "/automation-cover12.jpg",
    },
    {
      title: "Automação YouTube #13",
      url: "https://youtube.com/shorts/MQK0cikzysw?feature=share",
      embed: "https://www.youtube.com/embed/MQK0cikzysw",
      cover: "/automation-cover13.jpg",
    },
    {
      title: "Automação YouTube #14",
      url: "https://youtube.com/shorts/ilRZjUJsQyM?feature=share",
      embed: "https://www.youtube.com/embed/ilRZjUJsQyM",
      cover: "/automation-cover14.jpg",
    },
    {
      title: "Automação YouTube #15",
      url: "https://youtube.com/shorts/PB3qUp-3xbo?feature=share",
      embed: "https://www.youtube.com/embed/PB3qUp-3xbo",
      cover: "/automation-cover15.jpg",
    },
    {
      title: "Automação YouTube #16",
      url: "https://youtube.com/shorts/lrEfVLsnDGk?feature=share",
      embed: "https://www.youtube.com/embed/lrEfVLsnDGk",
      cover: "/automation-cover16.jpg",
    },
    {
      title: "Automação YouTube #17",
      url: "https://youtube.com/shorts/HngPwhc2sE4?feature=share",
      embed: "https://www.youtube.com/embed/HngPwhc2sE4",
      cover: "/automation-cover17.jpg",
    },
    {
      title: "Automação YouTube #18",
      url: "https://youtube.com/shorts/9uXWGl8ZK24?feature=share",
      embed: "https://www.youtube.com/embed/9uXWGl8ZK24",
      cover: "/automation-cover18.jpg",
    },
    {
      title: "Automação YouTube #19",
      url: "https://youtube.com/shorts/FRW2QcZKuuk?feature=share",
      embed: "https://www.youtube.com/embed/FRW2QcZKuuk",
      cover: "/automation-cover19.jpg",
    },
    {
      title: "Automação YouTube #20",
      url: "https://youtube.com/shorts/UzCOcL1yUdI?feature=share",
      embed: "https://www.youtube.com/embed/UzCOcL1yUdI",
      cover: "/automation-cover20.jpg",
    },
    {
      title: "Automação YouTube #21",
      url: "https://youtube.com/shorts/dc0ZY422Fyw?feature=share",
      embed: "https://www.youtube.com/embed/dc0ZY422Fyw",
      cover: "/automation-cover21.jpg",
    },
    {
      title: "Automação YouTube #22",
      url: "https://youtube.com/shorts/GRRC6vzEL2c?feature=share",
      embed: "https://www.youtube.com/embed/GRRC6vzEL2c",
      cover: "/automation-cover22.jpg",
    },
    {
      title: "Automação YouTube #23",
      url: "https://youtube.com/shorts/2hXe9x2i4JI?feature=share",
      embed: "https://www.youtube.com/embed/2hXe9x2i4JI",
      cover: "/automation-cover23.jpg",
    },
    {
      title: "Automação YouTube #24",
      url: "https://youtube.com/shorts/3gj5BW8phYE?feature=share",
      embed: "https://www.youtube.com/embed/3gj5BW8phYE",
      cover: "/automation-cover24.jpg",
    },
    {
      title: "Automação YouTube #25",
      url: "https://youtube.com/shorts/h62itl0CH9c?feature=share",
      embed: "https://www.youtube.com/embed/h62itl0CH9c",
      cover: "/automation-cover25.jpg",
    },
    {
      title: "Automação YouTube #26",
      url: "https://youtube.com/shorts/k3jMsg7cxUY?feature=share",
      embed: "https://www.youtube.com/embed/k3jMsg7cxUY",
      cover: "/automation-cover26.jpg",
    },
    {
      title: "Automação YouTube #27",
      url: "https://youtube.com/shorts/tsf4K2Be0Ik?feature=share",
      embed: "https://www.youtube.com/embed/tsf4K2Be0Ik",
      cover: "/automation-cover27.jpg",
    },
    {
      title: "Automação YouTube #28",
      url: "https://youtube.com/shorts/q_W7HVigaiY?feature=share",
      embed: "https://www.youtube.com/embed/q_W7HVigaiY",
      cover: "/automation-cover28.jpg",
    },
    {
      title: "Automação YouTube #29",
      url: "https://youtube.com/shorts/ZghSGNAc_Kc?feature=share",
      embed: "https://www.youtube.com/embed/ZghSGNAc_Kc",
      cover: "/automation-cover29.jpg",
    },
    {
      title: "Automação YouTube #30",
      url: "https://youtube.com/shorts/RWdRx1Zw20Y?feature=share",
      embed: "https://www.youtube.com/embed/RWdRx1Zw20Y",
      cover: "/automation-cover30.jpg",
    },
    {
      title: "Automação YouTube #31",
      url: "https://youtube.com/shorts/d8tc7zKcOWE?feature=share",
      embed: "https://www.youtube.com/embed/d8tc7zKcOWE",
      cover: "/automation-cover31.jpg",
    },
    {
      title: "Automação YouTube #32",
      url: "https://youtube.com/shorts/w5pkBJBFsSs?feature=share",
      embed: "https://www.youtube.com/embed/w5pkBJBFsSs",
      cover: "/automation-cover32.jpg",
    },
    {
      title: "Automação YouTube #33",
      url: "https://youtube.com/shorts/cBApEAVCHMY?feature=share",
      embed: "https://www.youtube.com/embed/cBApEAVCHMY",
      cover: "/automation-cover33.jpg",
    },
    {
      title: "Automação YouTube #34",
      url: "https://youtube.com/shorts/EgaXed0cRXg?feature=share",
      embed: "https://www.youtube.com/embed/EgaXed0cRXg",
      cover: "/automation-cover34.jpg",
    },
    {
      title: "Automação YouTube #35",
      url: "https://youtube.com/shorts/WHzgLBDw73w?feature=share",
      embed: "https://www.youtube.com/embed/WHzgLBDw73w",
      cover: "/automation-cover35.jpg",
    },
    {
      title: "Automação YouTube #36",
      url: "https://youtube.com/shorts/vz1QOJhbfok?feature=share",
      embed: "https://www.youtube.com/embed/vz1QOJhbfok",
      cover: "/automation-cover36.jpg",
    },
    {
      title: "Automação YouTube #37",
      url: "https://youtube.com/shorts/fROQyDObdhM?feature=share",
      embed: "https://www.youtube.com/embed/fROQyDObdhM",
      cover: "/automation-cover37.jpg",
    },
    {
      title: "Automação YouTube #38",
      url: "https://youtube.com/shorts/WIkLrCLvp_w?feature=share",
      embed: "https://www.youtube.com/embed/WIkLrCLvp_w",
      cover: "/automation-cover38.jpg",
    },
    {
      title: "Automação YouTube #39",
      url: "https://youtube.com/shorts/h84n1USQT7U?feature=share",
      embed: "https://www.youtube.com/embed/h84n1USQT7U",
      cover: "/automation-cover39.jpg",
    },
    {
      title: "Automação YouTube #40",
      url: "https://youtube.com/shorts/edv95JVtWMw?feature=share",
      embed: "https://www.youtube.com/embed/edv95JVtWMw",
      cover: "/automation-cover40.jpg",
    },
    {
      title: "Automação YouTube #41",
      url: "https://youtube.com/shorts/YzzVVvbBvkw?feature=share",
      embed: "https://www.youtube.com/embed/YzzVVvbBvkw",
      cover: "/automation-cover41.jpg",
    },
    {
      title: "Automação YouTube #42",
      url: "https://youtube.com/shorts/8xcGUefqns0?feature=share",
      embed: "https://www.youtube.com/embed/8xcGUefqns0",
      cover: "/automation-cover42.jpg",
    },
    {
      title: "Automação YouTube #43",
      url: "https://youtube.com/shorts/NpnPs1zGRTg?feature=share",
      embed: "https://www.youtube.com/embed/NpnPs1zGRTg",
      cover: "/automation-cover43.jpg",
    },
    {
      title: "Automação YouTube #44",
      url: "https://youtube.com/shorts/E4cUgc6WX0E?feature=share",
      embed: "https://www.youtube.com/embed/E4cUgc6WX0E",
      cover: "/automation-cover44.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] font-sans flex flex-col items-center p-6">
      <header className="mb-10 text-center">
  <h1 className="text-4xl font-extrabold text-cyan-400 mb-2 tracking-tight drop-shadow-lg">Painel de Automação</h1>
  <p className="text-lg text-gray-200 mb-4">Mural de vídeos com dicas de tecnologia para automação</p>
  <div className="mb-4 text-sm text-yellow-300 font-semibold italic drop-shadow-lg">Rafael acredita que tecnologia deve simplificar, não complicar!</div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2 w-full">
          <a href="https://www.instagram.com/rafael.gsantos_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition-transform font-semibold flex items-center gap-3 w-full sm:w-auto text-base">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
            Instagram: @rafael.gsantos_
          </a>
          <a href="https://wa.me/5511960303166?text=menu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 via-green-600 to-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition-transform font-semibold flex items-center gap-3 w-full sm:w-auto text-base">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
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
