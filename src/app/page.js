'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background animado futurista */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f172a] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(6,182,212,0.1))] -z-10"></div>
      
      {/* Particles effect */}
      <div className="fixed inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <header className="relative z-10 pt-12 pb-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo/Título com efeito neon */}
            <div className="mb-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 tracking-tight drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Painel de Automação
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
              Explore o futuro da <span className="text-cyan-400 font-semibold">tecnologia</span> e <span className="text-purple-400 font-semibold">automação</span>
            </p>
            
            {/* Frase do Rafael */}
            <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl backdrop-blur-sm">
              <p className="text-sm md:text-base text-yellow-300 font-medium italic">
                ✨ Rafael acredita que tecnologia deve simplificar, não complicar!
              </p>
            </div>

            {/* Botões sociais redesenhados */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              {/* Instagram */}
              <div className="group w-full md:w-auto">
                <a 
                  href="https://www.instagram.com/rafael.gsantos_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] group-hover:shadow-[0_0_40px_rgba(219,39,119,0.7)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-white font-bold relative z-10">@rafael.gsantos_</span>
                </a>
                <p className="text-xs text-gray-400 mt-3 text-center max-w-xs mx-auto">
                  Vídeos também no <span className="text-pink-400">Instagram</span>! 🎥
                </p>
              </div>

              {/* WhatsApp */}
              <div className="group w-full md:w-auto">
                <a 
                  href="https://wa.me/5511960303166?text=menu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] group-hover:shadow-[0_0_40px_rgba(34,197,94,0.7)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-white font-bold relative z-10">Robô Assistente</span>
                </a>
                <p className="text-xs text-gray-400 mt-3 text-center max-w-xs mx-auto">
                  Converse com o <span className="text-green-400">robô do Rafael</span>! Dicas e automações 🤖✨
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Grid de vídeos */}
        <main className="relative z-10 px-6 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 50}ms` }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card com glassmorphism */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:-translate-y-2">
                  
                  {/* Gradiente animado no hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Título */}
                  <h3 className="text-lg font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  {/* Container do vídeo */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.embed}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    ></iframe>
                    
                    {/* Botão para abrir no YouTube */}
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute bottom-3 right-3 bg-red-600/90 hover:bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center gap-2 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      YouTube
                    </a>
                  </div>
                  
                  {/* Badge de número */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    #{idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-6 border-t border-white/10 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                Automation Panel
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Todos os direitos reservados
              </p>
            </div>
            
            <div className="flex justify-center gap-6 text-sm">
              <a 
                href="https://www.instagram.com/rafael.gsantos_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                Instagram
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://wa.me/5511960303166?text=menu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
