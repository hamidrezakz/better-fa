# @better-fa/utils

Small Persian formatting helpers built on native `Intl` APIs. Framework-agnostic, tree-shakeable, zero runtime dependencies.

## Install

```bash
pnpm add @better-fa/utils
```

## Usage

```ts
import {
  FA_LOCALE,
  formatFaCurrency,
  formatFaDate,
  formatFaNumber,
  formatIranMobile,
  toLatinDigits,
  toPersianDigits,
} from "@better-fa/utils";

FA_LOCALE; // "fa-IR"

formatFaDate(new Date());
// e.g. ۱۴۰۴/۱۲/۸

formatFaDate("2026-02-27", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
// e.g. جمعه ۸ اسفند ۱۴۰۴

formatFaNumber(1_234_567);
// ۱٬۲۳۴٬۵۶۷

formatFaCurrency(1_250_000);
// ‎ریال ۱٬۲۵۰٬۰۰۰

formatFaCurrency(49.99, "USD");
// ‎$۴۹٫۹۹

toPersianDigits("Order #2026");
// Order #۲۰۲۶

toLatinDigits("Order #۲۰۲۶");
// Order #2026

formatIranMobile("+989305138169");
// 09305138169

formatIranMobile("+989305138169", { digits: "persian" });
// ۰۹۳۰۵۱۳۸۱۶۹

formatIranMobile("09305138169", { format: "e164" });
// +989305138169
```

## API

| Function                                       | Description                                     |
| ---------------------------------------------- | ----------------------------------------------- |
| `formatFaDate(value, options?)`                | `Intl.DateTimeFormat` for `fa-IR`               |
| `formatFaNumber(value, options?)`              | `Intl.NumberFormat` for `fa-IR`                 |
| `formatFaCurrency(value, currency?, options?)` | Currency formatting for `fa-IR`                 |
| `toLatinDigits(value)`                         | Persian / Arabic-Indic → Latin `0–9`            |
| `toPersianDigits(value)`                       | Latin `0–9` → Persian `۰–۹`                     |
| `formatIranMobile(value, options?)`            | Iranian mobile: national `09…` or E.164 `+989…` |

### `formatIranMobile` options

| Option   | Values                   | Default      |
| -------- | ------------------------ | ------------ |
| `format` | `"national"` \| `"e164"` | `"national"` |
| `digits` | `"latin"` \| `"persian"` | `"latin"`    |

Invalid dates and mobile numbers throw `RangeError`.

## Source layout

- `src/date` — dates
- `src/digits` — digit scripts
- `src/number` — numbers and currency
- `src/phone` — Iran mobile formatting
- `src/types` — shared option types
