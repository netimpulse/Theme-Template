/**
 * Test-Fixtures fuer den Visual-QA-Workflow.
 *
 * WICHTIG: Diese Datei wird aus dem Theme-Template kopiert und MUSS
 * pro Shop angepasst werden. Die Platzhalter __THEME_ID__,
 * __PRODUCT_HANDLE__, __COLLECTION_HANDLE__ usw. sind nicht funktional —
 * der Workflow stoppt in Schritt 0.5 (shopify-visual-qa Skill), bis
 * sie durch echte Werte aus dem aktuell verbundenen Shop ersetzt sind.
 *
 * Werte koennen vom Nutzer manuell gesetzt werden oder von Claude
 * via Shopify-MCP automatisch aus dem aktuellen Store ermittelt
 * werden (get-shop-info, themes(), products(), collections()).
 */

export const QA = {
  /** ID des Test-Themes (UNPUBLISHED) im Dev-Store. */
  themeId: "__THEME_ID__",

  /** Bekannte Fixtures im aktuellen Shop. Werden pro Repo gesetzt. */
  product: {
    handle: "__PRODUCT_HANDLE__",
  },
  collection: {
    handle: "__COLLECTION_HANDLE__",
  },

  /** Mapping: Template-Typ -> Pfad ohne Query-String. */
  paths: {
    home: "/",
    qaBlock: "/",
    product: "/products/__PRODUCT_HANDLE__",
    collection: "/collections/__COLLECTION_HANDLE__",
    cart: "/cart",
    search: "/search?q=test",
    notFound: "/this-page-does-not-exist",
  },
} as const;

export function withTheme(path: string): string {
  const sep = path.includes("?") ? "&" : "?";
  return `${path}${sep}preview_theme_id=${QA.themeId}`;
}
