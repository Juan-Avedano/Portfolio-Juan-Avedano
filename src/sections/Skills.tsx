import { PORTFOLIO_DATA } from "../data/portfolio";
const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">
        Experiencia{" "}
        <span className="text-enterprise-blue underline decoration-2 underline-offset-8">
          Técnica
        </span>
      </h2>

      <div className="space-y-16">
        {/* MAPEAMOS LAS CATEGORÍAS DESDE PORTFOLIO_DATA */}
        {PORTFOLIO_DATA.skillGroups.map((group, index) => (
          <div key={index} className="space-y-6">
            {/* Título de la subsección */}
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 border-l-4 border-enterprise-blue pl-4">
              {group.title}
            </h3>

            {/* Contenedor de Skills separadas */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-md hover:border-enterprise-blue transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {/* Renderizado dinámico del icono con su color oficial */}
                    {skill.icon ? (
                      <skill.icon style={{ color: skill.color }} />
                    ) : (
                      <div className="w-6 h-6 bg-slate-200 rounded-full" /> // Fallback por si no hay icono
                    )}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
