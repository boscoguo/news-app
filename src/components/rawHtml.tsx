import React from 'react'
import DOMPurify from 'dompurify'
import { RawHTMLInterface } from '../interfaces/rawHTML'

const RawHTML: React.FC<RawHTMLInterface> = ({ rawContent }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(rawContent, {
          ALLOWED_TAGS: ['p'],
        }),
      }}
    ></div>
  )
}

export default RawHTML
