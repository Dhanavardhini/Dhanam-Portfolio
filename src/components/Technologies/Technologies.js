import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world — from building responsive front-end UIs to developing efficient back-end systems and cloud integrations.
    </SectionText>
    <List>
      {/* Front-End */}
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, React Native, Bootstrap, MUI<br />
            HTML5, CSS3, Sass, JavaScript, TypeScript ,Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Back-End */}
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, PHP<br />
            MySQL, Firebase, MongoDB<br />
            RESTful APIs, Git & GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Tools & Platforms */}
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools & Platforms</ListTitle>
          <ListParagraph>
            AWS, Azure, Version Control (Git)<br />
            Visual Studio Code, Postman, Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
