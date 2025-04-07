# WhatsBarryCooking

## Project Overview
WhatsBarryCooking is a modern web application built with Next.js, React, and TypeScript. Check the live website on https://whatsbarrycooking.vercel.app/.

### Tech Stack

- **Next.js 15.2.4**: React framework for server-rendered applications
- **TailwindCSS**: Utility-first CSS framework
- **Jest**: Testing framework

## Project Setup and Structure

### Prerequisites
- Node.js (v20.x or higher)
- npm (Node Package Manager)
- Git

### Directory Structure
```
whatsbarrycooking/
├── src/                
│   ├── app/            # App router
│   ├── components/     # UI components 
│   └── data/           # Mock data 
├── public/             # Image assets
├── package.json        
└── README.md          
```

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Git Workflow

### Initializing Git
1. Initialize a new Git repository:
   ```bash
   git init
   ```

2. Add remote repository:
   ```bash
   git remote add origin https://github.com/barryyeee/whatsbarrycooking.git
   ```

### Making Meaningful Commits
1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Stage your changes:
   ```bash
   git add .
   ```

3. Commit with a descriptive message:
   ```bash
   git commit -m "add new feature description"
   ```

4. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

## CI/CD Configuration

The project uses GitHub Actions for continuous integration and deployment. The workflow is defined in `.github/workflows/ci.yml`.

### CI/CD Pipeline Steps
1. **Trigger Conditions**:
   - On push to main branch
   - On pull requests to main branch

2. **Build Process**:
   - Uses Node.js v20.x
   - Installs dependencies using `npm ci`
   - Runs linting checks
   - Builds the project
   - Executes page rendering test suite

### Key Features
- Automated testing with Jest
- Linting with ESLint
- Type checking with TypeScript
- Build verification

## Deployment
The application is deployed on Vercel, which provides seamless integration with Next.js applications. The deployment is automated through GitHub Actions, ensuring that any changes pushed to the main branch are automatically deployed to production.

## Timeframe and Work Log
Total Time Spent: ~3 hours

| Date       | Time Spent | Task Description | Notes / Challenges |
|------------|------------|------------------|-------------------|
| 2025-04-05 | 0.25h       | Project and Github repo setup | Auto installation using create-next-app, initial commit; design what the website should look like |
| 2025-04-05 | 0.25h       | Prepare mock data and image assets | Initially planned to use CMS to store data to simulate backend database but because of the limited time, used local JSON file instead. |
| 2025-04-05 | 1.5h      | Complete simple UI and next.js backend API to fetch data | Modular components; responsive style; fetching data should support query params|
| 2025-04-06 | 0.5h       | Set up CI/CD pipeline with GitHub Actions; deploy website | Custom YAML config from scratch; Vercel is a good choice to deploy this project. |
| 2025-04-06 | 0.25h      | Added unit tests and configured test step in pipeline | Basic rendering tests for meal page |
| 2025-04-07 | 0.25h      | Final polish/bugfix + writing documentation | Reviewed and documented full process |

## Notes on Iterative Approach

Frequent Commits: I made small, descriptive commits at each significant development stage to track progress.

Modular Development: The project was built in modular components, allowing for easier testing and maintenance. Each component was developed independently and then integrated into the main application.