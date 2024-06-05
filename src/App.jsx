import AppLayout from "./main/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <DarkModeProvider>
      <AppLayout />
      <Toaster
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#9ba0ac",
              padding: "1.5rem",
            },
          },
          error: {
            style: {
              background: "#9ba0ac",
              padding: "1.5rem",
            },
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
