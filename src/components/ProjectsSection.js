import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProjectsSectionContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 5% 4rem;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ComingSoonTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.textColor};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ComingSoonText = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textColorLight};
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = e => {
      if (!sectionRef.current) return;

      // If scrolling up and in projects section view
      if (
        e.deltaY < 0 &&
        window.scrollY > 0 &&
        window.scrollY < window.innerHeight
      ) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <ProjectsSectionContainer id='projects' ref={sectionRef}>
      <ComingSoonTitle>Coming Soon</ComingSoonTitle>
      <ComingSoonText>
        We're working hard to bring you amazing projects. Stay tuned for
        updates!
      </ComingSoonText>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
