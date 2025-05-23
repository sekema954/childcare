import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
function Footer() {
  const [isHovered, setHovered] = useState<number | null>(null);
  return (
    <footer className="min-h-[476px] bg-[#3F00AF] px-16 py-16">
      <div className='flex flex-col lg:flex-row items-center justify-between text-white'>
        <img src={logo} alt="Child Care Website Logo" aria-label='Child Care Website Logo' />
        {[
          {id:1, context:"1234 Veron Road.Fort Lauderdale, FL 33312", icon:""},
          {id:2, context:"920-248-3021", icon:""},
          {id:3, context:"info@childcare.com", icon:""},
        ].map((info)=>(
          <div className='mt-10 lg:mt-0' key={info.id}>
            <p className='text-[18px]'>{info.context}</p>
          </div>
        ))}
      </div>
      <div className='w-full mt-10 bg-white h-0.5'></div>
      {/**social icons */}
      <div className='flex gap-7 flex items-center justify-center py-10'>
        {[
          {id:1, context:"facebook", icon:faFacebook, href:"https://facebook.com"},
          {id:2, context:"twitter", icon:faTwitter, href:"https://twitter.com"},
          {id:3, context:"linkedin", icon:faLinkedin, href:"https://linkedin.com"},
          {id:4, context:"instagram", icon:faInstagram, href:"https://instagram.com"},
        ].map((icon)=>(
          <a href={icon.href} target='_blank' rel='noopener noreferrer' onMouseEnter={()=>setHovered(icon.id)} onMouseLeave={()=>setHovered(null)} className={`w-[42px] h-[42px] rounded-full bg-transparent border border-2 border-white flex items-center justify-center cursor-pointer transition-all duration-[1s] ease-in-out ${isHovered === icon.id ? 'bg-white' : ''}`}>
            <FontAwesomeIcon className={`text-xl ${isHovered === icon.id ? 'text-[#3F00AF]' : 'text-white'}`} icon={icon.icon} aria-label={icon.context}/>
          </a>
        ))}
      </div>
      <p className='text-center text-white'>Copyrights @ 2025 | Child Care Website</p>
    </footer>
  )
}

export default Footer