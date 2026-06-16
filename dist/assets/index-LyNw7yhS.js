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
  `}function g(){let e=document.getElementById(`custom-cursor`),t=document.getElementById(`custom-cursor-blob`);if(!e||!t)return;document.addEventListener(`mousemove`,n=>{e.style.left=n.clientX+`px`,e.style.top=n.clientY+`px`,t.style.left=n.clientX+`px`,t.style.top=n.clientY+`px`});let n=()=>{document.querySelectorAll(`.hoverable, a, button`).forEach(t=>{t.addEventListener(`mouseenter`,()=>{e.classList.add(`hover`)}),t.addEventListener(`mouseleave`,()=>{e.classList.remove(`hover`)})})};n(),new MutationObserver(()=>{n()}).observe(document.body,{childList:!0,subtree:!0})}function _(){let e=document.getElementById(`particle-canvas`);if(!e)return;let t=e.getContext(`2d`,{alpha:!1}),n,r,i=[],a={x:null,y:null,radius:160};function o(){n=window.innerWidth,r=window.innerHeight,e.width=n,e.height=r}window.addEventListener(`resize`,()=>{o(),c()}),window.addEventListener(`mousemove`,e=>{a.x=e.clientX,a.y=e.clientY}),window.addEventListener(`mouseout`,()=>{a.x=null,a.y=null});class s{constructor(){this.x=Math.random()*n,this.y=Math.random()*r,this.size=Math.random()*2+.5,this.baseX=this.x,this.baseY=this.y,this.density=Math.random()*40+5,this.velocityX=(Math.random()-.5)*1.2,this.velocityY=(Math.random()-.5)*1.2}update(){if(this.x+=this.velocityX,this.y+=this.velocityY,(this.x<0||this.x>n)&&(this.velocityX=-this.velocityX),(this.y<0||this.y>r)&&(this.velocityY=-this.velocityY),a.x!=null&&a.y!=null){let e=a.x-this.x,t=a.y-this.y,n=Math.sqrt(e*e+t*t);if(n<a.radius){let r=e/n,i=t/n,o=a.radius,s=(o-n)/o,c=r*s*this.density,l=i*s*this.density;this.x-=c*.5,this.y-=l*.5}}}draw(){t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=`rgba(0, 240, 255, 0.6)`,t.fill()}}function c(){i=[];let e=Math.min(n*r/1e4,200);for(let t=0;t<e;t++)i.push(new s)}function l(){t.fillStyle=`#030305`,t.fillRect(0,0,n,r);for(let e=0;e<i.length;e++){i[e].update(),i[e].draw();for(let n=e;n<i.length;n++){let r=i[e].x-i[n].x,a=i[e].y-i[n].y,o=Math.sqrt(r*r+a*a);o<130&&(t.beginPath(),t.strokeStyle=`rgba(138, 43, 226, ${(1-o/130)*.6})`,t.lineWidth=1,t.moveTo(i[e].x,i[e].y),t.lineTo(i[n].x,i[n].y),t.stroke())}}a.x&&a.y&&(t.beginPath(),t.arc(a.x,a.y,4,0,Math.PI*2),t.fillStyle=`rgba(0, 240, 255, 0.8)`,t.fill(),t.beginPath(),t.arc(a.x,a.y,a.radius,0,Math.PI*2),t.strokeStyle=`rgba(0, 240, 255, 0.05)`,t.stroke()),requestAnimationFrame(l)}o(),c(),l()}try{let n=document.querySelector(`#app`);n&&(n.innerHTML=`
      ${e()}
      ${t()}
      ${r()}
      ${i()}
      ${f()}
      ${m()}
      ${h()}
    `)}catch(e){console.error(`Error rendering components:`,e)}var v=document.getElementById(`splash-screen`);v&&(v.classList.add(`hidden`),v.style.display=`none`),document.addEventListener(`DOMContentLoaded`,()=>{try{_(),g();let e=document.querySelectorAll(`.fade-up`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add(`visible`):e.target.classList.remove(`visible`)})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});e.forEach(e=>t.observe(e));let n=document.getElementById(`navbar`);n&&window.addEventListener(`scroll`,()=>{window.scrollY>50?n.classList.add(`scrolled`):n.classList.remove(`scrolled`)}),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,function(e){e.preventDefault();let t=this.getAttribute(`href`).substring(1),n=document.getElementById(t);n&&window.scrollTo({top:n.offsetTop,behavior:`smooth`})})}),d()}catch(e){console.error(`Error during initialization:`,e)}});