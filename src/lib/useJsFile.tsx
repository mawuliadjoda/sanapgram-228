import { useEffect } from 'react';

// https://hackernoon.com/how-to-add-script-tags-in-react
export default function useExternalScripts(){
  useEffect(() => {
    const head = document.querySelector("head")!;
    const script = document.createElement("script");
    
    script.setAttribute("src", "/assets/js/carousel.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);
};