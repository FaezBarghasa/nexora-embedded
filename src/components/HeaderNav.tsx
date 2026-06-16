import { playHardwareTone } from '../lib/audio';
import { t } from '../lib/i18n';
import { TechBox } from './TechBox';

export function Header({ lang, setLang, audioMuted, setAudioMuted }: any) {
  return (
    <TechBox className="flex-none" innerClassName="p-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 overflow-hidden" dir="ltr">
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[6px] opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #00E5A0 0px, #00E5A0 3px, transparent 3px, transparent 10px)' }}></div>
      <div className="absolute top-2 right-2 text-[10px] font-bold tracking-[0.2em] text-[#3A5048] font-mono uppercase">⊕ {t("FIDUCIAL_A", "en")}</div>

      {/* Master Hybrid Logo Lockup */}
      <div className="flex items-center gap-5 relative z-10 cursor-pointer" onClick={() => playHardwareTone(880, 0.08, audioMuted)}>
        <div className="flex-none">
          <svg viewBox="0 0 520 120" width="260" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Abstract Symbol */}
            <g id="abstract_symbol" transform="translate(0, 0)">
              <g id="traces">
                <path d="M 24 30 L 24 52 L 44 72 L 44 90" stroke="#00E5A0" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 44 18 L 44 52 L 54 62 L 54 74" stroke="#00E5A0" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 64 30 L 64 52" stroke="#00E5A0" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <g id="vias">
                <g transform="translate(24, 30)">
                  <circle r="8" fill="#0A0E14" stroke="#00E5A0" strokeWidth="3.5" />
                  <circle r="3" fill="#00E5A0" />
                </g>
                <g transform="translate(44, 18)">
                  <circle r="8" fill="#0A0E14" stroke="#00E5A0" strokeWidth="3.5" />
                  <circle r="3" fill="#00E5A0" />
                </g>
                <g transform="translate(64, 30)">
                  <circle r="8" fill="#0A0E14" stroke="#00E5A0" strokeWidth="3.5" />
                  <circle r="3" fill="#00E5A0" />
                </g>
                <g transform="translate(64, 52)">
                  <circle r="8" fill="#0A0E14" stroke="#00E5A0" strokeWidth="3.5" />
                  <circle r="3" fill="#00E5A0" />
                </g>
                <g transform="translate(44, 90)">
                  <circle r="8" fill="#0A0E14" stroke="#00E5A0" strokeWidth="3.5" />
                  <circle r="3" fill="#00E5A0" />
                </g>
              </g>
            </g>

            {/* Wordmark */}
            <g transform="translate(120, 72)">
              {/* Main Wordmark */}
              <text x="0" y="0" style={{ fontFamily: "'IBM Plex Mono', 'Courier Prime', 'Courier New', monospace", fontWeight: 900, fontSize: "34px", fill: "#E8F4F0" }}>nexora</text>
              
              {/* Vertical Divider */}
              <line x1="140" y1="-26" x2="140" y2="4" stroke="#1A2830" strokeWidth="1.5" />
              
              {/* Subtitle Stack */}
              <text x="155" y="-14" style={{ fontFamily: "'IBM Plex Sans', -apple-system, sans-serif", fontWeight: 600, fontSize: "9.5px", fill: "#3A5048", letterSpacing: "0.28em" }}>EMBEDDED</text>
              <text x="155" y="2" style={{ fontFamily: "'IBM Plex Sans', -apple-system, sans-serif", fontWeight: 600, fontSize: "9.5px", fill: "#3A5048", letterSpacing: "0.28em" }}>MEDICAL SYSTEMS</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-8 text-[10px] font-bold tracking-[0.2em] font-mono w-full lg:w-auto lg:border-l border-[#1A2830] lg:pl-8 uppercase">
        <div className="flex flex-col">
          <span className="text-[#3A5048] block mb-1">{t("LANG_JUMPER", "en")}</span>
          <button onClick={() => setLang(lang === 'en' ? 'fa' : 'en')} className="text-[#E8F4F0] hover:text-[#00E5A0] transition-colors border border-[#1A2830] hover:border-[#00E5A0] bg-[#0D1620] px-2 py-1">
            {lang === 'fa' ? t("[ JUMPER: EN ]", "en") : t("[ JUMPER: FA ]", "en")}
          </button>
        </div>
        <div>
          <span className="text-[#3A5048] block mb-1">{t("SYS_BUS_LINK", "en")}</span>
          <div className="flex items-center gap-2 mt-1 px-2 py-1 bg-transparent border border-transparent">
            <span className="w-2 h-2 bg-[#00E5A0] rounded-full inline-block animate-pulse"></span>
            <span className="text-[#00E5A0]">{t("IMPEDANCE_MATCHED", "en")}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[#3A5048] block mb-1">{t("SOUND_ENGINE", "en")}</span>
          <button onClick={() => setAudioMuted(!audioMuted)} className="text-[#E8F4F0] hover:text-[#00E5A0] transition-colors border border-[#1A2830] hover:border-[#00E5A0] bg-[#0D1620] px-2 py-1">
            {audioMuted ? t("AUDIO_MUTED", "en") : t("AUDIO_ACTIVE", "en")}
          </button>
        </div>
        <div className="flex flex-col">
          <span className="text-[#3A5048] block mb-1">{t("ACTIVE_TELEMETRY", "en")}</span>
          <span className="text-[#5BA3E8] mt-1 px-2 py-1 bg-transparent border border-transparent">{t("LINKING_SECURE... // STABLE", "en")}</span>
        </div>
      </div>
    </TechBox>
  );
}

export function Nav({ currentView, setView, audioMuted, lang }: any) {
  const navigate = (target: string) => {
    playHardwareTone(440, 0.06, audioMuted);
    setTimeout(() => playHardwareTone(880, 0.06, audioMuted), 60);
    setView(target);
  };

  const getBtnInnerClass = (viewName: string) => {
    const base = "font-mono text-[11px] font-bold tracking-[0.2em] transition-all text-start group uppercase min-w-[160px] py-3 px-4 h-full flex items-center justify-start ";
    if (viewName === currentView) {
      return base + "bg-[#008C5F]/10 text-[#E8F4F0]";
    }
    return base + "text-[#3A5048] group-hover:text-[#E8F4F0]";
  };
  
  const getBtnOuterClass = (viewName: string) => {
    const base = "w-full text-left ";
    if (viewName === currentView) {
      return base + "bg-[#00E5A0]";
    }
    return base;
  }

  return (
    <nav className="flex-none grid grid-cols-1 md:grid-cols-4 gap-3 relative z-10">
      <div className="md:col-span-4 flex items-center gap-4 mb-1">
        <span className="text-[10px] text-[#3A5048] font-bold tracking-[0.25em] font-mono uppercase">{t("Interface Controller Bus // ADR_0x00", lang)}</span>
        <div className="flex-grow h-[1px] bg-[#1A2830]"></div>
      </div>

      <TechBox variant={currentView === 'gateway' ? 'accent' : 'button'} interactive onClick={() => navigate('gateway')} className={getBtnOuterClass('gateway')} innerClassName={getBtnInnerClass('gateway')}>
        <span>{lang === 'fa' ? '[۰x۰۰] درگاه اصلی' : '[0x00] Core Gateway'}</span>
      </TechBox>
      <TechBox variant={currentView === 'identity' ? 'accent' : 'button'} interactive onClick={() => navigate('identity')} className={getBtnOuterClass('identity')} innerClassName={getBtnInnerClass('identity')}>
        <span>{lang === 'fa' ? '[۰x۰۱] درباره ما' : '[0x01] About Us'}</span>
      </TechBox>
      <TechBox variant={currentView === 'directory' ? 'accent' : 'button'} interactive onClick={() => navigate('directory')} className={getBtnOuterClass('directory')} innerClassName={getBtnInnerClass('directory')}>
        <span>{lang === 'fa' ? '[۰x۰۲] محصولات' : '[0x02] Products'}</span>
      </TechBox>
      <TechBox variant={currentView === 'uplink' ? 'accent' : 'button'} interactive onClick={() => navigate('uplink')} className={getBtnOuterClass('uplink')} innerClassName={getBtnInnerClass('uplink')}>
        <span>{lang === 'fa' ? '[۰x۰۳] تماس و همکاری' : '[0x03] Contact & Partnership'}</span>
      </TechBox>
    </nav>
  );
}