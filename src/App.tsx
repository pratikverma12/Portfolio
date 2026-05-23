import { useState, useEffect, useRef } from 'react'
import './index.css'

/* =========================================================
   PORTFOLIO DATA
   ========================================================= */
const WORDS = ['scalable cloud apps.', 'intelligent ML models.', 'mobile experiences.', 'the future with code.']

const PROJECTS = [
  {
    id: 'hqms',
    category: 'Web Development',
    title: 'HQMS — Hospital Queue Management',
    desc: 'ML-based Hospital Queue Management System to predict future patient counts using ML and streamline queues. React, Java, SpringBoot, Machine Learning, Python.',
    tech: ['React', 'Java', 'SpringBoot', 'Machine Learning', 'Python'],
    link: 'https://github.com/pratikverma12/HQMS',
    img: 'https://placehold.co/600x380/2D1B69/FFF?text=HQMS+Hospital+Queue+System',
  },
  {
    id: 'callchat',
    category: 'Full Stack',
    title: 'Call & Chat Application',
    desc: 'End-to-end encrypted messaging platform with group call, chat, file sharing and screen sharing using WebRTC. Built with Flutter and Node.js.',
    tech: ['Flutter', 'Node.js', 'WebRTC'],
    link: 'https://github.com/pratikverma12/ConferenceApp',
    img: 'https://placehold.co/600x380/1A3A5C/FFF?text=Call+%26+Chat+App',
  },
  {
    id: 'expense',
    category: 'Mobile Application',
    title: 'Expense Tracker',
    desc: 'Application to manage expenses on daily, weekly and monthly basis. Developed using Flutter and Dart.',
    tech: ['Flutter', 'Dart'],
    link: 'https://github.com/pratikverma12/expense_tracker',
    img: 'https://placehold.co/600x380/1B4332/FFF?text=Expense+Tracker',
  },
  {
    id: 'portfolio-web',
    category: 'Web Development',
    title: 'Responsive Portfolio Web Application',
    desc: 'Web Application for Pratik Verma — accessible from any web browser, responsive across every device.',
    tech: ['React', 'TypeScript', 'Vite'],
    link: 'https://github.com/pratikverma12/Portfolio',
    img: 'https://placehold.co/600x380/4A148C/FFF?text=Responsive+Portfolio+Web+App',
  },
    {
    id: 'ai-parking-detector',
    category: 'AI & Web',
    title: 'AI based Parking Space Detection System',
    desc: 'AI based system to detect parking spaces Live with precise location marked on Map',
    tech: ['Python', 'AI', 'React', 'Vite'],
    link: 'https://github.com/pratikverma12/AIParking',
    img: 'https://placehold.co/600x380/112236/FFF?text=AI+based+Parking+Space+Detection+System',
  },
]

const SKILLS = [
  {
    title: 'Frontend Development',
    icon: 'fa-laptop-code',
    items: [{ label: 'Flutter',     symbol: '🟦' }, { label: 'HTML/CSS', symbol: '🌐' }, { label: 'React',  symbol: '⚛️' }, { label: 'Blazor', symbol: '🧩'     }],
  },
  {
    title: 'Backend & Tools',
    icon: 'fa-server',
    items: [{ label: 'SpringBoot', symbol: '🍃' }, { label: '.NET',    symbol: '💜' }, { label: 'MySQL',  symbol: '🐬' }, { label: 'AWS',  symbol: '☁️'  }],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'fa-brain',
    items: [{ label: 'Python', symbol: '🐍' }, { label: 'TensorFlow', symbol: '🔬' }],
  },
]

const WORK_EXPERIENCE = [
  {
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    date: '2025 — Present',
    desc: 'Working as a Full Stack Developer on .NET and Blazor. Building and delivering applications with the latest technologies.',
    tags: ['C#', '.Net', 'Blazor', 'AWS'],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    date: '2024 — 2025',
    desc: 'Worked on various web and mobile app development projects using Flutter, React and Node.js. Delivered end-to-end solutions for multiple clients.',
    tags: ['Flutter', 'Dart', 'React', 'Node.js'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Bhabha Atomic Research Centre',
    date: 'Summer 2024',
    desc: 'Developed a Flutter-based indigenous, cross-platform and responsive video-conferencing application for day-to-day secured interactions using WebRTC.',
    tags: ['Dart', 'Flutter', 'NodeJS', 'WebRTC'],
  },
]

const EDUCATION = [
  {
    title: 'Bachelor of Technology — Computer Science & Engineering',
    company: 'G H Raisoni College of Engineering, Nagpur',
    date: '2020 — 2024',
    desc: 'Active member of Student Council, President of CSE Department, and CSR work with NSS.',
    tags: ['Computer Science & Engineering'],
  },
  {
    title: 'Higher Secondary — Science (Electronics)',
    company: 'Hislop Junior College, Nagpur',
    date: '2018 — 2020',
    desc: 'Completed HSC (12th grade) with Science stream specializing in Electronics.',
  },
  {
    title: 'Secondary — General',
    company: 'Modern School, Nagpur',
    date: '2017 — 2018',
    desc: 'Completed SSC (10th grade) with Science, Mathematics and Social Science.',
  },
]

/* =========================================================
   HOOKS
   ========================================================= */
function Preloader() {
  useEffect(() => {
    const t = setTimeout(() => document.getElementById('preloader')?.classList.add('hidden'), 900)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="preloader" id="preloader" role="status" aria-label="Loading">
      <div className="preloader-inner">
        <div className="preloader-ring" />
        <span className="preloader-text">P</span>
      </div>
    </div>
  )
}

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = [], mouse = { x: null, y: null }, raf
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })
    class P {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height
        this.size = Math.random()*2.5+0.5
        this.sx=(Math.random()-0.5)*0.4; this.sy=(Math.random()-0.5)*0.4
        this.opacity=Math.random()*0.4+0.1
        this.color=['108,92,231','162,155,254','116,185,255','0,206,201','253,121,168'][Math.floor(Math.random()*5)]
      }
      update() {
        this.x+=this.sx; this.y+=this.sy
        if(mouse.x!=null){const d=Math.hypot(mouse.x-this.x,mouse.y-this.y);if(d<120){this.x-=(mouse.x-this.x)*0.008;this.y-=(mouse.y-this.y)*0.008}}
        if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height) this.reset()
      }
      draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=`rgba(${this.color},${this.opacity})`;ctx.fill()}
    }
    for(let i=0;i<Math.min(80,Math.floor(window.innerWidth/18));i++) particles.push(new P())
    const connect=()=>{for(let a=0;a<particles.length;a++)for(let b=a+1;b<particles.length;b++){const dx=particles[a].x-particles[b].x,dy=particles[a].y-particles[b].y,d=Math.hypot(dx,dy);if(d<130){ctx.beginPath();ctx.strokeStyle=`rgba(108,92,231,${0.06*(1-d/130)})`;ctx.lineWidth=0.5;ctx.moveTo(particles[a].x,particles[a].y);ctx.lineTo(particles[b].x,particles[b].y);ctx.stroke()}}}
    const anim=()=>{ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw()});connect();raf=requestAnimationFrame(anim)}
    anim()
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize)}
  },[])
  return <canvas id="particleCanvas" ref={canvasRef} aria-hidden="true" />
}

function useTypewriter(words, elRef) {
  useEffect(() => {
    let i=0,ci=0,deleting=false
    const el=elRef.current
    if(!el)return
    const loop=()=>{
      const w=words[i]
      el.textContent=deleting?w.substring(0,ci--):w.substring(0,ci++)
      let delay=deleting?30:70
      if(!deleting&&ci>w.length){delay=1800;deleting=true}
      if(deleting&&ci<0){deleting=false;i=(i+1)%words.length;delay=300}
      return setTimeout(loop,delay)
    }
    const id=loop()
    return()=>clearTimeout(id)
  },[words,elRef])
}

function useDarkMode(){
  const [dark,setDark]=useState(()=>document.documentElement.classList.contains('dark')||window.matchMedia('(prefers-color-scheme:dark)').matches)
  useEffect(()=>{dark?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark')},[dark])
  return[dark,setDark]
}

/* =========================================================
   COMPONENTS
   ========================================================= */
/* ── NAVBAR ── */
function Navbar() {
  const [open,setOpen]=useState(false)
  const [darkMode,setDarkMode]=useDarkMode()

  useEffect(()=>{const close=()=>setOpen(false);document.addEventListener('click',close);return()=>document.removeEventListener('click',close)},[])

  const scrollHandler=()=>{
    document.getElementById('navbar')?.classList.toggle('scrolled',window.scrollY>80)
    document.getElementById('backToTop')?.classList.toggle('visible',window.scrollY>500)
  }
  useEffect(()=>{window.addEventListener('scroll',scrollHandler);return()=>window.removeEventListener('scroll',scrollHandler)},[])

  return(
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={e=>e.preventDefault()}>
          <span className="logo-bracket">&lt;</span>Pratik<span className="logo-dot">.</span>dev<span className="logo-bracket">/&gt;</span>
        </a>
        <div className="nav-right">
          <button className="theme-toggle" id="themeToggle" onClick={e=>{e.stopPropagation();setDarkMode(d=>!d)}} aria-label="Toggle dark mode" title={darkMode?'Light mode':'Dark mode'}>
            <i className={`fas ${darkMode?'fa-sun':'fa-moon'}`} />
          </button>
          <button className={`nav-toggle ${open?'active':''}`} id="navToggle" aria-label="Toggle navigation" onClick={e=>{e.stopPropagation();setOpen(p=>!p)}}>
            <span className="hamburger-line"/><span className="hamburger-line"/><span className="hamburger-line"/>
          </button>
        </div>
        <ul className={`nav-menu ${open?'active':''}`} id="navMenu" onClick={e=>e.stopPropagation()}>
          <li><a href="#home"      className="nav-link" onClick={()=>setOpen(false)}>Home</a></li>
          <li><a href="#about"     className="nav-link" onClick={()=>setOpen(false)}>About</a></li>
          <li><a href="#experience" className="nav-link" onClick={()=>setOpen(false)}>Experience</a></li>
          <li><a href="#skills"    className="nav-link" onClick={()=>setOpen(false)}>Skills</a></li>
          <li><a href="#projects"  className="nav-link" onClick={()=>setOpen(false)}>Projects</a></li>
          <li><a href="#contact"   className="nav-link" onClick={()=>setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

/* ── ACTIVE SECTION HIGHLIGHT ── */
function ActiveNavHighlight(){
  useEffect(()=>{
    const links=document.querySelectorAll('.nav-link')
    const sections=document.querySelectorAll('section[id]')
    const handler=()=>{
      const sy=window.scrollY+120
      sections.forEach(sec=>{
        const el=sec as HTMLElement
        if(sy>=el.offsetTop&&sy<el.offsetTop+el.offsetHeight)
          links.forEach(l=>l.classList.toggle('active',(l as HTMLAnchorElement).getAttribute('href')===`#${el.id}`))
      })
    }
    window.addEventListener('scroll',handler)
    return()=>window.removeEventListener('scroll',handler)
  },[])
  return null
}

/* ── HERO ── */
function Hero(){
  const typeRef=useRef(null)
  useTypewriter(WORDS,typeRef)
  const socials=[
    {icon:'fab fa-github',       href:'https://github.com/pratikverma12',         label:'GitHub'},
    {icon:'fab fa-linkedin-in',  href:'https://www.linkedin.com/in/pratikverma12',label:'LinkedIn'},
    {icon:'fab fa-instagram',    href:'https://www.instagram.com/pratikverma12',  label:'Instagram'},
    {icon:'fas fa-code',         href:'https://www.hackerrank.com/profile/pratikverma12',label:'HackerRank'},
    {icon:'fas fa-envelope',     href:'mailto:mailtopratikverma@gmail.com',      label:'Email'},
  ]
  return(
    <section id="home" className="hero">
      <div className="hero-bg-shapes"><div className="shape shape-1"/><div className="shape shape-2"/><div className="shape shape-3"/></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge reveal-up"><span className="badge-dot"/> Available for opportunities</div>
          <h1 className="hero-title reveal-up">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Pratik Arvind<br/>Verma</span>
          </h1>
          <div className="hero-typewriter reveal-up">
            <span className="typewriter-prefix">I build</span>
            <span className="typewriter-text" ref={typeRef}/>
            <span className="typewriter-cursor">|</span>
          </div>
          <p className="hero-description reveal-up">
            Systems Engineer at TCS • Software Developer, Cloud Practitioner — building intelligent cloud-native applications
            with .NET, Blazor, Flutter and Machine Learning.
          </p>
          <div className="hero-cta reveal-up">
            <a href="#projects" className="btn btn-primary"><span>View My Work</span><i className="fas fa-arrow-right"/></a>
            <a href="#contact" className="btn btn-ghost"><span>Let's Talk</span></a>
          </div>
          <div className="hero-socials reveal-up">
            {socials.map(s=>(
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <i className={s.icon}/>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal-up">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"/>
            <div className="hero-image-border"/>
             {/* ══ REPLACE YOUR PROFILE PHOTO HERE ══
                 1. Save your photo as:  public/avtar.jpeg
                 2. Change src below from DiceBear URL to:  /avtar.jpeg
             */}
             <img src="/avtar.jpeg" alt="Pratik Arvind Verma" className="hero-image"
                  onError={(e)=>{const el=e.target as HTMLImageElement;el.src='https://api.dicebear.com/9.x/avataaars/svg?seed=PratikVerma&backgroundColor=b6e3f4'}}/>
          </div>
          <div className="hero-floating-card card-1"><i className="fas fa-code"/><span>Developer</span></div>
          <div className="hero-floating-card card-2"><i className="fas fa-cloud"/><span>Cloud</span></div>
          <div className="hero-floating-card card-3"><i className="fas fa-robot"/><span>ML</span></div>
        </div>
      </div>
      <div className="scroll-indicator"><div className="scroll-mouse"><div className="scroll-wheel"/></div><span>Scroll Down</span></div>
    </section>
  )
}

/* ── ABOUT ── */
function About(){
  const info=[
    {icon:'fas fa-map-marker-alt',label:'Location',value:'Nagpur &amp; Mumbai, India'},
    {icon:'fas fa-envelope',       label:'Email',   value:'mailtopratikverma@gmail.com'},
    {icon:'fas fa-building',       label:'Company', value:'Tata Consultancy Services'},
    {icon:'fas fa-graduation-cap', label:'Degree',  value:'B.Tech CSE (2020–2024)'},
  ]
  return(
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">01. About Me</span>
          <h2 className="section-title">Get to know me</h2>
          <div className="section-line"/>
        </div>
        <div className="about-grid">
          <div className="about-image-col reveal-left">
            <div className="about-image-container">
              <div className="about-image-frame">
                 {/* ══ REPLACE YOUR PROFILE PHOTO HERE ══
                     1. Save your photo as:  public/avtar.jpeg
                     2. Change src below from DiceBear URL to:  /avtar.jpeg
                 */}
                 <img src="/avtar.jpeg" alt="Pratik Arvind Verma"
                      onError={(e)=>{const el=e.target as HTMLImageElement;el.src='https://api.dicebear.com/9.x/avataaars/svg?seed=PratikVerma&backgroundColor=d1d4f9'}}/>
              </div>
              <div className="about-experience-badge">
                <span className="exp-number">2+</span>
                <span className="exp-text">Years<br/>Experience</span>
              </div>
            </div>
          </div>
          <div className="about-content-col reveal-right">
            <h3 className="about-subtitle">Turning complex problems into elegant, scalable solutions</h3>
            <p className="about-text">
              I'm a Systems Engineer at Tata Consultancy Services with a passion for machine learning and full-stack development.
              A B.Tech CSE graduate from <strong>G H Raisoni College of Engineering, Nagpur</strong>, I specialise in Full-Stack
              Development with <strong>.NET</strong> and <strong>Blazor</strong> while continuously exploring the frontiers of
              <strong> AI and ML</strong>.
            </p>
            <p className="about-text">
              I believe in the power of technology to solve real-world problems. I've built everything from an indigenous
              video-conferencing platform at <strong>BARC</strong> to ML-powered hospital queue management systems and
              cross-platform mobile apps — always with cloud-first thinking.
            </p>
            <div className="about-info-grid">
              {info.map(item=>(
                <div key={item.label} className="about-info-item">
                  <i className={item.icon}/>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value" dangerouslySetInnerHTML={{__html:item.value}}/>
                  </div>
                </div>
              ))}
            </div>
            <a href="mailto:mailtopratikverma@gmail.com" className="btn btn-primary"><i className="fas fa-download"/><span>Download Resume</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── JOURNEY (Experience + Education) ── */
function Journey(){
  const [activeTab, setActiveTab] = useState('work')

  /** After every tab switch, force .revealed on items inside the now-visible active panel.
   *  The IntersectionObserver inside ScrollReveal sometimes fires too early
   *  (before React applies display:block on the active panel), leaving items at opacity:0. */
  useEffect(()=>{
    const panel=document.querySelector('.tab-panel.active .reveal-up:not(.revealed)')
    if(!panel) return
    const items=document.querySelectorAll('.tab-panel.active .reveal-up:not(.revealed)')
    items.forEach(i=>i.classList.add('revealed'))
  },[activeTab])

  const TimelineItem=({data})=>(
    <div className="timeline-item reveal-up" key={data.title}>
      <div className="timeline-marker"><div className="marker-dot"/></div>
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{data.title}</h3>
            <p className="timeline-company">{data.company}</p>
          </div>
          <span className="timeline-date">{data.date}</span>
        </div>
        <p className="timeline-desc">{data.desc}</p>
        {data.tags?.length>0&&(
          <div className="timeline-tags">{data.tags.map(t=> <span key={t}>{t}</span>)}</div>
        )}
      </div>
    </div>
  )

  return(
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">02. Experience &amp; Education</span>
          <h2 className="section-title">My Journey</h2>
          <div className="section-line"/>
        </div>
        <div className="experience-tabs reveal-up">
          <button
            className={`tab-btn ${activeTab==='work'?'active':''}`}
            onClick={()=>setActiveTab('work')}
          >
            <i className="fas fa-briefcase"/> Work
          </button>
          <button
            className={`tab-btn ${activeTab==='education'?'active':''}`}
            onClick={()=>setActiveTab('education')}
          >
            <i className="fas fa-graduation-cap"/> Education
          </button>
        </div>
        <div className="experience-content">
          <div className={`tab-panel ${activeTab==='work'?'active':''}`} id="work">
            <div className="timeline">{WORK_EXPERIENCE.map(t=><TimelineItem key={t.title} data={t}/>)}</div>
          </div>
          <div className={`tab-panel ${activeTab==='education'?'active':''}`} id="education">
            <div className="timeline">{EDUCATION.map(t=><TimelineItem key={t.title} data={t}/>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── SKILLS ── */
function Skills(){
  const all=SKILLS.map((cat,i)=>(
    <div key={cat.title} className={`skill-category reveal-up`} style={{transitionDelay:`${i*60}ms`}}>
      <h3 className="category-title"><i className={cat.icon}/> {cat.title}</h3>
      <div className="skill-items">
        {cat.items.map(item=>(
          <div key={item.label} className="skill-item">
            <span className="skill-emoji" role="img" aria-label={item.label}>{item.symbol}</span>
            <span className="skill-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  ))
  return(
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">03. Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <div className="section-line"/>
        </div>
        <div className="skills-categories">{all}</div>
      </div>
    </section>
  )
}

/* ── PROJECTS ── */
function Projects(){
  return(
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">04. Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <div className="section-line"/>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p,i)=>(
            <div key={p.id} className={`project-card ${i===0?'featured':''} reveal-up`}>
              <div className="project-image">
                <img src={p.img} alt={p.title} loading="lazy"/>
                <div className="project-overlay">
                  {p.link!=='#'
                    ?<a href={p.link} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${p.title}`}><i className="fas fa-external-link-alt"/></a>
                    :<span className="project-link" aria-label={`View ${p.title}`}><i className="fas fa-external-link-alt"/></span>
                  }
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{p.category}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CONTACT ── */
function Contact(){
  const [toast,setToast]=useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const f=e.target
    const name=f.name.value,email=f.email.value,subj=f.subject.value,msg=f.message.value
    window.location.href=
      `mailto:mailtopratikverma@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(`Name:${name}\nEmail:${email}\n\nMessage:\n${msg}`)}`
    setToast('Opening your email client…')
    f.reset()
    setTimeout(()=>setToast(null),3000)
  }
  const cards=[
    {icon:'fas fa-envelope',     label:'Email',     text:'mailtopratikverma@gmail.com',               href:'mailto:mailtopratikverma@gmail.com'},
    {icon:'fas fa-map-marker-alt',label:'Location', text:'Nagpur and Mumbai, India',                href:'#'},
    {icon:'fab fa-linkedin-in',  label:'LinkedIn',  text:'linkedin.com/in/pratikverma12',             href:'https://www.linkedin.com/in/pratikverma12'},
    {icon:'fab fa-github',       label:'GitHub',    text:'github.com/pratikverma12',                  href:'https://github.com/pratikverma12'},
    {icon:'fas fa-trophy',       label:'HackerRank',text:'hackerrank.com/pratikverma12',              href:'https://www.hackerrank.com/profile/pratikverma12'},
  ]
  return(
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">05. Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line"/>
          <p className="section-desc">Have a project or want to collaborate? Feel free to reach out!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-col reveal-left">
            {cards.map(c=>(
              <div key={c.label} className="contact-card">
                <div className="contact-card-icon"><i className={c.icon}/></div>
                <div className="contact-card-content">
                  <h3>{c.label}</h3>
                  <a href={c.href} target={c.href.startsWith('mailto')||c.href==='#'?undefined:'_blank'} rel="noreferrer">{c.text}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form-col reveal-right">
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Name</label>
                  <input type="text" id="contactName" name="name" placeholder="Your full name" required autoComplete="name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="contactEmail">Email</label>
                  <input type="email" id="contactEmail" name="email" placeholder="Your email address" required autoComplete="email"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" id="contactSubject" name="subject" placeholder="What is this about?" required/>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" name="message" rows="5" placeholder="Tell me about your project…" required/>
              </div>
              <button type="submit" className="btn btn-primary btn-full"><span>Send Message</span><i className="fas fa-paper-plane"/></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer(){
  useEffect(()=>{const el=document.getElementById('footerYear');if(el)el.textContent=String(new Date().getFullYear())},[])
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-bracket">&lt;</span>Pratik<span className="logo-dot">.</span>dev<span className="logo-bracket">/&gt;</span>
            </a>
            <p>Transforming complex problems into elegant, scalable code — one commit at a time.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Find Me On</h4>
            <div className="footer-social-links">
              <a href="https://github.com/pratikverma12" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"/></a>
              <a href="https://www.linkedin.com/in/pratikverma12" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"/></a>
              <a href="https://www.instagram.com/pratikverma12" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"/></a>
              <a href="https://www.hackerrank.com/profile/pratikverma12" target="_blank" rel="noreferrer" aria-label="HackerRank"><i className="fas fa-code"/></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>COPYRIGHT &copy; <span id="footerYear"></span> : Pratik Arvind Verma.
            <br/>Made with <i className="fas fa-heart"/> by Pratik Arvind Verma.</p>
        </div>
      </div>
    </footer>
  )
}

/* ── OTHER UTILITIES ── */
function BackToTop(){useEffect(()=>{const b=document.getElementById('backToTop');b?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));return()=>b?.removeEventListener('click',()=>{})},[]);return<button className="back-to-top" id="backToTop" aria-label="Back to top"><i className="fas fa-arrow-up"/></button>}

function CustomCursor(){
  useEffect(()=>{
    if(window.innerWidth<=968)return
    const dot=document.getElementById('cursorDot'),ring=document.getElementById('cursorRing')
    if(!dot||!ring)return
    let mx=0,my=0,rx=0,ry=0
    const TRAIL=8,trails=[]
    for(let i=0;i<TRAIL;i++){const t=document.createElement('div');t.className='cursor-trail';document.body.appendChild(t);trails.push({el:t,x:0,y:0})}
    const onMove=(e)=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'}
    document.addEventListener('mousemove',onMove)
    const anim=()=>{
      rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12
      ring.style.left=rx+'px';ring.style.top=ry+'px'
      let px=mx,py=my
      trails.forEach((t,i)=>{
        const s=0.25-i*0.02
        t.x+=(px-t.x)*s;t.y+=(py-t.y)*s
        t.el.style.left=t.x+'px';t.el.style.top=t.y+'px'
        t.el.style.opacity=String(0.4-i*0.045)
        t.el.style.width=(5-i*0.4)+'px';t.el.style.height=(5-i*0.4)+'px'
        px=t.x;py=t.y
      })
      requestAnimationFrame(anim)
    }
    anim()
    const onEnter=()=>{dot.classList.add('hovering');ring.classList.add('hovering')}
    const onLeave=()=>{dot.classList.remove('hovering');ring.classList.remove('hovering')}
    document.querySelectorAll('a,button,.project-card,.skill-item,.contact-card,.tab-btn').forEach(el=>{el.addEventListener('mouseenter',onEnter);el.addEventListener('mouseleave',onLeave)})
    return()=>{document.removeEventListener('mousemove',onMove);trails.forEach(t=>t.el.remove())}
  },[])
  return<><div className="cursor-dot" id="cursorDot"/><div className="cursor-ring" id="cursorRing"/></>
}

/* ── SCROLL REVEAL ── */
function ScrollReveal(){
  useEffect(()=>{
    const obs=new IntersectionObserver(
      entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('revealed')})},
      {threshold:0.1,rootMargin:'0px 0px -60px 0px'}
    )
    document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el=>obs.observe(el))
    return()=>obs.disconnect()
  },[])
  return null
}

function SmoothScroll(){
  useEffect(()=>{
    const handler=(e:MouseEvent)=>{
      const target=(e.target as HTMLElement).closest('a[href^="#"]')
      if(!target)return
      e.preventDefault()
      const id=(target as HTMLAnchorElement).getAttribute('href')
      const sec=document.querySelector(id||'') as HTMLElement|null
      sec?.scrollIntoView({behavior:'smooth'})
    }
    document.addEventListener('click',handler as any)
    return()=>document.removeEventListener('click',handler as any)
  },[])
  return null
}

/* =========================================================
   THEME TRANSITION HELPERS
   ========================================================= */
function BodyThemeClass(){
  useEffect(()=>{
    // guarantee initial theme class on mount
    if(document.documentElement.classList.contains('dark'))
      document.body.classList.add('dark')
    else
      document.body.classList.remove('dark')
  },[])
  return null
}

/* =========================================================
   ROOT
   ========================================================= */
export default function App(){
  const [darkMode]=useDarkMode()
  useEffect(()=>{const el=document.getElementById('footerYear');if(el)el.textContent=String(new Date().getFullYear())},[])

  return(
    <>
      <Preloader/>
      <ParticleCanvas/>
      <CustomCursor/>
      <BodyThemeClass/>
      <ScrollReveal/>
      <ActiveNavHighlight/>
      <SmoothScroll/>
      <Navbar/>
      <Hero/>
      <About/>
      <Journey/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  )
}
