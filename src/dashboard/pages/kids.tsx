import { useState } from 'react';

// Example Kids Data
const kidsData = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 5,
      dob: "2018-03-12",
      address: "123 Street, City, State",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 4,
      dob: "2019-06-25",
      address: "456 Avenue, City, State",
    },
    {
      id: 3,
      firstName: "Tom",
      lastName: "Brown",
      age: 6,
      dob: "2017-11-18",
      address: "789 Boulevard, City, State",
    },
    {
      id: 4,
      firstName: "Liam",
      lastName: "Johnson",
      age: 3,
      dob: "2020-05-14",
      address: "321 Road, City, State",
    },
    {
      id: 5,
      firstName: "Emma",
      lastName: "Williams",
      age: 5,
      dob: "2018-09-02",
      address: "654 Lane, City, State",
    },
    {
      id: 6,
      firstName: "Olivia",
      lastName: "Jones",
      age: 4,
      dob: "2019-01-11",
      address: "987 Avenue, City, State",
    },
    {
      id: 7,
      firstName: "Noah",
      lastName: "Miller",
      age: 7,
      dob: "2016-12-23",
      address: "741 Street, City, State",
    },
    {
      id: 8,
      firstName: "Ava",
      lastName: "Davis",
      age: 6,
      dob: "2017-02-16",
      address: "852 Avenue, City, State",
    },
    {
      id: 9,
      firstName: "Isabella",
      lastName: "Garcia",
      age: 3,
      dob: "2020-07-09",
      address: "123 Boulevard, City, State",
    },
    {
      id: 10,
      firstName: "Mason",
      lastName: "Martinez",
      age: 5,
      dob: "2018-11-04",
      address: "654 Street, City, State",
    },
    {
      id: 11,
      firstName: "Lucas",
      lastName: "Rodriguez",
      age: 6,
      dob: "2017-04-30",
      address: "789 Lane, City, State",
    },
    {
      id: 12,
      firstName: "Ethan",
      lastName: "Hernandez",
      age: 4,
      dob: "2019-10-13",
      address: "963 Street, City, State",
    },
    {
      id: 13,
      firstName: "Mia",
      lastName: "Lopez",
      age: 7,
      dob: "2016-08-22",
      address: "741 Avenue, City, State",
    },
    {
      id: 14,
      firstName: "Harper",
      lastName: "Gonzalez",
      age: 6,
      dob: "2017-05-27",
      address: "852 Road, City, State",
    },
    {
      id: 15,
      firstName: "Charlotte",
      lastName: "Wilson",
      age: 5,
      dob: "2018-02-10",
      address: "963 Boulevard, City, State",
    },
    {
      id: 16,
      firstName: "Amelia",
      lastName: "Anderson",
      age: 3,
      dob: "2020-04-19",
      address: "321 Lane, City, State",
    },
    {
      id: 17,
      firstName: "James",
      lastName: "Thomas",
      age: 4,
      dob: "2019-12-01",
      address: "654 Avenue, City, State",
    },
    {
      id: 18,
      firstName: "Benjamin",
      lastName: "Jackson",
      age: 6,
      dob: "2017-09-23",
      address: "987 Street, City, State",
    },
    {
      id: 19,
      firstName: "Sebastian",
      lastName: "White",
      age: 5,
      dob: "2018-01-28",
      address: "741 Road, City, State",
    },
    {
      id: 20,
      firstName: "Jack",
      lastName: "Harris",
      age: 4,
      dob: "2019-03-15",
      address: "852 Boulevard, City, State",
    },
    {
      id: 21,
      firstName: "Daniel",
      lastName: "Clark",
      age: 3,
      dob: "2020-06-30",
      address: "963 Lane, City, State",
    },
    {
      id: 22,
      firstName: "Henry",
      lastName: "Lewis",
      age: 6,
      dob: "2017-10-04",
      address: "741 Avenue, City, State",
    },
  ];
const Kids = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter kids based on search term (either first or last name)
  const filteredKids = kidsData.filter(
    (kid) =>
      kid.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kid.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kid.address.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-semibold mb-4">Kids Information</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 border border-gray-300 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-auto max-h-180"> 
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className='text-[#3F00AF] font-bold'>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">First Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Last Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Age</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Date of Birth</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredKids.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-2 text-center border border-gray-300">
                  No results found
                </td>
              </tr>
            ) : (
              filteredKids.map((kid) => (
                <tr key={kid.id}>
                  <td className="px-4 py-2 border border-gray-300">{kid.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{kid.firstName}</td>
                  <td className="px-4 py-2 border border-gray-300">{kid.lastName}</td>
                  <td className="px-4 py-2 border border-gray-300">{kid.age}</td>
                  <td className="px-4 py-2 border border-gray-300">{kid.dob}</td>
                  <td className="px-4 py-2 border border-gray-300">{kid.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kids;
