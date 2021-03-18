import { useContext, useEffect } from 'react';
import Mobile from '../context/Mobile';

function useOutsideAlerter(ref) {
  const { isAccMenuOpen, setIsAccMenuOpen } = useContext(Mobile);
  useEffect(() => {
    /*** Alert if clicked on outside of element***/
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsAccMenuOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAccMenuOpen, ref, setIsAccMenuOpen]);
}

export default useOutsideAlerter;
