import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/ Admin";

export const backend_url = 'http://localhost:4000';
export const currency = '$';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Admin />
      </div>
    </BrowserRouter>
  );
}

export default App;
