import { useLayoutEffect, useState } from "react";

function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offSetHeight = window.document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offSetHeight * 0.7) {
        setAnimation(true);
      }
    }
    // window.addEventListener("scroll", updatePosition());
    // return () => window.removeEventListener("scroll", updatePosition());
  }, [id]);
  // return animation;
}

export default useWindowPosition;
