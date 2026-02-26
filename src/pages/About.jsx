import './About.css'

const skills = [
  { name: 'HTML', level: 70, emoji: '🏗️' },
  { name: 'CSS', level: 60, emoji: '🎨' },
  { name: 'JavaScript', level: 50, emoji: '⚡' },
  { name: 'React', level: 40, emoji: '⚛️' },
  { name: 'Git', level: 45, emoji: '🌿' },
]

const characters = [
  {
    name: 'Monkey D. Luffy',
    trait: 'Never gives up, no matter what!',
    lesson: "Luffy's determination inspires me to keep coding even when I'm stuck on a bug for hours.",
    emoji: '🎩'
  },
  {
    name: 'Nami',
    trait: 'Expert navigator and strategizer',
    lesson: "Like Nami, I want to be good at planning my code architecture before jumping in.",
    emoji: '🗺️'
  },
  {
    name: 'Hermit/Usopp',
    trait: 'Dreams big and keeps improving',
    lesson: "Usopp started as a liar but became a true warrior. I started as a beginner but I'll become a great dev!",
    emoji: '🎯'
  },
]

function About() {
  return (
    <div className="about">
      <h1 className="page-title">About Me ⚓</h1>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="bio-card">
          <div className="bio-avatar">🏴‍☠️</div>
          <div className="bio-text">
            <h2>Monkey D. Dev</h2>
            <p className="bio-role">Aspiring Pirate Developer | Web Dev Newbie</p>
            <p>
              Hey there! I'm a beginner web developer who fell in love with coding just like
              Luffy fell in love with the sea! I started learning HTML about 6 months ago and
              I've been on an adventure ever since.
            </p>
            <br />
            <p>
              When I'm not writing code, I'm probably watching One Piece, eating meat (just like Luffy),
              or debugging why my CSS isn't centered again. My dream? To build something that helps
              people, just like the Straw Hats help everyone they meet!
            </p>
            <br />
            <p>📍 East Blue (well, my bedroom) &nbsp;|&nbsp; 🎓 Self-taught &nbsp;|&nbsp; 🚀 Open to opportunities</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">My Skills (Devil Fruit Powers 🍎)</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span>{skill.emoji} {skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note">⚠️ Still training! My power level is rising every day!</p>
      </section>

      {/* One Piece Inspiration */}
      <section className="inspiration-section">
        <h2 className="section-title">My Nakama (Inspirations) 🏴‍☠️</h2>
        <div className="characters-grid">
          {characters.map((char) => (
            <div key={char.name} className="character-card">
              <div className="char-emoji">{char.emoji}</div>
              <h3>{char.name}</h3>
              <p className="char-trait">"{char.trait}"</p>
              <p className="char-lesson">{char.lesson}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
