import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import axios from "axios";

// Replace with your actual achievements if needed
const defaultData = [
  { number: 5, text: "Open Source Projects" },
  { number: 0, text: "Github Followers" }, // Will be fetched from API
  { number: 20, text: "Github Stars" },
];

const Acomplishments = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      try {
        const { data: userData } = await getFollowers();
        if (userData) {
          const updatedData = data.map((item) =>
            item.text === "Github Followers"
              ? { ...item, number: userData.followers }
              : item
          );
          setData(updatedData);
        }
      } catch (err) {
        console.error("GitHub API error:", err);
      }
    })();
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;

const getFollowers = () => {
  return axios.get("https://api.github.com/users/Dhanavardhini");
};
