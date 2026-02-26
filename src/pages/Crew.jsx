import { useState } from 'react'
import './Crew.css'

const crewMembers = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    role: 'Captain',
    emoji: '🎩',
    bounty: '3,000,000,000',
    devilFruit: 'Gomu Gomu no Mi (Hito Hito no Mi, Model: Nika)',
    origin: 'Foosha Village, East Blue',
    dream: 'Become the King of the Pirates',
    weapon: 'Fists (Rubber Body)',
    joined: 'Chapter 1',
    color: '#e63946',
    bg: '#fff0f0',
    traits: ['Reckless', 'Loyal', 'Carefree', 'Fearless', 'Kind'],
    description:
      'The captain of the Straw Hat Pirates. Ate the Gomu Gomu no Mi (true name: Hito Hito no Mi, Model: Nika), making his body rubber. His ultimate dream is to find the One Piece and become the Pirate King — just like his idol Shanks!',
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    role: 'First Mate / Swordsman',
    emoji: '⚔️',
    bounty: '1,111,000,000',
    devilFruit: 'None',
    origin: 'Shimotsuki Village, East Blue',
    dream: 'Become the World\'s Greatest Swordsman',
    weapon: 'Three-Sword Style (Santoryu)',
    joined: 'Chapter 3',
    color: '#2a9d8f',
    bg: '#f0fffd',
    traits: ['Serious', 'Strong-willed', 'Loyal', 'Directionally challenged', 'Honorable'],
    description:
      'The first mate and swordsman of the crew. Uses a unique three-sword style, holding one sword in his mouth. He was a pirate hunter before joining Luffy, and aims to be the world\'s greatest swordsman in honor of his late friend Kuina.',
  },
  {
    id: 3,
    name: 'Nami',
    role: 'Navigator',
    emoji: '🌊',
    bounty: '366,000,000',
    devilFruit: 'None',
    origin: 'Cocoyasi Village, East Blue',
    dream: 'Draw a complete map of the entire world',
    weapon: 'Clima-Tact (Weather Staff)',
    joined: 'Chapter 8',
    color: '#f4a261',
    bg: '#fff8f0',
    traits: ['Smart', 'Money-loving', 'Brave', 'Caring', 'Strategic'],
    description:
      'The navigator of the Straw Hats. She can read the weather perfectly and is an expert at cartography. Joined Luffy after he helped free her village from the Arlong Pirates, and she dreams of making a complete map of the world.',
  },
  {
    id: 4,
    name: 'Usopp',
    role: 'Sniper',
    emoji: '🎯',
    bounty: '500,000,000',
    devilFruit: 'None',
    origin: 'Syrup Village, East Blue',
    dream: 'Become a brave warrior of the sea',
    weapon: 'Slingshot (Kabuto / Pop Greens)',
    joined: 'Chapter 23',
    color: '#457b9d',
    bg: '#f0f4ff',
    traits: ['Cowardly (but brave when it counts)', 'Inventive', 'Funny', 'Loyal', 'Creative'],
    description:
      'The crew\'s sniper and inventor. Often lies and exaggerates (calling himself "Sogeking"), but when it matters most, he always steps up. His father Yasopp is a member of Shanks\' crew. He dreamed of becoming a brave warrior like his father.',
  },
  {
    id: 5,
    name: 'Vinsmoke Sanji',
    role: 'Cook',
    emoji: '🍖',
    bounty: '1,032,000,000',
    devilFruit: 'None (uses Ifrit Jambe)',
    origin: 'North Blue (raised in Baratie)',
    dream: 'Find the All Blue',
    weapon: 'Legs only (Black Leg Style)',
    joined: 'Chapter 68',
    color: '#e9c46a',
    bg: '#fffcf0',
    traits: ['Chivalrous', 'Passionate', 'Hot-headed', 'Loyal', 'Excellent cook'],
    description:
      'The chef of the Straw Hats. He never uses his hands in battle to protect his cooking ability. A member of the infamous Vinsmoke family, he rejected his royal heritage to be a free pirate. His dream is to find the All Blue — a legendary sea where all fish exist.',
  },
  {
    id: 6,
    name: 'Tony Tony Chopper',
    role: 'Doctor',
    emoji: '🦌',
    bounty: '1,000',
    devilFruit: 'Hito Hito no Mi (Human-Human Fruit)',
    origin: 'Drum Island, Grand Line',
    dream: 'Become a doctor who can cure any disease',
    weapon: 'Rumble Ball + Kung Fu Point',
    joined: 'Chapter 134',
    color: '#e76f51',
    bg: '#fff3f0',
    traits: ['Innocent', 'Cute', 'Dedicated', 'Brave', 'Emotional'],
    description:
      'The crew\'s doctor. He\'s a reindeer who ate the Human-Human Fruit, giving him human intelligence and the ability to transform. Trained by the great Dr. Hiriluk and Dr. Kureha. His low bounty (1,000 berries) is a running joke — Marines don\'t take him seriously!',
  },
  {
    id: 7,
    name: 'Nico Robin',
    role: 'Archaeologist',
    emoji: '🌸',
    bounty: '930,000,000',
    devilFruit: 'Hana Hana no Mi (Flower-Flower Fruit)',
    origin: 'Ohara, West Blue',
    dream: 'Find the true history of the world (the Rio Poneglyph)',
    weapon: 'Hana Hana no Mi — sprouting body parts anywhere',
    joined: 'Chapter 218',
    color: '#6a4c93',
    bg: '#f5f0ff',
    traits: ['Calm', 'Intelligent', 'Mysterious', 'Caring', 'Dark humor'],
    description:
      'The archaeologist of the crew. She is the only person alive who can read Poneglyphs — ancient stones that hold the world\'s true history. She was a wanted criminal from age 8 after the World Government destroyed her homeland Ohara. Luffy helped her find the will to live.',
  },
  {
    id: 8,
    name: 'Franky',
    role: 'Shipwright',
    emoji: '🔧',
    bounty: '394,000,000',
    devilFruit: 'None (Cyborg)',
    origin: 'Water 7, Grand Line',
    dream: 'Build a ship that can sail around the world',
    weapon: 'Cyborg body, Franky Shogun (mech)',
    joined: 'Chapter 439',
    color: '#1d3557',
    bg: '#f0f4f8',
    traits: ['Eccentric', 'Loud', 'Passionate', 'Loyal', 'Loves cola'],
    description:
      'The shipwright who built the Thousand Sunny. He rebuilt his own body into a cyborg after a near-death accident. His dream is to build a ship that sails around the entire world. He powers himself with cola. He is SUUUPER!!',
  },
  {
    id: 9,
    name: 'Brook',
    role: 'Musician',
    emoji: '🎸',
    bounty: '383,000,000',
    devilFruit: 'Yomi Yomi no Mi (Revive-Revive Fruit)',
    origin: 'West Blue',
    dream: 'Return to Laboon, the whale waiting for him',
    weapon: 'Soul Solid (Soul-infused sword)',
    joined: 'Chapter 489',
    color: '#2c1810',
    bg: '#f8f4f0',
    traits: ['Cheerful', 'Musical', 'Perverted (skull jokes)', 'Loyal', 'Emotional'],
    description:
      'The musician of the Straw Hats. He\'s a living skeleton thanks to his Devil Fruit which let his soul return to his body after death. He waited 50 years alone on a ghost ship for his crew. He has a deep bond with Laboon, a whale who waits for him at the start of the Grand Line. YOHOHOHO!',
  },
]

function Crew() {
  const [selected, setSelected] = useState(null)

  const openModal = (member) => setSelected(member)
  const closeModal = () => setSelected(null)

  return (
    <div className="crew">
      <h1 className="page-title">⚓ Straw Hat Pirates ⚓</h1>
      <p className="crew-intro">
        Meet the legendary Straw Hat crew — the nakama sailing with Luffy to find the One Piece!
        Click any member to see full details. 🏴‍☠️
      </p>

      <div className="crew-grid">
        {crewMembers.map((member) => (
          <div
            key={member.id}
            className="crew-card"
            style={{ borderColor: member.color, backgroundColor: member.bg }}
            onClick={() => openModal(member)}
          >
            <div className="crew-emoji">{member.emoji}</div>
            <h2 className="crew-name" style={{ color: member.color }}>{member.name}</h2>
            <div className="crew-role">{member.role}</div>
            <div className="crew-bounty">
              💰 <strong>Bounty:</strong> ฿{member.bounty}
            </div>
            <div className="crew-dream-short">🌟 {member.dream.length > 40 ? member.dream.slice(0, 40) + '…' : member.dream}</div>
            <button className="detail-btn" style={{ backgroundColor: member.color }}>
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-box"
            style={{ borderColor: selected.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>✕</button>

            <div className="modal-header" style={{ backgroundColor: selected.color }}>
              <span className="modal-emoji">{selected.emoji}</span>
              <div>
                <h2 className="modal-name">{selected.name}</h2>
                <div className="modal-role">{selected.role}</div>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selected.description}</p>

              <div className="modal-grid">
                <div className="modal-info-item">
                  <span className="info-label">💰 Bounty</span>
                  <span className="info-value">฿{selected.bounty}</span>
                </div>
                <div className="modal-info-item">
                  <span className="info-label">🍎 Devil Fruit</span>
                  <span className="info-value">{selected.devilFruit}</span>
                </div>
                <div className="modal-info-item">
                  <span className="info-label">📍 Origin</span>
                  <span className="info-value">{selected.origin}</span>
                </div>
                <div className="modal-info-item">
                  <span className="info-label">⚔️ Weapon</span>
                  <span className="info-value">{selected.weapon}</span>
                </div>
                <div className="modal-info-item">
                  <span className="info-label">📖 Joined</span>
                  <span className="info-value">{selected.joined}</span>
                </div>
                <div className="modal-info-item full-width">
                  <span className="info-label">🌟 Dream</span>
                  <span className="info-value">{selected.dream}</span>
                </div>
              </div>

              <div className="modal-traits">
                <span className="info-label">⚡ Traits</span>
                <div className="traits-list">
                  {selected.traits.map((t) => (
                    <span key={t} className="trait-badge" style={{ backgroundColor: selected.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Crew
