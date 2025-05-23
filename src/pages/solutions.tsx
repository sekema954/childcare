//Solutions
import thumbnail1 from '../assets/images/thumbnail1.png';
import thumbnail2 from '../assets/images/thumbnail2.png';
import thumbnail3 from '../assets/images/thumbnail3.png';
import thumbnail4 from '../assets/images/thumbnail4.png';
import thumbnail5 from '../assets/images/thumbnail5.png';
import thumbnail6 from '../assets/images/thumbnail6.png';
const Solutions = () =>{
    const solutions_constants = [
        {id:1, thumbnail:thumbnail1, title:"Receive a Diagnosis", context:"A diagnosis of ASD prescribed by a medical doctor (MD) or PhD is required before receiving ABA therapy covered by insurance."},
        {id:2, thumbnail:thumbnail2, title:"Intake", context:"When you contact our team, we will take your insurance information and immediately begin the process of getting authorization for ABA services. Our system is streamlined to efficiently begin ABA services with minimal time between requesting and receiving care."},
        {id:3, thumbnail:thumbnail3, title:"Working with your Child", context:"Our services are delivered by a combination of experienced Board Certified Behavior Analysts (BCBA) and highly devoted Behavior Technicians (BTs) at the time and location that is most convenient for your family. Our team implements the selected set of ABA techniques to address your child’s needs."},
        {id:4, thumbnail:thumbnail4, title:"Initial Assessment", context:"Our clinical team assesses your child’s strengths and weaknesses to develop an individualized treatment plan."},
        {id:5, thumbnail:thumbnail5, title:"Coordinate Care", context:"To ensure generalization of skills in school and across therapeutic settings, we coordinate and collaborate care with members of your child’s team."},
        {id:6, thumbnail:thumbnail6, title:"Intake", context:"Through data analysis and direct supervision, we monitor your child’s progress and provide ongoing support. We offer consultation and parent training to deliver high quality care."},

    ];
    return(
        <section className="mt-16 py-10">
            <header>
                <h1 className="text-center text-[40px] text-[#8F36FF]">Our Solutions</h1>
            </header>
            <main className='mt-10 flex items-center justify-center'>
                <div className='grid lg:grid-cols-2 grid-rows-auto gap-15'>
                    {solutions_constants.map((solution)=>(
                        <div key={solution.id} className='max-w-[437px] min-h-[480px] rounded-[40px]'>
                            {/**thumbnial */}
                            <div className='min-w-[437px] min-h-[279px]'>
                                <img className='w-full h-full object-cover' src={solution.thumbnail} alt="" />
                            </div>
                            {/**title & text */}
                            <div className='text-left flex flex-col gap-6 mt-4 px-3 py-6'>
                                <h1 className='text-[22px] font-semibold text-[#8F36FF]'>{solution.title}</h1>
                                <p className='text-[20px]'>{solution.context}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default Solutions