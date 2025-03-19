import React, { useRef } from 'react';
import HomeSection from '../components/HomeSection';
import ProjectsSection from '../components/ProjectsSection';
import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100%;
  overflow-y: visible;
`;

const HomePage = () => {
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageContainer ref={homeRef}>
      <HomeSection
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
      />
      <div id='projects' ref={projectsRef}>
        <ProjectsSection scrollToHome={scrollToHome} />
      </div>
      {/* <div ref={contactRef}>
        <ContactSection scrollToHome={scrollToHome} />
      </div> */}
    </PageContainer>
  );
};

export default HomePage;
