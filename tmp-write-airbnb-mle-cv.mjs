import { writeFileSync } from 'fs';

const fontsBase = 'C:/Users/carlo/OneDrive/Documents/Coding Projects/career-ops/fonts';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Misael Carlos Vera - CV</title>
<style>
  @font-face { font-family: 'Space Grotesk'; src: url('${fontsBase}/space-grotesk-latin.woff2') format('woff2'); font-weight: 300 700; }
  @font-face { font-family: 'DM Sans'; src: url('${fontsBase}/dm-sans-latin.woff2') format('woff2'); font-weight: 100 1000; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: 'DM Sans', sans-serif; font-size: 11px; line-height: 1.5; color: #1a1a2e; background: #ffffff; }
  .page { width: 100%; max-width: 8.5in; margin: 0 auto; padding: 0.5in 0.6in 0.4in 0.6in; }
  .header { margin-bottom: 18px; }
  .header h1 { font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700; color: #1a1a2e; letter-spacing: -0.02em; margin-bottom: 6px; }
  .header-gradient { height: 2px; background: linear-gradient(to right, hsl(187,74%,32%), hsl(270,70%,45%)); border-radius: 1px; margin-bottom: 8px; }
  .contact-row { display: flex; flex-wrap: wrap; gap: 6px 12px; font-size: 10.5px; color: #555; }
  .contact-row a { color: #555; text-decoration: none; }
  .sep { color: #ccc; }
  .section { margin-bottom: 14px; }
  .section-title { font-family: 'Space Grotesk', sans-serif; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: hsl(187,74%,32%); border-bottom: 1.5px solid #e2e2e2; padding-bottom: 4px; margin-bottom: 9px; }
  .summary-text { font-size: 11px; line-height: 1.65; color: #2f2f2f; }
  .competencies-grid { display: flex; flex-wrap: wrap; gap: 6px; }
  .competency-tag { font-size: 10px; font-weight: 500; color: hsl(187,74%,28%); background: hsl(187,40%,95%); padding: 3px 9px; border-radius: 3px; border: 1px solid hsl(187,40%,88%); }
  .job { margin-bottom: 12px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 2px; }
  .job-company { font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 600; color: hsl(270,70%,45%); }
  .job-period { font-size: 10px; color: #777; white-space: nowrap; }
  .job-role { font-size: 10.5px; font-weight: 600; color: #333; margin-bottom: 4px; }
  .job-location { font-size: 10px; color: #888; }
  .job ul { padding-left: 15px; margin-top: 3px; }
  .job li { font-size: 10.5px; line-height: 1.55; color: #333; margin-bottom: 3px; }
  .job li strong { font-weight: 600; }
  .project { margin-bottom: 10px; }
  .project-title { font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 600; color: hsl(270,70%,45%); }
  .project-badge { font-size: 9px; font-weight: 500; color: hsl(187,74%,32%); background: hsl(187,40%,95%); padding: 1px 6px; border-radius: 2px; margin-left: 6px; }
  .project-desc { font-size: 10.5px; color: #444; margin-top: 2px; line-height: 1.5; }
  .project-tech { font-size: 9.5px; color: #888; margin-top: 2px; }
  .edu-item { margin-bottom: 7px; }
  .edu-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .edu-title { font-weight: 600; font-size: 10.5px; color: #333; }
  .edu-org { color: hsl(270,70%,45%); font-weight: 500; }
  .edu-year { font-size: 10px; color: #777; white-space: nowrap; }
  .edu-desc { font-size: 10px; color: #666; margin-top: 1px; }
  .skills-grid { display: flex; flex-direction: column; gap: 4px; }
  .skill-item { font-size: 10.5px; color: #444; }
  .skill-category { font-weight: 600; color: #333; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
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
      <span class="sep">|</span>
      <a href="https://www.linkedin.com/in/carlos-vera9901/">linkedin.com/in/carlos-vera9901</a>
      <span class="sep">|</span>
      <span>Chambersburg, PA</span>
      <span class="sep">|</span>
      <a href="https://github.com/carlosvera8">github.com/carlosvera8</a>
    </div>
  </div>

  <div class="section avoid-break">
    <div class="section-title">Professional Summary</div>
    <div class="summary-text">ML engineer and data scientist with a track record of architecting, productionizing, and operating end-to-end ML pipelines at scale on Azure and Databricks. Built production ML systems spanning point cloud CNNs, RAG pipelines, and multi-agent orchestration frameworks -- delivering $5M+ in documented business impact. Deep Python and PyTorch practitioner with strong data engineering skills (ETL pipelines, Spark, CI/CD). Experienced leading cross-functional ML pipeline development with software engineers, product managers, and operations teams. MPS Artificial Intelligence, Penn State. Every model ships to production, gets monitored, and drives measurable outcomes.</div>
  </div>

  <div class="section">
    <div class="section-title">Core Competencies</div>
    <div class="competencies-grid">
      <span class="competency-tag">ML Pipeline Architecture</span>
      <span class="competency-tag">Model Productionization &amp; Serving</span>
      <span class="competency-tag">Python &middot; PyTorch &middot; TensorFlow</span>
      <span class="competency-tag">Spark &middot; Databricks &middot; Azure ML</span>
      <span class="competency-tag">ETL Pipeline Development</span>
      <span class="competency-tag">MLOps &amp; CI/CD</span>
      <span class="competency-tag">Large-Scale Unstructured Data</span>
      <span class="competency-tag">Cross-Functional Technical Leadership</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Work Experience</div>

    <div class="job">
      <div class="job-header"><span class="job-company">Acxiom</span><span class="job-period">Sept 2025 - Present</span></div>
      <div class="job-role">Principal Data Scientist <span class="job-location">&middot; Conway, AR (Remote)</span></div>
      <ul>
        <li><strong>Architect and deploy end-to-end ML pipelines and serving infrastructure</strong> on Azure and Databricks, owning productionization from prototype through live operation for enterprise clients including US Bank and Adobe.</li>
        <li>Designed and shipped a <strong>multi-source data retrieval service with ML-powered recommendations and custom product UI</strong> for Adobe -- reduced research time by <strong>70%</strong>, executive decision-making latency by <strong>40%</strong>.</li>
        <li>Engineered autonomous leadership agent (LLM orchestration + production serving layer) -- eliminated <strong>$500K in annual overhead</strong>.</li>
        <li>Led end-to-end ML pipeline for churn prediction -- <strong>$1.2M annual savings</strong>, 18% churn reduction, 35% efficiency gain.</li>
        <li>Drove <strong>30% reduction in executive decision-making time</strong> for US Bank via automated ML pipeline with real-time model outputs.</li>
        <li>Lead team of 5 data scientists and engineers; enforce ML engineering standards, foster IC growth.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header"><span class="job-company">PPL Corporation</span><span class="job-period">Nov 2022 - Sept 2025</span></div>
      <div class="job-role">Senior Data Scientist <span class="job-location">&middot; Allentown, PA</span></div>
      <ul>
        <li><strong>Trained, deployed, and operated point cloud CNN models in production</strong> for large-scale vegetation classification across multi-state utility infrastructure -- <strong>~$2M annual savings</strong>.</li>
        <li>Built and productionized RAG-enhanced ML knowledge base integrated with CS tooling -- <strong>$200K annual savings</strong>, 20% faster support response times.</li>
        <li>Deployed RAG LLM pipeline for legal operations -- <strong>$100K+ in avoided costs</strong>.</li>
        <li>Engineered regression models for spacer cable optimization -- <strong>$1M annual savings</strong> from reduced outage frequency.</li>
        <li>Applied statistical modeling to optimize substation inspection scheduling -- eliminated <strong>~$100K in annual inspection costs</strong>.</li>
        <li>Built DS/ML team from 2 to 15 members; defined git workflows, Python coding standards, and ML engineering practices.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header"><span class="job-company">University of Austin / Great Learning</span><span class="job-period">Jan 2025 - Present</span></div>
      <div class="job-role">Adjunct AI Professor <span class="job-location">&middot; Remote</span></div>
      <ul>
        <li>Instruct ~20 students in Python, ML fundamentals, and applied data science; facilitated career transitions for 5 students.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header"><span class="job-company">Earlier Career -- Engineering &amp; Analytics</span><span class="job-period">2018 - 2022</span></div>
      <div class="job-role"></div>
      <ul>
        <li><strong>Marketing Analytics Analyst II, TaxAct</strong> -- Expanded advertiser reach by ~50K customers via algorithmic market analysis.</li>
        <li><strong>Marketing Analyst II, Level Agency</strong> -- Doubled ROAS via cross-channel performance analytics.</li>
        <li><strong>Aerospace Engineer, Lockheed Martin</strong> -- Tested and validated inertial navigation systems; quantitative accuracy modeling.</li>
        <li><strong>Nuclear Engineer, Exelon</strong> -- Radiological safety analysis; quantitative risk modeling for spent nuclear fuel systems.</li>
      </ul>
    </div>
  </div>

  <div class="section avoid-break">
    <div class="section-title">Projects</div>
    <div class="project">
      <span class="project-title">Production PC-CNN Vegetation Classification System</span>
      <span class="project-badge">MLOps &middot; Scale</span>
      <div class="project-desc">Trained and deployed point cloud CNN for automated vegetation classification across multi-state utility infrastructure. Full ML lifecycle owned: data ingestion at scale, model training, production deployment on Azure, drift monitoring. ~$2M annual savings.</div>
      <div class="project-tech">Python &middot; PyTorch &middot; Azure &middot; Point Cloud Data &middot; CNN &middot; Production ML</div>
    </div>
    <div class="project">
      <span class="project-title">Multi-Source ML Retrieval Service (Adobe)</span>
      <span class="project-badge">ML Serving &middot; Product</span>
      <div class="project-desc">Designed and shipped a multi-database retrieval service with ML-powered recommendations and custom product UI. Live production service with SLA requirements. Reduced research time 70%, accelerated decision-making 40%.</div>
      <div class="project-tech">Python &middot; LLM Orchestration &middot; Multi-DB &middot; Azure &middot; Databricks</div>
    </div>
    <div class="project">
      <span class="project-title">RAG Knowledge Base -- Customer Support (PPL)</span>
      <span class="project-badge">RAG &middot; Production</span>
      <div class="project-desc">Built and productionized RAG-enhanced knowledge base integrated with CS tooling. Thousands of queries served in production; improved response times 20%, eliminated $200K in annual support costs.</div>
      <div class="project-tech">Python &middot; RAG Pipeline &middot; LLM &middot; Azure &middot; Spark &middot; SQL</div>
    </div>
  </div>

  <div class="section avoid-break">
    <div class="section-title">Education</div>
    <div class="edu-item">
      <div class="edu-header"><span class="edu-title">Master of Professional Studies -- Artificial Intelligence</span><span class="edu-year">2023 - 2025</span></div>
      <div class="edu-desc"><span class="edu-org">The Pennsylvania State University</span>, University Park, PA</div>
    </div>
    <div class="edu-item">
      <div class="edu-header"><span class="edu-title">Bachelor of Science -- Nuclear Engineering</span><span class="edu-year">2014 - 2018</span></div>
      <div class="edu-desc"><span class="edu-org">The Pennsylvania State University</span>, University Park, PA</div>
    </div>
  </div>

  <div class="section avoid-break">
    <div class="section-title">Skills</div>
    <div class="skills-grid">
      <span class="skill-item"><span class="skill-category">ML Infrastructure:</span> Azure ML, Databricks, Spark, MLOps, CI/CD, Git, Airflow (learning), Kubernetes (learning)</span>
      <span class="skill-item"><span class="skill-category">ML Frameworks:</span> PyTorch, TensorFlow, Transformers, scikit-learn, XGBoost, Random Forests</span>
      <span class="skill-item"><span class="skill-category">Languages:</span> Python (primary), SQL, PostgreSQL, R, MATLAB</span>
      <span class="skill-item"><span class="skill-category">Data Engineering:</span> ETL Pipelines, Pandas, NumPy, Spark, Tokenization/Vectorization</span>
      <span class="skill-item"><span class="skill-category">ML Techniques:</span> Large-Scale ML, RAG Pipelines, Agentic Frameworks, NLP, Computer Vision, Bayesian Statistics, Experiment Design</span>
      <span class="skill-item"><span class="skill-category">Cloud &amp; Tools:</span> Microsoft Azure, AWS, Power BI, Tableau, Agile/Scrum</span>
    </div>
  </div>

</div>
</body>
</html>`;

writeFileSync('C:/Users/carlo/AppData/Local/Temp/cv-candidate-airbnb-mle.html', html, 'utf8');
console.log('Written OK, bytes:', html.length);
