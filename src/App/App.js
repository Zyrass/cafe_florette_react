// dependancies
import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
