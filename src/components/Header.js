import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  z-index: 1000;
  transition: all 0.3s ease;
  transform: translateY(${props => (props.hide ? '-100%' : '0')});
  background-color: ${props =>
    props.isScrolled ? `${props.theme.bgColor}90` : 'transparent'};
  backdrop-filter: ${props => (props.isScrolled ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${props =>
    props.isScrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${props =>
    props.isScrolled ? `1px solid ${props.theme.borderColor}20` : 'none'};
  box-shadow: ${props =>
    props.isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem 5%;
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.primaryColor};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.textColor};
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  font-size: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primaryColor};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.primaryColor};
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: ${props => props.theme.primaryColor};
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ContactButton = styled(Link)`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 15px ${props => `${props.theme.primaryColor}40`};

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
`;

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setHideHeader(currentScrollY > lastScrollY);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleProjectsClick = e => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Allow time for navigation to complete before scrolling
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <HeaderContainer hide={hideHeader} isScrolled={isScrolled}>
      <Logo to='/'>orvin</Logo>
      <NavLinks>
        <NavLink
          to='#projects'
          className={location.pathname === '/projects' ? 'active' : ''}
          onClick={handleProjectsClick}
        >
          Projects
        </NavLink>
        <NavLink
          to='/privacy'
          className={location.pathname === '/privacy' ? 'active' : ''}
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to='/terms'
          className={location.pathname === '/terms' ? 'active' : ''}
        >
          Terms of Use
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
