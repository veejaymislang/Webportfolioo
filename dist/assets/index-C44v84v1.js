(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <style>
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 15px 0;
        background: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        border-bottom: none;
        z-index: 100;
        transition: all 0.3s ease;
        box-shadow: none;
      }

      .navbar::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background: transparent;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .navbar:hover::after {
        opacity: 0;
      }

      .navbar.scrolled {
        padding: 12px 0;
        background: transparent;
        border-bottom-color: transparent;
        box-shadow: none;
      }

      .nav-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        padding-right: 60px;
      }

      .brand {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: 2px;
        background: linear-gradient(135deg, var(--text-primary) 0%, rgba(255, 255, 255, 0.9) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease;
      }

      .brand span {
        color: var(--accent-cyan);
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .brand:hover {
        filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.4));
      }

      /* Animated brand letters */
      .brand-letter {
        display: inline-block;
        transform-origin: center;
        transition: all 0.2s ease;
      }

      .nav-links {
        display: flex;
        gap: 40px;
        align-items: center;
      }

      .nav-links a {
        font-size: 0.95rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        position: relative;
        padding: 8px 0;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
        color: rgba(255, 255, 255, 0.8);
      }

      .nav-links a .nav-text {
        display: inline-block;
        transition: all 0.3s ease;
      }

      .nav-links a .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, var(--accent-cyan), rgba(0, 240, 255, 0.5));
        pointer-events: none;
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
        transition: width 0.3s ease;
      }

      .nav-links a:hover .underline {
        width: 100%;
      }

      .nav-links a:hover .nav-text {
        color: var(--accent-cyan);
        text-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
        transform: translateY(-2px);
      }

      @media (max-width: 768px) {
        .nav-container {
          padding: 0 20px;
        }

        .nav-links { 
          gap: 20px;
        }

        .nav-links a {
          font-size: 0.85rem;
          letter-spacing: 0.8px;
        }
      }
    </style>
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <ul class="nav-links">
          <li><a href="#hero" class="hoverable"><span class="nav-text">Home</span><span class="underline"></span></a></li>
          <li><a href="#about" class="hoverable"><span class="nav-text">About</span><span class="underline"></span></a></li>
          <li><a href="#skills" class="hoverable"><span class="nav-text">Skills</span><span class="underline"></span></a></li>
          <li><a href="#projects" class="hoverable"><span class="nav-text">Projects</span><span class="underline"></span></a></li>
          <li><a href="#certificates" class="hoverable"><span class="nav-text">Certificates</span><span class="underline"></span></a></li>
          <li><a href="#contact" class="hoverable"><span class="nav-text">Contact</span><span class="underline"></span></a></li>
        </ul>
      </div>
    </nav>
  `}function t(){return`
    <style>
      #hero {
        padding-top: 100px;
        padding-bottom: 60px;
        position: relative;
        min-height: 85vh;
        display: flex;
        align-items: center;
      }

      #hero::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.06) 0%, transparent 50%);
        pointer-events: none;
        z-index: 0;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 1;
      }

      .hero-content h1 {
        font-size: clamp(3rem, 7vw, 5rem);
        font-weight: 900;
        line-height: 0.8;
        margin-bottom: 10px;
        letter-spacing: -2px;
      }

      .hero-word {
        display: block;
        animation: slide-up 0.8s ease backwards;
        line-height: 0.8;
      }

      .hero-word.light {
        color: var(--text-primary);
      }

      .hero-word.gradient {
        margin-top: -10px;
        background: linear-gradient(135deg, #00f0ff 0%, #8b5cf6 50%, #ff007f 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.4));
      }

      .hero-word:nth-child(1) { animation-delay: 0.2s; }
      .hero-word:nth-child(2) { animation-delay: 0.4s; }

      .hero-subtitle {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 25px;
        font-weight: 600;
        letter-spacing: 0.5px;
        animation: fade-in-up 0.8s ease 0.5s backwards;
      }

      .hero-description {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 30px;
        line-height: 1.7;
        max-width: 520px;
        animation: fade-in-up 0.8s ease 0.6s backwards;
      }

      .hero-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 35px;
        animation: fade-in-up 0.8s ease 0.7s backwards;
      }

      .skill-badge {
        padding: 10px 18px;
        background: transparent;
        border: 1px solid rgba(99, 102, 241, 0.4);
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-secondary);
        transition: all 0.3s ease;
        cursor: default;
      }

      .skill-badge:hover {
        background: rgba(99, 102, 241, 0.1);
        border-color: rgba(99, 102, 241, 0.8);
        color: var(--text-primary);
        box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
      }

      .hero-cta {
        display: flex;
        gap: 15px;
        animation: fade-in-up 0.8s ease 0.8s backwards;
      }

      .cta-btn {
        padding: 12px 28px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 0.95rem;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .cta-btn.primary {
        background: rgba(0, 0, 0, 0.4);
        color: var(--text-primary);
        border: 1.5px solid rgba(148, 163, 184, 0.3);
      }

      .cta-btn.primary:hover {
        background: rgba(0, 0, 0, 0.6);
        border-color: rgba(148, 163, 184, 0.6);
        transform: translateY(-2px);
      }

      .cta-btn.secondary {
        background: transparent;
        color: var(--text-primary);
        border: 1.5px solid rgba(148, 163, 184, 0.3);
      }

      .cta-btn.secondary:hover {
        background: rgba(148, 163, 184, 0.05);
        border-color: rgba(148, 163, 184, 0.6);
        transform: translateY(-2px);
      }

      /* Animated graphic element */
      .hero-graphic {
        position: relative;
        width: 100%;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .graphic-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .graphic-shape {
        position: absolute;
        border-radius: 50%;
        animation: float 8s ease-in-out infinite;
      }

      .shape-1 {
        width: 250px;
        height: 250px;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
        border: 2px solid rgba(99, 102, 241, 0.25);
        animation-delay: 0s;
      }

      .shape-2 {
        width: 350px;
        height: 350px;
        background: conic-gradient(from 0deg, rgba(0, 240, 255, 0.08), transparent, rgba(0, 240, 255, 0.08));
        animation: rotate-slow 30s linear infinite, float 8s ease-in-out infinite;
        animation-delay: 0s;
      }

      .shape-3 {
        width: 150px;
        height: 150px;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.15), transparent);
        border: 1px dashed rgba(0, 240, 255, 0.2);
        animation: rotate-fast 15s linear infinite, float 8s ease-in-out infinite;
        animation-delay: -2s;
      }

      .glow-orb {
        position: absolute;
        width: 80px;
        height: 80px;
        background: radial-gradient(circle at 30% 30%, rgba(0, 240, 255, 0.3), transparent);
        border-radius: 50%;
        filter: blur(25px);
        animation: pulse 4s ease-in-out infinite;
      }

      .glow-orb:nth-child(4) { top: 10%; left: 15%; animation-delay: 0s; }
      .glow-orb:nth-child(5) { bottom: 20%; right: 10%; animation-delay: 1s; animation: pulse-alt 4s ease-in-out infinite; }

      @keyframes pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
      }

      @keyframes pulse-alt {
        0%, 100% { opacity: 0.5; transform: scale(0.9); }
        50% { opacity: 1; transform: scale(1); }
      }

      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes rotate-fast {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }

      @keyframes slide-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.05); }
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes rotate-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }

      @keyframes pulse-ring {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.1); opacity: 0.1; }
      }

      @media (max-width: 1024px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .hero-graphic {
          height: 300px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
        }
      }

      @media (max-width: 768px) {
        #hero {
          padding-top: 80px;
          min-height: auto;
        }

        .hero-grid {
          grid-template-columns: 1fr;
        }

        .hero-content h1 {
          font-size: 2.5rem;
        }

        .hero-cta {
          flex-direction: column;
          width: 100%;
        }

        .cta-btn {
          width: 100%;
          justify-content: center;
        }

        .hero-graphic {
          display: none;
        }

        .hero-stats {
          grid-template-columns: 1fr;
        }
      }
    </style>
    <section id="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <h1>
            <span class="hero-word light">Frontend & Backend</span>
            <span class="hero-word gradient">Developer</span>
          </h1>
          <p class="hero-subtitle">Network & Telecom Student</p>
          <p class="hero-description">
            Information Technology student with hands-on experience in software development, networking, and database management. I focus on creating engaging digital experiences and always strive to deliver the best solutions in every project I work on.
          </p>
          
          <div class="hero-skills">
            <div class="skill-badge">React</div>
            <div class="skill-badge">Javascript</div>
            <div class="skill-badge">Node.js</div>
            <div class="skill-badge">Tailwind</div>
          </div>

          <div class="hero-cta">
            <a href="#projects" class="cta-btn primary">View Projects →</a>
            <a href="#contact" class="cta-btn secondary">Contact Me 📧</a>
          </div>
        </div>

        <div class="hero-graphic">
          <div class="graphic-container">
            <div class="graphic-shape shape-2"></div>
            <div class="graphic-shape shape-1"></div>
            <div class="graphic-shape shape-3"></div>
            <div class="glow-orb"></div>
            <div class="glow-orb"></div>
          </div>
        </div>
      </div>
    </section>
  `}var n=`/Webportfolioo/assets/K-c-rD_SRC.jpg`;function r(){return`
    <style>
      #about {
        padding: 100px 0;
      }

      .about-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .about-left {
        position: relative;
        z-index: 1;
      }

      .about-greeting {
        font-size: 1.3rem;
        color: rgba(99, 102, 241, 0.9);
        font-weight: 600;
        margin-bottom: 10px;
        animation: fade-in-up 0.6s ease 0.1s backwards;
      }

      .about-heading {
        font-size: 3.5rem;
        font-weight: 900;
        color: var(--text-primary);
        margin-bottom: 30px;
        line-height: 1.2;
        animation: fade-in-up 0.6s ease 0.2s backwards;
      }

      .about-description {
        font-size: 1.05rem;
        color: var(--text-secondary);
        line-height: 1.8;
        margin-bottom: 30px;
        animation: fade-in-up 0.6s ease 0.3s backwards;
      }

      .about-quote {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
        border-left: 4px solid rgba(99, 102, 241, 0.6);
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 40px;
        font-size: 1rem;
        font-style: italic;
        color: var(--text-secondary);
        animation: fade-in-up 0.6s ease 0.4s backwards;
      }

      .about-buttons {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        animation: fade-in-up 0.6s ease 0.5s backwards;
      }

      .about-btn {
        padding: 14px 28px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
      }

      .about-btn.primary {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
        color: white;
      }

      .about-btn.primary:hover {
        background: linear-gradient(135deg, rgba(99, 102, 241, 1), rgba(139, 92, 246, 1));
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
      }

      .about-btn.secondary {
        background: transparent;
        color: var(--text-primary);
        border: 2px solid rgba(99, 102, 241, 0.4);
      }

      .about-btn.secondary:hover {
        background: rgba(99, 102, 241, 0.1);
        border-color: rgba(99, 102, 241, 0.8);
        transform: translateY(-3px);
      }

      .about-right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .about-image-wrapper {
        width: 350px;
        height: 350px;
        border-radius: 24px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(0, 240, 255, 0.15);
        animation: float 6s ease-in-out infinite;
        border: 2px solid rgba(99, 102, 241, 0.2);
      }

      .about-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease;
      }

      .about-image-wrapper:hover img {
        transform: scale(1.05);
      }

      .about-glow {
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 28px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
        pointer-events: none;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 1024px) {
        .about-section {
          grid-template-columns: 1fr;
          gap: 60px;
        }

        .about-heading {
          font-size: 2.8rem;
        }

        .about-image-wrapper {
          width: 280px;
          height: 280px;
        }

        .about-glow {
          width: 310px;
          height: 310px;
        }
      }

      @media (max-width: 768px) {
        #about {
          padding: 60px 0;
        }

        .about-section {
          gap: 40px;
        }

        .about-heading {
          font-size: 2rem;
        }

        .about-description {
          font-size: 0.95rem;
        }

        .about-buttons {
          flex-direction: column;
        }

        .about-btn {
          justify-content: center;
        }

        .about-image-wrapper {
          width: 220px;
          height: 220px;
        }

        .about-glow {
          width: 250px;
          height: 250px;
        }
      }
    </style>
    <section id="about">
      <div class="container">
        <div class="about-section fade-up">
          <div class="about-left">
            <div class="about-greeting">Hello, I'm</div>
            <h2 class="about-heading">Veejay Mislang</h2>
            
            <p class="about-description">
              Information Technology student with hands-on experience in software development, networking, and database management. I focus on creating engaging digital experiences and always strive to deliver the best solutions in every project I work on.
            </p>

            <div class="about-quote">
              "Leveraging technology to create meaningful digital experiences that solve real-world problems."
            </div>

            <div class="about-buttons">
              <a href="#" class="about-btn primary">📥 Download CV</a>
              <a href="#projects" class="about-btn secondary">View Projects →</a>
            </div>
          </div>

          <div class="about-right">
            <div class="about-glow"></div>
            <div class="about-image-wrapper">
              <img src="${n}" alt="Veejay Mislang" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function i(){return`
    <style>
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 25px;
        margin-top: 50px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
      }
      .skill-box {
        background: #0f121a;
        border: 1px solid rgba(255, 255, 255, 0.05);
        padding: 30px 20px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: transform 0.3s ease, border-color 0.3s ease;
      }
      .skill-box:hover {
        transform: translateY(-8px);
        border-color: var(--accent-cyan);
        box-shadow: 0 10px 25px rgba(0, 240, 255, 0.1);
      }
      .skill-icon-bg {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        transition: background 0.3s ease;
      }
      .skill-box:hover .skill-icon-bg {
        background: rgba(0, 240, 255, 0.1);
        border-color: var(--accent-cyan);
      }
      .skill-icon {
        font-size: 1.8rem;
      }
      .skill-name {
        font-size: 1rem;
        font-weight: 600;
        color: #e2e8f0;
      }
      @media (max-width: 768px) {
        .skills-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    </style>
    <section id="skills">
      <div class="container">
        <h2 class="section-title fade-up">My <span>Skills</span></h2>
        <div class="skills-grid">
          ${[{name:`JavaScript`,icon:`⚡`},{name:`HTML5`,icon:`🌐`},{name:`CSS3`,icon:`🎨`},{name:`React.js`,icon:`⚛️`},{name:`React Native`,icon:`📱`},{name:`Node.js`,icon:`🟩`},{name:`TypeScript`,icon:`📘`},{name:`Tailwind CSS`,icon:`🌊`},{name:`APIs & Backend`,icon:`🔌`},{name:`Mobile UI / UX`,icon:`✨`}].map((e,t)=>`
    <div class="skill-box hoverable fade-up stagger-${t%3+1}">
      <div class="skill-icon-bg">
        <span class="skill-icon">${e.icon}</span>
      </div>
      <h3 class="skill-name">${e.name}</h3>
    </div>
  `).join(``)}
        </div>
      </div>
    </section>
  `}var a=`/Webportfolioo/assets/HA-Df3B1EQ_.png`,o=`/Webportfolioo/assets/186da0bd-1aec-4b9b-b06e-df37aa84c4f3-DBeLkcS6.jpg`,s=`/Webportfolioo/assets/Library-Dy-vr7kA.jpg`,c=`/Webportfolioo/assets/Vaccine-B14hSjm0.jpg`,l=`/Webportfolioo/assets/Rent-B5KF10WT.jpg`,u=`/Webportfolioo/assets/Repair-BYWea9ff.jpg`;function d(){let e=document.getElementById(`project-modal`),t=document.getElementById(`modal-img`),n=document.getElementById(`modal-title`),r=document.getElementById(`modal-desc`),i=document.querySelector(`.modal-close`),a=document.querySelector(`.modal-overlay`);if(!e)return;document.querySelectorAll(`.btn-details`).forEach(i=>{i.addEventListener(`click`,i=>{i.preventDefault();let a=i.target.closest(`.project-card`),o=a.querySelector(`.project-title`).textContent,s=a.querySelector(`.project-desc`).textContent,c=a.querySelector(`.project-img`).src;n.textContent=o,r.textContent=s,t.src=c,e.classList.add(`active`),document.body.style.overflow=`hidden`})});let o=()=>{e.classList.remove(`active`),document.body.style.overflow=``};i.addEventListener(`click`,o),a.addEventListener(`click`,o)}function f(){return`
    <style>
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-top: 50px;
        align-items: stretch;
      }

      /* Card base + smooth motion */
      .project-card {
        position: relative;
        overflow: hidden;
        background: #0f121a;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        transform-origin: center;
        will-change: transform;
        transition: transform 0.6s cubic-bezier(.2,.9,.2,1),
                    box-shadow 0.6s cubic-bezier(.2,.9,.2,1),
                    border-color 0.4s ease,
                    opacity 0.8s ease-out;
      }

      /* Subtle shine sweep on hover */
      .project-card::before {
        content: '';
        position: absolute;
        top: -40%;
        left: -60%;
        width: 220%;
        height: 180%;
        background: linear-gradient(120deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%);
        transform: translateX(-100%) rotate(12deg);
        transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.6s ease;
        opacity: 0;
        pointer-events: none;
      }
      .project-card:hover::before { transform: translateX(20%) rotate(12deg); opacity: 1; }

      .project-card:hover {
        transform: translateY(-12px) scale(1.01) rotateZ(-0.2deg);
        border-color: rgba(138, 43, 226, 0.5);
        box-shadow: 0 30px 60px rgba(0,0,0,0.55);
      }

      .project-img-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
        transform-style: preserve-3d;
        backface-visibility: hidden;
      }

      .project-img-wrapper::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.18) 100%);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
      }
      .project-card:hover .project-img-wrapper::after { opacity: 1; }

      .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(.2,.9,.2,1), filter 0.6s ease;
        will-change: transform;
      }
      .project-card:hover .base-img {
        transform: scale(1.08) translateY(-6px) rotateZ(-0.3deg);
        filter: brightness(1.02) saturate(1.06);
      }

      /* Info reveal */
      .project-info {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        transition: transform 0.6s cubic-bezier(.2,.9,.2,1), opacity 0.6s ease;
        transform: translateY(6px);
        opacity: 0.98;
      }
      .project-card:hover .project-info { transform: translateY(0); opacity: 1; }

      .project-title {
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 12px;
        color: #e2e8f0;
      }
      .project-desc {
        font-size: 0.85rem;
        color: #94a3b8;
        line-height: 1.6;
        margin-bottom: 25px;
        flex-grow: 1;
        transition: color 0.3s ease;
      }
      .project-card:hover .project-desc { color: #aab7c9; }

      .project-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 15px;
        margin-top: auto;
      }
      .demo-link.dead {
        color: #475569;
        font-size: 0.85rem;
        font-weight: 500;
      }
      .demo-link.alive {
        color: #3b82f6;
        font-size: 0.85rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
      }
      .demo-link.alive:hover { text-decoration: underline; }

      .btn-details {
        background: rgba(255, 255, 255, 0.05);
        color: #fff;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.3s ease, transform 0.25s ease;
      }
      .btn-details:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-2px); }

      @media (max-width: 1024px) {
        .projects-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 768px) {
        .projects-grid { grid-template-columns: 1fr; }
      }

      /* Project Modal */
      .project-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.4s ease, visibility 0.4s ease;
      }
      .project-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .modal-overlay {
        position: absolute;
        inset: 0;
        background: rgba(3, 3, 5, 0.85);
        backdrop-filter: blur(8px);
        cursor: pointer;
      }
      .modal-content-wrapper {
        position: relative;
        background: #0f121a;
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 16px;
        max-width: 900px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        box-shadow: 0 25px 60px rgba(0, 240, 255, 0.15);
        transform: scale(0.95) translateY(20px);
        transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.2, 1);
      }
      .project-modal.active .modal-content-wrapper {
        transform: scale(1) translateY(0);
      }
      .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
        padding-bottom: 4px;
      }
      .modal-close:hover {
        background: rgba(255, 40, 40, 0.8);
        transform: rotate(90deg);
      }
      #modal-img {
        width: 100%;
        max-height: 55vh;
        object-fit: contain;
        background: rgba(0,0,0,0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }
      .modal-text {
        padding: 40px;
      }
      #modal-title {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 15px;
      }
      #modal-desc {
        font-size: 1.05rem;
        color: #cbd5e1;
        line-height: 1.8;
      }
    </style>
    <section id="projects">
      <div class="container">
        <h2 class="section-title fade-up">Featured <span>Projects</span></h2>
        <div class="projects-grid">
          ${[{title:`Hyper Access Management`,category:`ADMIN`,desc:`Hyper Access Management — a centralized project administration dashboard that lets companies track project status in real time, archive completed projects (with restore), and monitor admin-to-user workflows. Includes role-based activity logs, assignment tracking, notifications, and audit history to keep teams accountable and projects traceable.`,image:a,demoAvailable:!1},{title:`Moodify`,category:`Mood`,desc:`Moodify — is a mobile/web application that helps users track their emotions, monitor mood patterns, and receive personalized recommendations to improve their mental well-being. The system promotes self-awareness by allowing users to record their daily feelings and visualize emotional trends over time`,image:o,demoAvailable:!1},{title:`Library Booking System`,category:`EDU`,desc:`School library booking system — students browse available books, reserve items, see due dates, and view penalties for late returns.`,image:s,demoAvailable:!1},{title:`Vaccine Appointment Booking`,category:`HEALTH`,desc:`Online appointment platform for scheduling doctor visits and vaccine check-ups with calendar booking and reminders.`,image:c,demoAvailable:!1},{title:`Room Rental Portal`,category:`RENTAL`,desc:`A room booking marketplace where users browse rooms, check availability, and reserve the room they choose.`,image:l,demoAvailable:!1},{title:`Vehicle Repair Estimator`,category:`AUTO`,desc:`Repair service portal providing repair cost estimates, service shop booking, and real-time status updates for the customer's vehicle.`,image:u,demoAvailable:!1}].map((e,t)=>{let n=e.demoAvailable?`<a href="#" class="demo-link alive">Live Demo <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`:`<span class="demo-link dead"></span>`;return`
      <div class="project-card hoverable fade-up stagger-${t+1}">
        <div class="project-img-wrapper">
          <img src="${e.image}" alt="${e.title}" class="project-img base-img"/>
        </div>
        <div class="project-info">
          <h3 class="project-title">${e.title}</h3>
          <p class="project-desc">${e.desc}</p>
          <div class="project-footer">
            ${n}
            <a href="#" class="btn-details">Details &rarr;</a>
          </div>
        </div>
      </div>
    `}).join(``)}
        </div>
      </div>
      
      <!-- Project Modal -->
      <div id="project-modal" class="project-modal">
        <div class="modal-overlay"></div>
        <div class="modal-content-wrapper">
          <button class="modal-close">&times;</button>
          <img id="modal-img" src="" alt="Project Preview" />
          <div class="modal-text">
            <h3 id="modal-title"></h3>
            <p id="modal-desc"></p>
          </div>
        </div>
      </div>
    </section>
  `}var p=`/Webportfolioo/assets/cert1-C9zPbLiE.jpg`;function m(){let e=[{title:`PHP WITH MYSQL`,issuer:`Simplilearn SkillUP`,year:`Aug 2024`,image:p,desc:`Successfully completed the online course on Introduction to SQL, demonstrating initiative and commitment to advancing database skills.`}];return setTimeout(()=>{typeof window<`u`&&!window.openLightbox&&(window.openLightbox=(e,t)=>{let n=document.getElementById(`cert-lightbox`);n&&(n.querySelector(`.lb-img`).src=e,n.querySelector(`.lb-title`).textContent=t,n.style.display=`flex`,setTimeout(()=>n.classList.add(`lb-visible`),10))},window.closeLightbox=()=>{let e=document.getElementById(`cert-lightbox`);e&&(e.classList.remove(`lb-visible`),setTimeout(()=>{e.style.display=`none`},300))})},100),`
    <style>
      .certs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 36px;
        margin-top: 50px;
        align-items: stretch;
      }

      .cert-card {
        background: linear-gradient(135deg, rgba(15, 18, 26, 0.7) 0%, rgba(10, 12, 20, 0.85) 100%);
        border: 1px solid rgba(0, 240, 255, 0.15);
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: transform 0.4s cubic-bezier(.2,.9,.2,1), 
                    border-color 0.3s ease, 
                    box-shadow 0.4s cubic-bezier(.2,.9,.2,1),
                    opacity 0.8s ease-out;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        position: relative;
      }

      .cert-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 1;
      }

      .cert-card:hover::before {
        opacity: 1;
      }

      .cert-card:hover {
        transform: translateY(-12px) scale(1.02);
        border-color: rgba(0, 240, 255, 0.4);
        box-shadow: var(--glow-cyan-strong), 0 20px 50px rgba(0, 240, 255, 0.15);
      }
      .cert-image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        background: #fff;
      }

      .cert-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s cubic-bezier(.2,.9,.2,1), filter 0.4s ease;
      }

      .cert-card:hover .cert-img {
        transform: scale(1.08) translateY(-4px);
        filter: brightness(1.05) saturate(1.1);
      }

      .cert-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(10, 10, 20, 0.7) 0%, rgba(30, 20, 50, 0.8) 100%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .cert-card:hover .cert-overlay {
        opacity: 1;
      }

      .cert-overlay-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .cert-overlay-icon svg {
        filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.4));
        animation: float-icon 1.5s ease-in-out infinite;
      }

      .cert-overlay-icon span {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      @keyframes float-icon {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .cert-info {
        padding: 24px 26px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: linear-gradient(180deg, transparent 0%, rgba(0, 240, 255, 0.02) 100%);
        position: relative;
        z-index: 2;
      }

      .cert-title {
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 10px;
        color: #e2e8f0;
        transition: color 0.3s ease;
      }

      .cert-card:hover .cert-title {
        color: var(--accent-cyan);
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
      }

      .cert-desc {
        font-size: 0.85rem;
        color: #94a3b8;
        line-height: 1.6;
        margin-bottom: 22px;
        flex-grow: 1;
      }

      .cert-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(0, 240, 255, 0.1);
        padding-top: 14px;
        margin-top: auto;
        transition: border-color 0.3s ease;
      }

      .cert-card:hover .cert-footer {
        border-color: rgba(0, 240, 255, 0.25);
      }

      .cert-issuer {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--accent-cyan);
        transition: all 0.3s ease;
      }

      .cert-card:hover .cert-issuer {
        text-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
      }

      .cert-year {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--text-secondary, #94a3b8);
      }

      #cert-lightbox {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
      }

      #cert-lightbox.lb-visible {
        opacity: 1;
      }

      .lb-img {
        max-width: 90vw;
        max-height: 80vh;
        border-radius: 12px;
        box-shadow: var(--glow-cyan-strong), 0 30px 80px rgba(0, 0, 0, 0.8);
        object-fit: contain;
        animation: scale-in 0.3s ease;
      }

      @keyframes scale-in {
        0% { transform: scale(0.9); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }

      .lb-title {
        color: #e2e8f0;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
      }

      .lb-close {
        position: absolute;
        top: 20px;
        right: 28px;
        background: none;
        border: none;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.2s, text-shadow 0.2s;
      }

      .lb-close:hover { 
        opacity: 1;
        text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
      }

      @media (max-width: 768px) {
        .certs-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div id="cert-lightbox" onclick="if(event.target===this) closeLightbox()">
      <button class="lb-close" onclick="closeLightbox()">&times;</button>
      <img class="lb-img" src="" alt="Certificate" />
      <p class="lb-title"></p>
    </div>

    <section id="certificates">
      <div class="container">
        <h2 class="section-title fade-up">My <span>Certificates</span></h2>
        <div class="certs-grid">
          ${e.map((e,t)=>`
    <div class="cert-card hoverable fade-up stagger-${t+1}" onclick="openLightbox('${e.image}', '${e.title}')">
      <div class="cert-image-wrapper">
        <img src="${e.image}" alt="${e.title}" class="cert-img" loading="lazy" />
        <div class="cert-overlay">
          <div class="cert-overlay-icon">
            <svg width="32" height="32" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
            </svg>
            <span>View Certificate</span>
          </div>
        </div>
      </div>
      <div class="cert-info">
        <h3 class="cert-title">${e.title}</h3>
        <p class="cert-desc">${e.desc}</p>
        <div class="cert-footer">
          <span class="cert-issuer">${e.issuer}</span>
          <span class="cert-year">${e.year}</span>
        </div>
      </div>
    </div>
  `).join(``)}
        </div>
      </div>
    </section>
  `}function h(){return`
    <style>
      #contact {
        position: relative;
        padding: 80px 0 120px;
      }

      .bento-container {
        max-width: 650px;
        margin: 0 auto;
        background: #1e1e24; /* Dark theme */
        border-radius: 24px;
        padding: 40px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        border: 1px solid rgba(255, 255, 255, 0.05);
        position: relative;
        z-index: 1;
      }

      .bento-container::before {
        content: '';
        position: absolute;
        top: -50px;
        left: -50px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
        z-index: -1;
        pointer-events: none;
      }

      .bento-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
      }

      .bento-dash {
        width: 32px;
        height: 4px;
        background: #6366f1;
        border-radius: 2px;
      }

      .bento-header h3 {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 700;
        margin: 0;
        letter-spacing: 0.5px;
      }

      .bento-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .bento-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 16px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 18px;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .bento-card:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }

      .bento-card.span-2 {
        grid-column: span 2;
      }

      .icon-box {
        width: 50px;
        height: 50px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .icon-box svg {
        width: 24px;
        height: 24px;
      }

      .bento-card.fb .icon-box { background: rgba(24, 119, 242, 0.15); color: #1877f2; }
      .bento-card.ig .icon-box { background: rgba(225, 48, 108, 0.15); color: #e1306c; }
      .bento-card.yt .icon-box { background: rgba(255, 0, 0, 0.15); color: #ff0000; }
      .bento-card.tt .icon-box { background: rgba(255, 255, 255, 0.08); color: #fff; }
      .bento-card.gh .icon-box { background: rgba(255, 255, 255, 0.12); color: #fff; }
      .bento-card.gm .icon-box { background: rgba(234, 67, 53, 0.15); color: #ea4335; }

      .tt-accent-1 { filter: drop-shadow(2px 0px 0px #ff0050) drop-shadow(-2px 0px 0px #00f2fe); }

      .text-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }

      .text-box h4 {
        color: #fff;
        font-size: 1.1rem;
        margin: 0 0 3px 0;
        font-weight: 700;
        text-align: left;
      }

      .text-box span {
        color: #94a3b8;
        font-size: 0.85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      @media (max-width: 650px) {
        .bento-grid {
          grid-template-columns: 1fr;
        }
        .bento-card.span-2 {
          grid-column: span 1;
        }
        .bento-container {
          padding: 30px 20px;
        }
      }

      .contact-wrapper {
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: space-between;
      }
      .contact-info {
        flex: 1;
        max-width: 450px;
      }
      .contact-desc {
        font-size: 1.15rem;
        color: #94a3b8;
        line-height: 1.8;
        margin-bottom: 30px;
      }
      .pulse-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: #10b981;
        border-radius: 50%;
        margin-right: 10px;
        box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
        animation: pulse-green 2s infinite;
      }
      @keyframes pulse-green {
        0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
      }
      .status-indicator {
        display: inline-flex;
        align-items: center;
        padding: 10px 20px;
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.2);
        border-radius: 30px;
        color: #10b981;
        font-weight: 600;
        font-size: 0.95rem;
      }
      @media (max-width: 968px) {
        .contact-wrapper {
          flex-direction: column;
          text-align: center;
        }
        .contact-info {
          max-width: 100%;
        }
        .section-title {
          text-align: center !important;
        }
        .bento-container {
          margin: 0 auto;
        }
      }
    </style>
    <section id="contact">
      <div class="container fade-up">
        
        <div class="contact-wrapper">
          <div class="contact-info">
             <h2 class="section-title" style="text-align: left; margin-bottom: 20px;">Let's <span>Connect</span></h2>
             <p class="contact-desc">I'm currently available for freelance work and open to new opportunities. Whether you have a question or just want to collaborate, feel free to reach out to me through any of these platforms!</p>
             <div class="contact-extra">
               <div class="status-indicator">
                 <span class="pulse-dot"></span>
                 Available for Work
               </div>
             </div>
          </div>

          <div class="bento-container hoverable">
          <div class="bento-header">
            <div class="bento-dash"></div>
            <h3>Connect With Me</h3>
          </div>
          
          <div class="bento-grid">
            <!-- Facebook -->
            <a href="https://facebook.com/veejay.mislang.1" target="_blank" class="bento-card span-2 fb">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Let's Connect</h4>
                <span>on Facebook (@http.Mislang)</span>
              </div>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/kaederu_/" target="_blank" class="bento-card ig">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div class="text-box">
                <h4>Instagram</h4>
                <span>@Veejaymislang</span>
              </div>
            </a>

            <!-- YouTube -->
            <a href="https://www.youtube.com/@VeejayMislang" target="_blank" class="bento-card yt">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Youtube</h4>
                <span>@Veejay Mislang</span>
              </div>
            </a>

            <!-- Github -->
            <a href="https://github.com/veejaymislang" target="_blank" class="bento-card gh">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Github</h4>
                <span>@Mislang</span>
              </div>
            </a>

            <!-- Tiktok -->
            <a href="https://www.tiktok.com/@http_Mislang" target="_blank" class="bento-card tt">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor" class="tt-accent-1">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.75 3.9-2.05 5.34-1.46 1.62-3.65 2.51-5.84 2.3-2.61-.26-4.9-1.92-5.89-4.32-.97-2.33-.65-5.11.85-7.14 1.34-1.83 3.6-2.9 5.86-2.9 0 1.35.01 2.7.01 4.05-1.16-.06-2.34.22-3.28.89-.92.65-1.55 1.7-1.6 2.85-.06 1.3.49 2.61 1.48 3.39.95.76 2.28 1 3.44.69 1.14-.31 2.05-1.21 2.4-2.35.15-.51.22-1.05.22-1.58V.02h3.29z"/>
                </svg>
              </div>
              <div class="text-box">
                <h4>Tiktok</h4>
                <span>@http_Mislang</span>
              </div>
            </a>

            <!-- Gmail -->
            <a href="mailto:veejay.mislang@hcdc.edu.ph" class="bento-card span-2 gm">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="text-box">
                <h4>Gmail</h4>
                <span>veejay.mislang@hcdc.edu.ph</span>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  `}function g(){let e=document.getElementById(`custom-cursor`),t=document.getElementById(`custom-cursor-blob`);if(!e||!t)return;document.addEventListener(`mousemove`,n=>{e.style.left=n.clientX+`px`,e.style.top=n.clientY+`px`,t.style.left=n.clientX+`px`,t.style.top=n.clientY+`px`});let n=()=>{document.querySelectorAll(`.hoverable, a, button`).forEach(t=>{t.addEventListener(`mouseenter`,()=>{e.classList.add(`hover`)}),t.addEventListener(`mouseleave`,()=>{e.classList.remove(`hover`)})})};n(),new MutationObserver(()=>{n()}).observe(document.body,{childList:!0,subtree:!0})}function _(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var y={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},b={duration:.5,overwrite:!1,delay:0},x,S,C,w=1e8,T=1/w,E=Math.PI*2,D=E/4,O=0,k=Math.sqrt,A=Math.cos,j=Math.sin,M=function(e){return typeof e==`string`},N=function(e){return typeof e==`function`},P=function(e){return typeof e==`number`},ee=function(e){return e===void 0},te=function(e){return typeof e==`object`},ne=function(e){return e!==!1},re=function(){return typeof window<`u`},ie=function(e){return N(e)||M(e)},ae=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},F=Array.isArray,oe=/random\([^)]+\)/g,I=/,\s*/g,se=/(?:-?\.?\d|\.)+/gi,ce=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,le=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,L=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ue=/[+-]=-?[.\d]+/,de=/[^,'"\[\]\s]+/gi,R=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,z,fe,pe,me,B={},he={},ge,_e=function(e){return(he=Ge(e,B))&&ur},ve=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},V=function(e,t){return!t&&console.warn(e)},ye=function(e,t){return e&&(B[e]=t)&&he&&(he[e]=t)||B},H=function(){return 0},be={suppressEvents:!0,isStart:!0,kill:!1},xe={suppressEvents:!0,kill:!1},Se={suppressEvents:!0},Ce={},we=[],Te={},Ee,De={},Oe={},ke=30,U=[],Ae=``,je=function(e){var t=e[0],n,r;if(te(t)||N(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=U.length;r--&&!U[r].targetTest(t););n=U[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new bn(e[r],n)))||e.splice(r,1);return e},Me=function(e){return e._gsap||je(Ot(e))[0]._gsap},Ne=function(e,t,n){return(n=e[t])&&N(n)?e[t]():ee(n)&&e.getAttribute&&e.getAttribute(t)||n},Pe=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Fe=function(e){return Math.round(e*1e5)/1e5||0},W=function(e){return Math.round(e*1e7)/1e7||0},Ie=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Le=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Re=function(){var e=we.length,t=we.slice(0),n,r;for(Te={},we.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ze=function(e){return!!(e._initted||e._startAt||e.add)},Be=function(e,t,n,r){we.length&&!S&&Re(),e.render(t,n,r||!!(S&&t<0&&ze(e))),we.length&&!S&&Re()},Ve=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(de).length<2?t:M(e)?e.trim():e},He=function(e){return e},Ue=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},We=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Ge=function(e,t){for(var n in t)e[n]=t[n];return e},Ke=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=te(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},qe=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Je=function(e){var t=e.parent||z,n=e.keyframes?We(F(e.keyframes)):Ue;if(ne(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ye=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Xe=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ze=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Qe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$e=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},et=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tt=function(e,t,n,r){return e._startAt&&(S?e._startAt.revert(xe):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},nt=function e(t){return!t||t._ts&&e(t.parent)},rt=function(e){return e._repeat?it(e._tTime,e=e.duration()+e._rDelay)*e:0},it=function(e,t){var n=Math.floor(e=W(e/t));return e&&n===e?n-1:n},at=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ot=function(e){return e._end=W(e._start+(e._tDur/Math.abs(e._ts||e._rts||T)||0))},st=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=W(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ot(e),n._dirty||$e(n,e)),e},ct=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=at(e.rawTime(),t),(!t._dur||St(0,t.totalDuration(),n)-t._tTime>T)&&t.render(n,!0)),$e(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-T}},lt=function(e,t,n,r){return t.parent&&Qe(t),t._start=W((P(n)?n:n||e!==z?yt(e,n,t):e._time)+t._delay),t._end=W(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xe(e,t,`_first`,`_last`,e._sort?`_start`:0),pt(t)||(e._recent=t),r||ct(e,t),e._ts<0&&st(e,e._tTime),e},ut=function(e,t){return(B.ScrollTrigger||ve(`scrollTrigger`,t))&&B.ScrollTrigger.create(t,e)},dt=function(e,t,n,r,i){if(kn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!S&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ee!==sn.frame)return we.push(e),e._lazy=[i,r],1},ft=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},pt=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},mt=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ft(e)&&!(!e._initted&&pt(e))||(e._ts<0||e._dp._ts<0)&&!pt(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=St(0,e._tDur,t),l=it(s,o),e._yoyo&&l&1&&(a=1-a),l!==it(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||S||r||e._zTime===T||!t&&e._zTime){if(!e._initted&&dt(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?T:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&tt(e,t,n,!0),e._onUpdate&&!n&&Gt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Gt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qe(e,1),!n&&!S&&(Gt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},ht=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},gt=function(e,t,n,r){var i=e._repeat,a=W(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:W(a*(i+1)+e._rDelay*i):a,o>0&&!r&&st(e,e._tTime=e._tDur*o),e.parent&&ot(e),n||$e(e.parent,e),e},_t=function(e){return e instanceof Sn?$e(e):gt(e,e._dur)},vt={_start:0,endTime:H,totalDuration:H},yt=function e(t,n,r){var i=t.labels,a=t._recent||vt,o=t.duration()>=w?a.endTime(!1):t._dur,s,c,l;return M(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(F(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},bt=function(e,t,n){var r=P(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=ne(s.vars.inherit)&&s.parent;a.immediateRender=ne(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new In(t[0],a,t[i+1])},xt=function(e,t){return e||e===0?t(e):t},St=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!M(e)||!(t=R.exec(e))?``:t[1]},wt=function(e,t,n){return xt(n,function(n){return St(e,t,n)})},Tt=[].slice,Et=function(e,t){return e&&te(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&te(e[0]))&&!e.nodeType&&e!==fe},Dt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return M(e)&&!t||Et(e,1)?(r=n).push.apply(r,Ot(e)):n.push(e)})||n},Ot=function(e,t,n){return C&&!t&&C.selector?C.selector(e):M(e)&&!n&&(pe||!cn())?Tt.call((t||me).querySelectorAll(e),0):F(e)?Dt(e,n):Et(e)?Tt.call(e,0):e?[e]:[]},kt=function(e){return e=Ot(e)[0]||V(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Ot(t,n.querySelectorAll?n:n===e?V(`Invalid scope`)||me.createElement(`div`):e)}},At=function(e){return e.sort(function(){return .5-Math.random()})},jt=function(e){if(N(e))return e;var t=te(e)?e:{each:e},n=hn(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return M(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,w])[1],!S){for(b=-w;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===w?0:s?f*u/S-.5:r/S|0,b=0,x=w,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):k(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&At(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Ct(t.amount||t.each)||0,n=n&&f<0?mn(n):n}return f=(p[e]-p.min)/p.max||0,W(p.b+(n?n(f):f)*p.v)+p.u}},Mt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=W(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(P(n)?0:Ct(n))}},Nt=function(e,t){var n=F(e),r,i;return!n&&te(e)&&(r=n=e.radius||w,e.values?(e=Ot(e.values),(i=!P(e[0]))&&(r*=r)):e=Mt(e.increment)),xt(t,n?N(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=w,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||P(t)?s:s+Ct(t)}:Mt(e))},Pt=function(e,t,n,r){return xt(F(e)?!t:n===!0?!!(n=0):!r,function(){return F(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Ft=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},It=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},Lt=function(e,t,n){return Ht(e,t,0,1,n)},Rt=function(e,t,n){return xt(n,function(n){return e[~~t(n)]})},zt=function e(t,n,r){var i=n-t;return F(t)?Rt(t,e(0,t.length),n):xt(r,function(e){return(i+(e-t)%i)%i+t})},Bt=function e(t,n,r){var i=n-t,a=i*2;return F(t)?Rt(t,e(0,t.length-1),n):xt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Vt=function(e){return e.replace(oe,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(I);return Pt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Ht=function(e,t,n,r,i){var a=t-e,o=r-n;return xt(i,function(t){return n+((t-e)/a*o||0)})},Ut=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=M(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(F(t)&&!F(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Ge(F(t)?[]:{},t));if(!u){for(c in n)wn.call(s,t,c,`get`,n[c]);a=function(e){return Gn(e,s)||(o?t.p:t)}}}return xt(r,a)},Wt=function(e,t,n){var r=e.labels,i=w,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Gt=function(e,t,n){var r=e.vars,i=r[t],a=C,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&we.length&&Re(),o&&(C=o),l=s?i.apply(c,s):i.call(c),C=a,l},Kt=function(e){return Qe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!S),e.progress()<1&&Gt(e,`onInterrupt`),e},qt,Jt=[],Yt=function(e){if(e)if(e=!e.name&&e.default||e,re()||e.headless){var t=e.name,n=N(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:H,render:Gn,add:wn,kill:qn,modifier:Kn,rawVars:0},a={targetTest:0,get:0,getSetter:Vn,aliases:{},register:0};if(cn(),e!==r){if(De[t])return;Ue(r,Ue(qe(e,i),a)),Ge(r.prototype,Ge(i,qe(e,a))),De[r.prop=t]=r,e.targetTest&&(U.push(r),Ce[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}ye(t,r),e.register&&e.register(ur,r,Xn)}else Jt.push(e)},Xt=255,Zt={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},Qt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Xt+.5|0},$t=function(e,t,n){var r=e?P(e)?[e>>16,e>>8&Xt,e&Xt]:0:Zt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Zt[e])r=Zt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Xt,r&Xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Xt,e&Xt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(se),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Qt(s+1/3,i,a),r[1]=Qt(s,i,a),r[2]=Qt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(ce),n&&r.length<4&&(r[3]=1),r}else r=e.match(se)||Zt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Xt,a=r[1]/Xt,o=r[2]/Xt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},en=function(e){var t=[],n=[],r=-1;return e.split(nn).forEach(function(e){var i=e.match(le)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},tn=function(e,t,n){var r=``,i=(e+r).match(nn),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=$t(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=en(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(nn,`1`).split(le),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(nn),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},nn=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Zt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),rn=/hsl[a]?\(/,an=function(e){var t=e.join(` `),n;if(nn.lastIndex=0,nn.test(t))return n=rn.test(t),e[1]=tn(e[1],n),e[0]=tn(e[0],n,en(e[1])),!0},on,sn=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){ge&&(!pe&&re()&&(fe=pe=window,me=fe.document||{},B.gsap=ur,(fe.gsapVersions||=[]).push(ur.version),_e(he||fe.GreenSockGlobals||!fe.gsap&&fe||{}),Jt.forEach(Yt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},on=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),on=0,l=H},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),cn(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),cn=function(){return!on&&sn.wake()},G={},ln=/^[\d.\-M][\d.\-,\s]/,un=/["']/g,dn=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(un,``).trim():+c,r=s.substr(o+1).trim();return t},fn=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},pn=function(e){var t=(e+``).split(`(`),n=G[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[dn(t[1])]:fn(e).split(`,`).map(Ve)):G._CE&&ln.test(e)?G._CE(``,e):n},mn=function(e){return function(t){return 1-e(1-t)}},hn=function(e,t){return e&&(N(e)?e:G[e]||pn(e))||t},gn=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Pe(e,function(e){for(var t in G[e]=B[e]=i,G[a=e.toLowerCase()]=n,i)G[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=G[e+`.`+t]=i[t]}),i},_n=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/E*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*j((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:_n(s);return a=E/a,c.config=function(n,r){return e(t,n,r)},c},yn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:_n(r);return i.config=function(n){return e(t,n)},i};Pe(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;gn(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),G.Linear.easeNone=G.none=G.Linear.easeIn,gn(`Elastic`,vn(`in`),vn(`out`),vn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};gn(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),gn(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),gn(`Circ`,function(e){return-(k(1-e*e)-1)}),gn(`Sine`,function(e){return e===1?1:-A(e*D)+1}),gn(`Back`,yn(`in`),yn(`out`),yn()),G.SteppedEase=G.steps=B.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-T;return function(e){return((r*St(0,a,e)|0)+i)*n}}},b.ease=G[`quad.out`],Pe(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Ae+=e+`,`+e+`Params,`});var bn=function(e,t){this.id=O++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ne,this.set=t?t.getSetter:Vn},xn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,gt(this,+e.duration,1,1),this.data=e.data,C&&(this._ctx=C,C.data.push(this)),on||sn.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,gt(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(cn(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(st(this,e),!n._dp||n.parent||ct(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&lt(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===T||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Be(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+rt(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+rt(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?it(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-T?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?at(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-T?0:this._rts,this.totalTime(St(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),ot(this),et(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==T&&(this._tTime-=T)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=W(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&lt(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(ne(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?at(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Se);var t=S;return S=e,ze(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),S=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,_t(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,_t(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(yt(this,e),ne(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,ne(t)),this._dur||(this._zTime=-T),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-T:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-T,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-T)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=N(e)?e:He,a=function(){var e=t.then;t.then=null,n&&n(),N(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Kt(this)},e}();Ue(xn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-T,_prom:0,_ps:!1,_rts:1});var Sn=function(e){v(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=ne(t.sortChildren),z&&lt(t.parent||z,_(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&ut(_(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return bt(0,arguments,this),this},n.from=function(e,t,n){return bt(1,arguments,this),this},n.fromTo=function(e,t,n,r){return bt(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Je(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new In(e,t,yt(this,n),1),this},n.call=function(e,t,n){return lt(this,In.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new In(e,n,yt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Je(n).immediateRender=ne(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Je(r).immediateRender=ne(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:W(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==z&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=W(o%f),o===i?(d=this._repeat,c=a):(_=W(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=it(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:W(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Gt(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=ht(this,W(r),W(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Gt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-T);break}}l=u}else{l=this._last;for(var C=e<0?e:c;l;){if(u=l._prev,(l._act||C<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(C-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(C-l._start)*l._ts,t,n||S&&ze(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=C?-T:T);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-T)._zTime=c>=r?1:-1,this._ts))return this._start=g,ot(this),this.render(e,t,n);this._onUpdate&&!t&&Gt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Qe(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Gt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(P(t)||(t=yt(this,t,e)),!(e instanceof xn)){if(F(e))return e.forEach(function(e){return n.add(e,t)}),this;if(M(e))return this.addLabel(e,t);if(N(e))e=In.delayedCall(0,e);else return this}return this===e?this:lt(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-w);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof In?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return M(e)?this.removeLabel(e):N(e)?this.killTweensOf(e):(e.parent===this&&Ze(this,e),e===this._recent&&(this._recent=this._last),$e(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=W(sn.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=yt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=In.delayedCall(0,t||H,n);return r.data=`isPause`,this._hasPause=1,lt(this,r,yt(this,e))},n.removePause=function(e){var t=this._first;for(e=yt(this,e);t;)t._start===e&&t.data===`isPause`&&Qe(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Dn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Ot(e),i=this._first,a=P(t),o;i;)i instanceof In?Le(i._targets,r)&&(a?(!Dn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=yt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=In.to(n,Ue({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||T,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&gt(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Ue({startAt:{time:yt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Wt(this,yt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Wt(this,yt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+T)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=W(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return $e(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),$e(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=w,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,lt(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=W(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;gt(n,n===z&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(z._ts&&(Be(z,at(e,z)),Ee=sn.frame),sn.frame>=ke){ke+=y.autoSleep||120;var t=z._first;if((!t||!t._ts)&&y.autoSleep&&sn._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||sn.sleep()}}},t}(xn);Ue(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cn=function(e,t,n,r,i,a,o){var s=new Xn(this._pt,e,t,0,1,Wn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Vt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(L)||[];u=L.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Ie(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=L.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(ue.test(r)||g)&&(s.e=0),this._pt=s,s},wn=function(e,t,n,r,i,a,o,s,c,l){N(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?N(u)?c?e[t.indexOf(`set`)||!N(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=N(u)?c?zn:Rn:Ln,p;if(M(r)&&(~r.indexOf(`random(`)&&(r=Vt(r)),r.charAt(1)===`=`&&(p=Ie(d,r)+(Ct(d)||0),(p||p===0)&&(r=p))),!l||d!==r||On)return!isNaN(d*r)&&r!==``?(p=new Xn(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Un:Hn,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&ve(t,r),Cn.call(this,e,t,d,r,f,s||y.stringFilter,c))},Tn=function(e,t,n,r,i){if(N(e)&&(e=Nn(e,i,t,n,r)),!te(e)||e.style&&e.nodeType||F(e)||ae(e))return M(e)?Nn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Nn(e[o],i,t,n,r);return a},En=function(e,t,n,r,i,a){var o,s,c,l;if(De[e]&&(o=new De[e]).init(i,o.rawVars?t[e]:Tn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Xn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==qt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Dn,On,kn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!x,C=t.timeline,E=i.easeReverse||d,D,O,k,A,j,M,N,P,ee,te,re,ie,ae;if(C&&(!f||!a)&&(a=`none`),t._ease=hn(a,b.ease),t._rEase=E&&(hn(E)||t._ease),t._from=!C&&!!i.runBackwards,t._from&&(t.ratio=1),!C||f&&!i.stagger){if(P=g[0]?Me(g[0]).harness:0,ie=P&&i[P.prop],D=qe(i,Ce),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?xe:be),h._lazy=0),o){if(Qe(t._startAt=In.set(g,Ue({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&ne(c),startAt:null,delay:0,onUpdate:l&&function(){return Gt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(S||!s&&!p)&&t._startAt.revert(xe),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),k=Ue({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&ne(c),immediateRender:s,stagger:0,parent:_},D),ie&&(k[P.prop]=ie),Qe(t._startAt=In.set(g,k)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(S?t._startAt.revert(xe):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,T,T);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&ne(c)||c&&!m,O=0;O<g.length;O++){if(j=g[O],N=j._gsap||je(g)[O]._gsap,t._ptLookup[O]=te={},Te[N.id]&&we.length&&Re(),re=v===g?O:v.indexOf(j),P&&(ee=new P).init(j,ie||D,t,re,v)!==!1&&(t._pt=A=new Xn(t._pt,j,ee.name,0,1,ee.render,ee,0,ee.priority),ee._props.forEach(function(e){te[e]=A}),ee.priority&&(M=1)),!P||ie)for(k in D)De[k]&&(ee=En(k,D,t,re,j,v))?ee.priority&&(M=1):te[k]=A=wn.call(t,j,k,`get`,D[k],re,v,0,i.stringFilter);t._op&&t._op[O]&&t.kill(j,t._op[O]),y&&t._pt&&(Dn=t,z.killTweensOf(j,te,t.globalTime(n)),ae=!t.parent,Dn=0),t._pt&&c&&(Te[N.id]=1)}M&&Yn(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!ae,f&&n<=0&&C.render(w,!0,!0)},An=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return On=1,e.vars[t]=`+=0`,kn(e,o),On=0,s?V(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=Fe(n)+Ct(u.e),u.b&&=l.s+Ct(u.b)},jn=function(e,t){var n=e[0]?Me(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Ge({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Mn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(F(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Nn=function(e,t,n,r,i){return N(e)?e.call(t,n,r,i):M(e)&&~e.indexOf(`random(`)?Vt(e):e},Pn=Ae+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,Fn={};Pe(Pn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Fn[e]=1});var In=function(e){v(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Je(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||z,g=(F(t)||ae(t)?P(t[0]):`length`in n)?[t]:Ot(t),v,b,S,C,w,E,D,O;if(a._targets=g.length?je(g):V(`GSAP target `+t+` not found. https://gsap.com`,!y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||ie(s)||ie(c)){n=a.vars;var k=n.easeReverse||n.yoyoEase;if(v=a.timeline=new Sn({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),v.kill(),v.parent=v._dp=_(a),v._start=0,u||ie(s)||ie(c)){if(C=g.length,D=u&&jt(u),te(u))for(w in u)~Pn.indexOf(w)&&(O||={},O[w]=u[w]);for(b=0;b<C;b++)S=qe(n,Fn),S.stagger=0,k&&(S.easeReverse=k),O&&Ge(S,O),E=g[b],S.duration=+Nn(s,_(a),b,E,g),S.delay=(+Nn(c,_(a),b,E,g)||0)-a._delay,!u&&C===1&&S.delay&&(a._delay=c=S.delay,a._start+=c,S.delay=0),v.to(E,S,D?D(b,E,g):0),v._ease=G.none;v.duration()?s=c=0:a.timeline=0}else if(f){Je(Ue(v.vars.defaults,{ease:`none`})),v._ease=hn(f.ease||n.ease||`none`);var A=0,j,M,N;if(F(f))f.forEach(function(e){return v.to(g,e,`>`)}),v.duration();else{for(w in S={},f)w===`ease`||w===`easeEach`||Mn(w,f[w],S,f.easeEach);for(w in S)for(j=S[w].sort(function(e,t){return e.t-t.t}),A=0,b=0;b<j.length;b++)M=j[b],N={ease:M.e,duration:(M.t-(b?j[b-1].t:0))/100*s},N[w]=M.v,v.to(g,N,A),A+=N.duration;v.duration()<s&&v.to({},{duration:s-v.duration()})}}s||a.duration(s=v.duration())}else a.timeline=0;return d===!0&&!x&&(Dn=_(a),z.killTweensOf(g),Dn=0),lt(h,_(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===W(h._time)&&ne(l)&&nt(_(a))&&h.data!==`nested`)&&(a._tTime=-T,a.render(Math.max(0,-c)||0)),m&&ut(_(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-T&&!o?i:e<T?0:e,c,l,u,d,f,p,m,h;if(!a)mt(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=W(s%d),s===i?(u=this._repeat,c=a):(f=W(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=it(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(W(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(dt(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Gt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&tt(this,e,t,n),Gt(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Gt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&tt(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Qe(this,1),!t&&!(o&&!r)&&(s||r||p)&&(Gt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){on||sn.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||kn(this,a),o=this._ease(a/this._dur),An(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(st(this,0),this.parent||Xe(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Kt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!S),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Dn&&Dn.vars.overwrite!==!0)._first||Kt(this),this.parent&&n!==this.timeline.totalDuration()&&gt(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Ot(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Ye(r,i))return t===`all`&&(this._pt=0),Kt(this);for(s=this._op=this._op||[],t!==`all`&&(M(t)&&(d={},Pe(t,function(e){return d[e]=1}),t=d),t=jn(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Ze(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Kt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return bt(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return bt(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return z.killTweensOf(e,t,n)},t}(xn);Ue(In.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Pe(`staggerTo,staggerFrom,staggerFromTo`,function(e){In[e]=function(){var t=new Sn,n=Tt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Ln=function(e,t,n){return e[t]=n},Rn=function(e,t,n){return e[t](n)},zn=function(e,t,n,r){return e[t](r.fp,n)},Bn=function(e,t,n){return e.setAttribute(t,n)},Vn=function(e,t){return N(e[t])?Rn:ee(e[t])&&e.setAttribute?Bn:Ln},Hn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Un=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Gn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Kn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},qn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ze(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Jn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Yn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Xn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Hn,this.d=o||this,this.set=s||Ln,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Jn,this.m=e,this.mt=n,this.tween=t},e}();Pe(Ae+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Ce[e]=1}),B.TweenMax=B.TweenLite=In,B.TimelineLite=B.TimelineMax=Sn,z=new Sn({sortChildren:!1,defaults:b,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),y.stringFilter=an;var Zn=[],Qn={},$n=[],er=0,tr=0,nr=function(e){return(Qn[e]||$n).map(function(e){return e()})},rr=function(){var e=Date.now(),t=[];e-er>2&&(nr(`matchMediaInit`),Zn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=fe.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),nr(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),er=e,nr(`matchMedia`))},ir=function(){function e(e,t){this.selector=t&&kt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=tr++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){N(e)&&(n=t,t=e,e=N);var r=this,i=function(){var e=C,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=kt(n)),C=r,a=t.apply(r,arguments),N(a)&&r._r.push(a),C=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===N?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=C;C=null,e(this),C=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof In&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Sn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof In)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Zn.length;r--;)Zn[r].id===this.id&&Zn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),ar=function(){function e(e){this.contexts=[],this.scope=e,C&&C.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){te(e)||(e={matches:e});var r=new ir(0,n||this.scope),i=r.conditions={},a,o,s;for(o in C&&!r.selector&&(r.selector=C.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=fe.matchMedia(e[o]),a&&(Zn.indexOf(r)<0&&Zn.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(rr):a.addEventListener(`change`,rr)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),or={registerPlugin:function(){[...arguments].forEach(function(e){return Yt(e)})},timeline:function(e){return new Sn(e)},getTweensOf:function(e,t){return z.getTweensOf(e,t)},getProperty:function(e,t,n,r){M(e)&&(e=Ot(e)[0]);var i=Me(e||{}).get,a=n?He:Ve;return n===`native`&&(n=``),e&&(t?a((De[t]&&De[t].get||i)(e,t,n,r)):function(t,n,r){return a((De[t]&&De[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Ot(e),e.length>1){var r=e.map(function(e){return ur.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=De[t],o=Me(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;qt._pt=0,r.init(e,n?t+n:t,qt,0,[e]),r.render(1,r),qt._pt&&Gn(1,qt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=ur.to(e,Ue((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return z.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hn(e.ease,b.ease)),Ke(b,e||{})},config:function(e){return Ke(y,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!De[e]&&!B[e]&&V(t+` effect requires `+e+` plugin.`)}),Oe[t]=function(e,t,r){return n(Ot(e),Ue(t||{},i),r)},a&&(Sn.prototype[t]=function(e,n,r){return this.add(Oe[t](e,te(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){G[e]=hn(t)},parseEase:function(e,t){return arguments.length?hn(e,t):G},getById:function(e){return z.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sn(e),r,i;for(n.smoothChildTiming=ne(e.smoothChildTiming),z.remove(n),n._dp=0,n._time=n._tTime=z._time,r=z._first;r;)i=r._next,(t||!(!r._dur&&r instanceof In&&r.vars.onComplete===r._targets[0]))&&lt(n,r,r._start-r._delay),r=i;return lt(z,n,0),n},context:function(e,t){return e?new ir(e,t):C},matchMedia:function(e){return new ar(e)},matchMediaRefresh:function(){return Zn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||rr()},addEventListener:function(e,t){var n=Qn[e]||(Qn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:zt,wrapYoyo:Bt,distribute:jt,random:Pt,snap:Nt,normalize:Lt,getUnit:Ct,clamp:wt,splitColor:$t,toArray:Ot,selector:kt,mapRange:Ht,pipe:Ft,unitize:It,interpolate:Ut,shuffle:At},install:_e,effects:Oe,ticker:sn,updateRoot:Sn.updateRoot,plugins:De,globalTimeline:z,core:{PropTween:Xn,globals:ye,Tween:In,Timeline:Sn,Animation:xn,getCache:Me,_removeLinkedListItem:Ze,reverting:function(){return S},context:function(e){return e&&C&&(C.data.push(e),e._ctx=C),C},suppressOverwrites:function(e){return x=e}}};Pe(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return or[e]=In[e]}),sn.add(Sn.updateRoot),qt=or.to({},{duration:0});var sr=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cr=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=sr(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},lr=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(M(n)&&(r={},Pe(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}cr(e,n)}}}},ur=or.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)S?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lr(`roundProps`,Mt),lr(`modifiers`),lr(`snap`,Nt))||or;In.version=Sn.version=ur.version=`3.15.0`,ge=1,re()&&cn(),G.Power0,G.Power1,G.Power2,G.Power3,G.Power4,G.Linear,G.Quad,G.Cubic,G.Quart,G.Quint,G.Strong,G.Elastic,G.Back,G.SteppedEase,G.Bounce,G.Sine,G.Expo,G.Circ;var dr,fr,pr,mr,hr,gr,_r,vr=function(){return typeof window<`u`},yr={},br=180/Math.PI,xr=Math.PI/180,Sr=Math.atan2,Cr=1e8,wr=/([A-Z])/g,Tr=/(left|right|width|margin|padding|x)/i,Er=/[\s,\(]\S/,Dr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Or=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ar=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Nr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Pr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Fr=function(e,t,n){return e.style[t]=n},Ir=function(e,t,n){return e.style.setProperty(t,n)},Lr=function(e,t,n){return e._gsap[t]=n},Rr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Br=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Vr=`transform`,Hr=Vr+`Origin`,Ur=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in yr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Dr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=ci(i,e)}):this.tfm[t]=o.x?o[t]:ci(i,t),t===Hr&&(this.tfm.zOrigin=o.zOrigin);else return Dr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Vr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Hr,n,``)),t=Vr}(a||n)&&this.props.push(t,n,a[t])},Wr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Gr=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(wr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=_r(),(!i||!i.isStart)&&!n[Vr]&&(Wr(n),r.zOrigin&&n[Hr]&&(n[Hr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Kr=function(e,t){var n={target:e,props:[],revert:Gr,save:Ur};return e._gsap||ur.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},qr,Jr=function(e,t){var n=fr.createElementNS?fr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):fr.createElement(e);return n&&n.style?n:fr.createElement(e)},Yr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(wr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Zr(n)||n,1)||``},Xr=`O,Moz,ms,Ms,Webkit`.split(`,`),Zr=function(e,t,n){var r=(t||hr).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Xr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Xr[i]:``)+e},Qr=function(){vr()&&window.document&&(dr=window,fr=dr.document,pr=fr.documentElement,hr=Jr(`div`)||{style:{}},Jr(`div`),Vr=Zr(Vr),Hr=Vr+`Origin`,hr.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,qr=!!Zr(`perspective`),_r=ur.core.reverting,mr=1)},$r=function(e){var t=e.ownerSVGElement,n=Jr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),pr.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),pr.removeChild(n),i},ei=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ti=function(e){var t,n;try{t=e.getBBox()}catch{t=$r(e),n=1}return t&&(t.width||t.height)||n||(t=$r(e)),t&&!t.width&&!t.x&&!t.y?{x:+ei(e,[`x`,`cx`,`x1`])||0,y:+ei(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},ni=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ti(e))},ri=function(e,t){if(t){var n=e.style,r;t in yr&&t!==Hr&&(t=Vr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(wr,`-$1`).toLowerCase())):n.removeAttribute(t)}},ii=function(e,t,n,r,i,a){var o=new Xn(e._pt,t,n,0,1,a?Pr:Nr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},ai={deg:1,rad:1,turn:1},oi={grid:1,flex:1},si=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=hr.style,c=Tr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||ai[i]||ai[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&ni(t),(p||o===`%`)&&(yr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Fe(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===fr||!h.appendChild)&&(h=fr.body),g=h._gsap,g&&p&&g.width&&c&&g.time===sn.time&&!g.uncache)return Fe(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:ri(t,n)}else (p||o===`%`)&&!oi[Yr(h,`display`)]&&(s.position=Yr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(hr),m=hr[u],h.removeChild(hr),s.position=`absolute`;return c&&p&&(g=Me(h),g.time=sn.time,g.width=h[u]),Fe(f?m*a/d:m&&a?d/m*a:0)},ci=function(e,t,n,r){var i;return mr||Qr(),t in Dr&&t!==`transform`&&(t=Dr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),yr[t]&&t!==`transform`?(i=bi(e,r),i=t===`transformOrigin`?i.svg?i.origin:xi(Yr(e,Hr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=pi[t]&&pi[t](e,t,n)||Yr(e,t)||Ne(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?si(e,t,i,n)+n:i},li=function(e,t,n,r){if(!n||n===`none`){var i=Zr(t,e,1),a=i&&Yr(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Yr(e,`borderTopColor`))}var o=new Xn(this._pt,e.style,t,0,1,Wn),s=0,c=0,l,u,d,f,p,m,h,g,_,v,b,x;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Yr(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Yr(e,t)||r,m?e.style[t]=m:ri(e,t)),l=[n,r],an(l),n=l[0],r=l[1],d=n.match(le)||[],x=r.match(le)||[],x.length){for(;u=le.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,b=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Ie(f,h)+b),g=parseFloat(h),v=h.substr((g+``).length),s=le.lastIndex-v.length,v||(v=v||y.units[t]||b,s===r.length&&(r+=v,o.e+=v)),b!==v&&(f=si(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Pr:Nr;return ue.test(r)&&(o.e=0),this._pt=o,o},ui={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},di=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ui[n]||n,t[1]=ui[r]||r,t.join(` `)},fi=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],yr[o]&&(s=1,o=o===`transformOrigin`?Hr:Vr),ri(n,o);s&&(ri(n,Vr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,bi(n,1),a.uncache=1,Wr(r)))}},pi={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Xn(e._pt,t,n,0,0,fi);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},mi=[1,0,0,1,0,0],hi={},gi=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},_i=function(e){var t=Yr(e,Vr);return gi(t)?mi:t.substr(7).match(ce).map(Fe)},vi=function(e,t){var n=e._gsap||Me(e),r=e.style,i=_i(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?mi:i):(i===mi&&!e.offsetParent&&e!==pr&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,pr.appendChild(e)),i=_i(e),s?r.display=s:ri(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):pr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},yi=function(e,t,n,r,i,a){var o=e._gsap,s=i||vi(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==mi&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=ti(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Hr]=`0px 0px`,a&&(ii(a,o,`xOrigin`,c,y),ii(a,o,`yOrigin`,l,b),ii(a,o,`xOffset`,u,o.xOffset),ii(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},bi=function(e,t){var n=e._gsap||new bn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Yr(e,Hr)||`0`,l=u=d=m=h=g=_=v=b=0,u,d,f=p=1,p,m,h,g,_,v,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,ee,te,ne,re,ie,ae,F;return n.svg=!!(e.getCTM&&ni(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Vr]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Vr]===`none`?``:s[Vr])),r.scale=r.rotate=r.translate=`none`),C=vi(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),yi(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==mi&&(D=C[0],O=C[1],k=C[2],A=C[3],l=j=C[4],u=M=C[5],C.length===6?(f=Math.sqrt(D*D+O*O),p=Math.sqrt(A*A+k*k),m=D||O?Sr(O,D)*br:0,_=k||A?Sr(k,A)*br+m:0,_&&(p*=Math.abs(Math.cos(_*xr))),n.svg&&(l-=x-(x*D+S*k),u-=S-(x*O+S*A))):(F=C[6],ie=C[7],te=C[8],ne=C[9],re=C[10],ae=C[11],l=C[12],u=C[13],d=C[14],w=Sr(F,re),h=w*br,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+te*E,P=M*T+ne*E,ee=F*T+re*E,te=j*-E+te*T,ne=M*-E+ne*T,re=F*-E+re*T,ae=ie*-E+ae*T,j=N,M=P,F=ee),w=Sr(-k,re),g=w*br,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-te*E,P=O*T-ne*E,ee=k*T-re*E,ae=A*E+ae*T,D=N,O=P,k=ee),w=Sr(O,D),m=w*br,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Fe(Math.sqrt(D*D+O*O+k*k)),p=Fe(Math.sqrt(M*M+F*F)),w=Sr(j,M),_=Math.abs(w)>2e-4?w*br:0,b=ae?1/(ae<0?-ae:ae):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!gi(Yr(e,Vr)),N&&e.setAttribute(`transform`,N))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Fe(f),n.scaleY=Fe(p),n.rotation=Fe(m)+o,n.rotationX=Fe(h)+o,n.rotationY=Fe(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Hr]=xi(c)),n.xOffset=n.yOffset=0,n.force3D=y.force3D,n.renderTransform=n.svg?Oi:qr?Di:Ci,n.uncache=0,n},xi=function(e){return(e=e.split(` `))[0]+` `+e[1]},Si=function(e,t,n){var r=Ct(t);return Fe(parseFloat(t)+parseFloat(si(e,`x`,n+`px`,r)))+r},Ci=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Di(e,t)},wi=`0deg`,Ti=`0px`,Ei=`) `,Di=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==wi||l!==wi)){var x=parseFloat(l)*xr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*xr,w=Math.cos(x),a=Si(_,a,S*w*-v),o=Si(_,o,-Math.sin(x)*-v),s=Si(_,s,C*w*-v+v)}h!==Ti&&(y+=`perspective(`+h+Ei),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Ti||o!==Ti||s!==Ti)&&(y+=s!==Ti||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Ei),c!==wi&&(y+=`rotate(`+c+Ei),l!==wi&&(y+=`rotateY(`+l+Ei),u!==wi&&(y+=`rotateX(`+u+Ei),(d!==wi||f!==wi)&&(y+=`skew(`+d+`, `+f+Ei),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Ei),_.style[Vr]=y||`translate(0, 0)`},Oi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=xr,c*=xr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=xr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Fe(b),x=Fe(x),S=Fe(S),C=Fe(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=si(f,`x`,a,`px`),y=si(f,`y`,o,`px`)),(p||m||h||g)&&(v=Fe(v+p-(p*b+m*S)+h),y=Fe(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Fe(v+r/100*w.width),y=Fe(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Vr]=w)},ki=function(e,t,n,r,i){var a=360,o=M(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?br:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Cr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Cr)%a-~~(s/a)*a)),e._pt=u=new Xn(e._pt,t,n,r,s,kr),u.e=c,u.u=`deg`,e._props.push(n),u},Ai=function(e,t){for(var n in t)e[n]=t[n];return e},ji=function(e,t,n){var r=Ai({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Vr]=t,o=bi(n,1),ri(n,Vr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Vr],a[Vr]=t,o=bi(n,1),a[Vr]=c),yr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Ct(c),p=Ct(l),u=f===p?parseFloat(c):si(n,s,c,p),d=parseFloat(l),e._pt=new Xn(e._pt,o,s,u,d-u,Or),e._pt.u=p||0,e._props.push(s));Ai(o,r)};Pe(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});pi[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return ci(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Mi={name:`css`,register:Qr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,b,x,S,C,w,T;for(m in mr||Qr(),this.styles=this.styles||Kr(e),w=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(De[m]&&En(m,t,n,r,e,i)))){if(f=typeof l,p=pi[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Vt(l)),p)p(this,e,m,l,n)&&(C=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,nn.lastIndex=0,nn.test(c)||(h=Ct(c),g=Ct(l),g?h!==g&&(c=si(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),w.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],M(c)&&~c.indexOf(`random(`)&&(c=Vt(c)),Ct(c+``)||c===`auto`||(c+=y.units[m]||Ct(ci(e,m))||``),(c+``).charAt(1)===`=`&&(c=ci(e,m))):c=ci(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Dr&&(m===`autoAlpha`&&(d===1&&ci(e,`visibility`)===`hidden`&&u&&(d=0),w.push(`visibility`,0,o.visibility),ii(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Dr[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in yr,v){if(this.styles.save(m),T=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Yr(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var E=e.style.perspective;e.style.perspective=l,l=Yr(e,`perspective`),E?e.style.perspective=E:ri(e,`perspective`)}u=parseFloat(l)}if(b||(x=e._gsap,x.renderTransform&&!t.parseTransform||bi(e,t.parseTransform),S=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Xn(this._pt,o,Vr,0,1,x.renderTransform,x,0,-1),b.dep=1),m===`scale`)this._pt=new Xn(this._pt,x,`scaleY`,x.scaleY,(_?Ie(x.scaleY,_+u):u)-x.scaleY||0,Or),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){w.push(Hr,0,o[Hr]),l=di(l),x.svg?yi(e,l,0,S,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==x.zOrigin&&ii(this,x,`zOrigin`,x.zOrigin,g),ii(this,o,m,xi(c),xi(l)));continue}else if(m===`svgOrigin`){yi(e,l,1,S,0,this);continue}else if(m in hi){ki(this,x,m,d,_?Ie(d,_+l):l);continue}else if(m===`smoothOrigin`){ii(this,x,`smooth`,x.smooth,l);continue}else if(m===`force3D`){x[m]=l;continue}else if(m===`transform`){ji(this,l,e);continue}}else m in o||(m=Zr(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Er.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Ct(l)||(m in y.units?y.units[m]:h),h!==g&&(d=si(e,m,c,g)),this._pt=new Xn(this._pt,v?x:o,m,d,(_?Ie(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Mr:Or),this._pt.u=g||0,v&&T!==l?(this._pt.b=c,this._pt.e=T,this._pt.r=jr):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Ar);else if(m in o)li.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){ve(m,l);continue}v||(m in o?w.push(m,0,o[m]):typeof e[m]==`function`?w.push(m,2,e[m]()):w.push(m,1,c||e[m])),a.push(m)}}C&&Yn(this)},render:function(e,t){if(t.tween._time||!_r())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ci,aliases:Dr,getSetter:function(e,t,n){var r=Dr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in yr&&t!==Hr&&(e._gsap.x||ci(e,`x`))?n&&gr===n?t===`scale`?Rr:Lr:(gr=n||{})&&(t===`scale`?zr:Br):e.style&&!ee(e.style[t])?Fr:~t.indexOf(`-`)?Ir:Vn(e,t)},core:{_removeProperty:ri,_getMatrix:vi}};ur.utils.checkPrefix=Zr,ur.core.getStyleSaver=Kr,(function(e,t,n,r){var i=Pe(e+`,`+t+`,`+n,function(e){yr[e]=1});Pe(t,function(e){y.units[e]=`deg`,hi[e]=1}),Dr[i[13]]=e+`,`+t,Pe(r,function(e){var t=e.split(`:`);Dr[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Pe(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){y.units[e]=`px`}),ur.registerPlugin(Mi);var K=ur.registerPlugin(Mi)||ur;K.core.Tween;function Ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pi(e,t,n){return t&&Ni(e.prototype,t),n&&Ni(e,n),e}var Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji=function(){return Fi||typeof window<`u`&&(Fi=window.gsap)&&Fi.registerPlugin&&Fi},Yi=1,Xi=[],q=[],Zi=[],Qi=Date.now,$i=function(e,t){return t},ea=function(){var e=Ui.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,q),r.push.apply(r,Zi),q=n,Zi=r,$i=function(e,n){return t[e](n)}},ta=function(e,t){return~Zi.indexOf(e)&&Zi[Zi.indexOf(e)+1][t]},na=function(e){return!!~Wi.indexOf(e)},ra=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},ia=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},aa=`scrollLeft`,oa=`scrollTop`,sa=function(){return Gi&&Gi.isPressed||q.cache++},ca=function(e,t){var n=function n(r){if(r||r===0){Yi&&(Li.history.scrollRestoration=`manual`);var i=Gi&&Gi.isPressed;r=n.v=Math.round(r)||(Gi&&Gi.iOS?1:0),e(r),n.cacheID=q.cache,i&&$i(`ss`,r)}else (t||q.cache!==n.cacheID||$i(`ref`))&&(n.cacheID=q.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},la={s:aa,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:ca(function(e){return arguments.length?Li.scrollTo(e,ua.sc()):Li.pageXOffset||Ri[aa]||zi[aa]||Bi[aa]||0})},ua={s:oa,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:la,sc:ca(function(e){return arguments.length?Li.scrollTo(la.sc(),e):Li.pageYOffset||Ri[oa]||zi[oa]||Bi[oa]||0})},da=function(e,t){return(t&&t._ctx&&t._ctx.selector||Fi.utils.toArray)(e)[0]||(typeof e==`string`&&Fi.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},fa=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},pa=function(e,t){var n=t.s,r=t.sc;na(e)&&(e=Ri.scrollingElement||zi);var i=q.indexOf(e),a=r===ua.sc?1:2;!~i&&(i=q.push(e)-1),q[i+a]||ra(e,`scroll`,sa);var o=q[i+a],s=o||(q[i+a]=ca(ta(e,n),!0)||(na(e)?r:ca(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=Fi.getProperty(e,`scrollBehavior`)===`smooth`),s},ma=function(e,t,n){var r=e,i=e,a=Qi(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Qi();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Qi();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},ha=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ga=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_a=function(){Ui=Fi.core.globals().ScrollTrigger,Ui&&Ui.core&&ea()},va=function(e){return Fi=e||Ji(),!Ii&&Fi&&typeof document<`u`&&document.body&&(Li=window,Ri=document,zi=Ri.documentElement,Bi=Ri.body,Wi=[Li,Ri,zi,Bi],Fi.utils.clamp,qi=Fi.core.context||function(){},Hi=`onpointerenter`in Bi?`pointer`:`mouse`,Vi=ya.isTouch=Li.matchMedia&&Li.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in Li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=ya.eventTypes=(`ontouchstart`in zi?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in zi?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Yi=0},500),Ii=1),Ui||_a(),Ii};la.op=ua,q.cache=0;var ya=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){Ii||va(Fi)||console.warn(`Please gsap.registerPlugin(Observer)`),Ui||_a();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,ee=e.onEnable,te=e.onDisable,ne=e.onClick,re=e.scrollSpeed,ie=e.capture,ae=e.allowClicks,F=e.lockAxis,oe=e.onLockAxis;this.target=i=da(i)||zi,this.vars=e,u&&=Fi.utils.toArray(u),t||=1e-9,n||=0,d||=1,re||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(Li.getComputedStyle(Bi).lineHeight)||22;var I,se,ce,le,L,ue,de,R=this,z=0,fe=0,pe=e.passive||!s&&e.passive!==!1,me=pa(i,la),B=pa(i,ua),he=me(),ge=B(),_e=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Ki[0]===`pointerdown`,ve=na(i),V=i.ownerDocument||Ri,ye=[0,0,0],H=[0,0,0],be=0,xe=function(){return be=Qi()},Se=function(e,t){return(R.event=e)&&u&&fa(e.target,u)||t&&_e&&e.pointerType!==`touch`||A&&A(e,t)},Ce=function(){R._vx.reset(),R._vy.reset(),se.pause(),c&&c(R)},we=function(){var e=R.deltaX=ga(ye),n=R.deltaY=ga(H),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(R,e,n,ye,H),r&&(v&&R.deltaX>0&&v(R),y&&R.deltaX<0&&y(R),S&&S(R),T&&R.deltaX<0!=z<0&&T(R),z=R.deltaX,ye[0]=ye[1]=ye[2]=0),i&&(x&&R.deltaY>0&&x(R),b&&R.deltaY<0&&b(R),C&&C(R),E&&R.deltaY<0!=fe<0&&E(R),fe=R.deltaY,H[0]=H[1]=H[2]=0),(le||ce)&&(k&&k(R),ce&&=(p&&ce===1&&p(R),h&&h(R),0),le=!1),ue&&!(ue=!1)&&oe&&oe(R),L&&=(P(R),!1),I=0},Te=function(e,t,n){ye[n]+=e,H[n]+=t,R._vx.update(e),R._vy.update(t),o?I||=requestAnimationFrame(we):we()},Ee=function(e,t){F&&!de&&(R.axis=de=Math.abs(e)>Math.abs(t)?`x`:`y`,ue=!0),de!==`y`&&(ye[2]+=e,R._vx.update(e,!0)),de!==`x`&&(H[2]+=t,R._vy.update(t,!0)),o?I||=requestAnimationFrame(we):we()},De=function(e){if(!Se(e,1)){e=ha(e,s);var t=e.clientX,r=e.clientY,i=t-R.x,a=r-R.y,o=R.isDragging;R.x=t,R.y=r,(o||(i||a)&&(Math.abs(R.startX-t)>=n||Math.abs(R.startY-r)>=n))&&(ce||=o?2:1,o||(R.isDragging=!0),Ee(i,a))}},Oe=R.onPress=function(e){Se(e,1)||e&&e.button||(R.axis=de=null,se.pause(),R.isPressed=!0,e=ha(e),z=fe=0,R.startX=R.x=e.clientX,R.startY=R.y=e.clientY,R._vx.reset(),R._vy.reset(),ra(j?i:V,Ki[1],De,pe,!0),R.deltaX=R.deltaY=0,g&&g(R))},ke=R.onRelease=function(e){if(!Se(e,1)){ia(j?i:V,Ki[1],De,!0);var t=!isNaN(R.y-R.startY),n=R.isDragging,r=n&&(Math.abs(R.x-R.startX)>3||Math.abs(R.y-R.startY)>3),a=ha(e);!r&&t&&(R._vx.reset(),R._vy.reset(),s&&ae&&Fi.delayedCall(.08,function(){if(Qi()-be>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(V.createEvent){var t=V.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,Li,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),R.isDragging=R.isGesturing=R.isPressed=!1,c&&n&&!j&&se.restart(!0),ce&&we(),m&&n&&m(R),_&&_(R,r)}},U=function(e){return e.touches&&e.touches.length>1&&(R.isGesturing=!0)&&M(e,R.isDragging)},Ae=function(){return(R.isGesturing=!1)||N(R)},je=function(e){if(!Se(e)){var t=me(),n=B();Te((t-he)*re,(n-ge)*re,1),he=t,ge=n,c&&se.restart(!0)}},Me=function(e){if(!Se(e)){e=ha(e,s),P&&(L=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?Li.innerHeight:1)*d;Te(e.deltaX*t,e.deltaY*t,0),c&&!j&&se.restart(!0)}},Ne=function(e){if(!Se(e)){var t=e.clientX,n=e.clientY,r=t-R.x,i=n-R.y;R.x=t,R.y=n,le=!0,c&&se.restart(!0),(r||i)&&Ee(r,i)}},Pe=function(e){R.event=e,D(R)},Fe=function(e){R.event=e,O(R)},W=function(e){return Se(e)||ha(e,s)&&ne(R)};se=R._dc=Fi.delayedCall(l||.25,Ce).pause(),R.deltaX=R.deltaY=0,R._vx=ma(0,50,!0),R._vy=ma(0,50,!0),R.scrollX=me,R.scrollY=B,R.isDragging=R.isGesturing=R.isPressed=!1,qi(this),R.enable=function(e){return R.isEnabled||(ra(ve?V:i,`scroll`,sa),r.indexOf(`scroll`)>=0&&ra(ve?V:i,`scroll`,je,pe,ie),r.indexOf(`wheel`)>=0&&ra(i,`wheel`,Me,pe,ie),(r.indexOf(`touch`)>=0&&Vi||r.indexOf(`pointer`)>=0)&&(ra(i,Ki[0],Oe,pe,ie),ra(V,Ki[2],ke),ra(V,Ki[3],ke),ae&&ra(i,`click`,xe,!0,!0),ne&&ra(i,`click`,W),M&&ra(V,`gesturestart`,U),N&&ra(V,`gestureend`,Ae),D&&ra(i,Hi+`enter`,Pe),O&&ra(i,Hi+`leave`,Fe),k&&ra(i,Hi+`move`,Ne)),R.isEnabled=!0,R.isDragging=R.isGesturing=R.isPressed=le=ce=!1,R._vx.reset(),R._vy.reset(),he=me(),ge=B(),e&&e.type&&Oe(e),ee&&ee(R)),R},R.disable=function(){R.isEnabled&&(Xi.filter(function(e){return e!==R&&na(e.target)}).length||ia(ve?V:i,`scroll`,sa),R.isPressed&&(R._vx.reset(),R._vy.reset(),ia(j?i:V,Ki[1],De,!0)),ia(ve?V:i,`scroll`,je,ie),ia(i,`wheel`,Me,ie),ia(i,Ki[0],Oe,ie),ia(V,Ki[2],ke),ia(V,Ki[3],ke),ia(i,`click`,xe,!0),ia(i,`click`,W),ia(V,`gesturestart`,U),ia(V,`gestureend`,Ae),ia(i,Hi+`enter`,Pe),ia(i,Hi+`leave`,Fe),ia(i,Hi+`move`,Ne),R.isEnabled=R.isPressed=R.isDragging=!1,te&&te(R))},R.kill=R.revert=function(){R.disable();var e=Xi.indexOf(R);e>=0&&Xi.splice(e,1),Gi===R&&(Gi=0)},Xi.push(R),j&&na(i)&&(Gi=R),R.enable(f)},Pi(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();ya.version=`3.15.0`,ya.create=function(e){return new ya(e)},ya.register=va,ya.getAll=function(){return Xi.slice()},ya.getById=function(e){return Xi.filter(function(t){return t.vars.id===e})[0]},Ji()&&Fi.registerPlugin(ya);var J,ba,Y,X,xa,Z,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa=1,Za=Date.now,Qa=Za(),$a=0,eo=0,to=function(e,t,n){var r=vo(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},no=function(e,t){return t&&(!vo(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},ro=function e(){return eo&&requestAnimationFrame(e)},io=function(){return ka=1},ao=function(){return ka=0},oo=function(e){return e},so=function(e){return Math.round(e*1e5)/1e5||0},co=function(){return typeof window<`u`},lo=function(){return J||co()&&(J=window.gsap)&&J.registerPlugin&&J},uo=function(e){return!!~Sa.indexOf(e)},fo=function(e){return(e===`Height`?Ka:Y[`inner`+e])||xa[`client`+e]||Z[`client`+e]},po=function(e){return ta(e,`getBoundingClientRect`)||(uo(e)?function(){return zs.width=Y.innerWidth,zs.height=Ka,zs}:function(){return Uo(e)})},mo=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=ta(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?fo(i):e[`client`+i])||0}},ho=function(e,t){return!t||~Zi.indexOf(e)?po(e):function(){return zs}},go=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=ta(e,n))?a()-po(e)()[i]:uo(e)?(xa[n]||Z[n])-fo(r):e[n]-e[`offset`+r])},_o=function(e,t){for(var n=0;n<Pa.length;n+=3)(!t||~t.indexOf(Pa[n+1]))&&e(Pa[n],Pa[n+1],Pa[n+2])},vo=function(e){return typeof e==`string`},yo=function(e){return typeof e==`function`},bo=function(e){return typeof e==`number`},xo=function(e){return typeof e==`object`},So=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},Co=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},wo=Math.abs,To=`left`,Eo=`top`,Do=`right`,Oo=`bottom`,ko=`width`,Ao=`height`,jo=`Right`,Mo=`Left`,No=`Top`,Po=`Bottom`,Fo=`padding`,Io=`margin`,Lo=`Width`,Ro=`Height`,zo=`px`,Bo=function(e){return Y.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Vo=function(e){var t=Bo(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},Ho=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Uo=function(e,t){var n=t&&Bo(e)[Aa]!==`matrix(1, 0, 0, 1, 0, 0)`&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Wo=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Go=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},Ko=function(e){return function(t){return J.utils.snap(Go(e),t)}},qo=function(e){var t=J.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}else for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Jo=function(e){return function(t,n){return qo(Go(e))(t,n.direction)}},Yo=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},Xo=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Zo=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Qo=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},$o={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},es={toggleActions:`play`,anticipatePin:0},ts={top:0,left:0,center:.5,bottom:1,right:1},ns=function(e,t){if(vo(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in ts?ts[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},rs=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=X.createElement(`div`),m=uo(n)||ta(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?Z:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===ua?Do:Oo)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],is(p,0,r,_),p},is=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+Lo]=1,i[`border`+o+Lo]=0,i[n.p]=t+`px`,J.set(e,i)},Q=[],as={},os,ss=function(){return Za()-$a>34&&(os||=requestAnimationFrame(As))},cs=function(){(!Ra||!Ra.isPressed||Ra.startX>Z.clientWidth)&&(q.cache++,Ra?os||=requestAnimationFrame(As):As(),$a||ms(`scrollStart`),$a=Za())},ls=function(){Va=Y.innerWidth,Ba=Y.innerHeight},us=function(e){q.cache++,(e===!0||!Oa&&!La&&!X.fullscreenElement&&!X.webkitFullscreenElement&&(!za||Va!==Y.innerWidth||Math.abs(Y.innerHeight-Ba)>Y.innerHeight*.25))&&Ca.restart(!0)},ds={},fs=[],ps=function e(){return Zo($,`scrollEnd`,e)||Es(!0)},ms=function(e){return ds[e]&&ds[e].map(function(e){return e()})||fs},hs=[],gs=function(e){for(var t=0;t<hs.length;t+=5)(!e||hs[t+4]&&hs[t+4].query===e)&&(hs[t].style.cssText=hs[t+1],hs[t].getBBox&&hs[t].setAttribute(`transform`,hs[t+2]||``),hs[t+3].uncache=1)},_s=function(){return q.forEach(function(e){return yo(e)&&++e.cacheID&&(e.rec=e())})},vs=function(e,t){var n;for(ja=0;ja<Q.length;ja++)n=Q[ja],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));qa=!0,t&&gs(t),t||ms(`revert`)},ys=function(e,t){q.cache++,(t||!bs)&&q.forEach(function(e){return yo(e)&&e.cacheID++&&(e.rec=0)}),vo(e)&&(Y.history.scrollRestoration=Wa=e)},bs,xs=0,Ss,Cs=function(){if(Ss!==xs){var e=Ss=xs;requestAnimationFrame(function(){return e===xs&&Es(!0)})}},ws=function(){Z.appendChild(Ga),Ka=!Ra&&Ga.offsetHeight||Y.innerHeight,Z.removeChild(Ga)},Ts=function(e){return wa(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},Es=function(e,t){if(xa=X.documentElement,Z=X.body,Sa=[Y,X,xa,Z],$a&&!e&&!qa){Xo($,`scrollEnd`,ps);return}ws(),bs=$.isRefreshing=!0,qa||_s();var n=ms(`refreshInit`);Fa&&$.sort(),t||vs(),q.forEach(function(e){yo(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Q.slice(0).forEach(function(e){return e.refresh()}),qa=!1,Q.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),Ja=1,Ts(!0),Q.forEach(function(e){var t=go(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),Ts(!1),Ja=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),q.forEach(function(e){yo(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),ys(Wa,1),Ca.pause(),xs++,bs=2,As(2),Q.forEach(function(e){return yo(e.vars.onRefresh)&&e.vars.onRefresh(e)}),bs=$.isRefreshing=!1,ms(`refresh`)},Ds=0,Os=1,ks,As=function(e){if(e===2||!bs&&!qa){$.isUpdating=!0,ks&&ks.update(0);var t=Q.length,n=Za(),r=n-Qa>=50,i=t&&Q[0].scroll();if(Os=Ds>i?-1:1,bs||(Ds=i),r&&($a&&!ka&&n-$a>200&&($a=0,ms(`scrollEnd`)),Ea=Qa,Qa=n),Os<0){for(ja=t;ja-- >0;)Q[ja]&&Q[ja].update(0,r);Os=1}else for(ja=0;ja<t;ja++)Q[ja]&&Q[ja].update(0,r);$.isUpdating=!1}os=0},js=[To,Eo,Oo,Do,Io+Po,Io+jo,Io+No,Io+Mo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],Ms=js.concat([ko,Ao,`boxSizing`,`max`+Lo,`max`+Ro,`position`,Io,Fo,Fo+No,Fo+jo,Fo+Po,Fo+Mo]),Ns=function(e,t,n){Is(n);var r=e._gsap;if(r.spacerIsNative)Is(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},Ps=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=js.length,a=t.style,o=e.style,s;i--;)s=js[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[Oo]=o[Do]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[ko]=Wo(e,la)+zo,a[Ao]=Wo(e,ua)+zo,a[Fo]=o[Io]=o[Eo]=o[To]=`0`,Is(r),o[ko]=o[`max`+Lo]=n[ko],o[Ao]=o[`max`+Ro]=n[Ao],o[Fo]=n[Fo],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Fs=/([A-Z])/g,Is=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(Fs,`-$1`).toLowerCase())}},Ls=function(e){for(var t=Ms.length,n=e.style,r=[],i=0;i<t;i++)r.push(Ms[i],n[Ms[i]]);return r.t=e,r},Rs=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},zs={left:0,top:0},Bs=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){yo(e)&&(e=e(s)),vo(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?ns(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),bo(e))f&&(e=J.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&is(o,n,r,!0);else{yo(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=da(t,s)||Z,y=Uo(_)||{},(!y||!y.left&&!y.top)&&Bo(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Uo(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=ns(v[0],y[r.d]),x=ns(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&is(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,is(a,C,r,w&&C>20||!w&&(u?Math.max(Z[h],xa[h]):a.parentNode[h])<=C+1),u&&(c=Uo(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+zo))}return f&&_&&(h=Uo(_),f.seek(d),g=Uo(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Vs=/(webkit|moz|length|cssText|inset)/i,Hs=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===Z){for(a in e._stOrig=i.cssText,o=Bo(e),o)!+a&&!Vs.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;J.core.getCache(e).uncache=1,t.appendChild(e)}},Us=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Ws=function(e,t,n){var r={};r[t.p]=`+=`+n,J.set(e,r)},Gs=function(e,t){var n=pa(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Us(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){q.cache++,t.tween&&As()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=J.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Xo(e,`wheel`,n.wheelHandler),$.isTouch&&Xo(e,`touchmove`,n.wheelHandler),i},$=function(){function e(t,n){ba||e.register(J)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Ua(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eo){this.update=this.refresh=this.kill=oo;return}t=Ho(vo(t)||bo(t)||t.nodeType?{trigger:t}:t,es);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?la:ua,T=!l&&l!==0,E=da(t.scroller||Y),D=J.core.getCache(E),O=uo(E),k=(`pinType`in t?t.pinType:ta(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:es.markers,N=O?0:parseFloat(Bo(E)[`border`+w.p2+Lo])||0,P=this,ee=t.onRefreshInit&&function(){return t.onRefreshInit(P)},te=mo(E,O,w),ne=ho(E,O),re=0,ie=0,ae=0,F=pa(E,w),oe,I,se,ce,le,L,ue,de,R,z,fe,pe,me,B,he,ge,_e,ve,V,ye,H,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,U,Ae,je,Me,Ne,Pe,Fe,W;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):F,ce=F(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(Fa=1,t.refreshPriority===-9999&&(ks=P)),D.tweenScroll=D.tweenScroll||{top:Gs(E,ua),left:Gs(E,la)},P.tweenTo=oe=D.tweenScroll[w.p],P.scrubDuration=function(e){Ae=bo(e)&&e,Ae?U?U.duration(e):U=J.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ae,paused:!0,onComplete:function(){return h&&h(P)}}):(U&&U.progress(1).kill(),U=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),Oe=0,o||=n.vars.id),v&&((!xo(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in Z.style&&J.set(O?[Z,xa]:E,{scrollBehavior:`auto`}),q.forEach(function(e){return yo(e)&&e.target===(O?X.scrollingElement||xa:E)&&(e.smooth=!1)}),se=yo(v.snapTo)?v.snapTo:v.snapTo===`labels`?Ko(n):v.snapTo===`labelsDirectional`?Jo(n):v.directional===!1?J.utils.snap(v.snapTo):function(e,t){return qo(v.snapTo)(e,Za()-ie<500?0:t.direction)},je=v.duration||{min:.1,max:2},je=xo(je)?Ta(je.min,je.max):Ta(je,je),Me=J.delayedCall(v.delay||Ae/2||.1,function(){var e=F(),t=Za()-ie<500,r=oe.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!ka&&re!==e){var i=(e-L)/B,a=n&&!T?n.totalProgress():i,o=t?0:(a-ke)/(Za()-Ea)*1e3||0,s=J.utils.clamp(-i,1-i,wo(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=se(c,P),bo(l)||(l=c),u=Math.max(0,Math.round(L+l*B)),e<=ue&&e>=L&&u!==e){if(r&&!r._initted&&r.data<=wo(u-e))return;v.inertia===!1&&(s=l-i),oe(u,{duration:je(wo(Math.max(wo(c-a),wo(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:wo(u-e),onInterrupt:function(){return Me.restart(!0)&&p&&Co(P,p)},onComplete:function(){P.update(),re=F(),n&&!T&&(U?U.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Oe=ke=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&Co(P,m)}},e,s*B,u-e-s*B),f&&Co(P,f,oe.tween)}}else P.isActive&&re!==e&&Me.restart(!0)}).pause()),o&&(as[o]=P),u=P.trigger=da(u||d!==!0&&d),W=u&&u._gsap&&u._gsap.stRevert,W&&=W(P),d=d===!0?u:da(d),vo(a)&&(a={targets:u,className:a}),d&&(f===!1||f===Io||(f=!f&&d.parentNode&&d.parentNode.style&&Bo(d.parentNode).display===`flex`?!1:Fo),P.pin=d,I=J.core.getCache(d),I.spacer?he=I.pinState:(b&&(b=da(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),I.spacerIsNative=!!b,b&&(I.spacerState=Ls(b))),I.spacer=ve=b||X.createElement(`div`),ve.classList.add(`pin-spacer`),o&&ve.classList.add(`pin-spacer-`+o),I.pinState=he=Ls(d)),t.force3D!==!1&&J.set(d,{force3D:!0}),P.spacer=ve=I.spacer,De=Bo(d),Se=De[f+w.os2],ye=J.getProperty(d),H=J.quickSetter(d,w.a,zo),Ps(d,ve,De),_e=Ls(d)),M){pe=xo(M)?Ho(M,$o):$o,z=rs(`scroller-start`,o,E,w,pe,0),fe=rs(`scroller-end`,o,E,w,pe,0,z),V=z[`offset`+w.op.d2];var Ie=da(ta(E,`content`)||E);de=this.markerStart=rs(`start`,o,Ie,w,pe,V,0,x),R=this.markerEnd=rs(`end`,o,Ie,w,pe,V,0,x),x&&(Fe=J.quickSetter([de,R],w.a,zo)),!k&&!(Zi.length&&ta(E,`fixedMarkers`)===!0)&&(Vo(O?Z:E),J.set([z,fe],{force3D:!0}),we=J.quickSetter(z,w.a,zo),Ee=J.quickSetter(fe,w.a,zo))}if(x){var Le=x.vars.onUpdate,Re=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Le&&Le.apply(x,Re||[])})}if(P.previous=function(){return Q[Q.indexOf(P)-1]},P.next=function(){return Q[Q.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=Oa;r!==P.isReverted&&(r&&(Ne=Math.max(F(),P.scroll.rec||0),ae=P.progress,Pe=n&&n.progress()),de&&[de,R,z,fe].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(Oa=P,P.update(r)),d&&(!y||!P.isActive)&&(r?Ns(d,ve,he):Ps(d,ve,Bo(d),Ce)),r||P.update(r),Oa=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!((Oa||!P.enabled)&&!i)){if(d&&r&&$a){Xo(e,`scrollEnd`,ps);return}!bs&&ee&&ee(P),Oa=P,oe.tween&&!a&&(oe.tween.kill(),oe.tween=0),U&&U.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=te(),l=ne(),m=x?x.duration():go(E,w),h=B<=.01||!B,g=0,_=o||0,v=xo(a)?a.end:t.end,b=t.endTrigger||u,S=xo(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&da(t.pinnedContainer,P),D=u&&Math.max(0,Q.indexOf(P))||0,A=D,j,I,se,pe,V,H,Se,we,Ee,De,Oe,ke,Ae;for(M&&xo(a)&&(ke=J.getProperty(z,w.p),Ae=J.getProperty(fe,w.p));A-- >0;)H=Q[A],H.end||H.refresh(0,1)||(Oa=P),Se=H.pin,Se&&(Se===u||Se===d||Se===C)&&!H.isReverted&&(De||=[],De.unshift(H),H.revert(!0,!0)),H!==Q[A]&&(D--,A--);for(yo(S)&&(S=S(P)),S=to(S,`start`,P),L=Bs(S,u,s,w,F(),de,z,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),yo(v)&&(v=v(P)),vo(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(vo(S)?S.split(` `)[0]:``)+v:(g=ns(v.substr(2),s),v=vo(S)?S:(x?J.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,L):L)+g,b=u)),v=to(v,`end`,P),ue=Math.max(L,Bs(v||(b?`100% 0`:m),b,s,w,F()+g,R,fe,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)H=Q[A]||{},Se=H.pin,Se&&H.start-H._pinPush<=L&&!x&&H.end>0&&(j=H.end-(P._startClamp?Math.max(0,H.start):H.start),(Se===u&&H.start-H._pinPush<L||Se===C)&&isNaN(S)&&(g+=j*(1-H.progress)),Se===d&&(_+=j));if(L+=g,ue+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!bs&&(P._endClamp=ue||-.001,ue=Math.min(ue,go(E,w))),B=ue-L||(L-=.01)&&.001,h&&(ae=J.utils.clamp(0,1,J.utils.normalize(L,ue,Ne))),P._pinPush=_,de&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+F()),J.set([de,R],j)),d&&!(Ja&&P.end>=go(E,w)))j=Bo(d),pe=w===ua,se=F(),be=parseFloat(ye(w.a))+_,!m&&ue>1&&(Oe=(O?X.scrollingElement||xa:E).style,Oe={style:Oe,value:Oe[`overflow`+w.a.toUpperCase()]},O&&Bo(Z)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Oe.style[`overflow`+w.a.toUpperCase()]=`scroll`)),Ps(d,ve,j),_e=Ls(d),I=Uo(d,!0),we=k&&pa(E,pe?la:ua)(),f?(Ce=[f+w.os2,B+_+zo],Ce.t=ve,A=f===Fo?Wo(d,w)+B+_:0,A&&(Ce.push(w.d,A+zo),ve.style.flexBasis!==`auto`&&(ve.style.flexBasis=A+zo)),Is(Ce),C&&Q.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&F(Ne)):(A=Wo(d,w),A&&ve.style.flexBasis!==`auto`&&(ve.style.flexBasis=A+zo)),k&&(V={top:I.top+(pe?se-L:we)+zo,left:I.left+(pe?we:se-L)+zo,boxSizing:`border-box`,position:`fixed`},V[ko]=V[`max`+Lo]=Math.ceil(I.width)+zo,V[Ao]=V[`max`+Ro]=Math.ceil(I.height)+zo,V[Io]=V[Io+No]=V[Io+jo]=V[Io+Po]=V[Io+Mo]=`0`,V[Fo]=j[Fo],V[Fo+No]=j[Fo+No],V[Fo+jo]=j[Fo+jo],V[Fo+Po]=j[Fo+Po],V[Fo+Mo]=j[Fo+Mo],ge=Rs(he,V,y),bs&&F(0)),n?(Ee=n._initted,Ia(1),n.render(n.duration(),!0,!0),xe=ye(w.a)-be+B+_,Te=Math.abs(B-xe)>1,k&&Te&&ge.splice(ge.length-2,2),n.render(0,!0,!0),Ee||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ia(0)):xe=B,Oe&&(Oe.value?Oe.style[`overflow`+w.a.toUpperCase()]=Oe.value:Oe.style.removeProperty(`overflow-`+w.a));else if(u&&F()&&!x)for(I=u.parentNode;I&&I!==Z;)I._pinOffset&&(L-=I._pinOffset,ue-=I._pinOffset),I=I.parentNode;De&&De.forEach(function(e){return e.revert(!1,!0)}),P.start=L,P.end=ue,ce=le=bs?Ne:F(),!x&&!bs&&(ce<Ne&&F(Ne),P.scroll.rec=0),P.revert(!1,!0),ie=Za(),Me&&(re=-1,Me.restart(!0)),Oa=0,n&&T&&(n._initted||Pe)&&n.progress()!==Pe&&n.progress(Pe||0,!0).render(n.time(),!0,!0),(h||ae!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||ae||n.vars.immediateRender!==!1)&&n.totalProgress(x&&L<-.001&&!ae?J.utils.normalize(L,ue,0):ae,!0),P.progress=h||(ce-L)/B===ae?0:ae),d&&f&&(ve._pinOffset=Math.round(P.progress*xe)),U&&U.invalidate(),isNaN(ke)||(ke-=J.getProperty(z,w.p),Ae-=J.getProperty(fe,w.p),Ws(z,w,ke),Ws(de,w,ke-(o||0)),Ws(fe,w,Ae),Ws(R,w,Ae-(o||0))),h&&!bs&&P.update(),c&&!bs&&!me&&(me=!0,c(P),me=!1)}},P.getVelocity=function(){return(F()-le)/(Za()-Ea)*1e3||0},P.endAnimation=function(){So(P.callbackAnimation),n&&(U?U.progress(1):n.paused()?T||So(n,P.direction<0,1):So(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(L||P.refresh()||L)+n.labels[e]/n.duration()*B||0},P.getTrailing=function(e){var t=Q.indexOf(P),n=P.direction>0?Q.slice(0,t).reverse():Q.slice(t+1);return(vo(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=L:e.start>=ue})},P.update=function(e,t,r){if(!(x&&!r&&!e)){var o=bs===!0?Ne:P.scroll(),c=e?0:(o-L)/B,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,ee;if(t&&(le=ce,ce=x?F():o,v&&(ke=Oe,Oe=n&&!T?n.totalProgress():u)),m&&d&&!Oa&&!Xa&&$a&&(!u&&L<o+(o-le)/(Za()-Ea)*m?u=1e-4:u===1&&ue>o+(o-le)/(Za()-Ea)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!Oa&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],ee=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||ee)&&(ee||l||!n)&&(yo(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(U&&!Oa&&!Xa?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo(`totalProgress`,u,n._tTime/n._tDur):(U.vars.totalProgress=u,U.invalidate().restart())):n&&n.totalProgress(u,!!(Oa&&(ie||e)))),d){if(e&&f&&(ve.style[f+w.os2]=Se),!k)H(so(be+xe*u));else if(O){if(N=!e&&u>p&&ue+1>o&&o+1>=go(E,w),y)if(!e&&(h||N)){var te=Uo(d,!0),ne=o-L;Hs(d,Z,te.top+(w===ua?ne:0)+zo,te.left+(w===ua?0:ne)+zo)}else Hs(d,ve);Is(h||N?ge:_e),Te&&u<1&&h||H(be+(u===1&&!N?xe:0))}}v&&!oe.tween&&!Oa&&!Xa&&Me.restart(!0),a&&(M||_&&u&&(u<1||!Ya))&&wa(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!Oa?(T&&(ee&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!Ya)&&(s&&M&&Co(P,s),A[b]&&Co(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&Co(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(bo(S)?S:2500)&&(So(P.callbackAnimation),U?U.progress(1):So(n,D===`reverse`?1:!u,1))):T&&i&&!Oa&&i(P)}if(Ee){var re=x?o/x.duration()*(x._caScrollDist||0):o;we(re+ +!!z._isFlipped),Ee(re)}Fe&&Fe(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,Xo(E,`resize`,us),O||Xo(E,`scroll`,cs),ee&&Xo(e,`refreshInit`,ee),t!==!1&&(P.progress=ae=0,ce=le=re=F()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&oe?oe.tween:U},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:no(e,n&&!!P._startClamp),end:no(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(Ce&&e){var t=Ce.indexOf(w.d)+1;Ce[t]=parseFloat(Ce[t])+e+zo,Ce[1]=parseFloat(Ce[1])+e+zo,Is(Ce)}},P.disable=function(t,n){if(t!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,n||U&&U.pause(),Ne=0,I&&(I.uncache=1),ee&&Zo(e,`refreshInit`,ee),Me&&(Me.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!O)){for(var r=Q.length;r--;)if(Q[r].scroller===E&&Q[r]!==P)return;Zo(E,`resize`,us),O||Zo(E,`scroll`,cs)}},P.kill=function(e,r){P.disable(e,r),U&&!r&&U.kill(),o&&delete as[o];var i=Q.indexOf(P);i>=0&&Q.splice(i,1),i===ja&&Os>0&&ja--,i=0,Q.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||bs||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),de&&[de,R,z,fe].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ks===P&&(ks=0),d&&(I&&(I.uncache=1),i=0,Q.forEach(function(e){return e.pin===d&&i++}),i||(I.spacer=0)),t.onKill&&t.onKill(P)},Q.push(P),P.enable(!1,!1),W&&W(P),n&&n.add&&!B){var ze=P.update;P.update=function(){P.update=ze,q.cache++,L||ue||P.refresh()},J.delayedCall(.01,P.update),B=.01,L=ue=0}else P.refresh();d&&Cs()},e.register=function(t){return ba||=(J=t||lo(),co()&&window.document&&e.enable(),eo),ba},e.defaults=function(e){if(e)for(var t in e)es[t]=e[t];return es},e.disable=function(e,t){eo=0,Q.forEach(function(n){return n[t?`kill`:`disable`](e)}),Zo(Y,`wheel`,cs),Zo(X,`scroll`,cs),clearInterval(Da),Zo(X,`touchcancel`,oo),Zo(Z,`touchstart`,oo),Yo(Zo,X,`pointerdown,touchstart,mousedown`,io),Yo(Zo,X,`pointerup,touchend,mouseup`,ao),Ca.kill(),_o(Zo);for(var n=0;n<q.length;n+=3)Qo(Zo,q[n],q[n+1]),Qo(Zo,q[n],q[n+2])},e.enable=function(){if(Y=window,X=document,xa=X.documentElement,Z=X.body,J)if(wa=J.utils.toArray,Ta=J.utils.clamp,Ua=J.core.context||oo,Ia=J.core.suppressOverwrites||oo,Wa=Y.history.scrollRestoration||`auto`,Ds=Y.pageYOffset||0,J.core.globals(`ScrollTrigger`,e),Z){eo=1,Ga=document.createElement(`div`),Ga.style.height=`100vh`,Ga.style.position=`absolute`,ws(),ro(),ya.register(J),e.isTouch=ya.isTouch,Ha=ya.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),za=ya.isTouch===1,Xo(Y,`wheel`,cs),Sa=[Y,X,xa,Z],J.matchMedia?(e.matchMedia=function(e){var t=J.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},J.addEventListener(`matchMediaInit`,function(){_s(),vs()}),J.addEventListener(`matchMediaRevert`,function(){return gs()}),J.addEventListener(`matchMedia`,function(){Es(0,1),ms(`matchMedia`)}),J.matchMedia().add(`(orientation: portrait)`,function(){return ls(),ls})):console.warn(`Requires GSAP 3.11.0 or later`),ls(),Xo(X,`scroll`,cs);var t=Z.hasAttribute(`style`),n=Z.style,r=n.borderTopStyle,i=J.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,`revert`,{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Uo(Z),ua.m=Math.round(a.top+ua.sc())||0,la.m=Math.round(a.left+la.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(Z.setAttribute(`style`,``),Z.removeAttribute(`style`)),Da=setInterval(ss,250),J.delayedCall(.5,function(){return Xa=0}),Xo(X,`touchcancel`,oo),Xo(Z,`touchstart`,oo),Yo(Xo,X,`pointerdown,touchstart,mousedown`,io),Yo(Xo,X,`pointerup,touchend,mouseup`,ao),Aa=J.utils.checkPrefix(`transform`),Ms.push(Aa),ba=Za(),Ca=J.delayedCall(.2,Es).pause(),Pa=[X,`visibilitychange`,function(){var e=Y.innerWidth,t=Y.innerHeight;X.hidden?(Ma=e,Na=t):(Ma!==e||Na!==t)&&us()},X,`DOMContentLoaded`,Es,Y,`load`,Es,Y,`resize`,us],_o(Xo),Q.forEach(function(e){return e.enable(0,1)}),o=0;o<q.length;o+=3)Qo(Zo,q[o],q[o+1]),Qo(Zo,q[o],q[o+2])}else X&&X.addEventListener(`DOMContentLoaded`,function t(){e.enable(),X.removeEventListener(`DOMContentLoaded`,t)})},e.config=function(t){`limitCallbacks`in t&&(Ya=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(Da)||(Da=n)&&setInterval(ss,n),`ignoreMobileResize`in t&&(za=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(_o(Zo)||_o(Xo,t.autoRefreshEvents||`none`),La=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=da(e),r=q.indexOf(n),i=uo(n);~r&&q.splice(r,i?6:2),t&&(i?Zi.unshift(Y,t,Z,t,xa,t):Zi.unshift(n,t))},e.clearMatchMedia=function(e){Q.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(vo(e)?da(e):e).getBoundingClientRect(),i=r[n?ko:Ao]*t||0;return n?r.right-i>0&&r.left+i<Y.innerWidth:r.bottom-i>0&&r.top+i<Y.innerHeight},e.positionInViewport=function(e,t,n){vo(e)&&(e=da(e));var r=e.getBoundingClientRect(),i=r[n?ko:Ao],a=t==null?i/2:t in ts?ts[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/Y.innerWidth:(r.top+a)/Y.innerHeight},e.killAll=function(e){if(Q.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=ds.killAll||[];ds={},t.forEach(function(e){return e()})}},e}();$.version=`3.15.0`,$.saveStyles=function(e){return e?wa(e).forEach(function(e){if(e&&e.style){var t=hs.indexOf(e);t>=0&&hs.splice(t,5),hs.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),J.core.getCache(e),Ua())}}):hs},$.revert=function(e,t){return vs(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?us(!0):(ba||$.register())&&Es(!0)},$.update=function(e){return++q.cache&&As(e===!0?2:0)},$.clearScrollMemory=ys,$.maxScroll=function(e,t){return go(e,t?la:ua)},$.getScrollFunc=function(e,t){return pa(da(e),t?la:ua)},$.getById=function(e){return as[e]},$.getAll=function(){return Q.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!$a},$.snapDirectional=qo,$.addEventListener=function(e,t){var n=ds[e]||(ds[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=ds[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=J.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&yo(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return yo(a)&&(a=a(),Xo($,`refresh`,function(){return a=t.batchMax()})),wa(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))}),n};var Ks=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},qs=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(ya.isTouch?` pinch-zoom`:``):`none`,t===xa&&e(Z,n)},Js={auto:1,scroll:1},Ys=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||J.core.getCache(i),o=Za(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==Z&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Js[(s=Bo(i)).overflowY]||Js[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!uo(i)&&(Js[(s=Bo(i)).overflowY]||Js[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Xs=function(e,t,n,r){return ya.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Ys,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Xo(X,ya.eventTypes[0],$s,!1,!0)},onDisable:function(){return Zo(X,ya.eventTypes[0],$s,!0)}})},Zs=/(input|label|select|textarea)/i,Qs,$s=function(e){var t=Zs.test(e.target.tagName);(t||Qs)&&(e._gsapAllow=!0,Qs=t)},ec=function(e){xo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||=`wheel,touch`,e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=da(e.target)||xa,l=J.core.globals().ScrollSmoother,u=l&&l.get(),d=Ha&&(e.content&&da(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=pa(c,ua),p=pa(c,la),m=1,h=(ya.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,g=0,_=yo(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Xs(c,e.type,!0,i),x=function(){return y=!1},S=oo,C=oo,w=function(){s=go(c,ua),C=Ta(+!!Ha,s),n&&(S=Ta(0,go(c,la))),v=xs},T=function(){d._gsap.y=so(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=so(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=so((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=q.cache,As()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&J.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return Ha&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=so((Y.visualViewport&&Y.visualViewport.scale||1)/h),D.pause(),e!==m&&qs(c,m>1.01?!0:n?!1:`x`),O=p(),k=f(),w(),v=xs},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{q.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Ks(p,i,o,go(c,la)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Ks(f,i,o,go(c,ua)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(Ha&&D.vars.scrollY>=s||i>=s-1)&&J.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Za()-g>1e3&&(v=0,g=Za())},e.onChange=function(e,t,r,i,a){if(xs!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&As()},e.onEnable=function(){qs(c,n?!1:`x`),$.addEventListener(`refresh`,j),Xo(Y,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){qs(c,!0),Zo(Y,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new ya(e),o.iOS=Ha,Ha&&!f()&&f(1),Ha&&J.ticker.add(oo),A=o._dc,D=J.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Us(f,f(),function(){return D.pause()})},onUpdate:As,onComplete:A.vars.onComplete}),o};$.sort=function(e){if(yo(e))return Q.sort(e);var t=Y.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Y.innerHeight}),Q.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new ya(e)},$.normalizeScroll=function(e){if(e===void 0)return Ra;if(e===!0&&Ra)return Ra.enable();if(e===!1){Ra&&Ra.kill(),Ra=e;return}var t=e instanceof ya?e:ec(e);return Ra&&Ra.target===t.target&&Ra.kill(),uo(t.target)&&(Ra=t),t},$.core={_getVelocityProp:ma,_inputObserver:Xs,_scrollers:q,_proxies:Zi,bridge:{ss:function(){$a||ms(`scrollStart`),$a=Za()},ref:function(){return Oa}}},lo()&&J.registerPlugin($),K.registerPlugin($);function tc(){let e=document.getElementById(`splash-screen`);if(e){let t=document.getElementById(`splash-logo`),n=document.querySelectorAll(`.splash-dot`),r=document.querySelectorAll(`.splash-shape`);K.set(e,{autoAlpha:1}),t&&K.set(t,{scale:.86,opacity:.9,filter:`blur(6px)`}),K.set(r,{opacity:0,scale:1.12}),K.set(n,{y:0,opacity:.95});let i=document.getElementById(`site-footer`);i&&K.set(i,{autoAlpha:0,y:6}),t&&t.querySelectorAll(`path, circle`).forEach(e=>{try{let t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t}catch{}});let a,o=K.timeline({defaults:{ease:`power3.out`}});if(r.length&&o.to(r,{opacity:1,y:0,stagger:.06,duration:.2},0),n&&n.length&&(a=K.to(n,{y:-8,stagger:.12,yoyo:!0,repeat:-1,duration:.42,ease:`sine.inOut`})),t){let e=t.querySelectorAll(`path, circle`);o.to(e,{strokeDashoffset:0,stagger:.06,duration:.9},.15),o.to(t,{scale:1.06,duration:.2,ease:`power2.out`},1.05),o.to(t,{scale:1,duration:.45,ease:`elastic.out(1,0.6)`},1.25),o.to(t,{filter:`drop-shadow(0 18px 40px rgba(120,64,255,0.12))`,duration:.1},1.05)}o.to({},{duration:.8},1.7),o.add(()=>{a&&a.kill()},`+=0.0`),o.to(`#splash-screen`,{autoAlpha:0,duration:.5,ease:`power2.in`,onComplete:()=>{e.classList.add(`hidden`)}},2.5),o.to(`#site-footer`,{autoAlpha:1,y:0,duration:.45,ease:`power2.out`},`+=0.05`),setTimeout(()=>{e.classList.contains(`hidden`)||e.classList.add(`hidden`)},4e3);let s;e.addEventListener(`mousemove`,n=>{s||=e.getBoundingClientRect();let r=(n.clientX-s.left-s.width/2)/(s.width/2),i=(n.clientY-s.top-s.height/2)/(s.height/2);K.to(`.splash-shape.s1`,{x:r*18,y:i*8,rotation:r*6,duration:.8,ease:`power3.out`}),K.to(`.splash-shape.s2`,{x:r*-22,y:i*-6,rotation:r*-5,duration:.9,ease:`power3.out`}),K.to(`.splash-shape.s3`,{x:r*10,y:i*10,rotation:r*3,duration:.85,ease:`power3.out`}),t&&K.to(t,{x:r*6,y:i*3,duration:.9,ease:`power3.out`})}),e.addEventListener(`mouseleave`,()=>{K.to([`.splash-shape.s1`,`.splash-shape.s2`,`.splash-shape.s3`,t],{x:0,y:0,rotation:0,duration:.9,ease:`power3.out`})})}let t=document.querySelector(`.brand`);t&&(t.innerHTML=t.textContent.trim().split(``).map(e=>`<span class="brand-letter">${e===` `?`&nbsp;`:e}</span>`).join(``),K.set(`.brand-letter`,{y:-10,opacity:0}),K.to(`.brand-letter`,{y:0,opacity:1,stagger:.04,ease:`elastic.out(1,0.6)`,duration:.8,delay:.2}),t.addEventListener(`mouseenter`,()=>{K.to(`.brand-letter`,{y:-8,rotation:3,scale:1.08,textShadow:`0 10px 20px rgba(0, 240, 255, 0.4)`,stagger:.02,ease:`back.out(1.2)`,duration:.35})}),t.addEventListener(`mouseleave`,()=>{K.to(`.brand-letter`,{y:0,rotation:0,scale:1,textShadow:`0 0px 0px rgba(0, 240, 255, 0)`,stagger:.02,ease:`elastic.out(1,0.6)`,duration:.6})})),document.querySelector(`#hero .hero-content h1`)&&(K.set(`.hero-word`,{y:60,opacity:0,rotationZ:8}),K.to(`.hero-word`,{y:0,opacity:1,rotationZ:0,stagger:.15,ease:`back.out(1.8)`,duration:.9,delay:.5}));let n=document.querySelector(`#hero .hero-content p`);n&&(K.set(n,{opacity:0,y:20}),K.to(n,{opacity:1,y:0,duration:.8,delay:1.2,ease:`power2.out`}));let r=document.querySelector(`#hero .btn`);r&&(K.set(r,{opacity:0,y:20}),K.to(r,{opacity:1,y:0,duration:.8,delay:1.4,ease:`power2.out`}),r.addEventListener(`mouseenter`,()=>{K.to(r,{scale:1.1,boxShadow:`0 15px 35px rgba(0, 240, 255, 0.3)`,duration:.3,ease:`power2.out`})}),r.addEventListener(`mouseleave`,()=>{K.to(r,{scale:1,boxShadow:`0 0px 0px rgba(0, 240, 255, 0)`,duration:.5,ease:`elastic.out(1,0.6)`})})),document.querySelectorAll(`.project-card, .skill-box, .certificate-card`).forEach(e=>{K.set(e,{y:0,x:0}),e.addEventListener(`mouseenter`,()=>{K.to(e,{scale:1.05,y:-15,boxShadow:`0 25px 50px rgba(0, 240, 255, 0.25)`,duration:.4,ease:`back.out(1.3)`})}),e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2,a=(t.clientX-r)*.1,o=(t.clientY-i)*.1;K.to(e,{x:a,y:-15+o*.5,rotationY:(t.clientX-r)*.02,rotationX:(i-t.clientY)*.02,duration:.3,overwrite:`auto`})}),e.addEventListener(`mouseleave`,()=>{K.to(e,{scale:1,x:0,y:0,rotationX:0,rotationY:0,boxShadow:`0 5px 15px rgba(0, 0, 0, 0.1)`,duration:.6,ease:`elastic.out(1,0.5)`})})});let i=document.querySelector(`.hero-image-wrapper`);if(i){let e=i.querySelector(`.hero-image`);e&&(K.to(e,{y:-12,scale:1.02,repeat:-1,yoyo:!0,ease:`sine.inOut`,duration:4}),K.to(e,{y:-50,scrollTrigger:{trigger:`#hero`,start:`top top`,end:`bottom top`,scrub:.5,markers:!1}}),e.addEventListener(`mouseenter`,()=>{K.to(e,{filter:`brightness(1.15) drop-shadow(0 20px 40px rgba(0, 240, 255, 0.3))`,duration:.3,overwrite:`auto`})}),e.addEventListener(`mouseleave`,()=>{K.to(e,{filter:`brightness(1) drop-shadow(0 0px 0px rgba(0, 240, 255, 0))`,duration:.5})}))}document.querySelectorAll(`.hoverable`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{K.to(e,{scale:1.08,duration:.3,ease:`back.out(1.2)`,overwrite:`auto`})}),e.addEventListener(`mouseleave`,()=>{K.to(e,{scale:1,duration:.6,ease:`elastic.out(1,0.6)`,overwrite:`auto`})})}),document.querySelectorAll(`.nav-links a`).forEach(e=>{let t=e.querySelector(`.underline`);e.addEventListener(`mouseenter`,()=>{t&&(K.to(t,{width:`100%`,duration:.35,ease:`power3.out`,boxShadow:`0 0 10px rgba(0, 240, 255, 0.5)`}),K.to(e.querySelector(`.nav-text`),{color:`#00f0ff`,textShadow:`0 0 10px rgba(0, 240, 255, 0.4)`,duration:.3}))}),e.addEventListener(`mouseleave`,()=>{t&&(K.to(t,{width:`0%`,duration:.5,ease:`elastic.out(1,0.6)`,boxShadow:`0 0 0px rgba(0, 240, 255, 0)`}),K.to(e.querySelector(`.nav-text`),{color:`var(--text)`,textShadow:`0 0 0px rgba(0, 240, 255, 0)`,duration:.4}))})}),K.utils.toArray(`h2`).forEach(e=>{K.fromTo(e,{opacity:0,x:-50},{opacity:1,x:0,duration:.8,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 80%`,markers:!1}})})}function nc(){let e=document.getElementById(`particle-canvas`);if(!e)return;let t=e.getContext(`2d`,{alpha:!1}),n,r,i=[],a={x:null,y:null,radius:160};function o(){n=window.innerWidth,r=window.innerHeight,e.width=n,e.height=r}window.addEventListener(`resize`,()=>{o(),c()}),window.addEventListener(`mousemove`,e=>{a.x=e.clientX,a.y=e.clientY}),window.addEventListener(`mouseout`,()=>{a.x=null,a.y=null});class s{constructor(){this.x=Math.random()*n,this.y=Math.random()*r,this.size=Math.random()*2+.5,this.baseX=this.x,this.baseY=this.y,this.density=Math.random()*40+5,this.velocityX=(Math.random()-.5)*1.2,this.velocityY=(Math.random()-.5)*1.2}update(){if(this.x+=this.velocityX,this.y+=this.velocityY,(this.x<0||this.x>n)&&(this.velocityX=-this.velocityX),(this.y<0||this.y>r)&&(this.velocityY=-this.velocityY),a.x!=null&&a.y!=null){let e=a.x-this.x,t=a.y-this.y,n=Math.sqrt(e*e+t*t);if(n<a.radius){let r=e/n,i=t/n,o=a.radius,s=(o-n)/o,c=r*s*this.density,l=i*s*this.density;this.x-=c*.5,this.y-=l*.5}}}draw(){t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=`rgba(0, 240, 255, 0.6)`,t.fill()}}function c(){i=[];let e=Math.min(n*r/1e4,200);for(let t=0;t<e;t++)i.push(new s)}function l(){t.fillStyle=`#030305`,t.fillRect(0,0,n,r);for(let e=0;e<i.length;e++){i[e].update(),i[e].draw();for(let n=e;n<i.length;n++){let r=i[e].x-i[n].x,a=i[e].y-i[n].y,o=Math.sqrt(r*r+a*a);o<130&&(t.beginPath(),t.strokeStyle=`rgba(138, 43, 226, ${(1-o/130)*.6})`,t.lineWidth=1,t.moveTo(i[e].x,i[e].y),t.lineTo(i[n].x,i[n].y),t.stroke())}}a.x&&a.y&&(t.beginPath(),t.arc(a.x,a.y,4,0,Math.PI*2),t.fillStyle=`rgba(0, 240, 255, 0.8)`,t.fill(),t.beginPath(),t.arc(a.x,a.y,a.radius,0,Math.PI*2),t.strokeStyle=`rgba(0, 240, 255, 0.05)`,t.stroke()),requestAnimationFrame(l)}o(),c(),l()}var rc=document.querySelector(`#app`);rc.innerHTML=`
  ${e()}
  ${t()}
  ${r()}
  ${i()}
  ${f()}
  ${m()}
  ${h()}
`,document.addEventListener(`DOMContentLoaded`,()=>{document.getElementById(`splash-screen`),g(),nc();let e=document.querySelectorAll(`.fade-up`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add(`visible`):e.target.classList.remove(`visible`)})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});e.forEach(e=>t.observe(e));let n=document.getElementById(`navbar`);window.addEventListener(`scroll`,()=>{window.scrollY>50?n.classList.add(`scrolled`):n.classList.remove(`scrolled`)}),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,function(e){e.preventDefault();let t=this.getAttribute(`href`).substring(1),n=document.getElementById(t);n&&window.scrollTo({top:n.offsetTop,behavior:`smooth`})})}),tc(),d()});