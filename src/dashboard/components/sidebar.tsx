import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarLinks = [
    {name:"Profile", path:"/dashboard/profile"},
    { name: "Manage Kids", path: "/dashboard/kids" },
    { name: "Manage Employees", path: "/dashboard/employees" },
    { name: "Post a Job", path: "/dashboard/jobs" },
    { name: "Post an Event", path: "/dashboard/events" },
    { name: "Manage Parents", path: "/dashboard/parents" },
    {name:"Messages", path:"/dashboard/messages"},
  ];

  return (
    <aside className="max-w-[300px] border min-h-screen p-4 bg-gray-800 text-white">
      <div className="flex flex-col gap-4 mt-16">
        <h2 className="text-xl font-bold">Daycare Admin Dashboard</h2>
        <ul className="flex flex-col gap-4">
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="transition-all duration-[1s] ease-in-out hover:text-[#8F36FF]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
