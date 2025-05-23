import home_based from '../assets/images/home_based.png';
import school_based from '../assets/images/school_based.png';
import parent_training from '../assets/images/parent_training.png';

function About() {
  return (
    <section className='mt-16'>
      <header className="bg-[#8F36FF] min-h-[400px] flex items-center justify-center text-white text-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-[40px] font-medium">We focus on you!</h1>
          <p className="text-[20px] font-regular">
            At ABA Home Therapy we develop therapy treatment plans based on the unique needs of each of our clients. We provide Home Based, School Based, and Community Based ABA services to infants, children, and young adults diagnosed with ASD.
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center px-16 py-16 gap-10">
        {[
          {
            id: 1,
            context: "Home Based",
            text: "Providing ABA therapy services in the home allows us to work with your child in their natural environment. Your clinical team will be able to engage with your entire family as part of their treatment plan to improve generalization of skills.",
            thumbnail: home_based,
          },
          {
            id: 2,
            context: "School Based",
            text: "We have extensive experience providing ABA therapy service in school, including Pre-School, Elementary, Middle, and High School. Providing services in school allows us to collaborate with your child's teachers, other school therapists, and the school administration to effectively incorporate ABA in the school environment.",
            thumbnail: school_based,
          },
          {
            id: 3,
            context: "Parent Training",
            text: "We provide continual parent training for all of our families as part of your child's ABA therapy services. This is a critical component of our treatment plan as we need to make sure that everything our BCBAs and Behavior Technicians are working on with your child are being followed by your entire family.",
            thumbnail: parent_training,
          },
        ].map((program) => (
          <div
            key={program.id}
            className={`w-full lg:h-[600px] flex flex-col lg:flex-row ${
              program.id === 2 ? 'lg:flex-row-reverse' : ''
            } gap-20 lg:gap-10`} 
          >
            <div className="flex flex-col items-center justify-center text-center px-2 lg:px-[140px]">
              <h1 className="text-[40px] text-[#8F36FF] font-medium">{program.context}</h1>
              <p className="text-[20px]">{program.text}</p>
            </div>
            <img
              className="w-full h-full object-cover rounded-lg"
              src={program.thumbnail}
              alt={program.context}
              aria-label={program.context}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
