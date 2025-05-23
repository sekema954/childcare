//Team 
import triangle from '../assets/images/Polygon 6.png';
import team3 from '../assets/images/team1.png';
import team2 from '../assets/images/team2.png';
import team1 from '../assets/images/team3.png';
const Team = () =>{
    return(
        <section className="mt-16 py-10">
            <header className="text-center text-white bg-[#8F36FF] min-h-[485px] flex items-center justify-center px-5 relative py-5">
                <img className='absolute top-0 right-0 transform rotate-[180deg] max-w-[110px] max-h-[130px]' src={triangle} alt="" />
                <div className='z-10'>
                    <h1 className="text-[40px] font-medium">Our Team</h1>
                    <p className="text-[20px] mt-10 px-5">We are experts in both providing the best ABA therapy services and how to access our services through your insurance provider. We have over twenty years of experience in assisting our client's families in navigating the system to provide the therapy services to help your child. At ABA Home Therapy, our team works with each family to guide them through the process to ensure that your child receives the services and support that they need to succeed today and in their future.</p>
                </div>
            </header>
            {/*misssion */}
            <main className='px-10 mt-5'>
                <div className='border-2 border-[#3D9FFA] border-l-[#FF9A02] border-l-6 border-b-6 border-b-[#FF9A02] w-full min-h-[444px] flex items-center justify-center text-center px-6 py-4 rounded-[20px]'>
                    <p className='text-[40px] font-regular'>Our mission is to be the provider of choice for all families in need of ABA Therapy Services and the employer of choice for everyone on our team that provide services to our families.</p>
                </div>
                {/**team */}
                <div className='grid lg:grid-cols-3 grid-rows-auto mt-16 gap-10'>
                    {[
                        {id:1, name:"Ander Jones", role:"Founder & CEO,", icon:team1, color:"#3D9FFA"},
                        {id:2, name:"Jessica Miles", role:"Teach Lead", icon:team2, color:"#FF9A02"},
                        {id:3, name:"Rose Miller", role:"Office Manager", icon:team3, color:"#00D87D"},
                    ].map((team)=>(
                        <div className='flex flex-col gap-4 items-center justify-center'>                        
                            <div key={team.id} className='w-[212px] h-[214px]'>
                                <img src={team.icon} alt={`${team.name}, ${team.role}`} aria-label={`${team.name}`} />
                            </div>
                            <div className='text-center text-[22px]' style={{color: team.color}}>
                                <p className='font-semibold'>{team.name}</p>
                                <p>{team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    )
}


export default Team