import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import Login from './components/Login';
import Stories from './components/Stories';
import './App.css';

const pageFlipOut = keyframes`
  0% {
    transform: rotateY(0deg);
    transform-origin: left;
  }
  100% {
    transform: rotateY(-180deg);
    transform-origin: left;
  }
`;

const pageFlipIn = keyframes`
  0% {
    transform: rotateY(180deg);
    transform-origin: right;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: right;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#E67E22', // Elegant orange
    },
    secondary: {
      main: '#F1C40F', // Rich yellow
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          perspective: '1000px',
        },
      },
    },
  },
});

function PageTransition({ children }) {
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [content, setContent] = React.useState(children);

  React.useEffect(() => {
    if (children !== content) {
      setIsFlipping(true);
      setTimeout(() => {
        setContent(children);
        setIsFlipping(false);
      }, 500);
    }
  }, [children, content]);

  return (
    <div
      style={{
        animation: isFlipping 
          ? `${pageFlipOut} 0.5s ease-in-out forwards`
          : `${pageFlipIn} 0.5s ease-in-out`,
        backgroundColor: 'white',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {content}
    </div>
  );
}

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (password) => {
    if (password === "Andrew") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ perspective: '1000px' }}>
        <PageTransition>
          <Routes>
            <Route 
              path="/" 
              element={
                !isAuthenticated ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/stories" />
                )
              } 
            />
            <Route 
              path="/stories" 
              element={
                isAuthenticated ? (
                  <Stories />
                ) : (
                  <Navigate to="/" />
                )
              } 
            />
          </Routes>
        </PageTransition>
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App; 