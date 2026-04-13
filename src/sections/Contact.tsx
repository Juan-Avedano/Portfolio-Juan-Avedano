import React, { useRef, useState } from "react";
import {
  Linkedin,
  Github,
  Send,
  ExternalLink,
  CheckCircle,
  FileText,
  AlertCircle,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    // CONFIGURACIÓN DE EMAILJS
    emailjs
      .sendForm(
        "service_fmhd1yl", // Reemplazá con tu ID
        "template_jz7vuko", // Reemplazá con tu ID
        formRef.current,
        "7o_nhYBNkiJQlZZBL", // Reemplazá con tu Key
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset(); // Limpia los campos automáticamente

        // Resetear el botón después de 3 segundos para permitir otro envío
        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Hablemos de tu{" "}
          <span className="text-enterprise-blue">Próximo Proyecto</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          ¿Buscás un desarrollador con mentalidad ágil y enfoque en
          escalabilidad?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Canales Directos */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              <Linkedin className="w-8 h-8 text-[#0077B5] mb-2" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ExternalLink className="w-3 h-3 mt-1 opacity-0 group-hover:opacity-100" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              <Github className="w-8 h-8 text-slate-900 dark:text-white mb-2" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            {/* CV DESCARGABLE */}
            <a
              href={PORTFOLIO_DATA.profile.cvUrl}
              download
              className="flex flex-col items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-enterprise-blue/10 hover:bg-enterprise-blue hover:text-white transition-all group"
            >
              <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform text-enterprise-blue group-hover:text-white" />
              <span className="text-xs font-bold uppercase">Descargar CV</span>
            </a>
            <a
              href="/Certificaciones_Juan_Cruz_Avedano.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-enterprise-blue/10 hover:bg-enterprise-blue hover:text-white transition-all group"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Certificaciones</span>
            </a>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <form
          ref={formRef} // <--- IMPORTANTE: Para que EmailJS lea los datos y podamos resetear
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider text-slate-500">
              Nombre
            </label>
            <input
              name="user_name" // <--- AGREGAR ESTO (Coincidir con {{user_name}} en EmailJS)
              required
              type="text"
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-enterprise-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider text-slate-500">
              Email
            </label>
            <input
              name="user_email" // <--- AGREGAR ESTO (Coincidir con {{user_email}} en EmailJS)
              required
              type="email"
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-enterprise-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 uppercase tracking-wider text-slate-500">
              Mensaje
            </label>
            <textarea
              name="message" // <--- AGREGAR ESTO (Coincidir con {{message}} en EmailJS)
              required
              rows={4}
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-enterprise-blue"
            ></textarea>
          </div>

          <button
            disabled={status !== "idle"}
            className={`w-full h-14 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
              status === "success"
                ? "bg-green-600"
                : status === "error"
                  ? "bg-red-600"
                  : "bg-enterprise-blue hover:bg-blue-700"
            } text-white shadow-lg`}
          >
            {status === "idle" && (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar Mensaje</span>
              </>
            )}

            {status === "sending" && (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 animate-bounce" />
                <span>¡Enviado con éxito!</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <span>Revisá los datos</span>
              </div>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
