import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.textColor};
`;

const Subtitle = styled.h5`
  font-size: 1.3rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primaryColor};
`;

const Text = styled.p`
  margin-bottom: 1rem;
  color: ${props => props.theme.textColor};
  line-height: 1.6;
`;

const PrivacyPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <Title>Privacy Policy for Orvin</Title>
        <Text>Last Updated: {new Date().toLocaleDateString()}</Text>
        <br />
        <Text>
          At Orvin, we respect your privacy and are committed to protecting your
          personal data. This Privacy Policy explains how we collect, use, and
          safeguard your information when you visit our website or use our
          services.
        </Text>
        <br />
        <Subtitle>1. Information We Collect</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>2. How We Use Your Information</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>3. Data Security</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>4. Cookies and Tracking Technologies</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>5. Third-Party Services</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>6. Your Rights</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>7. Changes to This Privacy Policy</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>8. Contact Us</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
      </PageContent>
    </PageContainer>
  );
};

export default PrivacyPage;
