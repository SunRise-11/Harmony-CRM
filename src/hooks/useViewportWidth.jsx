import { useState, useEffect } from "react";

function useViewportWidth() {
  // State to store the current viewport width
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Function to update viewport width in the state
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  // Effect to add and remove event listeners for window resize
  useEffect(() => {
    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup: remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during component mount

  // Return the current viewport width
  return viewportWidth;
}

export default useViewportWidth;
