import LoginButton from "../components/auth/LoginButton";
import LogoutButton from "../components/auth/LogoutButton";

console.log("TEST2");
const Home = () => {
  return (
		<>
			<h1>Home</h1>
			<LoginButton />
			<LogoutButton />
		</>
	);
};

export default Home;
