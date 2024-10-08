import React from 'react';
import MainContent from "./MainContent";
import ContentData from "../databaseJSON/fbBriggsRileyData.json"

const FBBriggsRiley
 = () => {
  return (
    <>
      <div>
        <MainContent data={ContentData}
         />
      </div>
    </>
  );
};

export default FBBriggsRiley
;
