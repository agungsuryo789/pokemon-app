import { Outlet } from "react-router-dom";

import Navbar from "./Component/navbar";
import Footer from "./Component/footer";

import "./App.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <main className="flex justify-center">
      <div className="bg-white dark:bg-neutral-800 min-w-full md:min-w-[480px] max-w-full md:max-w-[480px] layout-container">
		<Navbar/>
		<Outlet/>
		<Footer/>
      </div>
    </main>
  );
};

export default App;
