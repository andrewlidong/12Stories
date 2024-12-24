import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const sparkle = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

// Add success chime sound
const successChime = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
successChime.volume = 0.5; // Adjust volume to 50%

function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Andrew') {
      successChime.play().catch(e => console.log('Error playing sound:', e));
      navigate('/stories');
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.9) 0%, rgba(241, 196, 15, 0.9) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1,
          animation: `${sparkle} 20s linear infinite`,
          backgroundSize: '400% 400%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          onClick={() => window.location.href = '/'}
          sx={{
            color: '#c41e3a',
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontFamily: '"Dancing Script", cursive',
            letterSpacing: '-0.5px',
            fontSize: '4rem',
            animation: `${float} 6s ease-in-out infinite`,
            background: 'linear-gradient(90deg, #c41e3a, #ff4d4d, #c41e3a)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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

        <Paper
          elevation={12}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: error ? `${shake} 0.5s ease-in-out` : 'none',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#c41e3a',
              textAlign: 'center',
              mb: 3,
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 600,
            }}
          >
            Welcome to Our Story
          </Typography>
          <Typography
            sx={{
              color: '#c41e3a',
              textAlign: 'center',
              mb: 4,
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            A collection of magical moments and cherished memories, written just for you. Enter the password to begin our journey together.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the password"
              error={error}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#c41e3a',
                    transition: 'all 0.3s ease',
                  },
                  '&:hover fieldset': {
                    borderColor: '#c41e3a',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#c41e3a',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#c41e3a',
                  '&::placeholder': {
                    color: '#c41e3a',
                    opacity: 0.7,
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#c41e3a',
                color: 'white',
                py: 1.5,
                fontSize: '1.1rem',
                fontFamily: '"Quicksand", sans-serif',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '200%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'all 0.5s ease',
                },
                '&:hover': {
                  bgcolor: '#a01830',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(196, 30, 58, 0.4)',
                  '&::before': {
                    left: '100%',
                  },
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              Enter
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login; 