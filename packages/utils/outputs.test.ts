/**
 * Test outputs for better-fa utilities
 *
 * HOW TO RUN:
 * 1. Build the project: pnpm build
 * 2. Run this file: pnpm tsx packages/utils/outputs.test.ts
 *
 * All examples are extracted from JSDoc documentation and follow TypeScript standards.
 */

import type { FormatIranPhoneOptions } from "./dist/index.js";
import {
  formatFaDate,
  toEnglishDigits,
  toPersianDigits,
  formatFaNumber,
  formatFaCurrency,
  formatIranPhone,
} from "./dist/index.js";

// ============================================================================
// formatFaDate - تاریخ فارسی را فرمت می‌کند
// ============================================================================

console.log("\n📅 formatFaDate - Format dates to Persian locale\n");

console.log("Basic usage (Persian calendar):");
console.log("formatFaDate('2024-01-01')");
console.log("Result:", formatFaDate("2024-01-01"));
console.log("");

console.log("With Date object (Persian calendar):");
console.log("formatFaDate(new Date(2024, 0, 1))");
console.log("Result:", formatFaDate(new Date(2024, 0, 1)));
console.log("");

console.log("Full format: year (numeric), month (long), day (2-digit):");
console.log(
  "formatFaDate('2024-01-01', { year: 'numeric', month: 'long', day: '2-digit' })",
);
console.log(
  "Result:",
  formatFaDate("2024-01-01", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }),
);
console.log("");

console.log("Short format: year (2-digit), month (short):");
console.log("formatFaDate('2024-01-01', { year: '2-digit', month: 'short' })");
console.log(
  "Result:",
  formatFaDate("2024-01-01", { year: "2-digit", month: "short" }),
);
console.log("");

console.log("With weekday: long format with full date:");
console.log(
  "formatFaDate('2024-01-01', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })",
);
console.log(
  "Result:",
  formatFaDate("2024-01-01", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);
console.log("");

console.log("Time format: hour and minute:");
console.log(
  "formatFaDate('2024-01-01T15:30:00', { hour: '2-digit', minute: '2-digit' })",
);
console.log(
  "Result:",
  formatFaDate("2024-01-01T15:30:00", { hour: "2-digit", minute: "2-digit" }),
);
console.log("");

console.log("Gregorian calendar:");
console.log("formatFaDate('2024-01-01', { calendar: 'gregory' })");
console.log("Result:", formatFaDate("2024-01-01", { calendar: "gregory" }));

// ============================================================================
// Digit Conversion - تبدیل اعداد فارسی و انگلیسی
// ============================================================================

console.log(
  "\n\n🔢 Digit Conversion - Convert between Persian and English digits\n",
);

console.log("Convert Persian digits to English:");
console.log("toEnglishDigits('۱۲۳۴')");
console.log("Result:", toEnglishDigits("۱۲۳۴"));
console.log("");

console.log("Convert English digits to Persian:");
console.log("toPersianDigits('1234')");
console.log("Result:", toPersianDigits("1234"));
console.log("");

console.log("Convert number to Persian digits:");
console.log("toPersianDigits(5678)");
console.log("Result:", toPersianDigits(5678));
console.log("");

console.log("Mixed input (Persian and English):");
console.log("toPersianDigits('test 123')");
console.log("Result:", toPersianDigits("test 123"));

// ============================================================================
// formatFaNumber - اعداد را فرمت می‌کند
// ============================================================================

console.log("\n\n💯 formatFaNumber - Format numbers to Persian locale\n");

console.log("Format large number with thousands separator:");
console.log("formatFaNumber(123456)");
console.log("Result:", formatFaNumber(123456));
console.log("");

console.log("Format decimal number with Persian separators:");
console.log("formatFaNumber(1234.56)");
console.log("Result:", formatFaNumber(1234.56));

// ============================================================================
// formatFaCurrency - ارزهای مختلف را فرمت می‌کند
// ============================================================================

console.log("\n\n💵 formatFaCurrency - Format numbers as Persian currency\n");

console.log("Default IRR (Iranian Rial):");
console.log("formatFaCurrency(1000)");
console.log("Result:", formatFaCurrency(1000));
console.log("");

console.log("USD currency:");
console.log("formatFaCurrency(1000, 'USD')");
console.log("Result:", formatFaCurrency(1000, "USD"));
console.log("");

console.log("IRR with custom options (no decimal places):");
console.log("formatFaCurrency(1000, 'IRR', { maximumFractionDigits: 0 })");
console.log(
  "Result:",
  formatFaCurrency(1000, "IRR", { maximumFractionDigits: 0 }),
);

// ============================================================================
// formatIranPhone - شماره تلفن ایرانی را فرمت می‌کند
// ============================================================================

console.log("\n\n📱 formatIranPhone - Format Iranian phone numbers\n");

console.log("UI format with English digits (default):");
console.log("formatIranPhone('09121234567')");
console.log("Result:", formatIranPhone("09121234567"));
console.log("");

console.log("Database format (international format):");
console.log("formatIranPhone('09121234567', { target: 'db' })");
console.log("Result:", formatIranPhone("09121234567", { target: "db" }));
console.log("");

console.log("UI format with Persian digits:");
console.log("formatIranPhone('09121234567', { digits: 'fa' })");
console.log("Result:", formatIranPhone("09121234567", { digits: "fa" }));
console.log("");

console.log("Accept numbers as input:");
console.log("formatIranPhone(9121234567)");
console.log("Result:", formatIranPhone(9121234567));

console.log("\n✅ All examples completed!\n");
