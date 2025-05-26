import { Outlet } from "react-router";

console.log("TEST1");
function Layout() {
	return (
		<div className="app">
			<Outlet />
		</div>
	)
}

export default Layout