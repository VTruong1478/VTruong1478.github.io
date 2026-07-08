export function scrollWindowContentToTop(startElement) {
  const scrollContainer =
    startElement?.closest("#main-content") ??
    startElement?.closest(".overflow-y-auto");

  scrollContainer?.scrollTo({ top: 0, behavior: "instant" });
}
