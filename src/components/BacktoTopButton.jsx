import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpToLine } from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id="back-to-top"
      title="Back to top"
      style={{
        display: showButton ? "block" : "none",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
     <FontAwesomeIcon icon={faArrowsUpToLine} size="lg"/>
    </button>
  );
};
export default BackToTopButton;
