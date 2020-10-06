import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import initCurrentTab from "../functions/initCurrentTab";
import logo from "../../images/logo.png";
import "../../css/components/Navigation.css";

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

  useEffect(() => {
    if (currentTab === undefined) {
      const initTab = initCurrentTab();
      setCurrentTab(initTab);
    }
    handleTabChange(currentTab);
  }, [currentTab]);

  return (
    <nav className="nav-bar">
      <Link to="/" onClick={() => setCurrentTab(0)}>
        <img src={logo} className="logo" alt="" />
      </Link>
      <div className="button-container">
        <Link to="/" className="tab-item" onClick={() => setCurrentTab(0)}>
          게임 소개
        </Link>
        <Link
          to="/team-intro"
          className="tab-item"
          onClick={() => setCurrentTab(1)}
        >
          팀 소개
        </Link>
        <Link
          to="/open-forum"
          className="tab-item"
          onClick={() => setCurrentTab(2)}
        >
          자유게시판
        </Link>
        <Link to="/event" className="tab-item" onClick={() => setCurrentTab(3)}>
          이벤트
        </Link>
        <Link
          to="/content"
          className="tab-item"
          onClick={() => setCurrentTab(4)}
        >
          콘텐츠
        </Link>
        <Link
          to="/clue-page"
          className="tab-item"
          onClick={() => setCurrentTab(5)}
        >
          기록실
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
