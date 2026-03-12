import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "@/pages/home";

import style from "./app.module.css";

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<div></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
