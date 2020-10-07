const initCurrentTab = () => {
  const location = window.location.pathname;
  if (location === "/") {
    return 0;
  } else if (location === "./team-intro") {
    return 1;
  } else if (location === "./open-forum") {
    return 2;
  } else if (location === "./event") {
    return 3;
  } else if (location === "./content") {
    return 4;
  } else if (location === "./clue-page") {
    return 5;
  }
};

export default initCurrentTab;
