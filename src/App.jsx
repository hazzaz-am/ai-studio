import HomePage from "./pages/HomePage";
import GenerateImageProvider from "./providers/GenerateImageProvider";
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <GenerateImageProvider>
      <HomePage />
      <ToastContainer />
    </GenerateImageProvider>
  );
}