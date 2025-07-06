import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/common/theme-provider.tsx";
import { ReactQueryProvider } from "./shared/providers/react-query-provider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReactQueryProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<App />
				<Toaster position="top-right" />
			</ThemeProvider>
		</ReactQueryProvider>
	</StrictMode>
);
