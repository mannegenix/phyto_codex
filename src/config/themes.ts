import config from "./color-routes.json";
export const themes = config.routes;
export const defaultTheme = themes.find(theme => theme.number === config.defaultRouteNumber);
if (!defaultTheme) throw new Error("Unknown defaultRouteNumber in color-routes.json");
export const defaultRoute = defaultTheme.id;
export const themeCss = themes.map(theme => `:root[data-route="${theme.id}"]{color-scheme:${theme.colorScheme};${Object.entries(theme.colors).map(([key,value]) => `--${key}:${value};`).join("")}}`).join("\n");
