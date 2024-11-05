
const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-gray-800 text-purple">
        <button className="menu-icon">☰</button>
      </div>
      <div className="right">
        <a href="#home" className="bg-gray-800">Skills</a>
        <a href="#about" className="link">Projects</a>
        <a href="#contact" className="link">Hire me</a>
      </div>
    </header>
  )
}

export default Header