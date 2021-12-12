import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Vastvik Sewani <br />
          <Span>Software Developer</Span>
        </SectionTitle>
        <a href="https://drive.google.com/file/d/1jSj_1Zbq-kxZDOyNDYmDvYLTLUAbE8bL/view?usp=sharing">
          <Button> Download CV </Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;