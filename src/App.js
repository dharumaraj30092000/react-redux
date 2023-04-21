import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./form";
import Home from "./home";
import { Provider } from "react-redux";
import Store from "./store";

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
