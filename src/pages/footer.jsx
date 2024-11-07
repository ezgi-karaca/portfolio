import { useTranslation } from "../contexts/TranslateContext";

const Footer = ({darkMode}) => {
  const { translate } = useTranslation();
  return (
    <footer id='footer' className={`w-full py-16 sm:py-24 px-6 sm:px-60 mt-auto ${
      darkMode ? "bg-[#141414]" : "bg-[#F9F9F9]"
    }`}>
      <div className="w-full mx-auto px-6 flex flex-col space-between" >
        <div className="mb-10 ">
          <h2 className={`text-xl sm:text-2xl font-semibold mb-4  ${darkMode ? "text-[#AEBCCF]" : "text-gray-800"}`}>{translate("footerTxtOne")}</h2>
          <h2 className={`text-xl sm:text-2xl font-semibold mb-4 ${darkMode ? "text-[#AEBCCF]" : "text-gray-800"}`}>{translate("footerTxtTwo")}</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <span
              role="img"
              aria-label="pointing right"
              className="text-m mr-2"
            >
              👉
            </span>
            <a
              href="mailto:w.ezgikaraca@gmail.com"
              className={`underline ${darkMode ? "text-[#BAB2E7]" : "text-purple-800"} hover:text-purple-400`}
            >
              w.ezgikaraca@gmail.com
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/ezgi-karaca"
              target="_blank" className="text-[#00AB6B] hover:text-[#008C4A]">Github</a>
            <a href="https://www.linkedin.com/in/ezgi-karaca"
              target="_blank" className="text-[#0077B5] hover:text-[#005F8D]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
