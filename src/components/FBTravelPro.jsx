import React from 'react';
import MainContent from "./MainContent";
import ContentData from "../databaseJSON/fbTravelProData.json"

const FBTravelPro = () => {
  return (
    <>
      <div>
        <MainContent data={ContentData}
         />
      </div>
    </>
  );
};

export default FBTravelPro;
