import { useEffect } from "react";
import { useSelector } from "react-redux";

function useTheme() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);
}

export default useTheme;
