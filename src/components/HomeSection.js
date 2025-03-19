import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.textColor};
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: ${props => props.theme.transition};
  margin-top: 1rem;

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const ScrollText = styled.span`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.7;
  color: ${props => props.theme.textColor};
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-right: 3px solid ${props => props.theme.primaryColor};
  border-bottom: 3px solid ${props => props.theme.primaryColor};
  transform: rotate(45deg);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: ${props => props.theme.transition};
  margin-top: 1rem;

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const HomeSection = ({ scrollToContact, scrollToProjects }) => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const sectionRef = useRef(null);

  const firstLine = 'Good things come'.split(' ');
  const secondLine = 'to those'.split(' ');

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
      setShowDescription(true);
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
  }, [scrollToProjects]); // Updated dependency

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
                  who wait
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
