import { Card } from "./components/card";
import { ThemeTogglerButton } from "./components/theme-toggler-button";
import { ThemeProvider } from "./contexts/theme-context"

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Card />
    </ThemeProvider>
  );
}

export default App;
