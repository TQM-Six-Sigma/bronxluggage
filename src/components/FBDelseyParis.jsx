import React from 'react';
import MainContent from "./MainContent";
import ContentData from "../databaseJSON/fbDelseyParisData.json"

const FBDelseyParis = () => {
  return (
    <>
      <div>
        <MainContent data={ContentData}
         />
      </div>
    </>
  );
};

export default FBDelseyParis;
