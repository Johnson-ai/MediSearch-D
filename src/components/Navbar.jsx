import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_GROUPS = [
  {
    label: "Search",
    links: [
      { path: "/",     label: "Clinical Search" },
      { path: "/body", label: "Body Sciences"   },
    ]
  },
  {
    label: "Drugs",
    links: [
      { path: "/drug-lookup",       label: "Drug Reference"    },
      { path: "/drug-interactions", label: "Drug Interactions" },
    ]
  },
  {
    label: "Exam Prep",
    links: [
      { path: "/quiz",           label: "Exam Quiz"       },
      { path: "/past-questions", label: "Past Questions"  },
      { path: "/flashcards",     label: "Flashcards"      },
      { path: "/case-studies",   label: "Case Studies"    },
    ]
  },
  {
    label: "Reference",
    links: [
      { path: "/calculators", label: "Calculators"   },
      { path: "/lab-values",  label: "Lab Values"    },
      { path: "/nanda",       label: "NANDA-I"       },
      { path: "/mnemonics",   label: "Mnemonics"     },
      { path: "/vitals",      label: "Vitals"        },
    ]
  },
  {
    label: "About",
    links: [{ path: "/about", label: "About" }]
  },
];

const ALL_LINKS = NAV_GROUPS.flatMap(g => g.links);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-blue-900/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L12 22M2 12L22 12" />
            </svg>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-white text-base tracking-tight">Medi</span>
              <span className="font-display font-bold text-blue-400 text-base tracking-tight">Search</span>
              <span className="ml-1 text-[10px] text-blue-500 font-mono border border-blue-800 rounded px-1 py-px">D</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav — grouped dropdowns */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_GROUPS.map(group => (
            <div key={group.label} className="relative"
              onMouseEnter={() => setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}>
              <button className={`text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                group.links.some(l => l.path === location.pathname)
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-slate-500 hover:text-blue-300 hover:bg-blue-900/10"
              }`}>
                {group.label}
              </button>
              {activeGroup === group.label && group.links.length > 1 && (
                <div className="absolute top-full left-0 mt-1 glass border border-blue-900/40 rounded-xl overflow-hidden shadow-xl min-w-40">
                  {group.links.map(link => (
                    <Link key={link.path} to={link.path}
                      className={`block px-4 py-2.5 text-xs transition-colors ${location.pathname === link.path ? "text-blue-400 bg-blue-900/20" : "text-slate-400 hover:text-white hover:bg-blue-900/20"}`}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
              {activeGroup === group.label && group.links.length === 1 && (
                <Link to={group.links[0].path} />
              )}
            </div>
          ))}
        </div>

        {/* Damilare badge */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-600 border border-blue-900/30 rounded-full px-3 py-1.5 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
          Damilare Akossou
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-slate-500 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-blue-900/20 bg-navy-900/98 px-4 py-3 max-h-screen overflow-y-auto">
          {NAV_GROUPS.map(group => (
            <div key={group.label} className="mb-3">
              <div className="text-[10px] font-mono text-blue-800 uppercase tracking-widest mb-1 px-1">{group.label}</div>
              {group.links.map(link => (
                <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 px-2 text-sm border-b border-blue-900/15 last:border-0 transition-colors ${location.pathname === link.path ? "text-blue-400" : "text-slate-500 hover:text-slate-300"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
