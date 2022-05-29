import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import {theme} from '@/style/theme';
import {Routes} from '@/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
