import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    dob: "",
    bloodType: "",
    weight: "",
    gender: "",
    emergencyName: "",
    emergencyPhone: "",
    medicalHistory: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration submitted!");
  };

  return (
    <div className="min-h-screen bg-[#FBF8F8] flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-rose-600">
          Register as a Donor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="bloodType"
              placeholder="Blood Type"
              value={formData.bloodType}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="emergencyName"
              placeholder="Emergency Contact Name"
              value={formData.emergencyName}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              name="emergencyPhone"
              placeholder="Emergency Contact Phone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
              required
            />
          </div>
          <textarea
            name="medicalHistory"
            placeholder="Medical history or current medications"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
          />
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-4 h-4"
              required
            />
            I agree to the terms and conditions
          </label>
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600"
          >
            Register as Donor
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
