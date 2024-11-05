import Lightswitch from "../components/Lightswitch"

const Header = () => {
  return (
    <header className="w-full h-[12vh] p-4 dark:bg-gray-900">
      <div className="flex justify-end top-4 right-4">
        <Lightswitch />
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-4">
          <button cclassName="menu-icon text-xl">☰</button>
        </div>
        <div className="flex justify-end space-x-6 mt-6">
          <a href="#home" className="text-purple-500 dark:text-white">Skills</a>
          <a href="#about" className="text-purple-500 dark:text-white">Projects</a>
          <a href="#contact" className="text-purple-500 dark:text-white">Hire me</a>
        </div>
      </div>
    </header>
  )
}

export default Header