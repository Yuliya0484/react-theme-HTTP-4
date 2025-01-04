import usersData from "./assets/users.json";
import User from "./components/users/user.jsx";

const App = () => {
  return (
    <div className="wrapper">
      {usersData.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default App;
