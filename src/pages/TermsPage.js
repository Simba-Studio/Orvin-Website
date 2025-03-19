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

const TermsPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <Title>Terms of Use for Orvin</Title>
        <Text>Last Updated: {new Date().toLocaleDateString()}</Text>
        <br />
        <Text>
          Welcome to Orvin. By accessing or using our website, you agree to be
          bound by these Terms of Use. Please read them carefully.
        </Text>
        <br />
        <Subtitle>1. Acceptance of Terms</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>2. User Accounts</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>3. Intellectual Property</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>4. User Content</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>5. Prohibited Activities</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>6. Disclaimer of Warranties</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>7. Limitation of Liability</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
        </Text>
        <br />
        <Subtitle>8. Governing Law</Subtitle>
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

export default TermsPage;
