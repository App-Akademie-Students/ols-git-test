export const formatDate = (iso: string, locale = "de-DE") =>
  new Date(iso).toLocaleDateString(locale, { timeZone: "UTC" });
