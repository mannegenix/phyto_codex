import { readFileSync, writeFileSync } from 'node:fs';
const config = JSON.parse(readFileSync('src/config/color-routes.json', 'utf8'));
const selected = config.routes.find(t => t.number === config.defaultRouteNumber);
if (!selected) throw new Error('Invalid defaultRouteNumber');
if (new Set(config.routes.map(t => t.number)).size !== config.routes.length) throw new Error('Duplicate route numbers');
let html = readFileSync('index.html', 'utf8');
for (const theme of config.routes) {
  const selector = `:root[data-route="${theme.id}"]`;
  const start = html.indexOf(selector + '{');
  const declarations = Object.entries(theme.colors).map(([key,value]) => `--${key}:${value};`).join('');
  const rule = `${selector}{color-scheme:${theme.colorScheme};${declarations}}`;
  if (start < 0) {
    const styleEnd = html.indexOf('</style>');
    html = html.slice(0,styleEnd) + rule + '\n' + html.slice(styleEnd);
  } else {
    const end = html.indexOf('}', start);
    html = html.slice(0,start) + rule + html.slice(end+1);
  }
  const button = new RegExp(`(<button[^>]*data-route="${theme.id}"[^>]*>.*?<b>)[^<]*(</b>)`);
  const swatchBackground = theme.colors['brand-gradient'] || `linear-gradient(90deg,${theme.colors.accent} 50%,${theme.colors.band} 50%)`;
  if (button.test(html)) {
    html = html.replace(button, `$1${theme.number}. ${theme.label}$2`);
    const swatchStyle = new RegExp(`(<button[^>]*data-route="${theme.id}"[^>]*>.*?<i style="background:)[^"]+("[^>]*>)`);
    html = html.replace(swatchStyle, `$1${swatchBackground}$2`);
  } else {
    const pickerEnd = html.indexOf('</div>',html.indexOf('<div class="route-pick"'));
    const swatch = `  <button type="button" data-route="${theme.id}" title="${theme.label}"><i style="background:${swatchBackground}"></i><b>${theme.number}. ${theme.label}</b></button>\n`;
    html = html.slice(0,pickerEnd) + swatch + html.slice(pickerEnd);
  }
}
html = html.replace(/<html[^>]*>/, `<html data-route="${selected.id}">`);
html = html.replace(/r=\[[^\n]+\.includes\(r\)\?r:"[^"]+";/, `r=${JSON.stringify(config.routes.map(t=>t.id))}.includes(r)?r:"${selected.id}";`);
// Each configured default gets its own preference so an old default cannot mask a new one.
html = html.replace(/pe-route(?:-default-\d+)?/g, `pe-route-default-${selected.number}`);
html = html.replace(/let savedRoute="[^"]+"; try\{savedRoute=localStorage.getItem\("[^"]+"\)\|\|"[^"]+"\}catch\(_\)\{\}/, `let savedRoute="${selected.id}"; try{savedRoute=localStorage.getItem("pe-route-default-${selected.number}")||"${selected.id}"}catch(_){}`);
const refinements = readFileSync('src/config/theme-refinements.css', 'utf8');
const style = `<style id="theme-refinements">${refinements}</style>`;
html = html.replace(/<style id="theme-refinements">[\s\S]*?<\/style>/g, '');
html = html.replace('</body>', style + '</body>');
writeFileSync('index.html',html);
console.log(`Synced ${config.routes.length} routes. Default: ${selected.number}. ${selected.label}`);
