import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReadPost from "./components/ReadPost";
import ViewModal from "./components/ViewModal";
import Edit from "./components/Edit";

import Create from "./components/Create";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create/>} />
          <Route path="/:id" element={<Create/>} />
          {/* <Route path="/edit/:id" element={<Edit/>}  /> */}
          <Route path="/read" element={<ReadPost/>} />
          <Route path="/view" element={<ViewModal/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
