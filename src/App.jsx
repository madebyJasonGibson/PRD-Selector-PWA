import { useState } from 'react';
import './App.css';

const prdData = {
  'Frontend Framework / Approach': [
    'Traditional HTML/CSS/JS', 'React', 'Vue', 'Angular', 'Svelte', 'Web Components', 'Next.js, Nuxt, Remix (SSR/SSG frameworks)',
  ],
  'CSS Methodology / UI Framework': [
    'Tailwind CSS', 'Material Design 3', 'Bootstrap', 'Ant Design', 'Chakra UI', 'Custom SCSS', 'Styled Components (React)', 'None / Custom',
  ],
  'App Type / Deployment Target': [
    'Static website', 'SPA (Single Page Application)', 'PWA (Progressive Web App)', 'Mobile App (React Native, Flutter, etc.)', 'Web Game', 'Browser Extension', 'Desktop App (Electron, Tauri, etc.)', 'API only', 'Headless CMS', 'Jamstack site',
  ],
  'Backend Requirements': [
    'No backend', 'Node.js (Express, Koa, etc.)', 'Python (Flask, Django, FastAPI)', 'PHP (Laravel, WordPress)', 'Java (Spring Boot)', 'Google Apps Script', 'Firebase / Supabase', 'Headless CMS (Sanity, Contentful, Strapi, etc.)',
  ],
  'Database / Storage': [
    'None / Local Storage', 'Google Sheets', 'Firestore', 'SQL (MySQL, PostgreSQL, etc.)', 'NoSQL (MongoDB, DynamoDB)', 'Supabase', 'Redis (cache)', 'File storage (S3, GCS, etc.)',
  ],
  'Hosting / Deployment': [
    'Vercel', 'Netlify', 'GitHub Pages', 'Firebase Hosting', 'AWS/GCP/Azure', 'DigitalOcean', 'Self-hosted VPS', 'Webflow', 'WordPress',
  ],
  'Authentication / Security': [
    'None', 'Google OAuth', 'Auth0', 'Firebase Auth', 'Magic Link', 'Custom JWT', 'SSO (Okta, Azure)',
  ],
  'API Integrations / Third-Party Services': [
    'Google APIs (Sheets, Drive, Maps, etc.)', 'Stripe/PayPal (payments)', 'Twilio (SMS)', 'OpenAI API', 'Zapier/Make', 'Custom REST API', 'GraphQL', 'Slack/Discord/Teams',
  ],
  'Analytics & Logging': [
    'Google Analytics / GA4', 'Plausible/Matomo (privacy-focused)', 'Custom event logging', 'Sentry (error logging)', 'LogRocket', 'Custom Google Sheets log', 'Stackdriver/CloudWatch',
  ],
  'Accessibility & Compliance': [
    'WCAG compliance', 'ARIA standards', 'GDPR/CCPA options', 'Localization (i18n)',
  ],
  'Testing & QA': [
    'Unit Testing (Jest, Mocha, Vitest, etc.)', 'E2E Testing (Cypress, Playwright, Selenium)', 'CI/CD integration', 'Manual QA checklist',
  ],
  'DevOps & Workflow': [
    'GitHub/GitLab/Bitbucket', 'CI/CD Pipeline (GitHub Actions, GitLab CI, etc.)', 'Containerization (Docker)', 'Linter/Formatter (ESLint, Prettier)', 'Issue Tracking (Jira, Trello, GitHub Projects)',
  ],
  'Documentation': [
    'Auto-generated (Storybook, JSDoc, etc.)', 'Custom Markdown / Wiki', 'In-app tooltips/help',
  ],
  'Feature Requirements': [
    'Drag-and-drop', 'dashboard', 'reporting', 'auth', 'multiselect', 'free-form',
  ],
};

function App() {
  const [selections, setSelections] = useState({});

  const handleSelect = (category, value) => {
    setSelections((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">PRD Selector Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {Object.entries(prdData).map(([category, options]) => (
          <div key={category} className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">{category}</label>
            <select
              value={selections[category] || ''}
              onChange={(e) => handleSelect(category, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
            >
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
