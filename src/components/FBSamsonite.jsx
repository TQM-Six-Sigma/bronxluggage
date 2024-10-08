import React from 'react';
import MainContent from "./MainContent";
import ContentData from "../databaseJSON/fbSamsoniteData.json"

const FBSamsonite = () => {
  return (
    <>
      <div>
        <MainContent data={ContentData}
         />
      </div>
    </>
  );
};

export default FBSamsonite;
