import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StepTwo } from "./pages/StepTwo/StepTwo";
import { StepOne } from "./pages/StepOne/StepOne";
import { Layout } from "./pages/Layout/Layout";
import { NotFoundPages } from "./pages/NotFoundPages/NotFoundPages";
import { StepThree } from "./pages/StepThree/StepThree";
import { StepFour } from "./pages/StepFour/StepFour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StepOne />} />
          <Route path="step-two" element={<StepTwo />} />
          <Route path="step-three" element={<StepThree />} />
          <Route path="step-four" element={<StepFour />} />
          <Route path="*" element={<NotFoundPages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
