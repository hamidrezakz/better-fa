/**
 * Formats a number as Persian currency with the specified currency code.
 * @param value Numeric value
 * @param currency Currency code (default: IRR)
 * @param options Optional Intl.NumberFormat options
 * @returns Formatted Persian currency string
 * @example
 * // Default IRR (currency symbol before number)
 * formatFaCurrency(1000) // "‎ریال ۱٬۰۰۰"
 * // With custom currency (USD)
 * formatFaCurrency(1000, 'USD') // "‎$۱٬۰۰۰٫۰۰"
 * // With custom options
 * formatFaCurrency(1000, 'IRR', { maximumFractionDigits: 0 }) // "‎ریال ۱٬۰۰۰"
 */
export function formatFaCurrency(
  value: number,
  currency: string = "IRR",
  options?: Omit<Intl.NumberFormatOptions, "style" | "currency">,
): string {
  return new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency,
    ...options,
  }).format(value);
}
