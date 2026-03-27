import { ExternalLink, Github, Layers, Target } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            Proyectos <span className="text-enterprise-blue">Destacados</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Soluciones técnicas aplicadas a problemas reales de negocio.
          </p>
        </div>
        <div className="h-1 w-24 bg-enterprise-blue hidden md:block mb-2"></div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-navy-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              {/* Header de la Card */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-enterprise-blue">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={
                      project.title === "Customer Portal"
                        ? "https://github.com/Juan-Avedano/CustomerPortal"
                        : "https://github.com/Juan-Avedano/RepuestosJN"
                    }
                    className="text-slate-400 hover:text-enterprise-blue transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-enterprise-blue transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={
                    project.title === "Customer Portal"
                      ? "https://www.youtube.com/embed/W6lDudRBax4"
                      : "https://www.youtube.com/embed/ALLWFxzM3nw"
                  }
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Contenido */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-enterprise-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights de Impacto */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-dashed border-slate-200 dark:border-slate-700">
                <Target className="w-4 h-4 text-enterprise-blue" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {project.highlights}
                </span>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
