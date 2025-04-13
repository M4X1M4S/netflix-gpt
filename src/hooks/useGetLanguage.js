import { useSelector } from "react-redux";
import availableLanguages from "../utils/languageConstans";

const useGetLanguage = () => {
  const language = useSelector((state) => state.config.language);
  const languageObj = availableLanguages.find((lang) => lang.code === language);
  return languageObj;
};
export default useGetLanguage;
