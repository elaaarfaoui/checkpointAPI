import logo from './logo.svg';
import './App.css';
import Profile from "./Component/Profile/Profile";
import UserList from "./Component/UserList/UserList";
import { Route ,Switch} from "react-router-dom";

function App() {
  return (
  <div className="App">
      
<Switch> 
<Route exact path="/" render={() => <UserList />} />   
<Route exact path="/user/:id" render={(props) => <Profile {...props} />} />
</Switch>  

  </div>
  
  );
}

export default App;
