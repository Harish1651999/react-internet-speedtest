import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import SpeedTest from "./components/SpeedTest";
import Footer from "./components/Footer";
import "./assets/css/style.css";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Header />
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      <h1>{t("internetSpeed")}</h1>
      <SpeedTest />
      <Footer />
    </>
  );
}

export default App;
