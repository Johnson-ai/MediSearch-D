import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFileSync(new URL(file, new URL('../', import.meta.url)), 'utf8');

test('generic homepage slogan strip is not rendered, even with older saved CMS content', () => {
  const home = read('src/portfolio/PortfolioHome.jsx');
  assert.doesNotMatch(home, /s\.valuesStrip|marquee-line|strip-word/);
  assert.doesNotMatch(read('src/data/portfolioDefault.js'), /HEALTHCARE\s*\|\s*LEARNING\s*\|\s*COMPASSION/);
  assert.doesNotMatch(read('src/portfolio/AdminDashboard.jsx'), /'valuesStrip'\s*,\s*'showContact'/);
});

test('mobile homepage atlas offers larger clickable markers and ordinary 48px choice buttons', () => {
  const teaser = read('src/anatomy/AnatomyTeaser.jsx');
  const figure = read('src/anatomy/AnatomyIllustration.jsx');
  const css = read('src/responsive.css');
  assert.match(teaser, /viewport=\{isMobile \? '145 70 360 660'/);
  assert.match(teaser, /largeTargets=\{isMobile\}/);
  assert.match(figure, /largeTargets && <circle className="anatomy-hit-area"/);
  assert.match(teaser, /role="group" aria-label="Select an organ to learn about"/);
  assert.match(teaser, /aria-pressed=\{selected\.id === part\.id\}/);
  assert.match(css, /\.home-atlas-choice\{min-height:48px/);
});

test('mobile anatomy selections announce the actual organ information near the diagram', () => {
  const teaser = read('src/anatomy/AnatomyTeaser.jsx');
  const css = read('src/responsive.css');
  assert.match(teaser, /setId\(nextId\)/);
  assert.match(teaser, /mobileDetailRef\.current\?\.scrollIntoView/);
  assert.match(teaser, /aria-live="polite"/);
  assert.match(teaser, /COMMON CONDITIONS/);
  assert.match(teaser, /splitItems\(part\.functions\)/);
  assert.match(teaser, /splitItems\(part\.conditions\)/);
  assert.match(css, /\.home-atlas-copy \.home-atlas-part\{display:none\}/);
  assert.match(css, /\.home-atlas-mobile-detail\{display:block!important/);
});
