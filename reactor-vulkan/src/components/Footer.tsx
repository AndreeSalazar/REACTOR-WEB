import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-lime-500/50" />
            <span className="text-sm font-semibold text-zinc-300">REACTOR Framework</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-zinc-500">
             <span>{t('footer.madein')}</span>
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" 
               alt="Peru Flag" 
               className="h-4 w-6 rounded-sm shadow-sm opacity-80 hover:opacity-100 transition-opacity" 
             />
             <span>{t('footer.by')}</span>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-lime-400">Licencia MIT</a>
            <a href="#" className="hover:text-lime-400">Issues</a>
            <a href="#" className="hover:text-lime-400">Vulkan.org</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-zinc-600">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
