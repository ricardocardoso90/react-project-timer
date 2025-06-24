import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/globals';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { MainRoutes } from './routes/MainRoutes';
import { CycleContextProvider } from './contexts/CyclesContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <MainRoutes />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;