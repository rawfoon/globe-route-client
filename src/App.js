import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
