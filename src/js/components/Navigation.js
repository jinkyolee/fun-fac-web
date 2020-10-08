import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import initCurrentTab from "../functions/initCurrentTab";
import logo from "../../images/logo.png";
import "../../css/components/Navigation.css";
import usePrevState from "../hooks/usePrevState";

const handleTabChange = (currentTab) => {
  if (currentTab === undefined) {
    return;
  }

  const selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }

  const tabs = document.querySelectorAll(".tab-item");
  tabs[currentTab].classList.add("selected");
};

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState();
  const location = useLocation();

  const locationRef = usePrevState(location);

  useEffect(() => {
    if (currentTab === undefined) {
      const initTab = initCurrentTab();
      setCurrentTab(initTab);
    }
    if (locationRef !== location) {
      const initTab = initCurrentTab();
      setCurrentTab(initTab);
    }
    handleTabChange(currentTab);
    // eslint-disable-next-line
  }, [currentTab, location]);

  return (
    <nav className="nav-bar">
      <Link to={`/`} onClick={() => setCurrentTab(0)}>
        <img src={logo} className="logo" alt="" />
      </Link>
      <div className="button-container">
        <Link to={`/`} className="tab-item">
          게임 소개
        </Link>
        <Link to={`/team-intro`} className="tab-item">
          팀 소개
        </Link>
        <Link to={`/open-forum`} className="tab-item">
          자유게시판
        </Link>
        <Link to={`/event`} className="tab-item">
          이벤트
        </Link>
        <Link to={`/content`} className="tab-item">
          콘텐츠
        </Link>
        <Link to={`/clue-page`} className="tab-item">
          기록실
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
