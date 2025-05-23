import Introbar from "../components/introbar";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Admin_dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Introbar (Topbar) */}
        <Introbar />

        {/* Main content (children components like kids, employees, etc.) */}
        <div className="p-4 flex-1">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Admin_dashboard;
