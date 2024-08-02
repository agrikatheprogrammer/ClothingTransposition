import "../stylings/App.css";

import Clotheinfo from "./Clotheinfo";
function Home({showLogin,loginStatus,user, isEmployee}) {
  return (
    <div className="App">
      
      <Clotheinfo showLogin={showLogin}loginStatus={loginStatus} user={user} isEmployee={isEmployee} />
    </div>
  );
}

export default Home;