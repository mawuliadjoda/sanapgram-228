import { useEffect } from 'react';


export default function useExternalScripts(){
  useEffect(() => {
    const head = document.querySelector("head")!;
    const script = document.createElement("script");

    script.setAttribute("src", "/src/carousel.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);
};