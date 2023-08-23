import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";

function App() {
  return (
    <>
      <div className="container absolute  z-10 mx-auto -translate-x-2/4 p-4">
        <div className="absolute left-2/4">
        <Navbar routes={routes} />
        </div>
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
