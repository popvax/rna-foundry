"use client"; // Ensure this is a client component

import { useState } from "react";
import Select from "react-select";
import countryList from "country-list";

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    company: "",
    industry: "",
    zipCode: "",
    message: "",
  });

  const countryOptions = countryList.getNames().map((name) => ({ label: name, value: name }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (selected) => {
    setFormData((prev) => ({ ...prev, country: selected.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg"> {/* Square and short */}
        <h2 className="text-lg font-bold mb-4 text-center text-blue-900">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded text-sm" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded text-sm" required />
          </div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded text-sm" required />
          <Select options={countryOptions} onChange={handleCountryChange} placeholder="Select Country" className="text-sm" />
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded text-sm" required />
          <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry" className="w-full p-2 border rounded text-sm" required />
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code (Optional)" className="w-full p-2 border rounded text-sm" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border rounded text-sm" rows="3" required></textarea>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-3 py-2 bg-gray-300 text-gray-700 rounded text-sm">Cancel</button>
            <button type="submit" className="px-3 py-2 bg-blue-600 text-gray-700 rounded text-sm">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

