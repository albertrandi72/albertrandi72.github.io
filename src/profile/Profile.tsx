import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
export default function () {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 320.0,
          minWidth: 320,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#0030b8",
          maxDistance: 25.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div ref={myRef}></div>
    </>
  );
}
