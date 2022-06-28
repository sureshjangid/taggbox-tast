import axios from "axios";
import Navbar from "./Navbar";
import {BrowserRouter , Switch ,Route} from 'react-router-dom';
import AddUser from "./AddUser";
import UserTable from "./UserTable";
import EditUser from "./EditUser";
function App() {

  return (
    <>
<BrowserRouter>
<Navbar/>
  <Switch>
    <Route exact path="/" component={UserTable} />
    <Route exact path="/addUser" component={AddUser} />
    <Route exact path="/edit/:id" component={EditUser} />
  </Switch>
</BrowserRouter>
    </>
  );
}

export default App;
