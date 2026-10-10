"use client";
import { useState } from "react";
import { Info } from "lucide-react";

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    currentPhoneNumber: "",
    homeAddress: "",
    servingPersonnel: "",
    applicationFor: "",
    servingCountry: "",
    vacationDuration: "",
    fullNameServing: "",
    additionalDetailsServing: "",
    validIdCard: "",
    additionalMessage: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <h1 className="text-4xl font-black">Apply for Vacation</h1>
          <p className="mt-3 text-slate-300">Complete the form below to submit an official vacation application.</p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16">
        <div className="container max-w-3xl mx-auto">
          {/* Info Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Info className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-blue-800">
                  <strong>Who can apply?</strong> Relatives, family lawyers, family representatives, and common-law 
                  partners of serving personnel.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg shadow-sm">
            {/* Personal Information */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                PERSONAL INFORMATION
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Current Phone Number
                  </label>
                  <input
                    type="tel"
                    name="currentPhoneNumber"
                    value={formData.currentPhoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Home / Residential Address
                  </label>
                  <textarea
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                APPLICATION DETAILS
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Are you a serving personnel?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="servingPersonnel"
                        value="Yes"
                        checked={formData.servingPersonnel === "Yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="servingPersonnel"
                        value="No"
                        checked={formData.servingPersonnel === "No"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Who is this application for?
                  </label>
                  <select
                    name="applicationFor"
                    value={formData.applicationFor}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select relationship...</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="other">Other Family Member</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Serving in which country?
                  </label>
                  <select
                    name="servingCountry"
                    value={formData.servingCountry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select country...</option>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="syria">Syria</option>
                    <option value="iraq">Iraq</option>
                    <option value="mali">Mali</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Vacation Duration
                  </label>
                  <select
                    name="vacationDuration"
                    value={formData.vacationDuration}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select duration...</option>
                    <option value="2weeks">2 Weeks</option>
                    <option value="1month">1 Month</option>
                    <option value="2months">2 Months</option>
                    <option value="3months">3 Months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Personnel Information */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                PERSONNEL INFORMATION
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Full Name of Serving Personnel
                  </label>
                  <input
                    type="text"
                    name="fullNameServing"
                    value={formData.fullNameServing}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Additional Details of Serving Personnel
                  </label>
                  <textarea
                    name="additionalDetailsServing"
                    value={formData.additionalDetailsServing}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Rank, unit, ID number, deployment details..."
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Valid ID Card Number (Military ID)
                  </label>
                  <input
                    type="text"
                    name="validIdCard"
                    value={formData.validIdCard}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="additionalMessage"
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any additional information relevant to this application..."
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-8 text-center">
              <button
                type="submit"
                className="bg-[#0b8fe0] hover:bg-[#0a7fc9] text-white font-bold py-3 px-8 rounded transition-colors"
              >
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}