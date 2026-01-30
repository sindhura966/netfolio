import React, { useState, useEffect } from 'react';
import {
  Play,
  Info,
  Search,
  Bell,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Code,
  Cloud,
  Shield,
  Zap,
  Eye,
  Bot,
  Webhook,
  Search as SearchIcon,
  GraduationCap,
  Building2,
  Award,
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data Structure
  const heroData = {
    name: 'Sindhura Appikatla',
    role: 'Software QA Test Engineer',
    summary:
      'Software QA Engineer with 3 years of hands-on experience testing Web and Mobile applications across Finance, SaaS and E-commerce platforms in Agile environments. Strong background in manual, automation, API, and end-to-end testing, with a proven ability to validate complete user journeys, backend data integrity, and CI/CD pipelines.',
    match: '100% Match',
    year: '2026',
    duration: '3 Years Exp',
    tags: [
      'Automation Testing',
      'Manual Testing',
      'API',
      'Cloud',
      'AI Testing',
    ],
  };

  const workExperience = [
    {
      id: 1,
      company: 'Violetis LTD',
      title: 'Software QA Test Engineer',
      period: 'Feb 2025 - Jan 2026',
      location: 'UK',
      color: 'from-red-600 to-red-900',
      highlights: [
        'Selenium Java Framework',
        'Manual Testing',
        'AWS CI/CD',
        'AI/LLM Validation',
        'API Testing',
      ],
      description:
        'Worked as a QA/Test Analyst on fintech and SaaS web platforms, contributing across the full testing lifecycle in Agile environments. Actively practised shift-left testing by reviewing requirements and early design artefacts, including Figma prototypes, to identify usability, logic, and edge-case issues before development. Delivered extensive manual and functional testing across web and mobile, validating end-to-end user journeys, UI behaviour, accessibility (WCAG), and data consistency. Supported technical investigations by validating backend data using AWS and SQL and performing API checks to ensure front-end changes did not impact system integrity. Collaborated closely with developers and product teams using Jira, Azure DevOps, and Zephyr to manage defects, support UAT, and ensure stable, production-ready releases.',
    },
    {
      id: 2,
      company: 'CollabGenics',
      title: 'Junior QA Analyst',
      period: 'Jun 2023 - Jan 2025',
      location: 'UK',
      color: 'from-pink-600 to-blue-900',
      highlights: [
        'E2E Testing',
        'Cross-browser Testing',
        'UAT Support',
        'JIRA',
      ],
      description:
        'Worked as a Junior QA Analyst on e-commerce/transaction-based web applications, executing end-to-end testing of critical user journeys including Account Creation, Checkout, Payments and Refunds. Delivered Functional, Smoke, Sanity and Regression testing in Agile sprints, created and maintained test cases, and supported UAT by preparing test data and assisting stakeholders during validation. Performed cross-browser and responsive testing across Chrome, Firefox, Safari and Edge using Chrome DevTools, and managed defects end-to-end in JIRA with clear repro steps, logs and screenshots. Supported regression cycles by executing pre-written Selenium scripts for core “happy path” flows (Login/Search) and monitoring test results via quality dashboards.',
    },
    {
      id: 3,
      company: 'University of Hertfordshire',
      title: 'MSc Computer Science',
      period: '2022 - 2023',
      location: 'London, UK',
      color: 'from-purple-600 to-purple-900',
      highlights: ['Software Testing', 'Cloud Computing', 'DevOps', 'Cypress'],
      description:
        'Studied software testing disciplines, quality engineering concepts, and gained practical exposure to AWS services and CI/CD pipelines.',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'SaaS + Fintech Platform Manual QA Delivery (E2E | UAT | Regression)',
      category: 'Manual QA',
      color: 'from-indigo-600 to-blue-900',
      tech: [
        'Test Cases',
        'E2E Testing',
        'UAT Support',
        'Regression',
        'Jira',
        'TestRail/Zephyr',
      ],
      description:
        'Led end-to-end manual testing for SaaS and fintech workflows including Sign-up, Login/SSO, 2FA, Profile Management, Search Filters, and form submissions. Executed Functional, Smoke, Sanity and Regression cycles, validated negative scenarios (invalid inputs, session timeouts, corrupted uploads), and supported UAT with stakeholders. Managed defect lifecycle in JIRA with clear reproduction steps, severity/priority justification, and re-testing to confirm fixes across impacted modules.',
    },
    {
      id: 2,
      name: 'Automation Regression Suite (Selenium Java | POM | BDD)',
      category: 'QA Automation',
      color: 'from-green-600 to-teal-900',
      tech: [
        'Selenium WebDriver',
        'Java',
        'POM',
        'Cucumber (BDD)',
        'TestNG',
        'Git',
      ],
      description:
        'Maintained and enhanced Selenium-Java automation framework using Page Object Model (POM) and BDD (Cucumber) to automate stable regression flows like Login, Search, and key user journeys. Reduced repetitive manual regression effort (~20%) by improving reusability, modularity and test stability. Executed automated regression during releases and analysed test failures using logs/screenshots and reports before escalating issues to dev teams.',
    },
    {
      id: 3,
      name: 'REST API Testing (Auth | Payments | JSON Validation)',
      category: 'API Testing',
      color: 'from-cyan-600 to-blue-900',
      tech: [
        'Postman',
        'REST API',
        'Swagger',
        'JSON',
        'Auth Tokens',
        'HTTP Status Codes',
      ],
      description:
        'Validated REST APIs for authentication and payment-related flows using Postman. Designed and executed collections covering positive/negative cases, token-based authentication, error handling and boundary testing. Verified response payloads and contracts using JSON validation and Swagger documentation while ensuring correct HTTP behaviour (200/400/401/403/500) and identifying client vs server-side defects.',
    },
    {
      id: 4,
      name: 'AWS + CI/CD Pipeline Validation (Jenkins | RDS | S3 | CloudWatch)',
      category: 'Cloud & CI/CD QA',
      color: 'from-orange-600 to-red-900',
      tech: [
        'AWS RDS',
        'S3',
        'CloudWatch',
        'Jenkins CI/CD',
        'SQL',
        'Log Analysis',
      ],
      description:
        'Performed backend verification by querying AWS RDS to confirm correct persistence of subscriptions, user data, and payment transactions. Verified secure file storage behaviour in AWS S3 and supported root-cause analysis using AWS CloudWatch logs. Monitored CI/CD pipelines in Jenkins, validated automated test executions, investigated pipeline failures and coordinated findings with DevOps and developers to ensure release readiness.',
    },
    {
      id: 5,
      name: 'Shift-Left QA (Figma Reviews | Acceptance Criteria | Requirements Gaps)',
      category: 'Shift-Left Testing',
      color: 'from-pink-600 to-purple-900',
      tech: [
        'Figma',
        'Acceptance Criteria',
        'User Stories',
        'Traceability Matrix',
        'Risk-Based Testing',
      ],
      description:
        'Practiced shift-left testing by reviewing user stories, acceptance criteria and Figma prototypes early in the sprint to identify logic gaps, usability risks and missing edge cases before development. Contributed to test strategy discussions, maintained traceability coverage against requirements, and applied risk-based testing to prioritise critical journeys such as sign-up, login/security flows and payment-related functionality.',
    },
    {
      id: 6,
      name: 'AI Chatbot Validation (Prompt Injection | Hallucination | RAG Accuracy)',
      category: 'AI / LLM Testing',
      color: 'from-violet-600 to-indigo-900',
      tech: [
        'LLM Testing',
        'Prompt Injection',
        'Adversarial Inputs',
        'RAG Validation',
        'Bias/Hallucination',
      ],
      description:
        'Tested internal AI Co-pilot and chatbot features using adversarial prompts and prompt injection techniques to validate guardrails and detect unsafe/unreliable outputs. Assessed hallucination risk, bias indicators, response consistency and RAG accuracy (retrieval relevance) across real user queries. Verified structured formatting and template consistency under edge cases to ensure AI-generated outputs remained stable and compliant.',
    },
    {
      id: 7,
      name: 'Accessibility + Security Awareness Testing (WCAG | OWASP Top 10)',
      category: 'Quality & Compliance',
      color: 'from-emerald-600 to-green-900',
      tech: ['WCAG', 'Lighthouse', 'Chrome DevTools', 'OWASP Top 10'],
      description:
        'Executed non-functional quality checks including accessibility testing (WCAG basics) such as contrast, labels and keyboard navigation, supported by Lighthouse and browser tools. Conducted security awareness testing aligned to OWASP Top 10 to identify common weaknesses (input validation issues, auth/session risks) during manual QA and release validation.',
    },
  ];

  const skills = [
    {
      name: 'Manual Testing',
      icon: SearchIcon,
      color: 'bg-blue-600',
      desc: 'Test Planning, Execution, UAT',
    },
    {
      name: 'Automation',
      icon: Code,
      color: 'bg-green-600',
      desc: 'Selenium, Java, Playwright',
    },
    {
      name: 'API Testing',
      icon: Webhook,
      color: 'bg-purple-600',
      desc: 'Postman, REST, GraphQL',
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'bg-orange-600',
      desc: 'AWS, Azure, Jenkins, CI/CD',
    },
    {
      name: 'AI/LLM Testing',
      icon: Bot,
      color: 'bg-pink-600',
      desc: 'RAG, Prompt Testing, Bias',
    },
    {
      name: 'Security',
      icon: Shield,
      color: 'bg-red-600',
      desc: 'OWASP, Penetration Basics',
    },
    {
      name: 'Performance',
      icon: Zap,
      color: 'bg-yellow-600',
      desc: 'Lighthouse, Load Testing',
    },
    {
      name: 'Accessibility',
      icon: Eye,
      color: 'bg-teal-600',
      desc: 'WCAG 2.1, Screen Readers',
    },
  ];

  const certifications = [
    {
      name: 'Manual Software Testing Fundamentals',
      issuer: 'Certification',
      year: '2023',
    },
    {
      name: 'Selenium WebDriver with Java',
      issuer: 'Certification',
      year: '2023',
    },
    {
      name: 'Agile & Scrum Fundamentals',
      issuer: 'Certification',
      year: '2023',
    },
  ];

  const scrollRow = (rowId, direction) => {
    const element = document.getElementById(rowId);
    if (element) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#141414]/95 backdrop-blur-md shadow-lg'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl md:text-3xl font-bold tracking-tighter uppercase">
              Netfolio
            </h1>
            <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a
                href="#experience"
                className="hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">
              SA
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="relative h-[85vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 bottom-0" />

        {/* Hero Background Effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-blue-900/20" />

        <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-12 max-w-4xl pt-20">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-red-600 font-bold tracking-wider text-sm uppercase">
              Featured
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-green-400 font-bold text-sm">
              {heroData.match}
            </span>
            <span className="text-gray-400 text-sm">{heroData.year}</span>
            <span className="border border-gray-500 px-1 text-xs text-gray-300">
              {heroData.duration}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight drop-shadow-2xl">
            {heroData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-medium mb-6">
            {heroData.role}
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed line-clamp-3">
            {heroData.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {heroData.tags.map((tag, idx) => (
              <span key={idx} className="text-sm text-gray-300">
                • {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-[#E50914] hover:bg-[#f40612] text-white px-8 py-3 rounded font-bold flex items-center space-x-2 transition transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
            <button className="bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur text-white px-8 py-3 rounded font-bold flex items-center space-x-2 transition">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </header>

      {/* Work Experience Row */}
      <section
        id="experience"
        className="relative pl-4 md:pl-12 py-8 -mt-20 z-30"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-100 hover:text-white transition cursor-pointer flex items-center group">
          Work Experience
          <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1" />
        </h2>

        <div className="relative group">
          <button
            onClick={() => scrollRow('exp-row', 'left')}
            className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            id="exp-row"
            className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-8 pr-12 scroll-smooth"
          >
            {workExperience.map((job) => (
              <div
                key={job.id}
                onClick={() => setShowModal(job)}
                className="flex-none w-[300px] md:w-[400px] aspect-video rounded-md overflow-hidden relative cursor-pointer transform transition duration-300 hover:scale-105 hover:z-10 shadow-lg group/card"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-80`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition" />

                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-1">{job.company}</h3>
                  <p className="text-lg text-gray-200 font-medium mb-2">
                    {job.title}
                  </p>
                  <p className="text-sm text-gray-300 mb-3">{job.period}</p>

                  <div className="flex flex-wrap gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                    {job.highlights.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-black/40 backdrop-blur px-2 py-1 rounded border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Netflix-style hover expansion info */}
                <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition">
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}

            {/* Certification Cards as "Specials" */}
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex-none w-[250px] aspect-video rounded-md overflow-hidden relative cursor-pointer transform transition duration-300 hover:scale-105 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-6 border border-gray-600"
              >
                <Award className="w-12 h-12 text-yellow-500 mb-2 absolute top-4 left-4" />
                <div className="mt-8">
                  <h4 className="font-bold text-lg">{cert.name}</h4>
                  <p className="text-sm text-gray-400">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollRow('exp-row', 'right')}
            className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Projects Row */}
      <section id="projects" className="relative pl-4 md:pl-12 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-100 hover:text-white transition cursor-pointer flex items-center group">
          Featured Projects
          <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1" />
        </h2>

        <div className="relative group">
          <div
            id="proj-row"
            className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-8 pr-12 scroll-smooth"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setShowModal(project)}
                className="flex-none w-[280px] md:w-[320px] min-h-[220px] rounded-md overflow-hidden relative cursor-pointer transform transition duration-300 hover:scale-105 hover:z-10 shadow-lg group/card"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur px-2 py-1 rounded text-gray-200 border border-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="relative h-full p-5 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-gray-300 bg-white/10 px-1.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Row - "My List" style */}
      <section id="skills" className="relative pl-4 md:pl-12 py-8 mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-100 hover:text-white transition cursor-pointer flex items-center group">
          Technical Arsenal
          <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1" />
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 pr-4 md:pr-12">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-110 hover:z-10"
            >
              <div
                className={`absolute inset-0 ${skill.color} opacity-90 group-hover:opacity-100 transition`}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition" />

              <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
                <skill.icon className="w-8 h-8 mb-2 text-white/90 group-hover:scale-110 transition transform" />
                <h4 className="font-bold text-sm leading-tight mb-1">
                  {skill.name}
                </h4>
                <p className="text-[10px] text-white/80 leading-tight opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 px-1">
                  {skill.desc}
                </p>
              </div>

              {/* Netflix style rank number decoration */}
              <div className="absolute -bottom-2 -right-1 text-4xl font-black text-white/10 group-hover:text-white/20 transition">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(null)}
        >
          <div
            className="bg-[#181818] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`h-48 bg-gradient-to-br ${
                showModal.color || 'from-gray-700 to-gray-900'
              } relative`}
            >
              <button
                onClick={() => setShowModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#181818] to-transparent w-full">
                <h2 className="text-3xl font-bold">
                  {showModal.company || showModal.name}
                </h2>
                <p className="text-xl text-gray-300">
                  {showModal.title || showModal.category}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="text-green-400 font-bold">98% Relevant</span>
                <span>{showModal.period || showModal.year || '2023-2026'}</span>
                <span className="border border-gray-600 px-1 rounded text-xs">
                  HD
                </span>
                {showModal.tech && (
                  <span className="border border-gray-600 px-1 rounded text-xs">
                    {showModal.tech.length} Technologies
                  </span>
                )}
              </div>

              <p className="text-gray-300 leading-relaxed">
                {showModal.description || showModal.summary}
              </p>

              {showModal.highlights && (
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-200">Key Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {showModal.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {showModal.tech && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {showModal.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 flex space-x-3">
                <button className="bg-white text-black px-6 py-2 rounded font-bold flex items-center space-x-2 hover:bg-gray-200 transition">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
                <button
                  onClick={() => setShowModal(null)}
                  className="bg-gray-700/50 px-6 py-2 rounded font-bold hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="bg-[#0f0f0f] border-t border-gray-800 mt-12 py-12 px-4 md:px-12"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-red-600 font-bold text-xl mb-4 uppercase tracking-tighter">
              Netfolio
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Software QA Engineering Portfolio
            </p>
            <div className="flex space-x-4">
              <a
                href="www.linkedin.com/in/sindhura-appikatla-03683b2b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Sindhuraappikatla08@gmail.com"
                className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-red-600 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-300 mb-2">Contact</h4>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>London, UK (No Visa Restrictions)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Phone className="w-4 h-4" />
              <span>+44 7887529368</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>Sindhuraappikatla08@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-300 mb-2">Availability</h4>
            <p className="text-green-400 text-sm font-medium mb-2">
              ● Open to Opportunities
            </p>
            <p className="text-gray-500 text-xs">
              Specializing in Automation, Manual Testing, API Validation, and
              AI/LLM Quality Assurance.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs">
          <p>
            &copy; 2026 Sindhura Appikatla. All rights reserved. Built with
            React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
