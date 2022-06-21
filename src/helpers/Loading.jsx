import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette:{
        error:{
            main:"#FF3202"
        }
    }
})

const Loading = () => {
  return (
    <Box sx={{ display: 'flex',
    alignItems:"center",
    justifyContent:"center",
    height: "100vh" }}>
        <ThemeProvider theme={theme}>
      <CircularProgress size={50} color="error" />
      </ThemeProvider>
    </Box>
  )
}

export default Loading