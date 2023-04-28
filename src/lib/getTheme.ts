export const getTheme = () => {
  const theme = (() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) return localTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  })();

  const classList = document.documentElement.classList;

  if (theme === "light") classList.remove("dark");
  else classList.add("dark");
};
