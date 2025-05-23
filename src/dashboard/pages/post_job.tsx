import { useState } from "react";

// Example Job Data (Replace with real data from an API or database)
const jobData = [
  {
    id: 1,
    role: "Teacher",
    description: "Responsible for taking care of the children, creating activities, and maintaining a safe environment.",
    salary: "$30,000 - $40,000",
    location: "Daycare Center 1",
    datePosted: "2025-03-01",
  },
  {
    id: 2,
    role: "Nurse",
    description: "Ensure the children's health and well-being by monitoring and administering medication.",
    salary: "$40,000 - $50,000",
    location: "Daycare Center 1",
    datePosted: "2025-04-01",
  },
  {
    id: 3,
    role: "Assistant",
    description: "Assist with day-to-day operations, help the teachers, and ensure the children are safe and entertained.",
    salary: "$25,000 - $35,000",
    location: "Daycare Center 2",
    datePosted: "2025-04-05",
  },
];

const Post_job = () => {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [jobs, setJobs] = useState(jobData); // Managing job data state

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you would typically send the job data to your backend API
    const newJob = {
      id: jobs.length + 1, // Auto increment ID
      role,
      description,
      salary,
      location,
      datePosted,
    };

    setJobs([...jobs, newJob]); // Add new job to state

    // Clear form
    setRole("");
    setDescription("");
    setSalary("");
    setLocation("");
    setDatePosted("");
  };

  // Handle job deletion
  const handleDelete = (jobId: number) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs); // Remove the job from state
  };

  return (
    <div className="container p-4 mt-30">
      <h1 className="text-2xl font-semibold mb-4">Post a Daycare Job</h1>

      {/* Form for posting a job */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium">
            Job Role
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Job Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label htmlFor="salary" className="block text-sm font-medium">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Date Posted */}
        <div>
          <label htmlFor="datePosted" className="block text-sm font-medium">
            Date Posted
          </label>
          <input
            type="date"
            id="datePosted"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Post Job
          </button>
        </div>
      </form>

      <h2 className="text-xl font-semibold mt-8 mb-4">Posted Daycare Jobs</h2>

      {/* Job Postings List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {jobs.map((job) => (
          <div key={job.id} className="p-4 border border-gray-300 rounded shadow-md">
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="text-sm text-gray-600">{job.description}</p>
            <p className="text-sm font-medium">Salary: {job.salary}</p>
            <p className="text-sm">Location: {job.location}</p>
            <p className="text-sm text-gray-500">Date Posted: {job.datePosted}</p>
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(job.id)}
              className="mt-2 text-red-500 hover:text-red-700"
            >
              Delete Job
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post_job;
