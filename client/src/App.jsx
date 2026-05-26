import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import VendorsPage from "./pages/VendorsPage";
import EventsPage from "./pages/EventsPage";
import BudgetPage from "./pages/BudgetPage";
import AboutPage from "./pages/AboutPage";
import PlanEventPage from "./pages/PlanEventPage";
import BookingPage from "./pages/BookingPage";
import VendorRegisterPage from "./pages/VendorRegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plan-event" element={<PlanEventPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/vendor-register" element={<VendorRegisterPage />}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;