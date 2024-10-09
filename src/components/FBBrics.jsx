import React from 'react';
import MainContent from "./MainContent";
import ContentData from "../databaseJSON/fbBricsData.json"

const FBBrics
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

export default FBBrics
;
