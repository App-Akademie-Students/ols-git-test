import { describe, expect, it } from "vitest";

import { formatDate } from "@/utils/format";

describe("formatDate", () => {
  it("formatiert ISO-Datum", () => {
    expect(formatDate("2026-11-23")).toBe("23.11.2026");
  });
});
