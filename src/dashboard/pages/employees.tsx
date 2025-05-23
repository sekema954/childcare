import { useState } from 'react';

// Example Employees Data
const employeesData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    role: "Security Guard",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    dob: "1993-03-12",
    dateHired: "2015-05-15",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    role: "Lead Teacher",
    email: "jane.smith@example.com",
    phoneNumber: "234-567-8901",
    dob: "1997-06-25",
    dateHired: "2017-06-20",
  },
  {
    id: 3,
    firstName: "Tom",
    lastName: "Brown",
    age: 35,
    role: "Janitor",
    email: "tom.brown@example.com",
    phoneNumber: "345-678-9012",
    dob: "1988-11-18",
    dateHired: "2012-03-01",
  },
  {
    id: 4,
    firstName: "Liam",
    lastName: "Johnson",
    age: 40,
    role: "Teacher",
    email: "liam.johnson@example.com",
    phoneNumber: "456-789-0123",
    dob: "1983-05-14",
    dateHired: "2010-02-25",
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Williams",
    age: 29,
    role: "Cook",
    email: "emma.williams@example.com",
    phoneNumber: "567-890-1234",
    dob: "1994-09-02",
    dateHired: "2016-12-05",
  },
  // Add more employees...
];

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter employees based on search term (either first name, last name, or email)
  const filteredEmployees = employeesData.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-semibold mb-4">Employees Information</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="p-2 border border-gray-300 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-auto max-h-180">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-[#3F00AF] font-bold">
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Age</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Role</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Phone Number</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Date of Birth</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Date Hired</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-2 text-center border border-gray-300">
                  No results found
                </td>
              </tr>
            ) : (
              filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-4 py-2 border border-gray-300">{employee.id}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{employee.age}</td>
                  <td className="px-4 py-2 border border-gray-300">{employee.role}</td>
                  <td className="px-4 py-2 border border-gray-300">{employee.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{employee.phoneNumber}</td>
                  <td className="px-4 py-2 border border-gray-300">{employee.dob}</td>
                  <td className="px-4 py-2 border border-gray-300">{employee.dateHired}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
