"use client"

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Typed from 'typed.js';

export default function Home() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [message, setMessage] = useState()
  const [sent, setSent] = useState(false)
  const [scroll, setScroll] = useState(false)
  

  const form = useRef()
  const el = useRef()

  
  const Name = (e) => {

    setName(e.target.value);
  }

  const Email = (e) => {

    setEmail(e.target.value);
  }


  const Mobile = (e) => {
    setMobile(e.target.value);
  }


  const Message = (e) => {

    setMessage(e.target.value);
  }
  const Scrollfunction = () => {
    const pagey = window.scrollY
    if (pagey > 680) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  }


  useEffect(() => {

    window.addEventListener("scroll", Scrollfunction);

    const typed = new Typed(el.current, {
      strings: ['Student', 'Full Stack Developer'],
      typeSpeed: 90,
    });
    return () => {
      window.removeEventListener("scroll", Scrollfunction);
      typed.destroy();
    };
  }, []);
  
  const Contact = (e) => {
    e.preventDefault();

    if (name == null || email == null || mobile == null) {
      alert("Please enter the information");
      return;

    }
    const par = {
      name: name,
      email: email,
      mobile: mobile,
      message: message
    }

    emailjs.send('service_c83o4bc', 'template_hcpc6pv', par, 'yLWMSA-6B0ZON1YFb')
      .then((result) => {
        setName("");
        setEmail("");
        setMobile("");
        setMessage("")
        setSent(!sent)

        setTimeout(() => {
          setSent(false)

        }, 1000)

      }, (error) => {
        alert("ERROR", error.text);
      });
  }

  return (
    <>
       <head>
        <title>Swapnil</title>
      </head>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <nav className={scroll ? "sticky" : ""}>
          <div className="max-width">

            <div className="logo"><a href="#">Swap's Portfolio</a></div>
            <ul className="menu">
              <li><a href="#home" className="menu-btn">Home</a></li>
              <li><a href="#about" className="menu-btn">About</a></li>
              <li><a href="#services" className="menu-btn">Experience</a></li>
              <li><a href="#skills" className="menu-btn">Skills</a></li>
              <li><a href="#teams" className="menu-btn">Projects</a></li>
              <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      </nav>

      {/* <!-- HOME SECTION --> */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2"><span>S</span>wapnil <span>B</span>ade</div>
            <div className="text-3">And I'm a <span ref={el} className="typing"> </span></div>
            <a href="/temp/public/Swapnil_Bade_Resume.pdf" target="_blank" download="Swapnil_Bade_Resume.pdf">Download Resume</a>
          </div>
        </div>
      </section>

      {/* <!-- ABOUT SECTION --> */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <Image src="https://swapnilbade04.github.io/Swapnil-Website/swapnil.png" alt="Not found" width={10000} height={10000} />
            </div>
            <div className="column right">
              <div className="text">
                I am Swapnil and I'm a <span className="typing-2"></span>
              </div>
              <p>
              graduate student at Stony Brook University, I am actively pursuing my master's degree in Computer Engineering. With three years of comprehensive experience in full-stack development at British Telecommunication, Europe's leading telecommunications provider, I have honed my skills in software engineering. Currently, I am also serving as a part-time research assistant at the Centre Valbio, where I focus on analyzing biological data
              </p>
              
              <a href="https://github.com/SwapnilBade04"><i className="fab fa-github"></i> Github</a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SERVICE SECTION --> */}
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My Experience</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Accenture </div>
                <p>
                  Using Front-End libraries React JS,Next JS , build fast, interactive web components. Engineered high-performance RESTful APIs using frameworks such as Spring Boot.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-industry"></i>
                <div className="text">Ubt Technologies</div>
                <p>
                  Constructed a microservice application that allows to create users, register hotels, and send feedback
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-bar"></i>
                <div className="text">Centre ValBio</div>
                <p>
                I am currently employed as a part-time Research Assistant, where I utilize technologies such as Angular and Django to develop both the front-end and back-end components for performing CRUD operations on biological datasets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SKILLS SECTION --> */}
      <section className="skills" id="skills" >
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">

            <div className="column left">
              <div className="text"><h1>My skills & experiences.</h1></div>
            </div>


            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>Java, JavaScript</span>
                  <span>70%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Front-End Development</span>
                  <span>75%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Back-End Development</span>
                  <span>65%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Database & Testing</span>
                  <span>60%</span>
                </div>
                <div className="line php"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MySQL</span>
                  <span>75%</span>
                </div>
                <div className="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- TEAMS SECTION --> */}
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">

                <div className="text">Key Value Store</div>
                <p> Developed a resilient key-value store with RAFT consensus for data reliability, high availability, and system
                  resilience. Achieved fault tolerance and seamless 2x data replication.
                  Implemented key-based sharding for enhanced parallelization, reducing RPC overhead by 50%</p>
              </div>
            </div>
            <div className="card">
              <div className="box">

                <div className="text">UDAN Application</div>
                <p> Led the conception and development of the web application UDAN, which delivers a comprehensive suite of
                  flight-related functionalities, including seamless ticket booking and detailed booking information retrieval.
                  Employed cutting-edge technologies such as Spring Boot for the back end and React JS for the front end,
                  orchestrating a harmonious integration to ensure a robust and user-centric web experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- CONTACT SECTION --> */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div>
                <p>
                  Feel free to get in touch with me. I am always open to discussing
                  new projects, creative ideas or opportunities, will love to be part of your
                  visions.
                </p>
                <div className="icons">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <div className="info">
                      <div className="head">Name</div>
                      <div className="sub-title">Swapnil Bade</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                      <div className="head">Address</div>
                      <div className="sub-title">Stony Brook, New York</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-envelope"></i>
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title">badeswapnil123@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form ref={form} onSubmit={Contact} action="#">
                <div className="fields">
                  <div className="field name">
                    <input value={name} onChange={Name} type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input value={email} onChange={Email} type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input value={mobile} onChange={Mobile} type="text" placeholder="Mobile no" required />
                </div>
                <div className="field textarea">
                  <textarea value={message} onChange={Message} cols="30" rows="10" placeholder="Message.." required></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                  {sent && <div className="text">..Message Sent.</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* 
<!-- FOOTER SECTION --> */}
      <footer>
        <span>Created By
          <a href="#" target="_blank"><span className="fab fa-github"></span> Swapnil Bade</a>
          | <span className="far fa-copyright"></span> 2021 All rights reserved.</span>
      </footer>
    </>
  );
}
