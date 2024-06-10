import './App.css';
import { Home, Experience, Portfolio, Contact } from './components';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#194371',
    },
    secondary: {
      main: '#060f19',
    },
    accent: {
      main: '#427fbf',
    },
    text: {
      main: '#f7fafd',
    },
    background: {
      main: '#010204',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
        <Experience />
        <Portfolio />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
