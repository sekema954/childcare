import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    role: "Admin",
    email: "admin@example.com",
    phoneNumber: "(123) 456-7890",
  });

  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phoneNumber: profile.phoneNumber,
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordToggle = () => {
    setShowPasswordChange((prev) => !prev);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
  
    setProfile({
      ...profile, // Retain role
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    });
  
    setFormData((prev) => ({
      ...prev,
      newPassword: "",
      confirmPassword: "",
    }));
  
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.newPassword === formData.confirmPassword) {
      alert("Password changed successfully!");

      setFormData((prev) => ({
        ...prev,
        newPassword: "",
        confirmPassword: "",
      }));
      setShowPasswordChange(false);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto mt-10">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#8F36FF]">Admin Profile</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your admin profile settings.</p>
        <p className="text-sm text-gray-500 mt-1">Role: {profile.role}</p>
      </header>

      <form onSubmit={handleSaveProfile} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
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

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
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

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
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

        {/* Password Change Section */}
        {showPasswordChange && (
          <>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium mb-1">New Password</label>
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm New Password</label>
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

            {formData.newPassword &&
              formData.confirmPassword &&
              formData.newPassword !== formData.confirmPassword && (
                <p className="text-red-500 text-sm">Passwords do not match.</p>
              )}

            <button
              onClick={handleChangePassword}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
            >
              Save New Password
            </button>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-between gap-4 mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-[#8F36FF] text-white rounded-full font-medium hover:bg-purple-700 transition"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handlePasswordToggle}
            className="px-6 py-2 bg-yellow-500 text-white rounded-full font-medium hover:bg-yellow-600 transition"
          >
            {showPasswordChange ? "Cancel Password Change" : "Change Password"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
