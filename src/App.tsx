import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StepTwo } from "./pages/StepTwo/StepTwo";
import { StepOne } from "./pages/StepOne/StepOne";
import { Layout } from "./pages/Layout/Layout";
import { NotFoundPages } from "./pages/NotFoundPages/NotFoundPages";
import { StepThree } from "./pages/StepThree/StepThree";
import { StepFour } from "./pages/StepFour/StepFour";
import { StepFive } from "./pages/StepFive/StepFive";
import { Packages } from "./pages/Packages/Packages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StepOne />} />
          <Route path="step-two" element={<StepTwo />} />
          <Route path="step-three" element={<StepThree />} />
          <Route path="step-four" element={<StepFour />} />
          <Route path="step-five" element={<StepFive />} />
          <Route path="orders" element={<Packages />} />
          <Route path="*" element={<NotFoundPages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
