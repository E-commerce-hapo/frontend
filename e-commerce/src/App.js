import SlideBar from "./components/SlideBar/SlideBar";
import TopBar from "./components/TopBar/TopBar";
import "./App.css"
import Home from "./pages/Home/Home";
import Router from "./Router/Router";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import { useState } from "react";

function App() {
  const [active, setactive] = useState(true)
  const onActive = () => {
    setactive(!active)
  }
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div>
          <div style={{ height: "80px"}}>
          <TopBar/>
          </div>
          <div className="appContainer">
            <div className={`sliderBar ${active === true ? 'active': ''}`}>
              <SlideBar {...props} active={active} onActive = {onActive}/>
            </div>
            <div className="componentLayout">
              <Router/>
            </div>
          </div>
        </div>
      )}/>
    </BrowserRouter>
  );
}

export default App;
