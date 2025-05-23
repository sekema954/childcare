import heroDad from '../assets/images/0_Superhero Dad and son_esrgan-v1-x2plus-fotor-bg-remover-20230531183452 1.png';
import rectangle from '../assets/images/Rectangle 38.png';
import polygon from '../assets/images/Polygon 6.png';
import in_home from "../assets/images/in_home.png";
import in_school from '../assets/images/in_school.png';
import connect from '../assets/images/connect.png';
import grow from '../assets/images/grow.png';
import play from '../assets/images/play.png';
import RegsiterChildForm from '../components/gettingStartedForm';
//GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {useRef } from 'react';


function Home() {
  {/** *
  const mainRef = useRef(null)
  const headerRef = useRef(null)
  useGSAP(()=>{
    
    if(mainRef.current) {
      gsap.fromTo(mainRef.current, {
        x:0,
        opacity:0
      }, {
        x:100,
        opacity:1,
        duration:1.2,
      })
    };

    if(headerRef.current) {
      gsap.fromTo(headerRef.current,{
        x:0,
        opacity:0
      }, {
        opacity:1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          scrub: true
        }
      })
    }
  })
    **/}
  return (
    <>
      <section className="bg-[#8F36FF] lg:h-screen flex items-center relative lg:px-8 mt-0">
        {/**main */}
        <img className='absolute top-0 left-0 max-w-[191px] max-h-[191px]' src={polygon} alt="Polygon" aria-label='Polygon' />
        <img className='absolute bottom-0 right-0 max-w-[191px] max-h-[191px]' src={rectangle} alt="Rectangle" aria-label='Rectangle' />
        <main className="max-w-[580px] text-white z-[300] bg-black/80 px-3 py-3 lg:bg-transparent lg:px-0 lg:py-0">
          <p>A Revolutionary Approach to Autism Care</p>
          <h1 className="text-[40px] font-medium">Joining Forces to Support Your Child's Journey Towards Growth, Independence, and Joy.</h1>
          <a href="#right_choice">
            <button className="w-[206px] h-[54px] border border-white rounded-[40px] mt-[60px] transition-all duration-[1s] hover:bg-white hover:text-[#8F36FF]">learn more</button>
          </a>
        </main>
        {/**superhero dad */}
        <div className='absolute bottom-0 right-0'>
          <img src={heroDad} alt="Super Hero Dad" aria-label="Super Hero Dad" />
        </div>
      </section>

      {/**putting your child first */}
      <section className='lg:screen mt-16 '>
        <header className='text-center text-[#8F36FF]'>
          <h1 className='text-[40px] font-medium'>Putting Your Child First</h1>
          <p className='text-[20px] font-light'>Ready for a new appreach?</p>
        </header>
        <main className='mt-10 flex flex-col items-center justify-center'>
          <div className='max-w-[882px]'>
            <p className='text-center text-[20px] font-regular px-5'>We’re proud to offer a comprehensive Developmental Relationship-Based Intervention (DRBI) model that treats the whole person, accepts most major insurance providers, and provides all necessary therapeutic services under one roof. With a focus on building meaningful relationships and addressing individual needs, our program brings together a range of services like never before, offering families a unique and transformative approach to help their child achieve their fullest potential.</p>
          </div>
          <div className='flex lg:flex-row lg:gap-27 md:gap-4 flex-col px-5 md:px-0'>
            {[
              {id:1, context:"In-home", thumbnail:in_home, },
              {id:2, context:"In-school", thumbnail: in_school}
            ].map((idx)=>(
              <div className='flex flex-col gap-16 mt-10'>
                <div key={idx.id} className='max-w-[473px] max-h-[270px]'>
                  <img src={idx.thumbnail} alt={idx.context} aria-label={idx.context}/>
                </div>
                {/**CTA button */}
                <div className='flex items-center justify-center'>
                  <button className='border border-[#8F36FF] min-w-[287px] min-h-[65px] rounded-[40px] text-[#8F36FF] transition-all duration-[1s] hover:bg-[#8F36FF] hover:text-white'>{idx.context}</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>

      <section id="video" className="relative min-h-screen mt-16 section_bg">
        {/* Overlay */}
        <div className="bg-[#8F36FF]/90 absolute inset-0 z-[10] flex items-center justify-center px-4 md:px-10">
          {/* Main Content */}
          <main className="text-white max-w-[1043px] w-full text-center space-y-10 py-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug">
              "It goes beyond simply addressing questions or deterring unwanted behaviors; it's about delving into the root of those behaviors and gaining a genuine understanding of their origins."
            </h1>
            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="w-[200px] md:w-[240px] h-[55px] md:h-[65px] border border-white rounded-full transition-all duration-500 hover:bg-white hover:text-[#8F36FF] text-base md:text-lg">
                Play Video
              </button>
            </div>
          </main>
        </div>
      </section>


      {/**right choice for your family */}
      <section id='right_choice' className='mt-16 pt-30'>
        <header className='text-center text-[#8F36FF]'>
          <h1 className='text-[40px] font-medium'>The Right Choice For Your Family</h1>
          <p className='text-[20px] font-light'>Ignite your child's development to new heights!</p>
        </header>
        <main className='flex flex-col items-center justify-center gap-16'>
          <div className='max-w-[882px] mt-5'>
            <p className='text-center text-[20px] font-regular px-4 lg:px-0'>We firmly believe that autism therapy should never be a source of stress, fear, or punishment. Our approach centers around building positive relationships and meeting our clients exactly where they are in their unique journeys. By creating a welcoming environment where therapy is fun and exciting, we open up the space for meaningful growth to occur. We understand that when therapy is enjoyable, it becomes a catalyst for progress, allowing each child to thrive and reach their full potential.</p>
          </div>
          <div className='flex flex-col md:flex-row lg:gap-30 gap-10'>
            {[
              {id:1, context:"Connect", thumbnail:connect, text_color:"#3D9FFA"},
              {id:2, context:"Play", thumbnail:play, text_color:"#FF9A02"},
              {id:3, context:"Grow", thumbnail:grow, text_color:"#00D87D"},
            ].map((idx)=>(
              <div className='flex flex-col gap-10'>
                <div key={idx.id} className='max-w-[212px] max-h-[330px]'>
                  <div className='w-[212px] h-[214px]'>
                    <img className='max-w-full max-h-full' src={idx.thumbnail} alt={idx.context} aria-label={idx.context} />
                  </div>
                  <div>
                    <p className='text-center mt-3' style={{color: idx.text_color}}>{idx.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <a href="tel:+1 700 348 1022">
              <button className='min-w-[220px] h-[65px] border border-[#8F36FF] text-[#8F36FF] rounded-[40px] transition-all duration-[1s] hover:bg-[#8F36FF] hover:text-white'>get more details</button>
            </a>
          </div>
        </main>
      </section>

      {/**divider */}
      <div className='max-w-[150px] h-[10px] bg-[#00D87D] mt-25'></div>
      <RegsiterChildForm />
    </>
  )
}

export default Home