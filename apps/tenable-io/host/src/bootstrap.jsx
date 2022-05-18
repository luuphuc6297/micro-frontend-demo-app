import { PageComponent } from '@microfrontend-demo/design-system/components';
import { CustomThemeProvider } from '@microfrontend-demo/design-system/styles';
import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Landing } from './landing';
import { MicroApp } from './remote-utils';
import { SideNav } from './side-nav';
import { Theme } from './theme';



const Content = styled.div`
  padding: ${themeGet('space.4')};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const HeaderLogo = styled(Link)`
    background-color: ${themeGet('colors.tenable_io_dark')};
    color: ${themeGet('colors.white_text')};
    font-size: ${themeGet('fontSizes.2')};
    height: 40px;
    line-height: 40px;
    margin: 0;
    padding: 0 ${themeGet('space.2')}; 0 0;
    text-decoration: none;
`;

const App = () => {
  return (
    <CustomThemeProvider theme={Theme}>
      <HashRouter>
        <PageComponent headerLogo={<HeaderLogo to="/">Tenable.io</HeaderLogo>}>
          <Wrapper>
            <SideNav />

            <Content>
              <Routes>
                <Route path="/" element={<Landing />} />

                <Route
                  path="app1"
                  element={
                    <MicroApp remoteName="application-1" moduleName="Page1" />
                  }
                />

                <Route
                  path="app2"
                  element={
                    <MicroApp remoteName="application-2" moduleName="Page1" />
                  }
                />
              </Routes>
            </Content>
          </Wrapper>
        </PageComponent>
      </HashRouter>
    </CustomThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
