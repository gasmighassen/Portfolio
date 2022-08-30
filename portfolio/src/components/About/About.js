import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about" id="about">
      <div className="about-info">
        <img src="/img/profilePhoto2.png" alt="" className="photo" />
        <div className="about-info-text">
          <h1>Hey There!</h1>
          <p>
            Fuelled by a passion for designing compelling products, I have a
            deep desire to excel and continuously improve in my work. Learn more
            about my journey below.
          </p>
        </div>
      </div>
      <div className="about-info">
        <div class="skillset-wrap">
          <h1>My Career So Far</h1>
          <p class="paragraph">
            Always up for a challenge, I have worked for lean start-ups and was
            a member of the first New Zealand start-up to attend Y Combinator,
            the largest start-up accelerator in the world. From there, I worked
            my way up to Art Director and Team Lead at Appster where I oversaw
            the design of 30+ mobile and desktop apps. Currently, I lead UI/UX
            design at SaaS start-up VideoMyJob.
          </p>
        </div>
        <div class="service-wrap">
          <div class="services">
            <div class="service-name-text">UI Design</div>
            <div class="service-name-text">UX&nbsp;Design</div>
            <div class="service-name-text">Prototyping</div>
            <div class="service-name-text">Branding</div>
            <div class="service-name-text">HTML/CSS</div>
            <div class="service-name-text">Wireframing</div>
            <div class="service-name-text">Information Architecture</div>
            <div class="service-name-text">User Research</div>
            <div class="service-name-text">User Interviews</div>
            <div class="service-name-text">Leadership</div>
            <div class="service-name-text">Figma</div>
            <div class="service-name-text">Adobe Suite</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
