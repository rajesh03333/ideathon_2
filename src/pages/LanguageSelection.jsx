import { useNavigate } from "react-router-dom";

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    if (language === "English") {
      navigate("/Login");
    } else {
      alert(`Feature for ${language} is coming soon!`);
    }
  };

  const languages = [
    "English",
    "తెలుగు",
    "हिन्दी",
    "मराठी",
    "ଓଡ଼ିଆ",
    "বাংলা",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "தமிழ்",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <h1 className="text-2xl font-bold mb-6">Select the language you want to continue with</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleLanguageSelect(language)}
            className="btn btn-outline-danger border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
