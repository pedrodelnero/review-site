import React, { useEffect, useContext, useRef } from "react";

import useStyles from "./styles.js";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import Mobile from "../../context/Mobile";

function useOutsideAlerter(ref) {
  // const { isAccMenuOpen, setIsAccMenuOpen } = useContext(Mobile);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Mobile);
  useEffect(() => {
    /*** Alert if clicked on outside of element***/
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, setIsSidebarOpen, ref]);
}

const SideNavBar = () => {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className={classes.root}>
      <SidebarMenu />
    </div>
  );
};

export default SideNavBar;
