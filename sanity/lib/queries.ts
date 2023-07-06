import {groq} from "next-sanity"




export const faqQuery = groq`*[_type == "faq" ] | order(_createdAt asc) {
    _id,
    question,
    answer  
  }`