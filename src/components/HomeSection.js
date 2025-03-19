import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundVideo from '../assets/motion2.mp4';

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 5%;
  position: relative;
  background: rgba(18, 18, 18, 0.7); // Semi-transparent overlay
  overflow-y: auto; // Enable vertical scrolling
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TitleContainer = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.textColor};
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Line = styled(motion.div)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Word = styled(motion.span)`
  display: inline-block;
  white-space: pre;
`;

const ItalicWord = styled(motion.span)`
  font-style: italic;
  font-family: 'Playfair Display', serif;
  color: ${props => props.theme.primaryColor};
  display: inline-block;
`;

const HomeSection = ({ scrollToContact, scrollToProjects }) => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const firstLine = 'every great thing'.split(' ');
  const secondLine = ''.split(' ');

  useEffect(() => {
    setTimeout(() => {
      contentRef.current.classList.add('visible');
      setIsVisible(true);
    }, 300);

    // Show description after words animation completes
    const totalWords = firstLine.length + secondLine.length + 1; // +1 for "who wait"
    const wordAnimationDuration = 0.2; // stagger duration per word
    const totalAnimationTime = totalWords * wordAnimationDuration * 1000 + 500; // +500ms buffer

    setTimeout(() => {
      // setShowDescription(true);
    }, totalAnimationTime);

    // Set up scroll event listener
    const handleScroll = e => {
      if (!sectionRef.current) return;

      // If scrolling down and in home section view
      if (e.deltaY > 0 && window.scrollY < window.innerHeight) {
        scrollToProjects(); // Changed from scrollToContact to scrollToProjects
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [firstLine.length, secondLine.length, scrollToProjects]);

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <Section id='home' ref={sectionRef}>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={backgroundVideo} type='video/mp4' />
      </VideoBackground>
      <Content ref={contentRef}>
        <AnimatePresence>
          {isVisible && (
            <TitleContainer>
              <Line
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
              >
                {firstLine.map((word, i) => (
                  <Word
                    key={i}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                  >
                    {word}
                  </Word>
                ))}
              </Line>

              <Line
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ staggerChildren: 0.2, delayChildren: 1.5 }}
              >
                {secondLine.map((word, i) => (
                  <Word
                    key={i}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                  >
                    {word}
                  </Word>
                ))}
                <ItalicWord variants={fadeInUp} transition={{ duration: 0.5 }}>
                  begins with a little waiting
                </ItalicWord>
              </Line>
            </TitleContainer>
          )}
        </AnimatePresence>
      </Content>
    </Section>
  );
};

export default HomeSection;
