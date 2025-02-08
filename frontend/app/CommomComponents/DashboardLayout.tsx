import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon from react-icons
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activePage,
  onNavigate,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar activePage={activePage} onNavigate={onNavigate} />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <button
          className="absolute top-4 left-4 md:hidden p-2 bg-gray-800 text-white rounded-full z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FiMenu size={24} />
        </button>

        <main className="flex-1 overflow-y-auto mt-16 p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
