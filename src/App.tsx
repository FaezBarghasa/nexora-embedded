import { useState, useEffect } from 'react';
import PCBBackground from './components/PCBBackground';
import { Header, Nav } from './components/HeaderNav';
import { GatewayView, IdentityView, DirectoryView, UplinkView } from './components/Views';

export default function App() {
  const [view, setView] = useState('gateway');
  const [started, setStarted] = useState(false);
  const [lang, setLang] = useState('fa');
  const [audioMuted, setAudioMuted] = useState(false);
  
  useEffect(() => {
    // Simulated firmware boot sequence
    const timer = setTimeout(() => setStarted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`relative min-h-screen text-[#E8F4F0] bg-[#0A0E14] ${lang === 'fa' ? 'font-vazirmatn' : 'font-sans'} selection:bg-[#00E5A0] selection:text-[#0A0E14] flex flex-col`}>
      <PCBBackground />

      {!started && (
        <div id="startupScreen" className="fixed inset-0 bg-[#0A0E14] z-50 flex flex-col justify-between p-8 font-mono text-[#E8F4F0]" dir="ltr">
          <div className="space-y-4">
            <div className="text-[32px] font-bold tracking-normal text-[#00E5A0]">NEXORA MASTER CONTROL PROTOCOLS // READY</div>
            <div className="text-[12px] text-[#1A2830]">--------------------------------------------------</div>
            <div className="text-[12px] tracking-[0.05em] space-y-1 h-[70vh] overflow-y-auto pr-4 text-[#8AB0A0]">
              <div className="animate-pulse">&gt; Reading structural reference vector designs...</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between text-[12px] font-medium tracking-[0.28em] uppercase border-t border-[#1A2830] pt-4 gap-2 text-[#3A5048]">
            <div>TARGET ARCHITECTURE: NEO-CORPO ENGINEERING</div>
            <div className="animate-pulse text-[#00E5A0]">BOOTSTRAPPING MAINBOARD REGISTERS [99%]</div>
          </div>
        </div>
      )}

      {started && (
        <div className="relative z-10 max-w-[1440px] w-full mx-auto flex flex-col flex-grow gap-6 p-4 md:p-6 min-h-screen">
          <Header lang={lang} setLang={setLang} audioMuted={audioMuted} setAudioMuted={setAudioMuted} />
          
          <Nav currentView={view} setView={setView} audioMuted={audioMuted} lang={lang} />
          
          {view === 'gateway' && <GatewayView audioMuted={audioMuted} setView={setView} lang={lang} />}
          {view === 'identity' && <IdentityView lang={lang} />}
          {view === 'directory' && <DirectoryView lang={lang} />}
          {view === 'uplink' && <UplinkView lang={lang} />}
          
          <footer className="flex-none flex items-center justify-between border-t border-[#1A2830] py-4 mt-auto text-[10px] font-bold font-mono text-[#3A5048] tracking-[0.3em] uppercase relative z-10">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">{lang === 'fa' ? 'کنترلر مرکزی نکسورا // نشست امن ۴۸۹-الف' : 'Nexora Master Control // Secure Session 489-A'}</span>
              <span className="sm:hidden">{lang === 'fa' ? 'نشست امن' : 'MM SecSession'}</span>
              <div className="w-16 sm:w-32 h-[1px] bg-[#1A2830]"></div>
              <span className="text-[#00E5A0]">{lang === 'fa' ? 'وضعیت ثبات‌ها: نرمال' : 'Registers Nominal'}</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="bg-[#1A2830] px-2 py-1 text-[#E8F4F0]">{lang === 'fa' ? 'کرنل پایدار' : 'Kernel OK'}</span>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}