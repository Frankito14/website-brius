/**
 * Utility helper to merge class names conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Normalizes text for search: lowercase, trims, and strips accents / diacritics.
 * e.g., "Ginecología" -> "ginecologia", "Cardiólogo" -> "cardiologo"
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}
