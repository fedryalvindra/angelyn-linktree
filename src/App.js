
import './App.css';

const socials = [
  {
    name: 'YouTube',
    desc: 'Watch my latest videos',
    icon: '▶',
    url: 'https://www.youtube.com/@angeline_cr',
    color: '#ff4d75',
  },
  {
    name: 'Saweria',
    desc: 'Send me a little support ☕',
    icon: '☕',
    url: 'https://saweria.co/angelyn',
    color: '#ffb547',
  },
  {
    name: 'Sociabuzz',
    desc: 'Support me on Sociabuzz 💗',
    icon: '♡',
    url: 'https://sociabuzz.com/angel_yn/tribe',
    color: '#ff7b9c',
  },
  {
    name: 'TikTok',
    desc: 'Daily moments & fun videos',
    icon: '♪',
    url: 'https://www.tiktok.com/@angel._.yn',
    color: '#ffffff',
  },
  {
    name: 'Instagram',
    desc: 'My daily life & photos',
    icon: '◎',
    url: 'https://www.instagram.com/angelina_natashaa/',
    color: '#e668a7',
  },
  {
    name: 'Discord',
    desc: 'Join my community',
    icon: '☁',
    url: 'https://discord.com/invite/s6pJv997SK',
    color: '#7289da',
  },
  {
    name: 'Business Inquiries',
    desc: 'For collaboration & sponsorship',
    icon: '✉',
    url: 'mailto:angelinasung04@gmail.com',
    color: '#a78bfa',
  },
];

function App() {
  return (
    <div className="page">
      {/* Background */}
      <div className="background">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <main className="container">

        {/* Profile */}
        <div className="profile">
          <div className="avatar-wrapper">
            <img
              src="/image.png"
              alt="Profile"
              className="avatar"
            />
            <span className="online-dot" />
          </div>

          <span className="creator-tag">
            ✨ CONTENT CREATOR
          </span>

          <h1>Hi, I'm Angelyn ♡</h1>

          <p className="bio">
            Just a girl in her gaming world. 🎮
            <br />
            Gaming, giggles & good vibes ♡
          </p>

          <div className="social-count">
            <span>♡</span> Thank you for being here!
          </div>
        </div>

        {/* Social Links */}
        <div className="links">
          {socials.map((social, index) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              key={social.name}
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <div
                className="social-icon"
                style={{
                  '--icon-color': social.color,
                }}
              >
                {social.icon}
              </div>

              <div className="link-info">
                <h3>{social.name}</h3>
                <p>{social.desc}</p>
              </div>

              <span className="arrow">↗</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer>
          <p>
            Made with <span>♥</span> and a little magic
          </p>
          <small>
            © 2026 Angelyn. All rights reserved.
          </small>
        </footer>

      </main>

      <Chibi />

    </div>
  );
}

function Chibi() {
  return (
    <div className="chibi-container">
      <div className="chibi-heart heart-1">♥</div>
      <div className="chibi-heart heart-2">♡</div>
      <div className="chibi-sparkle">✦</div>

      <div className="chibi">
        {/* Hair */}
        <div className="chibi-hair">
          <div className="hair-bang" />
        </div>

        {/* Face */}
        <div className="chibi-face">
          <div className="chibi-eye eye-left" />
          <div className="chibi-eye eye-right" />
          <div className="chibi-blush blush-left" />
          <div className="chibi-blush blush-right" />
          <div className="chibi-mouth" />
        </div>

        {/* Body */}
        <div className="chibi-body">
          <div className="chibi-neck" />
          <div className="chibi-dress" />
        </div>

        {/* Arms */}
        <div className="chibi-arm arm-left" />
        <div className="chibi-arm arm-right" />

        {/* Legs */}
        <div className="chibi-leg leg-left" />
        <div className="chibi-leg leg-right" />
      </div>

      <div className="chibi-shadow" />

      <div className="chibi-message">
        Hello semuanyaa! 🎮💕
        <span className="message-tail" />
      </div>
    </div>
  );
}

export default App;
