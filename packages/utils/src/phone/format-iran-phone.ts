import { toEnglishDigits, toPersianDigits } from "../digits/convert";
import type { FormatIranPhoneOptions } from "../types/phone";

function normalizeIranMobileCore(value: string | number): string {
  const normalized = toEnglishDigits(value).replace(/\D/g, "");

  let mobile = normalized;
  if (mobile.startsWith("0098")) {
    mobile = mobile.slice(4);
  } else if (mobile.startsWith("98")) {
    mobile = mobile.slice(2);
  }

  if (mobile.startsWith("0")) {
    mobile = mobile.slice(1);
  }

  if (!/^9\d{9}$/.test(mobile)) {
    throw new Error("Invalid Iran mobile phone number");
  }

  return mobile;
}

/**
 * Formats an Iranian mobile phone number to standard UI or DB format with desired digits.
 * @param value Mobile phone number (string or number)
 * @param options Output format options (target, digits)
 * @returns Formatted phone number string
 * @example
 * // UI format, English digits (default)
 * formatIranPhone('09121234567') // "09121234567"
 * // DB format (international)
 * formatIranPhone('09121234567', { target: 'db' }) // "+989121234567"
 * // UI format, Persian digits
 * formatIranPhone('09121234567', { digits: 'fa' }) // "۰۹۱۲۱۲۳۴۵۶۷"
 * // Accepts numbers as input
 * formatIranPhone(9121234567) // "09121234567"
 * // Throws on invalid input
 * // formatIranPhone('12345') // Error: Invalid Iran mobile phone number
 */
export function formatIranPhone(
  value: string | number,
  options: FormatIranPhoneOptions = {},
): string {
  const target = options.target ?? "ui";
  const digits = options.digits ?? options.uiDigits ?? "en";
  const mobileCore = normalizeIranMobileCore(value);

  if (target === "db") {
    return `+98${mobileCore}`;
  }

  const uiPhone = `0${mobileCore}`;
  return digits === "fa" ? toPersianDigits(uiPhone) : uiPhone;
}
