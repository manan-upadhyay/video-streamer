import { ThemeProvider } from "@emotion/react";
import Router from "./Router";
import { createTheme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<ThemeProvider
			theme={createTheme({
				mode: "dark",
			})}
		>
			<div className='App max-w-[100vw] bg-secondary'>
				<ToastContainer />
				<Router />
			</div>
		</ThemeProvider>
	);
};

export default App;
