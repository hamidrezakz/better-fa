const LATIN_DIGIT_REGEX = /\d/g;

function createDigitTable(locale: string): string[] {
  return Array.from(
    new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210),
  ).reverse();
}

const LATIN_DIGITS = createDigitTable("en-u-nu-latn");
const PERSIAN_DIGITS = createDigitTable("fa-IR-u-nu-arabext");
const ARABIC_INDIC_DIGITS = createDigitTable("ar-u-nu-arab");

const NON_LATIN_TO_LATIN = new Map<string, string>(
  [...PERSIAN_DIGITS, ...ARABIC_INDIC_DIGITS].map((digit, index) => [
    digit,
    LATIN_DIGITS[index] ?? String(index),
  ]),
);

const NON_LATIN_DIGIT_REGEX = new RegExp(
  `[${[...NON_LATIN_TO_LATIN.keys()].join("")}]`,
  "gu",
);

/**
 * Converts Persian and Arabic-Indic digits to Latin digits (0–9).
 *
 * @example
 * toLatinDigits("۱۲۳۴"); // "1234"
 * toLatinDigits("١٢٣٤"); // "1234"
 * toLatinDigits("۱۲3۴"); // "1234"
 */
export function toLatinDigits(value: string | number): string {
  return String(value).replace(
    NON_LATIN_DIGIT_REGEX,
    (digit) => NON_LATIN_TO_LATIN.get(digit) ?? digit,
  );
}

/**
 * Converts Latin digits (0–9) to Persian digits (۰–۹).
 *
 * @example
 * toPersianDigits("1234"); // "۱۲۳۴"
 * toPersianDigits(5678); // "۵۶۷۸"
 * toPersianDigits("test 123"); // "test ۱۲۳"
 */
export function toPersianDigits(value: string | number): string {
  return String(value).replace(
    LATIN_DIGIT_REGEX,
    (digit) => PERSIAN_DIGITS[Number(digit)] ?? digit,
  );
}
