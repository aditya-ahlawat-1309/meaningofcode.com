import './App.css';
import { UserContextProvider } from './contexts/user';
import {Home} from "./pages";

function ReactSocial() {
  return (
    <UserContextProvider>
    <div className="app1">
      <Home/>
    </div>
    </UserContextProvider>
  );
}

export default ReactSocial;
