import { createRoot } from 'react-dom/client';
import { Auth0Provider} from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

console.log("TEST6");
// const Layout = () =>{
// 	return (
// 		<div>
// 			<Outlet />
// 		</div>
// 	);
// };

// const router = createBrowserRouter([
// 	{
// 		path:'/',
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: "/login",
// 				element: <App />,
// 			}
// 		],
// 	}	
// ]);

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
	domain={domain}
	clientId={clientId}
	authorizationParams={{
      redirect_uri: window.location.origin,
    }}
	>
		<App />
  </Auth0Provider>
)
