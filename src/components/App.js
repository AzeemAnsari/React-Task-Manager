import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FormHeader from './FormHeader';
import TaskListContextProvider from '../context/TaskListContext';

import { GlobalStyle, Container, AppWrapper, Main } from './Styles';

const App = () => {
  return (
    <React.Fragment>
      <TaskListContextProvider>
        <Header />
        <Container>
          <AppWrapper>
            <Main>
              <FormHeader />
              <TaskForm />
              <TaskList />
            </Main>
          </AppWrapper>
        </Container>
        <Footer />
        <GlobalStyle />
      </TaskListContextProvider>
    </React.Fragment>
  );
};

export default App;
