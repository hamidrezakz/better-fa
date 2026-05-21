import { toLatinDigits, toPersianDigits } from "../digits/convert";

/** `09xxxxxxxxx` or `+989xxxxxxxxx`. */
type IranMobileFormat = "national" | "e164";

/** `0–9` or `۰–۹`. */
type MobileDigitScript = "latin" | "persian";

type FormatIranMobileOptions = {
  format?: IranMobileFormat;
  digits?: MobileDigitScript;
};

const IRAN_MOBILE_CORE = /^9\d{9}$/;

function parseIranMobileCore(value: string | number): string {
  let digits = toLatinDigits(value).replace(/\D/g, "");

  if (digits.startsWith("0098")) {
    digits = digits.slice(4);
  } else if (digits.startsWith("98")) {
    digits = digits.slice(2);
  }

  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (!IRAN_MOBILE_CORE.test(digits)) {
    throw new RangeError("Invalid Iran mobile number");
  }

  return digits;
}

/**
 * Normalizes and formats an Iranian mobile number (09… / +989…).
 *
 * @example
 * formatIranMobile("09121234567"); // "09121234567"
 * formatIranMobile("09121234567", { format: "e164" }); // "+989121234567"
 * formatIranMobile("09121234567", { digits: "persian" }); // "۰۹۱۲۱۲۳۴۵۶۷"
 * formatIranMobile(9121234567); // "09121234567"
 */
export function formatIranMobile(
  value: string | number,
  options: FormatIranMobileOptions = {},
): string {
  const format = options.format ?? "national";
  const digits = options.digits ?? "latin";
  const core = parseIranMobileCore(value);

  if (format === "e164") {
    const e164 = `+98${core}`;
    return digits === "persian" ? toPersianDigits(e164) : e164;
  }

  const national = `0${core}`;
  return digits === "persian" ? toPersianDigits(national) : national;
}
