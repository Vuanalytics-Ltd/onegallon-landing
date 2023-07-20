import {groq} from "next-sanity"




export const faqQuery = groq`*[_type == "faq" ] | order(_createdAt asc) {
    _id,
    question,
    answer ,
    _type 
  }`

export const postQuery = groq`*[_type == "post" && publishedAt < now()]| order(publishedAt desc){
  _id,
  title,
  body,
}`  