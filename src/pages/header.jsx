
const Header = () => {
  return (
    <header>
      <div className="left">
        <button className="menu-icon">☰</button>
      </div>
      <div className="right">
        <a href="#home" className="link">Skills</a>
        <a href="#about" className="link">Projects</a>
        <a href="#contact" className="link">Hire me</a>
      </div>
    </header>
  )
}

export default Header