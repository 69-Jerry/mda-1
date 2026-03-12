import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer";
import MainRoutes from "./routes/main-routes";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <MainRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
