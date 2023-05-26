import { ThemeProvider } from "@emotion/react";
import Router from "./Router";
import { createTheme } from "./theme";

const App = () => {
	return (
		<ThemeProvider
			theme={createTheme({
				mode: "dark",
			})}
		>
			<div className='App max-w-[100vw] bg-secondary'>
				<Router />
			</div>
		</ThemeProvider>
	);
};

export default App;
