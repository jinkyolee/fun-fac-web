import React from "react";
import Video from "../components/Video";

const ContentPage = () => {
  document.title = "펀팩 | 콘텐츠";

  return (
    <div className="content-container">
      <Video src="https://www.youtube.com/embed/3P1CnWI62Ik" title="서울" />
      <Video src="https://www.youtube.com/embed/dQ_lCmB2hfk" title="전주" />
      <Video src="https://www.youtube.com/embed/xLD8oWRmlAE" title="부산" />
    </div>
  );
};

export default ContentPage;
