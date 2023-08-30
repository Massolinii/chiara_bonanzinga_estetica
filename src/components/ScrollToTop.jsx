import { useEffect } from "react";
import { useLocation } from "react-router-dom";

{/* Function to scroll on top of the page when react-router-dom changes page*/}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
