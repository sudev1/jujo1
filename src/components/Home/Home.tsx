// src/components/Home.tsx

import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CssBaseline } from '@mui/material';

// import { Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
const unsplashImageURL = 'https://images.unsplash.com/photo-1589961546603-d4281f3cfdfa'; // 画像のURLを設定

const containerStyle = {
  backgroundColor: '#282c34', // 背景色を設定
  color: '#ffffff',
  padding: '20px',
};

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '0px', ...containerStyle }}>
      <CssBaseline />
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
        十畳 Website
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <img src={unsplashImageURL} alt="Top Image" style={{ width: '100%', height: '70%' }} />
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Links
              </Typography>
              <ul style={{listStyleType: 'none'}}>
                <li>
                  <Button component={Link} to="/uta" color="primary">
                    uta
                  </Button>
                </li>
                <li>
                  <Button component={Link} to="/iso" color="primary">
                    iso
                  </Button>
                </li>
                <li>
                  <Button component={Link} to="/komi" color="primary">
                    komi
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

      

        {/* <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Links
              </Typography>
              <ul>
                <li>
                  <Button component={Link} to="/about" color="primary">
                    About Us
                  </Button>
                </li>
                <li>
                  <Button component={Link} to="/services" color="primary">
                    Services
                  </Button>
                </li>
                <li>
                  <Button component={Link} to="/contact" color="primary">
                    Contact
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Home;







// // src/components/Home.js

// import React from 'react';
// import { Button, Container, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   title: {
//     fontSize: '2rem',
//     // marginBottom: theme.spacing(2),
//   },
//   button: {
//     fontSize: '1rem',
//   },
// }));

// function Home() {
//   const classes = useStyles();

//   return (
//     <Container className={classes.root}>
//       <Typography className={classes.title} variant="h1" align="center">
//         Welcome to Our Material-UI Website2
//       </Typography>
//       <Button className={classes.button} variant="contained" color="primary">
//         Get Started
//       </Button>
//     </Container>
//   );
// }

// export default Home;



// ■
// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <div className="app">
//       <header className="header">
//         <h1>十畳 Website</h1>
//         <p>Welcome to our amazing website</p>
//       </header>
//       <section className="content">
//         <h2>About Us</h2>
//         <p>A website for drinkers.</p>
//       </section>
//       <section className="content">
//         <h2>Contact Us</h2>
//         <p>For inquiries, please contact us at jujo@example.com. We are here to assist you.</p>
//       </section>
//     </div>
//   );
// }

// export default Home;
