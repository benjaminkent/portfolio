import React, { Component } from 'react'

import SocialMedia from './SocialMedia'

class AboutMe extends Component {
  render() {
    return (
      <>
        <div>
          <div className="about-me">
            <h1 className="about-me-header">About Me</h1>
            <div className="underline" />
            <p className="about-text">
              Located in the Tampa Bay Area and a former Financial Advisor, I
              have followed my love of the tech industry and learned the skills
              that enable me to write full stack web applications. I am
              passionate about designing and building the technologies that will
              shape the future. When I'm not coding, I enjoy playing guitar,
              sports, cooking, traveling... and learning how to be a better Web
              Developer!
            </p>
            <h1 className="about-me-header">Tech Philosophy</h1>
            <div className="underline" />
            <p className="about-text-next">
              This website was designed, coded and styled completely from
              scratch by myself using React.js and Sass. With most of my
              projects, I like to write all of the code myself from scratch,
              however I am familiar with and have implemented CSS frameworks
              like bootstrap and Bulma to create websites as well. I am
              extremely excited about where the tech industry is heading and
              look forward to the many challenges and breakthroughs that lie
              before us.
            </p>
            <div className="ee">
              <p>
                Hey cool, you're checking out my code! Now go ahead and toggle
                display: none and enjoy this delightful gif.
              </p>
              <img src="/images/cat-unicorn.gif" alt="cat riding a unicorn" />
            </div>
            <h1 className="about-me-header">Contact Me</h1>
            <div className="underline" />
            <p className="about-text-next">
              Please reach out to learn if I would make a good fit for your team
              at:{' '}
              <a className="about-contact" href="tel://17276199736">
                +1(727)619-9736
              </a>{' '}
              or
              <a
                className="about-contact"
                href="mailto:benjamin.k.jehl@gmail.com"
              >
                {' '}
                benjamin.k.jehl@gmail.com
              </a>
              .
            </p>
            <SocialMedia />
            {/* <ul className="social-media">
            </ul> */}
          </div>
        </div>
      </>
    )
  }
}

export default AboutMe
