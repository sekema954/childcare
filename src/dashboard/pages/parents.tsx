import { useState } from 'react';

// Example Parents Data (Each parent has multiple kids)
const parentsData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    role: "Father",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    dob: "1988-03-12",
    dateHired: "2015-05-15",
    kids: [
      { name: "Alice", age: 5, dob: "2018-03-12", address: "123 Street, City, State" },
      { name: "Bob", age: 3, dob: "2020-05-14", address: "123 Street, City, State" },
    ],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 32,
    role: "Mother",
    email: "jane.smith@example.com",
    phoneNumber: "234-567-8901",
    dob: "1993-06-25",
    dateHired: "2017-06-20",
    kids: [
      { name: "Eve", age: 4, dob: "2019-06-25", address: "456 Avenue, City, State" },
    ],
  },
  {
    id: 3,
    firstName: "Tom",
    lastName: "Brown",
    age: 40,
    role: "Brother",
    email: "tom.brown@example.com",
    phoneNumber: "345-678-9012",
    dob: "1983-11-18",
    dateHired: "2012-03-01",
    kids: [
      { name: "Charlie", age: 6, dob: "2017-11-18", address: "789 Boulevard, City, State" },
      { name: "Diana", age: 2, dob: "2022-08-01", address: "789 Boulevard, City, State" },
    ],
  },
];

const Parents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter parents based on search term (either first name, last name, or email)
  const filteredParents = parentsData.filter(
    (parent) =>
      parent.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parent.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parent.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-4 mt-20">
      <h1 className="text-2xl font-semibold mb-4">Parents Information</h1>

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
              <th className="px-4 py-2 border border-gray-300 text-left">Kids</th>
            </tr>
          </thead>
          <tbody>
            {filteredParents.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-2 text-center border border-gray-300">
                  No results found
                </td>
              </tr>
            ) : (
              filteredParents.map((parent) => (
                <tr key={parent.id}>
                  <td className="px-4 py-2 border border-gray-300">{parent.id}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {parent.firstName} {parent.lastName}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{parent.age}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.role}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.phoneNumber}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.dob}</td>
                  <td className="px-4 py-2 border border-gray-300">{parent.dateHired}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {parent.kids.map((kid, index) => (
                      <div key={index}>
                        <strong>{kid.name}</strong> - {kid.age} years old
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parents;
