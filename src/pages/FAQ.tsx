import {
    faAngleDown,
    faAngleUp,
    faBandAid,
    faBowlFood,
    faClock,
    faFirstAid,
    faHouse,
    faList,
    faPerson,
    faRegistered,
    faUserDoctor,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  
  function FAQ() {
    const [activeTab, setActiveTab] = useState("General");
    const [openQuestionId, setOpenQuestionId] = useState(null);
  
    const toggleQuestion = (id:any) => {
      setOpenQuestionId((prevId) => (prevId === id ? null : id));
    };
  
    const faq_constants = [
      {
        id: 1,
        category: "General",
        title: "What are your hours of operation?",
        answer: "We are open Monday to Friday from 7:00 AM to 6:00 PM.",
        icon: faClock,
      },
      {
        id: 2,
        category: "General",
        title: "What age groups do you accept?",
        answer: "We care for children from 6 weeks to 5 years old.",
        icon: faPerson,
      },
      {
        id: 3,
        category: "General",
        title: "Do you provide meals and snacks?",
        answer: "Yes, we provide nutritious meals and snacks approved by child nutrition guidelines.",
        icon: faBowlFood,
      },
      {
        id: 4,
        category: "Enrollment",
        title: "Can I visit or tour the facility before enrolling?",
        answer: "Yes, we encourage parents to schedule a tour of our facility before enrolling.",
        icon: faHouse,
      },
      {
        id: 5,
        category: "Enrollment",
        title: "How do I register my child?",
        answer: "You can register your child by filling out the enrollment form online or visiting our office.",
        icon: faRegistered,
      },
      {
        id: 6,
        category: "Enrollment",
        title: "Is there a waiting list?",
        answer: "Yes, if the class is full, we place your child on a waiting list and notify you when a spot opens.",
        icon: faList,
      },
      {
        id: 7,
        category: "Health & Safety",
        title: "Is your staff certified in CPR and first aid?",
        answer: "Yes, all of our staff are certified in CPR and first aid and receive ongoing safety training.",
        icon: faBandAid,
      },
      {
        id: 8,
        category: "Health & Safety",
        title: "What are your safety procedures?",
        answer: "We have secure entrances, security cameras, and perform regular safety drills for emergencies.",
        icon: faFirstAid,
      },
      {
        id: 9,
        category: "Health & Safety",
        title: "What happens if my child gets sick at daycare?",
        answer: "If your child becomes ill, we will contact you immediately and ask that they be picked up promptly.",
        icon: faUserDoctor,
      },
    ];
  
    const categories = [...new Set(faq_constants.map((item) => item.category))];
  
    return (
      <section className="py-10">
        {/* Header */}
        <header className="bg-[#8F36FF] text-white flex items-center justify-center flex-col gap-2 min-h-[300px] text-center px-4">
          <h1 className="text-[40px] font-medium">Frequently Asked Questions</h1>
          <p className="max-w-[600px] text-[20px]">
            These are the most commonly asked questions about Child Care. Can't find what you're looking for? Send us a message.
          </p>
        </header>
  
        {/* Tabs */}
        <div className="flex flex-wrap py-6 items-center justify-center gap-4 px-4">
          {categories.map((category, idx) => (
            <div
              onClick={() => setActiveTab(category)}
              key={idx}
              className={`cursor-pointer border min-w-[120px] min-h-[45px] px-4 flex items-center justify-center rounded-[40px] text-sm transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#8F36FF] border-none shadow-md text-white"
                  : "text-[#8F36FF] border-[#8F36FF]"
              }`}
            >
              {category}
            </div>
          ))}
        </div>
  
        {/* Questions */}
        <div className="flex flex-col gap-6 mt-10 w-full px-4 max-w-4xl mx-auto">
          {faq_constants
            .filter((question) => question.category === activeTab)
            .map((question) => (
              <div
                key={question.id}
                className="flex border w-full px-6 py-6 gap-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <FontAwesomeIcon icon={question.icon} className="text-[#8F36FF] mt-1" />
                <div className="flex flex-col w-full">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleQuestion(question.id)}
                  >
                    <h1 className="font-medium text-lg">{question.title}</h1>
                    <FontAwesomeIcon
                      icon={openQuestionId === question.id ? faAngleUp : faAngleDown}
                      className="transition-transform duration-300"
                    />
                  </div>
                  {openQuestionId === question.id && (
                    <p className="text-gray-600 mt-2 transition-opacity duration-300">
                      {question.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }
  
  export default FAQ;
  