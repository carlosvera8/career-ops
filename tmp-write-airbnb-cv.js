const fs = require('fs');
const tpl = fs.readFileSync('templates/cv-template.html', 'utf8');

const html = tpl
  .replace('{{LANG}}', 'en')
  .replace('{{PAGE_WIDTH}}', '8.5in')
  .replace('{{NAME}}', 'Misael Carlos Vera')
  .replace('{{PHONE}}', '')
  .replace(/\|\s*<span class="separator">\|<\/span>\s*<span>\{\{PHONE\}\}<\/span>\s*<span class="separator">\|<\/span>/, '')
  .replace('{{EMAIL}}', 'carlosvera888888@gmail.com')
  .replace('{{LINKEDIN_URL}}', 'https://www.linkedin.com/in/carlos-vera9901/')
  .replace('{{LINKEDIN_DISPLAY}}', 'linkedin.com/in/carlos-vera9901')
  .replace('{{PORTFOLIO_URL}}', '#')
  .replace('{{PORTFOLIO_DISPLAY}}', 'github.com/carlosvera8')
  .replace('{{LOCATION}}', 'Chambersburg, PA (Remote)')
  .replace('{{SECTION_SUMMARY}}', 'Professional Summary')
  .replace('{{SUMMARY_TEXT}}', 'ML pipeline architect and agentic AI builder with a proven record of shipping production ML/AI systems at enterprise scale. Designs and deploys end-to-end ML pipelines — batch and real-time inference — on Azure and Databricks from incubation to production. Builds agentic AI orchestration frameworks that convert business signals into autonomous actions: churn reduction agents, multi-source reporting tools, and proactive automation systems. Technical leader who mentors cross-functional engineering teams on ML/AI best practices and translates complex model outputs into measurable business outcomes. Delivered $4M+ in cumulative annual savings through production AI systems, large-scale ML pipelines, and agentic orchestration across enterprise clients.')
  .replace('{{SECTION_COMPETENCIES}}', 'Core Competencies')
  .replace('{{COMPETENCIES}}', [
    'ML Pipeline Architecture',
    'Agentic AI Orchestration',
    'End-to-End AI Product Lifecycle',
    'Batch &amp; Real-Time Inference',
    'Large-Scale ML Systems',
    'Azure &amp; Databricks',
    'PyTorch / Deep Learning',
    'Cross-Functional ML Leadership',
  ].map(t => `<span class="competency-tag">${t}</span>`).join(''))
  .replace('{{SECTION_EXPERIENCE}}', 'Work Experience')
  .replace('{{EXPERIENCE}}', `
<div class="job">
  <div class="job-header"><span class="job-company">Acxiom</span><span class="job-period">9/2025 – Present</span></div>
  <div class="job-role">Principal Data Scientist <span class="job-location">· Conway, AR (Remote)</span></div>
  <ul>
    <li>Architect agentic AI frameworks and ML pipelines for enterprise clients across Azure and Databricks; lead team of five data scientists and engineers.</li>
    <li><strong>Delivered $1.2M in annual savings</strong> leading end-to-end development of a churn-reduction agent — batch and real-time ML pipeline — reducing customer churn 18% and cross-team case-handling efficiency by 35%.</li>
    <li><strong>Generated $500K in annual overhead savings</strong> designing and deploying an autonomous leadership agent that converts business signals into resource allocation decisions without human intervention.</li>
    <li><strong>Cut customer research time 70%</strong> by engineering a multi-database agentic reporting tool with custom UI for Adobe — AI/ML orchestration across multiple data sources delivering structured insights to decision-makers.</li>
    <li><strong>Drove 30% reduction in executive decision-making time</strong> by engineering a production ML pipeline for US Bank from data ingestion through real-time inference.</li>
    <li>Conduct weekly stakeholder reviews translating complex ML outputs into executive-ready insights; enforce high coding standards through 1-on-1s and team-wide engineering reviews.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><span class="job-company">PPL Corporation</span><span class="job-period">11/2022 – 9/2025</span></div>
  <div class="job-role">Senior Data Scientist <span class="job-location">· Allentown, PA (Remote)</span></div>
  <ul>
    <li>Built data science team from 2 to 15 members; established Python coding standards, git strategies, and production ML deployment practices on Azure and Databricks.</li>
    <li><strong>Reduced overhead 20%</strong> deploying a production RAG LLM — batch document ingestion with real-time query serving — to support a legal team through a complex regulatory proceeding.</li>
    <li><strong>Delivered ~$2M in annual savings</strong> productionizing a point cloud convolutional neural network (PC-CNN) batch pipeline classifying vegetation at scale across multi-state infrastructure.</li>
    <li><strong>Cut customer support costs ~$200K annually</strong> leading development of a RAG-enhanced knowledge base with real-time retrieval improving CS response times by ~20%.</li>
    <li><strong>Generated $1M in annual savings</strong> engineering regression models to determine optimal spacer cable configurations, reducing electrical outage frequency.</li>
    <li><strong>Eliminated ~$100K in annual inspection costs</strong> by applying statistical analysis to optimize substation inspection scheduling across multiple states.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><span class="job-company">University of Austin / Great Learning</span><span class="job-period">1/2025 – Present</span></div>
  <div class="job-role">Adjunct AI Professor <span class="job-location">· Austin, TX (Remote)</span></div>
  <ul>
    <li>Instruct graduate-level cohort in Python, statistical testing, ML fundamentals, and applied AI; mentor engineers on ML/AI best practices through curriculum design and office hours.</li>
    <li>Instrumental in successful career transitions for five students into data science roles.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><span class="job-company">TaxAct</span><span class="job-period">Prior</span></div>
  <div class="job-role">Marketing Analytics Analyst II <span class="job-location">· Dallas, TX</span></div>
  <ul>
    <li>Expanded advertiser reach by ~50,000 new customers engineering an algorithmic market segmentation framework to identify and target untapped customer segments at scale.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><span class="job-company">Lockheed Martin</span><span class="job-period">Prior</span></div>
  <div class="job-role">Aerospace Engineer <span class="job-location">· New York, NY</span></div>
  <ul>
    <li>Strengthened system reliability and reduced deployment risk testing inertial navigation systems to validate and improve positional accuracy.</li>
  </ul>
</div>
`)
  .replace('{{SECTION_PROJECTS}}', 'Projects')
  .replace('{{PROJECTS}}', `
<div class="project">
  <span class="project-title">Agentic Churn Reduction Pipeline</span>
  <span class="project-badge">PRODUCTION</span>
  <div class="project-desc">End-to-end ML pipeline — feature engineering, batch and real-time inference, and agentic action layer — identifying at-risk customers and autonomously triggering retention actions. Reduced churn 18%, delivered $1.2M annual savings.</div>
  <div class="project-tech">Python · Azure · Databricks · Agentic Orchestration · Batch &amp; Real-Time Inference</div>
</div>
<div class="project">
  <span class="project-title">Multi-Database Agentic Reporting Tool</span>
  <span class="project-badge">PRODUCTION</span>
  <div class="project-desc">AI/ML orchestration system querying multiple enterprise data sources, synthesizing results, and delivering structured insights via custom UI. Cut customer research time 70%, accelerated executive decisions 40%.</div>
  <div class="project-tech">Python · Multi-source Orchestration · Custom UI · Azure · Agentic AI</div>
</div>
<div class="project">
  <span class="project-title">Point Cloud CNN Vegetation Pipeline (PC-CNN)</span>
  <span class="project-badge">PRODUCTION</span>
  <div class="project-desc">Large-scale batch ML pipeline applying CNNs to 3D point cloud data for automated vegetation classification across thousands of miles of utility infrastructure. ~$2M in annual savings.</div>
  <div class="project-tech">Python · PyTorch · Point Cloud CNN · Azure · Databricks · Batch ML Pipeline</div>
</div>
<div class="project">
  <span class="project-title">Production RAG LLM — Legal Support System</span>
  <span class="project-badge">PRODUCTION</span>
  <div class="project-desc">RAG pipeline with batch document ingestion and real-time query serving enabling rapid legal document analysis during a complex regulatory proceeding. Reduced overhead 20%.</div>
  <div class="project-tech">Python · RAG · LLM · Azure · Databricks · Real-Time Retrieval</div>
</div>
`)
  .replace('{{SECTION_EDUCATION}}', 'Education')
  .replace('{{EDUCATION}}', `
<div class="edu-item">
  <div class="edu-header"><span class="edu-title">Master of Professional Studies in Artificial Intelligence</span><span class="edu-year">Penn State</span></div>
  <div style="font-size:10px;color:#666;">The Pennsylvania State University, University Park, PA</div>
</div>
<div class="edu-item">
  <div class="edu-header"><span class="edu-title">Bachelor of Science in Nuclear Engineering</span><span class="edu-year">Penn State</span></div>
  <div style="font-size:10px;color:#666;">The Pennsylvania State University, University Park, PA</div>
</div>
`)
  .replace('{{SECTION_CERTIFICATIONS}}', 'Certifications')
  .replace('{{CERTIFICATIONS}}', '')
  .replace('{{SECTION_SKILLS}}', 'Skills')
  .replace('{{SKILLS}}', `
<div class="skills-grid">
  <span class="skill-item"><span class="skill-category">Orchestration &amp; Pipelines:</span> Azure, Databricks, Spark, MLOps, CI/CD, DAG-based orchestration, Git, DevOps</span>
  <span class="skill-item"><span class="skill-category">ML Frameworks:</span> PyTorch, Transformers, Neural Networks, XGBoost, Random Forests, Decision Trees, Linear Regression, Bayesian Statistics</span>
  <span class="skill-item"><span class="skill-category">Languages:</span> Python (primary), SQL, PostgreSQL, R, MATLAB</span>
  <span class="skill-item"><span class="skill-category">Cloud &amp; Infra:</span> Microsoft Azure, Databricks, AWS, Docker/containerization</span>
  <span class="skill-item"><span class="skill-category">Data &amp; Analytics:</span> NLP, Machine Vision, Product Analytics, Pandas, NumPy, Experiment Design, Tableau, Power BI</span>
</div>
`);

fs.writeFileSync('/tmp/cv-candidate-airbnb.html', html, 'utf8');
console.log('HTML written OK, size=' + html.length);
