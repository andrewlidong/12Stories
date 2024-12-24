import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from '@mui/material';
import { keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { text-shadow: 0 0 5px rgba(230, 126, 34, 0.5), 0 0 15px rgba(230, 126, 34, 0.5), 0 0 20px rgba(230, 126, 34, 0.5); }
  50% { text-shadow: 0 0 10px rgba(241, 196, 15, 0.8), 0 0 25px rgba(241, 196, 15, 0.8), 0 0 35px rgba(241, 196, 15, 0.8); }
  100% { text-shadow: 0 0 5px rgba(230, 126, 34, 0.5), 0 0 15px rgba(230, 126, 34, 0.5), 0 0 20px rgba(230, 126, 34, 0.5); }
`;

const sparkle = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

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

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
`;

// Add sound effects
const successChime = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');
successChime.volume = 0.5; // Adjust volume to 50%

function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFlipping, setIsFlipping] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError('Incorrect password. Try again!');
      // Shake animation for error
      setIsFlipping(true);
      setTimeout(() => setIsFlipping(false), 100);
    } else {
      // Play success sound
      successChime.currentTime = 0;
      successChime.play().catch(e => console.log('Error playing sound:', e));
      // Success page flip
      setIsFlipping(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.9) 0%, rgba(241, 196, 15, 0.9) 100%)',
          position: 'relative',
          overflow: 'hidden',
          perspective: '1000px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 1,
            animation: `${sparkle} 20s linear infinite`,
            backgroundSize: '400% 400%',
          },
        }}
      >
        <Paper
          elevation={12}
          className="page"
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            position: 'relative',
            zIndex: 2,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: isFlipping 
              ? `${pageFlipOut} 0.5s ease-in-out forwards`
              : `${float} 6s ease-in-out infinite`,
            transformStyle: 'preserve-3d',
            '&:hover': {
              transform: 'scale(1.02)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <div className="paper-texture" />
          <Typography
            component="h1"
            variant="h3"
            onClick={() => window.location.href = '/'}
            sx={{
              mb: 3,
              color: '#c41e3a',
              fontWeight: 700,
              textAlign: 'center',
              letterSpacing: '-0.5px',
              fontFamily: '"Dancing Script", cursive',
              fontSize: '3.5rem',
              animation: `${glow} 3s ease-in-out infinite`,
              background: 'linear-gradient(90deg, #c41e3a, #ff4d4d, #c41e3a)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
              },
            }}
          >
            12 Short Stories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              textAlign: 'center',
              color: '#2c3e50',
              fontWeight: 500,
              letterSpacing: '0.5px',
              fontStyle: 'italic',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1.3rem',
              opacity: 0.9,
              transform: 'translateY(0)',
              transition: 'all 0.3s ease',
              lineHeight: 1.6,
            }}
          >
Welcome to our special storybook, a collection of twelve tales inspired by the moments we’ve shared together. Each story stands alone, woven from the threads of our time together, and reflects the laughter, wonder, and connection that have deepened our bond throughout the year.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: '#c41e3a',
              fontWeight: 500,
              letterSpacing: '0.5px',
              fontStyle: 'italic',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1.1rem',
              opacity: 0.9,
              transform: 'translateY(0)',
              transition: 'all 0.3s ease',
              '&:hover': {
                opacity: 1,
                transform: 'translateY(-5px)',
              },
            }}
          >
            Enter the password to unwrap your gift ❤️
          </Typography>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              mt: 1,
              width: '100%',
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error}
              helperText={error}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  fontFamily: '"Quicksand", sans-serif',
                  '& fieldset': {
                    borderColor: 'rgba(0,0,0,0.23)',
                    transition: 'all 0.3s ease',
                  },
                  '&:hover fieldset': {
                    borderColor: '#E67E22',
                    borderWidth: '2px',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E67E22',
                    borderWidth: '2px',
                    boxShadow: '0 0 10px rgba(230, 126, 34, 0.2)',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontFamily: '"Quicksand", sans-serif',
                  transition: 'all 0.3s ease',
                  '&.Mui-focused': {
                    color: '#E67E22',
                    transform: 'translate(14px, -12px) scale(0.75)',
                  },
                },
                '& .MuiFormHelperText-root': {
                  fontFamily: '"Quicksand", sans-serif',
                },
                '& input': {
                  transition: 'all 0.3s ease',
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                py: 1.5,
                backgroundColor: '#E67E22',
                color: 'white',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'none',
                fontSize: '1.2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(230, 126, 34, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: '"Quicksand", sans-serif',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: '#D35400',
                  boxShadow: '0 6px 16px rgba(230, 126, 34, 0.3)',
                  transform: 'translateY(-3px)',
                  '&::after': {
                    transform: 'translateX(100%)',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'transform 0.5s ease',
                  transform: 'translateX(-100%)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 3px 8px rgba(230, 126, 34, 0.2)',
                },
              }}
            >
              Enter
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login; 