import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StepTwo } from "./pages/StepTwo/StepTwo";
import { StepOne } from "./pages/StepOne/StepOne";
import { Layout } from "./pages/Layout/Layout";
import { NotFoundPages } from "./pages/NotFoundPages/NotFoundPages";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<StepOne />} />
          <Route path="step-two" element={<StepTwo />} />
          <Route path="*" element={<NotFoundPages />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
