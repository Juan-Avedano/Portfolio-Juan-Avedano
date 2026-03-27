import { useTheme } from "./context/ThemeContext";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { PORTFOLIO_DATA } from "./data/portfolio";
import fotoPerfil from "./assets/foto-perfil.jpg";
function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[#f8fafc] dark:bg-[#020617] text-slate-900 dark:text-white font-sans">
      {/* Botón de cambio de Tema Flotante */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-slate-800 rounded-full shadow-2xl border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <main>
        {/* --- SECCIÓN HERO --- */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/20 dark:border-slate-800/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* CONTENEDOR DE LA FOTO */}
              <div className="relative group">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-enterprise-blue shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img
                    src={fotoPerfil}
                    alt="Juan Cruz Avedano"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                </div>
                {/* Adorno decorativo detrás */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-enterprise-blue/20 rounded-3xl rotate-6"></div>
              </div>

              {/* CONTENEDOR DEL TEXTO */}
              <div className="text-center md:text-left flex-1">
                <span className="text-enterprise-blue font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                  {PORTFOLIO_DATA.profile.location}
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                  {/* Tomamos Juan Cruz (índice 0 y 1) */}
                  {PORTFOLIO_DATA.profile.name.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {/* Tomamos Avedano (índice 2) */}
                  <span className="text-enterprise-blue">
                    {PORTFOLIO_DATA.profile.name.split(" ")[2]}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
                  {PORTFOLIO_DATA.profile.about}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="#projects"
                    className="px-8 py-4 bg-enterprise-blue text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
                  >
                    Ver Proyectos
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm"
                  >
                    Contacto & CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN SKILLS --- */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <Skills />
          </div>
        </section>

        {/* --- SECCIÓN PROYECTOS --- */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <Projects />
          </div>
        </section>

        {/* --- SECCIÓN CONTACTO --- */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <Contact />
          </div>
        </section>
      </main>

      {/* --- FOOTER PROFESIONAL --- */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} — Diseñado y desarrollado por{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            {PORTFOLIO_DATA.profile.name}
          </span>
        </p>
        <p className="text-xs text-slate-400 mt-2">
          Construido con React, TypeScript y Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
