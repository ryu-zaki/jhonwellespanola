import React from 'react'

interface SectionTitleProps {
  title: string
  ; category: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, category }) => {
  
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle