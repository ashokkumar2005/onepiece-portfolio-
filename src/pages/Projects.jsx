import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Straw Hat Crew Tracker',
    emoji: '🏴‍☠️',
    description: 'My very first project! A simple webpage that lists all the Straw Hat pirates with their bounties. Built with just HTML and CSS. No JavaScript yet (I was still learning).',
    tech: ['HTML', 'CSS'],
    status: 'Complete',
    statusColor: '#2a9d8f',
    demo: '#',
    bgColor: '#fff0f0',
    borderColor: '#e63946'
  },
  {
    id: 2,
    title: 'Devil Fruit Encyclopedia',
    emoji: '🍎',
    description: 'A JavaScript project that shows info about different devil fruits when you click on them. Used DOM manipulation for the first time. It was really hard but I did it!',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'In Progress',
    statusColor: '#f4a261',
    demo: '#',
    bgColor: '#f0fff4',
    borderColor: '#2a9d8f'
  },
  {
    id: 3,
    title: 'Pirate Portfolio (This Site!)',
    emoji: '⚓',
    description: 'You\'re looking at it! My first ever React project. I learned React Router, components, and CSS modules to build this. It\'s not perfect but I\'m proud of it!',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    status: 'Complete',
    statusColor: '#2a9d8f',
    demo: '#',
    bgColor: '#f0f4ff',
    borderColor: '#1d3557'
  },
]

function Projects() {
  return (
    <div className="projects">
      <h1 className="page-title">My Projects 🗺️</h1>
      <p className="projects-intro">
        Every great pirate needs a map of their adventures! Here are mine so far.
        They're not perfect, but every project taught me something new! 🌊
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{ backgroundColor: project.bgColor, borderColor: project.borderColor }}
          >
            <div className="project-header">
              <span className="project-emoji">{project.emoji}</span>
              <span
                className="project-status"
                style={{ backgroundColor: project.statusColor }}
              >
                {project.status}
              </span>
            </div>

            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.demo} className="project-btn btn-demo">
                🚀 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <p>🌟 More projects coming soon! I'm still training! 🌟</p>
      </div>
    </div>
  )
}

export default Projects
