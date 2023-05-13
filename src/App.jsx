import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import { Layout, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

// Define your styles using styled-components
const StyledContainer = styled(Container)`
  background-color: #282c34;
  color: white;
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: #61dafb;
  border-color: #61dafb;
  &:hover {
    background-color: #52c3e6;
    border-color: #52c3e6;
  }
`;

const HomePage = () => {
  return (
    <StyledContainer fluid>
      <h1>Welcome to Our Page!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </p>
      <p>
        <StyledButton variant="primary">Learn more</StyledButton>
      </p>
    </StyledContainer>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
};

export default App;
