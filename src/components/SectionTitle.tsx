import React from 'react'

interface SectionTitleProps {
  title: string; 
  category: string;
  description: string;
  textAlignment?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, category, description, textAlignment }) => {
  
  return (
    <div className={`${!textAlignment ? "text-center mx-auto" : textAlignment} max-w-[35em] xl:max-w-[50em]`}>
      <p className='text-violet-dark  text-sm xs:text-base poppins-semibold xl:text-lg 2xl:text-xl '>{category}</p>
      <h2 className="text-xl poppins-bold xs:text-2xl lg:text-3xl xl:text-5xl xl:mt-3 2xl:text-[2.7em] 2xl:mt-3">{title}</h2>
      <p className='leading-6 text-sm xs:text-base mt-2 xs:leading-7 lg:mt-3 xl:mt-5 xl:text-lg 2xl:text-[1.4em] 2xl:leading-[1.8em]'>{description}</p>
    </div>
  )
}

export default SectionTitle