import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = file => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');

// Keep responsive fixes separate from the backend so the patch can be applied
// to an existing installation without touching authentication, keys or data.
test('responsive stylesheet is loaded after the site, Study and anatomy themes', () => {
  const main = read('src/main.jsx');
  assert.match(main, /import '\.\/responsive\.css'/);
  assert.ok(main.indexOf("import './responsive.css'") > main.indexOf("import './anatomy/anatomy.css'"));
  const css = read('src/responsive.css');
  assert.match(css, /max-width:365px/);
  assert.match(css, /max-width:490px/);
  assert.match(css, /max-width:760px/);
  assert.match(css, /max-width:960px/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});

test('mobile portfolio menu closes on route change, Escape, and backdrop click', () => {
  const src = read('src/portfolio/SiteHeader.jsx');
  assert.match(src, /setOpen\(false\);window\.scrollTo/);
  assert.match(src, /event\.key==='Escape'/);
  assert.match(src, /className="site-menu-backdrop"/);
  assert.match(src, /aria-expanded=\{open\}/);
  assert.match(src, /className="site-mobile-download"/);
  assert.match(src, /document\.body\.style\.overflow=previous/);
});

test('Study navigation uses collapsible, labelled touch groups', () => {
  const nav = read('src/components/Navbar.jsx');
  assert.match(nav, /study-mobile-group-toggle/);
  assert.match(nav, /aria-expanded=\{expanded===g\.label\}/);
  assert.match(nav, /aria-controls="study-tool-menu"/);
  assert.match(nav, /setMenuOpen\(false\)/);
});

test('anatomy has an accessible mobile body-part selector and details target', () => {
  const atlas = read('src/anatomy/AnatomyAtlas.jsx');
  assert.match(atlas, /htmlFor="mobile-anatomy-part"/);
  assert.match(atlas, /id="mobile-anatomy-part"/);
  assert.match(atlas, /id="atlas-details"/);
  assert.match(read('src/responsive.css'), /\.atlas-mobile-picker\{display:grid/);
});

test('mock exam uses five touch-friendly question columns on narrow screens', () => {
  const src = read('src/pages/MockExam.jsx');
  assert.match(src, /grid-cols-5 sm:grid-cols-10/);
});
