import React from 'react';
import MainContent from "./MainContent";
import ContentData from "../databaseJSON/fbDelseyRicardoData.json"

const FBDelseyRicardo = () => {
  return (
    <>
      <div>
        <MainContent data={ContentData}
         />
      </div>
    </>
  );
};

export default FBDelseyRicardo;
