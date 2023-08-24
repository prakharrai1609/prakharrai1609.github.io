import React from 'react'

const About = () => {
  return (
    <div id="content">

      <header>
        <p className="name-header"><a href="/">← Prakhar Rai</a></p>
      </header>

      <h1 className="dateless">About me</h1>

      <p>Timeline:</p>

      <ul className="index">
        <li><span className="index-date">02-2023 - Present</span><a href="">SWE @ Physics Wallah</a></li>
        <li><span className="index-date">09-2022 - 02-2023</span><a href="">Backed developer @ Interview Kickstart</a></li>
        <li><span className="index-date">06-2022 - 07-2022</span><a href="">Internship @ Cisco</a></li>
        <li><span className="index-date">01-2020 - 03-2022</span><a href="">Algorithms educator</a></li>
      </ul>

      <p>I reply to every thoughtful note!</p>

    </div>

  )
}

export default About;