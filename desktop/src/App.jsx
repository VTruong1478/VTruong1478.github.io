import { WindowManagerProvider } from "./contexts/WindowManagerContext";
import DesktopLayout from "./components/desktop/DesktopLayout/DesktopLayout";
import Footer from "./components/desktop/Footer/Footer";
console.log("DEV MODE:", import.meta.env.DEV);

export default function App() {
  console.log("DEV MODE:", import.meta.env.DEV);

  return (
    <WindowManagerProvider>
      <DesktopLayout />
      <Footer />
    </WindowManagerProvider>
  );
}
