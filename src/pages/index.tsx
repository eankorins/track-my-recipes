import User from "./component/user";
import UserCreate from "./component/userCreate";

const Home = () => {
  return (
    <main>
      <h1>Guestbook</h1>
      <User></User>
      <UserCreate></UserCreate>
    </main>
  );
};

export default Home;
