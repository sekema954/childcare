import { useState } from "react";

interface ReferralFormData {
  referrer_name: string;
  referrer_relationship: string;
  referrer_phone: string;
  referrer_email: string;
  preferred_contact: string;
  referred_name: string;
  referred_dob: string;
  referred_sex: string;
  referred_address: string;
  referred_city: string;
  referred_state: string;
  referred_zip: string;
  referred_county: string;
  autism_diagnosis: string;
  autism_assessment_needed: string;
  other_diagnoses: string;
}

const SubmitReferralForm = () => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referrer_name: "",
    referrer_relationship: "",
    referrer_phone: "",
    referrer_email: "",
    preferred_contact: "",
    referred_name: "",
    referred_dob: "",
    referred_sex: "",
    referred_address: "",
    referred_city: "",
    referred_state: "",
    referred_zip: "",
    referred_county: "",
    autism_diagnosis: "",
    autism_assessment_needed: "",
    other_diagnoses: "",
  });

  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: (keyof ReferralFormData)[] = [
      "referrer_name",
      "referrer_relationship",
      "referrer_phone",
      "referrer_email",
      "preferred_contact",
      "referred_name",
      "referred_dob",
      "referred_sex",
      "referred_address",
      "referred_city",
      "referred_state",
      "referred_zip",
      "referred_county",
      "autism_diagnosis",
      "autism_assessment_needed",
      "other_diagnoses",
    ];

    const missing = requiredFields.filter((field) => formData[field].trim() === "");

    if (missing.length > 0) {
      setMissingFields(missing);
      setSuccessMsg("");
    } else {
      setMissingFields([]);
      setSuccessMsg("✅ Referral submitted successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  const fields = [
    { id: 1, context: "Your Name", placeholder: "Enter your name", name: "referrer_name" },
    {
      id: 2,
      context: "Your Relationship to the Referred Individual",
      placeholder: "Parent, Guardian, Case Worker...",
      name: "referrer_relationship",
    },
    {
      id: 3,
      context: "Your Phone Number",
      placeholder: "(123)-456-7890",
      name: "referrer_phone",
    },
    {
      id: 4,
      context: "Your Email",
      placeholder: "you@example.com",
      name: "referrer_email",
      type: "email",
    },
    {
      id: 5,
      context: "Preferred Method of Contact",
      name: "preferred_contact",
      type: "radio",
      options: ["Phone", "Email", "Text"],
    },
    {
      id: 6,
      context: "Name of Referred Individual",
      placeholder: "Enter full name",
      name: "referred_name",
    },
    {
      id: 7,
      context: "Date of Birth",
      placeholder: "MM/DD/YYYY",
      name: "referred_dob",
    },
    {
      id: 8,
      context: "Sex",
      placeholder: "Male, Female, Non-binary...",
      name: "referred_sex",
    },
    {
      id: 9,
      context: "Address",
      placeholder: "Street address",
      name: "referred_address",
    },
    {
      id: 10,
      context: "City",
      placeholder: "Enter city",
      name: "referred_city",
    },
    {
      id: 11,
      context: "State",
      placeholder: "Enter state",
      name: "referred_state",
    },
    {
      id: 12,
      context: "Zip Code",
      placeholder: "Enter zip code",
      name: "referred_zip",
      type: "number",
    },
    {
      id: 13,
      context: "County",
      placeholder: "Enter county",
      name: "referred_county",
    },
    {
      id: 14,
      context: "Has an Autism Diagnosis?",
      name: "autism_diagnosis",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      id: 15,
      context: "Needs Autism Assessment?",
      name: "autism_assessment_needed",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      id: 16,
      context: "Other Diagnoses?",
      name: "other_diagnoses",
      type: "radio",
      options: ["Yes", "No"],
    },
  ];

  return (
    <section className="mt-16 px-4 py-10">
      {successMsg && (
        <div className="fixed top-0 left-0 w-full z-[9999] bg-green-600 shadow-md py-3 px-6 flex items-center justify-center">
          <p className="text-white text-base sm:text-lg font-medium text-center">
            {successMsg}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <header>
          <h1 className="text-3xl sm:text-4xl font-medium text-center">
            Submit a Referral
          </h1>
        </header>

        <div className="flex flex-col items-center justify-center gap-10 mt-10 w-full max-w-4xl mx-auto">
          {fields.map((field) => (
            <div className="w-full" key={field.id}>
              <label
                className="py-2 text-base sm:text-lg font-medium block"
                htmlFor={field.name}
              >
                {field.context}
                {missingFields.includes(field.name) && (
                  <span className="text-red-500 pl-2">*</span>
                )}
              </label>

              {field.type === "radio" ? (
                <div className="flex flex-col gap-3 pl-3 sm:pl-5">
                  {field.options?.map((option, index) => (
                    <label key={index} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name={field.name}
                        value={option}
                        checked={formData[field.name as keyof ReferralFormData] === option}
                        onChange={handleChange}
                        className="accent-purple-600 w-4 h-4"
                      />
                      <span className="text-gray-800 text-base">• {option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name as keyof ReferralFormData]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  className="w-full h-[55px] sm:h-[65px] border border-black rounded-md px-4 sm:px-5 text-base"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8 py-10">
          <button
            type="submit"
            className="w-full max-w-[220px] h-[55px] sm:h-[65px] border border-[#8F36FF] text-[#8F36FF] rounded-[40px] text-base sm:text-lg font-medium transition-all duration-[1s] hover:bg-[#8F36FF] hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubmitReferralForm;
