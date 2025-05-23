import member1 from '../assets/images/team1.png';
import member2 from '../assets/images/team2.png';
import member3 from '../assets/images/team3.png';
const Life_company = () => {
    return (
      <section className="px-4 py-10 max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#8F36FF] mb-4">
            Life at Our Company
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're more than just a workplace — we're a community. Here's a glimpse of the people,
            values, and experiences that make us who we are.
          </p>
        </div>
  
        {/* Company Culture Highlights */}
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-[#8F36FF] mb-2">Our Values</h2>
            <p className="text-gray-600">
              We believe in empathy, transparency, and empowering every team member to grow.
            </p>
          </div>
  
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-[#8F36FF] mb-2">Work-Life Balance</h2>
            <p className="text-gray-600">
              Flexible hours, remote-friendly options, and time off when it matters most.
            </p>
          </div>
  
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-[#8F36FF] mb-2">Collaboration</h2>
            <p className="text-gray-600">
              We foster open communication and collaborative teamwork across all departments.
            </p>
          </div>
        </div>
  
        {/* Photo Gallery or Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-[#8F36FF] mb-8">Meet the Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Placeholder team photos */}
            {[
                {id:1, picture:member1},
                {id:2, picture:member2},
                {id:3, picture:member3},

            ].map((worker) => (
              <div
                key={worker.id}
                className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-lg"
              >
                <img src={worker.picture} alt="Worker at Child Care" aria-label='Worker at Child Care' />
              </div>
            ))}
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Want to join us?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            We're always on the lookout for passionate, kind, and creative people.
          </p>
          <a href="/careers/jobs">
            <button className="bg-[#8F36FF] text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition">
                View Open Positions
            </button>
          </a>
        </div>
      </section>
    );
  };
  
  export default Life_company;
  