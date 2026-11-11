import { Link } from 'react-router-dom';
import { usePortfolio } from './PortfolioContext';
export default function SiteFooter() {
 const {portfolio}=usePortfolio();
 return <footer className="site-footer"><div className="site-container site-footer-inner"><div><Link className="site-footer-brand" to="/">{portfolio.site.name}<span className="brand-dot">.</span></Link><p>{portfolio.site.footerLine}</p></div><div className="site-footer-meta"><span>© {new Date().getFullYear()} {portfolio.site.name}</span><nav aria-label="Footer navigation"><Link to="/about">About</Link><Link to="/cv">CV</Link><Link to="/cv#experience">Experience</Link><Link to="/cv#education">Education</Link><Link to="/certifications">Certifications</Link><Link to="/skills">Skills</Link><Link to="/projects">Projects</Link><Link to="/achievements">Achievements</Link><Link to="/progress">Monthly progress</Link>{portfolio.site.showContact&&<Link to="/contact">Contact</Link>}{portfolio.site.showStudy&&<><Link to="/study/anatomy">Anatomy atlas</Link><Link to="/study">Study</Link></>}</nav></div></div></footer>;
}
