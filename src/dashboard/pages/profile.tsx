import React, { useState } from 'react';

function Profile() {
  // Initial mock data for the admin profile
  const [profile, setProfile] = useState({
    name: "John Doe",
    role: "Admin",
    email: "admin@example.com",
    phoneNumber: "(123) 456-7890",
  });

  // State to manage form input for profile updates
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phoneNumber: profile.phoneNumber,
    newPassword: "",
    confirmPassword: "",
  });

  // State to handle password/email change visibility
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle password or email change toggle
  const handlePasswordToggle = () => {
    setShowPasswordChange((prev) => !prev);
  };

  // Handle saving the updated profile information
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to the backend or update the state.
    setProfile({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    });

    alert("Profile updated successfully!");
  };

  // Handle password change
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword === formData.confirmPassword) {
      alert("Password changed successfully!");
      setFormData({
        ...formData,
        newPassword: "",
        confirmPassword: "",
      });
      setShowPasswordChange(false);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto mt-17">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#8F36FF]">Admin Profile</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your admin profile settings.</p>
      </header>

      {/* Profile Form */}
      <form onSubmit={handleSaveProfile} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        {/* Password Change */}
        {showPasswordChange ? (
          <div className="mt-4">
            <label htmlFor="newPassword" className="block text-sm font-medium">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
        ) : null}

        {showPasswordChange ? (
          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
        ) : null}

        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#8F36FF] text-white rounded-full font-medium hover:bg-purple-700 transition"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handlePasswordToggle}
            className="px-4 py-2 bg-yellow-500 text-white rounded-full font-medium hover:bg-yellow-600 transition"
          >
            {showPasswordChange ? "Cancel Password Change" : "Change Password"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
