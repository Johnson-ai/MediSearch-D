import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=p=>readFileSync(p,'utf8');

test('About has its own editor tab, and its fields update existing site JSON',()=>{
 const editor=read('src/portfolio/AdminDashboard.jsx');
 assert.match(editor, /id:'about',label:'About page'/);
 assert.match(editor, /about: \['aboutHeading','about','role','intro'\]/);
 assert.match(editor, /updateObject\('site',key,value\)/);
});
test('Public experience and education use sections inside the CV and legacy routes redirect',()=>{
 const pages=read('src/portfolio/PortfolioPages.jsx');
 const app=read('src/App.jsx');
 const header=read('src/portfolio/SiteHeader.jsx');
 assert.match(pages,/const CV_SECTION_LABELS/);
 assert.match(pages,/experience:/);
 assert.match(pages,/education:/);
 assert.match(pages,/id=\{id\} className="cv-record-section"/);
 assert.match(app,/path="\/experience" element=\{<Navigate to="\/cv#experience" replace\/>\}/);
 assert.match(app,/path="\/education" element=\{<Navigate to="\/cv#education" replace\/>\}/);
 assert.doesNotMatch(header,/to:'\/experience'/);
 assert.doesNotMatch(header,/to:'\/education'/);
});
test('Desktop CMS sidebar and editor scroll independently while mobile editor remains usable',()=>{
 const css=read('src/portfolio/pages.css');
 assert.match(css,/\.admin-dashboard\{height:100dvh;min-height:0;overflow:hidden\}/);
 assert.match(css,/\.admin-sidebar\{height:100%;min-height:0;overflow-y:auto/);
 assert.match(css,/\.admin-main\{height:100%;min-height:0;overflow-y:auto/);
 assert.match(css,/\.admin-main\{flex:1 1 auto;height:auto;min-height:0;overflow-y:auto\}/);
});
