import React from 'react'

const arr = [
  { section0: 'Preferences', products: "Advertise", resources: "List a cryptocurrrency", Info: "About us", social: 'Twitter', logo: '' },
  { section1: 'Products', products: "Coinranking API ", resources: "Edit a cryptocurrency", Info: "Methodology", social: 'Telegram Group', logo: '' },
  { section2: 'Resources', products: "Coinhodler", resources: "API documentation", Info: "Changelog", social: 'Telegram Bot', logo: '' },
  { section3: 'Info', products: "Android app", resources: "API pricing", Info: "Brandiing", social: 'Telegram News', logo: '' },
  { section: 'Social', products: "Windows app", resources: "Support & FAQ", Info: "Feedback", social: 'Instagram', logo: '' },
  { resources: "Community Forum", Info: "Terms & conditions", social: 'Facebook', logo: '' },
  { Info: "Contact", social: 'Linkedln', logo: '' },

]

const foote = [
  { product: ['Advertise', 'Coinranking API', 'Coinhodler', 'Android app', 'Windows app'] },

]
const ar = ['preferences', 'products']

const Footer = () => {
  return (
    <>
      <hr />
      <p className='container mx-auto px-6 py-3 text-sm'>All coins </p>
      <div className='bg-sky-50 text-sm'>
        <div className='container mx-auto p-6'>
          <h1 className='font-bold pb-6'>Partners & clients</h1>
        </div>
        <hr />
        <div className='container mx-auto p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <ul>
          <li>Preferences</li>
          <li> USD American</li>
          <li> EN English</li>
        </ul>
        
        <ul>
          <li>Products</li>
          <li>Advertise</li>
          <li>Coinranking API</li>
          <li>Coinholder</li>
          <li>Android app</li>
          <li>Windows app</li>
        </ul>

        <ul>
        <li> Resources</li>
          <li> List a cryptocurrency</li>
          <li>Edit a cryptocurrency </li>
          <li> API documentation</li>
          <li> API pricing</li>
          <li> Support & FAQ</li>
          <li>Community Forum </li>
        </ul>

        <ul>
        <li> Info</li>
        <li>About us </li>
        <li>Methodology</li>
        <li> Changelog</li>
        <li>Branding </li>
        <li>Feedback</li>
        <li>Terms & conditions </li>
        <li>Contact</li>
        </ul>

        <ul>
        <li> Social</li>
          <li> Twitter </li>
          <li> Telegram Group</li>
          <li> Instagram</li>
          <li>  Facebook</li>
          <li> LinkedIn </li>
          <li>Reddit</li>
          <li>Github</li>
          <li>Blog</li>
        </ul>
        </div>
      </div>

    </>
  )
}

export default Footer