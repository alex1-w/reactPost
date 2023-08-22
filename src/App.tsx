import { Route, Routes } from "react-router-dom";
import { StepTwo } from "./pages/StepTwo/StepTwo";
import { StepOne } from "./pages/StepOne/StepOne";
import { Layout } from "./pages/Layout/Layout";
import { NotFoundPages } from "./pages/NotFoundPages/NotFoundPages";
import { StepThree } from "./pages/StepThree/StepThree";
import { StepFour } from "./pages/StepFour/StepFour";
import { StepFive } from "./pages/StepFive/StepFive";
import { Packages } from "./pages/Packages/Packages";
import { RequireAccess } from "./HOC/RequireAccess";
import AccessProvider from "./providers/AccessProvider";
import { OrderProvider } from "./providers/OrdersContext";
import { DataProvider } from "./providers/DataContext";

function App() {

  return (
    <AccessProvider>
      <OrderProvider>
        <DataProvider>

          <Routes>

            <Route path="/" element={<Layout />}>

              <Route index element={<StepOne />} />

              <Route path="step-two" element={
                <RequireAccess>
                  <StepTwo />
                </RequireAccess>}
              />

              <Route path="step-three" element={
                <RequireAccess>
                  <StepThree />
                </RequireAccess>}
              />

              <Route path="step-four" element={
                <RequireAccess>
                  <StepFour />
                </RequireAccess>}
              />

              <Route path="step-five" element={
                <RequireAccess>
                  <StepFive />
                </RequireAccess>}
              />

              <Route path="orders" element={<Packages />} />

              <Route path="*" element={<NotFoundPages />} />

            </Route>
            
          </Routes>

        </DataProvider>
      </OrderProvider>
    </AccessProvider>

  );
}

export default App;
