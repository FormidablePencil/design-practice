import React from 'react'
import './index.scoped.sass'

function template({ title, paragraph, subParagraph }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <img src="https://i.ibb.co/5Kn9mXG/vue.png" alt="vue" />

      <div className="container-second">
        <div className="text-container">
          <p className="paragraph">{paragraph}</p>
          <p className="sub-paragraph">{subParagraph}</p>
        </div>
        
        <button>Join now</button>
      </div>
    </div>
  )
}

export default template
