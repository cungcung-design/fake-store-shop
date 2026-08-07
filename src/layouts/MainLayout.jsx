import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
