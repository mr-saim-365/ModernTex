
import React, { useRef } from "react";
import denimImage from "/images/denimImage.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

// ✅ Custom hook for media queries
const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const DenimImage = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // ✅ Different transforms for different breakpoints
  const sm = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const md = useTransform(scrollYProgress, [0, 1], [120, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [150, -200]);

  // ✅ Detect screen size
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isLarge = useMediaQuery("(min-width: 1025px)");

  // ✅ Pick correct transform
  const yTransform = isSmall ? sm : isMedium ? md : lg;

  return (
    <section ref={container}>
      <motion.img
        src={denimImage}
        style={{ y: yTransform }}
        alt="Denim fabric background"
        className="h-[60vh] w-full object-cover"
      />
    </section>
  );
};

export default DenimImage;
