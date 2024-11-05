import Lightswitch from "../components/Lightswitch"

const Header = () => {
  return (
    <header className="w-full p-4 dark:bg-gray-900">
      <div className="flex justify-end top-4 right-4">
        <Lightswitch />
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-4">
          <button cclassName="menu-icon text-xl">☰</button>
        </div>
        <div className="flex justify-end space-x-6 mt-6">
          <a href="#home" className="text-gray-900 dark:text-white">Skills</a>
          <a href="#about" className="text-gray-900 dark:text-white">Projects</a>
          <a href="#contact" className="text-gray-900 dark:text-white">Hire me</a>
        </div>
      </div>
    </header>
  )
}

export default Header