import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Careers() {
  const [isActiveTab, setActiveTab] = useState<string>("View all");
  
  const Jobs = [
    { id: 1, category: "Teaching", job_title: "Early Childhood Educator/Daycare Teacher", desc: "Provides education and care for young children, developing lesson plans, and overseeing activities.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 2, category: "Teaching", job_title: "Assistant Teacher", desc: "Supports the lead teacher in caring for and educating children.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Part-time", href: "/apply.id" },
    { id: 3, category: "Teaching", job_title: "Assistant Teacher", desc: "Supports the lead teacher in caring for and educating children.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Part-time", href: "/apply.id" },
    { id: 4, category: "Teaching", job_title: "Childcare Worker/Caregiver", desc: "Focuses on the care and development of children.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 5, category: "Teaching", job_title: "Preschool Teacher", desc: "Specializes in caring for specific age groups.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 6, category: "Teaching", job_title: "Afterschool Counselor", desc: "Provides care and supervision for children before and after school.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 7, category: "Leadership", job_title: "Daycare Director", desc: "Oversees the daily operations, manages staff, and ensures the well-being of children and staff.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 8, category: "Leadership", job_title: "Assistant Director", desc: "Supports the director in managing the center and staff.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 9, category: "Support", job_title: "Cook/Kitchen Staff", desc: "Prepares meals and snacks for the children.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
    { id: 10, category: "Support", job_title: "Janitorial Staff/Cleaner", desc: "Maintains the cleanliness of the facility.", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Part-time", href: "/apply.id" },
    { id: 11, category: "Support", job_title: "Security Personnel", desc: "Security Guard", location: "1234 Veron Road.Fort Lauderdale, FL 33312", job_type: "Full-time", href: "/apply.id" },
  ];

  // Filter jobs based on active tab
  const filteredJobs = Jobs.filter(job => isActiveTab === "View all" || job.category === isActiveTab);

  return (
    <section className="mt-16 py-10">
      <header className="bg-[#8F36FF] min-h-[400px] flex flex-col items-start px-5 sm:px-10 justify-center text-white gap-3">
        <span className="max-w-[140px] min-h-[40px] border rounded-full flex items-center justify-center px-3">We're hiring</span>
        <h1 className="text-2xl sm:text-4xl font-medium">Be part of our mission</h1>
        <p className="text-base sm:text-lg max-w-[1000px]">We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
      </header>
      <div className="w-full h-[10px] bg-[#3D9FFA]"></div>
      <div className="mt-10">
        <div role="tablist" className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 px-4 sm:px-0">
          {[
            { id: 1, tab_title: "View all" },
            { id: 2, tab_title: "Leadership" },
            { id: 3, tab_title: "Teaching" },
            { id: 4, tab_title: "Support" }
          ].map((button) => (
            <button onClick={() => setActiveTab(button.tab_title)} role="tab" className={`border max-w-[200px] min-h-[45px] px-5 rounded-[20px] transition-all duration-300 ${isActiveTab === button.tab_title ? 'bg-[#8F36FF] border-none text-white' : ''}`}>
              {button.tab_title}
            </button>
          ))}
        </div>

        {/* Map jobs or show fallback message */}
        <div className="flex flex-col gap-6 sm:gap-10 px-4 sm:px-10 mt-16">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">
                {/* Left side */}
                <div className="flex flex-col gap-3 text-sm sm:text-lg">
                  <h1 className="text-2xl sm:text-4xl font-medium">{job.job_title}</h1>
                  <p>{job.desc}</p>
                  <div className="flex gap-5">
                    <p>{job.location}</p>
                    <span className="min-w-[120px] max-h-[45px] border flex items-center justify-center rounded-[20px]">{job.job_type}</span>
                  </div>
                </div>
                {/* Right side */}
                <div>
                  <a className="flex gap-3 items-center justify-center text-lg sm:text-2xl" aria-label={job.job_title} rel="noopener noreferrer" target="_blank" href={job.href}>
                    Apply
                    <FontAwesomeIcon className="transform rotate-[230deg]" icon={faArrowDown} aria-label={job.job_title} />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-base sm:text-lg text-gray-600">No jobs available under this category</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Careers;
