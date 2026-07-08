export const GRID_OVERLAY_TOGGLE_EVENT = "grid-overlay-toggle";

export function toggleGridOverlay() {
  window.dispatchEvent(new CustomEvent(GRID_OVERLAY_TOGGLE_EVENT));
}
