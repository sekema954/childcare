import { useState } from "react";

interface formProp {
  name: string;
  relationship_to_child: string;
  phone_number: string;
  email: string;
  method_of_contact: string;
  address: string;
  state: string;
  city: string;
  zip_code: string;
  county: string;
  child_name: string;
  child_sex: string;
  date_of_birth: string;
  has_autism: string;
  needs_autism_assesment: string;
  other_diagnosis: string;
}

const RegisterChildForm = () => {
  const [formData, setFormData] = useState<formProp>({
    name: "",
    relationship_to_child: "",
    phone_number: "",
    email: "",
    method_of_contact: "",
    address: "",
    state: "",
    city: "",
    zip_code: "",
    county: "",
    child_name: "",
    child_sex: "",
    date_of_birth: "",
    has_autism: "",
    needs_autism_assesment: "",
    other_diagnosis: "",
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

    const requiredFields: (keyof formProp)[] = [
      "name",
      "relationship_to_child",
      "phone_number",
      "email",
      "method_of_contact",
      "address",
      "state",
      "city",
      "zip_code",
      "child_name",
      "child_sex",
      "date_of_birth",
      "has_autism",
      "needs_autism_assesment",
      "other_diagnosis",
    ];

    const missing = requiredFields.filter((field) => formData[field].trim() === "");

    if (missing.length > 0) {
      setMissingFields(missing);
      setSuccessMsg("");
    } else {
      setMissingFields([]);
      setSuccessMsg("✅ Form submitted successfully!");
      {/**clear msg */}
      setTimeout(()=>{
        setSuccessMsg("");
      }, 3000);
    }
  };

  const emailConstants = [
    { id: 1, context: "Name", placeholder: "Enter Name", name: "name" },
    {
      id: 2,
      context: "What is your relationship to the child",
      placeholder: "Mother, Father, Legal Guardian",
      name: "relationship_to_child",
    },
    {
      id: 3,
      context: "Phone Number",
      placeholder: "(123)-729-9945",
      name: "phone_number",
    },
    {
      id: 4,
      context: "Email",
      placeholder: "abc@gmail.com",
      name: "email",
      type: "email",
    },
    {
      id: 5,
      context: "Preferred Method of Contact",
      name: "method_of_contact",
      type: "radio",
      options: ["Phone Call", "Email", "Text Message"],
    },
    { id: 6, context: "Address", placeholder: "Enter Address", name: "address" },
    { id: 7, context: "State", placeholder: "Enter State", name: "state" },
    { id: 8, context: "City", placeholder: "Enter City", name: "city" },
    {
      id: 9,
      context: "Zip Code",
      placeholder: "Enter zip code",
      name: "zip_code",
      type: "number",
    },
    { id: 10, context: "County", placeholder: "Enter County", name: "county" },
    {
      id: 11,
      context: "Child's Name",
      placeholder: "Enter Child's Name",
      name: "child_name",
    },
    {
      id: 12,
      context: "Child's Sex",
      placeholder: "Male, Female...etc",
      name: "child_sex",
    },
    {
      id: 13,
      context: "Date of Birth",
      placeholder: "Date of Birth",
      name: "date_of_birth",
    },
    {
      id: 14,
      context: "Does Your Child Have Autism",
      name: "has_autism",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      id: 15,
      context: "Does Your Child Require an Autism Assessment",
      name: "needs_autism_assesment",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      id: 16,
      context: "Does Your Child Have Other Diagnoses Other than Autism?",
      name: "other_diagnosis",
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
            Getting Started Today!
          </h1>
        </header>

        <div className="flex flex-col items-center justify-center gap-10 mt-10 w-full max-w-4xl mx-auto">
          {emailConstants.map((data) => (
            <div className="w-full" key={data.id}>
              <label
                className="py-2 text-base sm:text-lg font-medium block"
                htmlFor={data.name}
              >
                {data.context}
                {missingFields.includes(data.name) && (
                  <span className="text-red-500 pl-2">*</span>
                )}
              </label>

              {data.type === "radio" ? (
                <div className="flex flex-col gap-3 pl-3 sm:pl-5">
                  {data.options?.map((option, index) => (
                    <label key={index} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name={data.name}
                        value={option}
                        checked={formData[data.name as keyof formProp] === option}
                        onChange={handleChange}
                        className="accent-purple-600 w-4 h-4"
                      />
                      <span className="text-gray-800 text-base">• {option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={data.type || "text"}
                  name={data.name}
                  value={formData[data.name as keyof formProp]}
                  placeholder={data.placeholder}
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

export default RegisterChildForm;
