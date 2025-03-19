import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 5%;
  position: relative;
  background: #121212;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.textColor};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.textColor};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.textColor};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primaryColor};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.textColor};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primaryColor};
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #fff;
  color: #000;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #000;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ScrollUpIndicator = styled.div`
  position: absolute;
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ScrollText = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.7;
  color: ${props => props.theme.textColor};
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-right: 3px solid ${props => props.theme.primaryColor};
  border-bottom: 3px solid ${props => props.theme.primaryColor};
  transform: rotate(-135deg);
`;

const ContactSection = ({ scrollToHome }) => {
  const sectionRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:batuhannbagg@gmail.com?subject=Contact Form Submission from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = encodeURI(mailtoLink);
  };

  return (
    <Section id='contact' ref={sectionRef}>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </Title>

        <ContactForm
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' id='name' required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='message'>Message</Label>
            <TextArea id='message' required />
          </FormGroup>

          <SubmitButton
            type='submit'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </Content>
    </Section>
  );
};

export default ContactSection;
