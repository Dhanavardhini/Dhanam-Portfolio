// import React, { useState, useRef, useEffect } from "react";

// import {
//   CarouselButton,
//   CarouselButtonDot,
//   CarouselButtons,
//   CarouselContainer,
//   CarouselItem,
//   CarouselItemImg,
//   CarouselItemText,
//   CarouselItemTitle,
//   CarouselMobileScrollNode,
// } from "./TimeLineStyles";
// import {
//   Section,
//   SectionDivider,
//   SectionText,
//   SectionTitle,
// } from "../../styles/GlobalComponents";
// import { TimeLineData } from "../../constants/constants";

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

// const Timeline = () => {
//   const [activeItem, setActiveItem] = useState(0);
//   const carouselRef = useRef();

//   const scroll = (node, left) => {
//     return node.scrollTo({ left, behavior: "smooth" });
//   };

//   const handleClick = (e, i) => {
//     e.preventDefault();

//     if (carouselRef.current) {
//       const scrollLeft = Math.floor(
//         carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
//       );

//       scroll(carouselRef.current, scrollLeft);
//     }
//   };

//   const handleScroll = () => {
//     if (carouselRef.current) {
//       const index = Math.round(
//         (carouselRef.current.scrollLeft /
//           (carouselRef.current.scrollWidth * 0.7)) *
//           TimeLineData.length
//       );

//       setActiveItem(index);
//     }
//   };

//   // snap back to beginning of scroll when window is resized
//   // avoids a bug where content is covered up if coming from smaller screen
//   useEffect(() => {
//     const handleResize = () => {
//       scroll(carouselRef.current, 0);
//     };

//     window.addEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Section id="about">
//       <SectionTitle>About Me</SectionTitle>
//       <SectionText>
//         Experienced Full Stack Backend & Rust Solana Developer with over 2 years of
//         experience. Passionate about delivering high-quality web solutions with
//         a strong foundation in Node.js & Rust. Committed to writing clean code,
//         providing exceptional user experiences, and staying updated with
//         industry trends for innovative solutions.
//       </SectionText>
//       <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
//         <>
//           {TimeLineData.map((item, index) => (
//             <CarouselMobileScrollNode
//               key={index}
//               final={index === TOTAL_CAROUSEL_COUNT - 1}
//             >
//               <CarouselItem
//                 index={index}
//                 id={`carousel__item-${index}`}
//                 active={activeItem}
//                 onClick={(e) => handleClick(e, index)}
//               >
//                 <CarouselItemTitle>
//                   {`${item.year}`}
//                   <CarouselItemImg
//                     width="208"
//                     height="6"
//                     viewBox="0 0 208 6"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       clip-rule="evenodd"
//                       d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
//                       fill="url(#paint0_linear)"
//                       fill-opacity="0.33"
//                     />
//                     <defs>
//                       <linearGradient
//                         id="paint0_linear"
//                         x1="-4.30412e-10"
//                         y1="0.5"
//                         x2="208"
//                         y2="0.500295"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop stop-color="white" />
//                         <stop
//                           offset="0.79478"
//                           stop-color="white"
//                           stopOpacity="0"
//                         />
//                       </linearGradient>
//                     </defs>
//                   </CarouselItemImg>
//                 </CarouselItemTitle>
//                 <CarouselItemText>{item.text}</CarouselItemText>
//               </CarouselItem>
//             </CarouselMobileScrollNode>
//           ))}
//         </>
//       </CarouselContainer>
//       <CarouselButtons>
//         {TimeLineData.map((item, index) => {
//           return (
//             <CarouselButton
//               key={index}
//               index={index}
//               active={activeItem}
//               onClick={(e) => handleClick(e, index)}
//               type="button"
//             >
//               <CarouselButtonDot active={activeItem} />
//             </CarouselButton>
//           );
//         })}
//       </CarouselButtons>
//       <SectionDivider />
//     </Section>
//   );
// };

// export default Timeline;


import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a passionate MERN Stack Developer with hands-on experience in building full-stack web applications using React.js, Node.js, MySQL and more. I have completed internships in both front-end and back-end roles and currently work at Scion Research & Development, where I continue to build scalable and user-friendly solutions. I enjoy solving real-world problems through clean, efficient code and continuously learning new technologies.
      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="0"
                        y1="0.5"
                        x2="208"
                        y2="0.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="0.79478" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>

      <CarouselButtons>
        {TimeLineData.map((_, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem === index} />
          </CarouselButton>
        ))}
      </CarouselButtons>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
