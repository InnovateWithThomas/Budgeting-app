import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Layout from "./components/Layout";

console.log("TEST4");
function App() {

	return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
    </BrowserRouter>
  )
}

export default App