import { BrowserRouter } from "react-router-dom";

import Navbar from '../src/components/navbar/Navbar'
import Admin from "./pages/admin/ Admin";

export const backend_url = 'http://localhost:4000';
export const currency = '$';

function App() {
  return (
      <div>
        <Navbar />
        <Admin />
      </div>
  );
}

export default App;
