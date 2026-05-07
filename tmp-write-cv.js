const fs = require('fs');
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Misael Carlos Vera - CV</title>
<style>
  @font-face { font-family: 'Space Grotesk'; src: url('C:/Users/carlo/OneDrive/Documents/Coding Projects/career-ops/fonts/space-grotesk-latin.woff2') format('woff2'); font-weight: 300 700; }
  @font-face { font-family: 'DM Sans'; src: url('C:/Users/carlo/OneDrive/Documents/Coding Projects/career-ops/fonts/dm-sans-latin.woff2') format('woff2'); font-weight: 100 1000; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: 'DM Sans', sans-serif; font-size: 11px; line-height: 1.5; color: #1a1a2e; background: #ffffff; padding: 0.6in; margin: 0; }
  .page { width: 100%; max-width: 8.5in; margin: 0 auto; }
  .header { margin-bottom: 20px; }
  .header h1 { font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 700; color: #1a1a2e; letter-spacing: -0.02em; margin-bottom: 6px; }
  .header-gradient { height: 2px; background: linear-gradient(to right, hsl(187,74%,32%), hsl(270,70%,45%)); border-radius: 1px; margin-bottom: 10px; }
  .contact-row { display: flex; flex-wrap: wrap; gap: 8px 14px; font-size: 10.5px; color: #555; }
  .contact-row a { color: #555; text-decoration: none; }
  .contact-row .separator { color: #ccc; }
  .section { margin-bottom: 18px; }
  .section-title { font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: hsl(187,74%,32%); border-bottom: 1.5px solid #e2e2e2; padding-bottom: 4px; margin-bottom: 10px; }
  .summary-text { font-size: 11px; line-height: 1.7; color: #2f2f2f; }
  .competencies-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .competency-tag { font-size: 10px; font-weight: 500; color: hsl(187,74%,28%); background: hsl(187,40%,95%); padding: 4px 10px; border-radius: 3px; border: 1px solid hsl(187,40%,88%); }
  .job { margin-bottom: 14px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 4px; }
  .job-company { font-family: 'Space Grotesk', sans-serif; font-size: 12.5px; font-weight: 600; color: hsl(270,70%,45%); }
  .job-period { font-size: 10.5px; color: #777; white-space: nowrap; }
  .job-role { font-size: 11px; font-weight: 600; color: #333; margin-bottom: 6px; }
  .job-location { font-size: 10px; color: #888; }
  .job ul { padding-left: 18px; margin-top: 6px; }
  .job li { font-size: 10.5px; line-height: 1.6; color: #333; margin-bottom: 4px; }
  .job li strong { font-weight: 600; }
  .project { margin-bottom: 12px; }
  .project-title { font-family: 'Space Grotesk', sans-serif; font-size: 11.5px; font-weight: 600; color: hsl(270,70%,45%); }
  .project-badge { font-size: 9px; font-weight: 500; color: hsl(187,74%,32%); background: hsl(187,40%,95%); padding: 1px 6px; border-radius: 2px; margin-left: 6px; }
  .project-desc { font-size: 10.5px; color: #444; margin-top: 3px; line-height: 1.55; }
  .project-tech { font-size: 9.5px; color: #888; margin-top: 3px; }
  .edu-item { margin-bottom: 8px; }
  .edu-title { font-weight: 600; font-size: 11px; color: #333; }
  .edu-org { color: hsl(270,70%,45%); font-weight: 500; }
  .edu-desc { font-size: 10px; color: #666; margin-top: 2px; }
  .skills-grid { display: flex; flex-wrap: wrap; gap: 6px 14px; }
  .skill-item { font-size: 10.5px; color: #444; }
  .skill-category { font-weight: 600; color: #333; }
  .avoid-break, .job, .project, .edu-item { break-inside: avoid; page-break-inside: avoid; }
</style>
</head>
<body>
<div class="page">
  <div class="header avoid-break">
    <h1>Misael Carlos Vera</h1>
    <div class="header-gradient"></div>
    <div class="contact-row">
      <span>carlosvera888888@gmail.com</span>
      <span class="separator">|</span>
      <a href="https://www.linkedin.com/in/misael-carlos-vera/">linkedin.com/in/misael-carlos-vera</a>
      <span class="separator">|</span>
      <a href="https://github.com/carlosvera8">github.com/carlosvera8</a>
      <span class="separator">|</span>
      <span>Chambersburg, PA</span>
    </div>
  </div>
  <div class="section avoid-break">
    <div class="section-title">Professional Summary</div>
    <div class="summary-text">Senior AI architect and technical advisor with a track record of deploying production-grade LLM, RAG pipeline, and agentic AI systems that drive measurable outcomes across regulated enterprise environments. Expert at translating complex AI capabilities into executable architectures: RAG systems that cut legal overhead 20%, autonomous agents generating $1.2M in annual savings, and multi-database agentic tools accelerating executive decisions by 40%. Proven at guiding cross-functional stakeholders from engineers to C-suite, building evaluation frameworks for enterprise AI reliability, and mentoring technical teams at scale. Deep Python expertise with cloud-native delivery on Azure and Databricks.</div>
  </div>
  <div class="section">
    <div class="section-title">Core Competencies</div>
    <div class="competencies-grid">
      <span class="competency-tag">LLM Architecture &amp; Claude API Integration</span>
      <span class="competency-tag">Agentic Workflow Design</span>
      <span class="competency-tag">RAG Pipeline Engineering</span>
      <span class="competency-tag">Enterprise AI Architecture</span>
      <span class="competency-tag">Cloud Platforms (Azure / Databricks)</span>
      <span class="competency-tag">Technical Stakeholder Advisory</span>
      <span class="competency-tag">AI Evaluation Framework Design</span>
      <span class="competency-tag">ML Pipeline Architecture &amp; MLOps</span>
    </div>
  </div>
  <div class="section">
    <div class="section-title">Work Experience</div>
    <div class="job">
      <div class="job-header"><span class="job-company">Acxiom</span><span class="job-period">9/2025 - Present</span></div>
      <div class="job-role">Principal Data Scientist <span class="job-location">/ Conway, AR (Remote)</span></div>
      <ul>
        <li>Conduct weekly customer check-ins with enterprise clients (US Bank, Adobe) — gather requirements, translate AI outputs into executive-ready technical recommendations, and advise on architecture decisions throughout LLM adoption journeys.</li>
        <li><strong>Engineered autonomous leadership agent</strong> with validated decision loops and output evaluation monitoring, generating <strong>$500K in annual overhead savings</strong>.</li>
        <li><strong>Led end-to-end enterprise churn prevention agent</strong> — RAG-enhanced multi-agent pipeline reducing customer churn 18%, improving case-handling efficiency 35%, delivering <strong>$1.2M in annual savings</strong>.</li>
        <li><strong>Deployed multi-database agentic reporting tool with custom UI</strong> for Adobe — reduced research time 70%, accelerated executive decision-making 40%.</li>
        <li>Drove <strong>30% reduction in executive decision-making time</strong> at US Bank by architecting interpretable ML pipeline with C-suite-ready outputs.</li>
        <li>Oversee team of five; manage vendor relationships, enforce coding standards, hold partners accountable to delivery timelines.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header"><span class="job-company">University of Austin / Great Learning</span><span class="job-period">1/2025 - Present</span></div>
      <div class="job-role">Adjunct AI Professor <span class="job-location">/ Austin, TX (Remote)</span></div>
      <ul>
        <li>Design and deliver AI/ML curriculum for approximately 20 students — adapt technical content (Python, LLM fundamentals, applied ML) for learners at varied skill levels including non-technical backgrounds.</li>
        <li>Facilitated career transitions for five students into data science roles; maintained dedicated office hours beyond scheduled lectures.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header"><span class="job-company">PPL Corporation</span><span class="job-period">11/2022 - 9/2025</span></div>
      <div class="job-role">Senior Data Scientist <span class="job-location">/ Allentown, PA</span></div>
      <ul>
        <li>Scaled data science team from 2 to 15 — established git strategies, Python coding standards, and mentorship programs that elevated team-wide proficiency.</li>
        <li><strong>Deployed RAG LLM</strong> supporting legal team through complex multi-state rate case, reducing overhead 20% and cutting customer support costs approximately $200K annually.</li>
        <li><strong>Architected Azure and Databricks cloud solutions</strong> — production ML pipelines and enterprise system integrations across regulated utility infrastructure.</li>
        <li>Generated <strong>$1M in annual savings</strong> via regression models optimizing spacer cable configurations; eliminated approximately $100K in annual inspection costs through statistical substation analysis.</li>
        <li>Fueled <strong>approximately $2M reduction in vegetation management costs</strong> with point cloud CNN automating classification at scale.</li>
        <li>Managed stakeholder relationships across executive, engineering, and operations levels; presented model outputs as actionable insights at all-hands meetings.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header"><span class="job-company">Additional Experience</span><span class="job-period"></span></div>
      <ul>
        <li><strong>Aerospace Engineer, Lockheed Martin</strong> — Validated inertial navigation systems for defense-grade deployments.</li>
        <li><strong>Nuclear Engineer, Exelon</strong> — Radiological analysis of spent nuclear fuel for regulated safety assessment.</li>
        <li><strong>Marketing Analytics Analyst II, TaxAct</strong> — Algorithmic framework expanding advertiser reach by approximately 50,000 new customers.</li>
        <li><strong>Marketing Analyst II, Level Agency</strong> — Doubled ROAS through data-driven cross-channel campaign analytics.</li>
      </ul>
    </div>
  </div>
  <div class="section avoid-break">
    <div class="section-title">Projects</div>
    <div class="project">
      <span class="project-title">Enterprise Churn Prevention Agent</span>
      <span class="project-badge">Multi-Agent / RAG / Production</span>
      <div class="project-desc">End-to-end agentic pipeline with RAG-enhanced decision layer and custom evaluation framework monitoring agent reliability in production. Reduced churn 18%, improved case-handling efficiency 35%, delivered $1.2M in annual savings.</div>
      <div class="project-tech">Python / Azure / LLM orchestration / RAG / Multi-agent workflows / Evaluation design</div>
    </div>
    <div class="project">
      <span class="project-title">Multi-Database Agentic Reporting Tool (Adobe)</span>
      <span class="project-badge">LLM Architecture / Enterprise Integration</span>
      <div class="project-desc">Agentic system with custom UI connecting multiple enterprise databases. Translates complex queries into natural language executive summaries. Cut research time 70%, accelerated decisions 40%.</div>
      <div class="project-tech">Python / Azure / Multi-agent orchestration / Enterprise system integration / Custom UI</div>
    </div>
    <div class="project">
      <span class="project-title">RAG Legal Knowledge Base (PPL Rate Case)</span>
      <span class="project-badge">RAG Pipeline / Regulated Industry</span>
      <div class="project-desc">RAG-enhanced LLM ingesting regulatory documents and case precedents to surface actionable citations for legal team. Reduced overhead 20%, improved CS response times approximately 20%.</div>
      <div class="project-tech">Python / RAG / LLM frameworks / Azure / Databricks / Document processing</div>
    </div>
  </div>
  <div class="section avoid-break">
    <div class="section-title">Education</div>
    <div class="edu-item">
      <div class="edu-title">Master of Professional Studies in Artificial Intelligence</div>
      <div class="edu-desc"><span class="edu-org">The Pennsylvania State University</span> / University Park, PA</div>
    </div>
    <div class="edu-item">
      <div class="edu-title">Bachelor of Science in Nuclear Engineering</div>
      <div class="edu-desc"><span class="edu-org">The Pennsylvania State University</span> / University Park, PA</div>
    </div>
  </div>
  <div class="section avoid-break">
    <div class="section-title">Skills</div>
    <div class="skills-grid">
      <span class="skill-item"><span class="skill-category">AI/ML:</span> LLM Orchestration, RAG Pipelines, Agentic AI, Neural Networks, PyTorch, Transformers, XGBoost, NLP, Computer Vision, MLOps</span>
      <span class="skill-item"><span class="skill-category">Cloud &amp; Data:</span> Microsoft Azure, Databricks, AWS, Spark, SQL, PostgreSQL, CI/CD, Git</span>
      <span class="skill-item"><span class="skill-category">Languages:</span> Python, R, SQL, MATLAB</span>
      <span class="skill-item"><span class="skill-category">Tools:</span> Power BI, Tableau, Pandas, NumPy, Scikit-learn, Hugging Face, Azure ML</span>
      <span class="skill-item"><span class="skill-category">Methods:</span> Evaluation Framework Design, Experiment Design, Bayesian Statistics, Technical Advisory, Agile</span>
    </div>
  </div>
</div>
</body>
</html>`;
const outPath = 'C:/Users/carlo/OneDrive/Documents/Coding Projects/career-ops/output/cv-candidate-anthropic.html';
fs.writeFileSync(outPath, html, 'utf8');
console.log('HTML written OK to', outPath, 'size:', html.length);
