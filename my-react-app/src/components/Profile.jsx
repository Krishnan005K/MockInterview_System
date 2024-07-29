import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { GitHub, Twitter, Instagram, Facebook, Language } from '@mui/icons-material';

export default function ProfilePage() {
  return (
    <Box sx={{ backgroundColor: '#eee', py: 5 }}>
      <Container>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Mock Interview Student Profile</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item lg={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <CardMedia
                  component="img"
                  image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  sx={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px' }}
                />
                <Typography variant="h6">Lingesh</Typography>
                <Typography color="textSecondary">Mock Interview Student</Typography>
                <Typography color="textSecondary" mb={2}>Bay Area, San Francisco</Typography>
                <Button variant="contained">Follow</Button>
                <Button variant="outlined" sx={{ ml: 1 }}>Message</Button>
              </CardContent>
            </Card>

            <Card sx={{ mt: 4 }}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Language color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="https://lingesh.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GitHub sx={{ color: '#333333' }} />
                    </ListItemIcon>
                    <ListItemText primary="lingesh" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Twitter sx={{ color: '#55acee' }} />
                    </ListItemIcon>
                    <ListItemText primary="@lingesh" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Instagram sx={{ color: '#ac2bac' }} />
                    </ListItemIcon>
                    <ListItemText primary="lingesh" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Facebook sx={{ color: '#3b5998' }} />
                    </ListItemIcon>
                    <ListItemText primary="lingesh" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={8}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2">Full Name</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color="textSecondary">Lingesh</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2">Email</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color="textSecondary">example@example.com</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2">Phone</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color="textSecondary">(097) 234-5678</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2">Mobile</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color="textSecondary">(098) 765-4321</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant="body2">Address</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography color="textSecondary">Bay Area, San Francisco, CA</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Grid container spacing={4} mt={4}>
              <Grid item md={12}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" gutterBottom>
                      <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>assignment</Box> Interview Progress
                    </Typography>
                    <Typography variant="body2">Technical Skills</Typography>
                    <LinearProgress variant="determinate" value={75} />
                    <Typography variant="body2" sx={{ mt: 2 }}>Behavioral Skills</Typography>
                    <LinearProgress variant="determinate" value={85} />
                    <Typography variant="body2" sx={{ mt: 2 }}>Problem Solving</Typography>
                    <LinearProgress variant="determinate" value={65} />
                    <Typography variant="body2" sx={{ mt: 2 }}>Communication</Typography>
                    <LinearProgress variant="determinate" value={80} />
                    <Typography variant="body2" sx={{ mt: 2 }}>Confidence</Typography>
                    <LinearProgress variant="determinate" value={70} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
