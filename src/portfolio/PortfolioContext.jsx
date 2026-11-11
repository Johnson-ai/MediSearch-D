import { createContext, useContext, useEffect, useState } from 'react';
import { defaultPortfolio } from '../data/portfolioDefault';
const PortfolioContext = createContext({ portfolio: defaultPortfolio, refresh: async () => {} });
export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(defaultPortfolio);
  const refresh = async () => {
    try {
      const response = await fetch('/api/content', { cache: 'no-store' });
      if (response.ok) { const json = await response.json(); if (json.content?.site) setPortfolio({ ...defaultPortfolio, ...json.content, site: {...defaultPortfolio.site, ...json.content.site}, updates: Array.isArray(json.content.updates)?json.content.updates:[], ...Object.fromEntries(['experience','education','certifications','projects','achievements'].map(k=>[k,(json.content[k]||[]).map(row=>({month:'',...row}))])), study: {...defaultPortfolio.study, ...json.content.study}, anatomy: defaultPortfolio.anatomy.map(part => ({...part, ...(json.content.anatomy?.find(item => item.id === part.id) || {})})) }); }
    } catch { /* Fall back to public starter content when backend is not set up. */ }
  };
  useEffect(() => { refresh(); }, []);
  useEffect(() => {
    document.title = portfolio.site.seoTitle || 'Abigael Akossou';
    document.querySelector('meta[name="description"]')?.setAttribute('content', portfolio.site.seoDescription || 'Professional portfolio');
  }, [portfolio.site.seoTitle, portfolio.site.seoDescription]);
  return <PortfolioContext.Provider value={{ portfolio, refresh }}>{children}</PortfolioContext.Provider>;
}
export const usePortfolio = () => useContext(PortfolioContext);
