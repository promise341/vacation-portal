"use client";
import { useState } from "react";
import { Info } from "lucide-react";

export default function ExitStamp() {
  const [stampType, setStampType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bootAddress: "",
    unStaffId: "",
    department: "",
    payrollBank: "",
    currentDutyStation: "",
    requestedServicesDays: "",
    vacationDuration: "",
    additionalNotes: ""
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
    console.log("Form submitted:", { stampType, ...formData });
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <div className="text-xs text-slate-400 mb-3">HOME / EXIT STAMP</div>
          <h1 className="text-4xl font-black">Acquire Exit Stamp</h1>
          <p className="mt-3 text-slate-300">Apply for a Priority or Standard Exit Stamp to finalize and organize your vacation dates.</p>
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
                  <strong>Non-Final Staff Only:</strong> This application is responsible for non-SOC-JD staff members. Final 
                  personnel should use the standard vacation application.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg shadow-sm">
            {/* Select Stamp Type */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                SELECT STAMP TYPE
              </h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <label className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                  stampType === "priority" 
                    ? "border-blue-500 bg-blue-50" 
                    : "border-slate-200 hover:border-slate-300"
                }`}>
                  <input
                    type="radio"
                    name="stampType"
                    value="priority"
                    checked={stampType === "priority"}
                    onChange={(e) => setStampType(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      stampType === "priority" 
                        ? "border-blue-500 bg-blue-500" 
                        : "border-slate-300"
                    }`}>
                      {stampType === "priority" && (
                        <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>
                      )}
                    </div>
                    <span className="font-bold text-[#071b3a]">Priority Exit Stamp</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">PREMIUM</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Faster processing with priority review and immediate stamp approval.
                  </p>
                  <p className="text-sm text-slate-600">Higher processing fee applies.</p>
                </label>

                <label className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                  stampType === "standard" 
                    ? "border-blue-500 bg-blue-50" 
                    : "border-slate-200 hover:border-slate-300"
                }`}>
                  <input
                    type="radio"
                    name="stampType"
                    value="standard"
                    checked={stampType === "standard"}
                    onChange={(e) => setStampType(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      stampType === "standard" 
                        ? "border-blue-500 bg-blue-500" 
                        : "border-slate-300"
                    }`}>
                      {stampType === "standard" && (
                        <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>
                      )}
                    </div>
                    <span className="font-bold text-[#071b3a]">Standard Exit Stamp</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">STANDARD</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Regular processing through the standard workflow for general use.
                  </p>
                  <p className="text-sm text-slate-600">Standard processing fee applies.</p>
                </label>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  ✓ Online Exit Stamp application and processing service is not eligible for 
                  standard fees. Many applications follow the regular board at a lower cost.
                </p>
              </div>
            </div>

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
                    Boot Address
                  </label>
                  <textarea
                    name="bootAddress"
                    value={formData.bootAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Staff Details */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                STAFF DETAILS
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    UN Staff ID
                  </label>
                  <input
                    type="text"
                    name="unStaffId"
                    value={formData.unStaffId}
                    onChange={handleInputChange}
                    placeholder="e.g. UNV-123456"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="e.g. Peacekeeping Operations"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Payroll / Bank
                  </label>
                  <input
                    type="text"
                    name="payrollBank"
                    value={formData.payrollBank}
                    onChange={handleInputChange}
                    placeholder="e.g. Administrative Office"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                    Current Duty Station County
                  </label>
                  <select
                    name="currentDutyStation"
                    value={formData.currentDutyStation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="">Select Country</option>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="syria">Syria</option>
                    <option value="iraq">Iraq</option>
                    <option value="mali">Mali</option>
                    <option value="lebanon">Lebanon</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Requested Services Days
                  </label>
                  <input
                    type="number"
                    name="requestedServicesDays"
                    value={formData.requestedServicesDays}
                    onChange={handleInputChange}
                    placeholder="30"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
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
                    <option value="">Select Duration</option>
                    <option value="2weeks">2 Weeks</option>
                    <option value="1month">1 Month</option>
                    <option value="2months">2 Months</option>
                    <option value="3months">3 Months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any additional notes or special requests for the EXIT STAMP..."
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
                SUBMIT EXIT STAMP APPLICATION
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
