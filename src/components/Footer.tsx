
/* Assets */
import { useTheme } from './ThemeContext';
import { handleSocMed } from './UpperNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const {theme} = useTheme();
  

  return (
    <footer className={`${theme === "Dark" ? "bg-[#222]" : "bg-dark"} mt-16 pt-16 text-white text-center text-sm xs:text-base xl:text-lg 2xl:text-[1.4em] 2xl:pt-16 2xl:mt-32`}>
        <div className='container mx-auto flex flex-col gap-5 px-2 xl:max-w-[1024px] 2xl:gap-8'>
        <div>
          <h2 className='text-base poppins-semibold xs:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Jhonwell Espanola</h2>
          <p className='text-violet-light poppins-semibold text-xs xs:text-sm 2xl:text-[.9em]'>Full-Stack Developer</p>
        </div>
        
        <p className='2xl:leading-[1.5em]'>
            Thank you for visiting my portfolio. If you have any further questions or would like to discuss potential collaborations, please don't hesitate to reach out to me. Have a great day! 
        </p>

        <div className='flex justify-center gap-5 items-center 2xl:gap-8'>
             <FontAwesomeIcon className='cursor-pointer' onClick={() => handleSocMed("https://www.facebook.com/jhonwell.espanola")} icon={faFacebook} />
                          <FontAwesomeIcon className='cursor-pointer' onClick={() => handleSocMed("https://www.instagram.com/mqkie_/")} icon={faInstagram} />
                          <FontAwesomeIcon className='cursor-pointer' onClick={() => handleSocMed("https://www.youtube.com/@12-2aespanolajhonwella.6")} icon={faYoutube} />
        </div>
        </div>

        <div className='bg-violet-dark mt-16 text-xs py-3 xs:text-sm xl:text-base 2xl:mt-16 2xl:text-[.95em]'>
          <p>jhonwellespanola4@gmail.com | All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer