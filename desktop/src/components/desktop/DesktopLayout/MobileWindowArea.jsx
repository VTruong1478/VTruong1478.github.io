/**
 * Mobile window area: renders only the currently active (non-minimized) window.
 * Windows render in normal document flow, full width within margins, no dragging.
 */
import { useWindowManager } from "../../../contexts/WindowManagerContext";
import MobileWindow from "../Window/MobileWindow";

export default function MobileWindowArea({ windowContents = {} }) {
  const { windows } = useWindowManager();

  // Find the single active (non-minimized) window
  const activeWindow = Array.from(windows.values()).find(
    (w) => w.isOpen && !w.isMinimized
  );

  if (!activeWindow) {
    return null;
  }

  const ContentComponent = windowContents[activeWindow.id];
  if (!ContentComponent) {
    console.warn(`No content component found for window: ${activeWindow.id}`);
    return null;
  }

  return <MobileWindow window={activeWindow} content={<ContentComponent />} />;
}
