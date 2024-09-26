import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, Paper, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useAuth } from '../contexts/AuthContext';
import { firestore } from '../firebase';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
}));

const FixedHeightPaper = styled(StyledPaper)(({ theme }) => ({
  height: 240,
}));

function Dashboard() {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ content: '', scheduledDate: '' });

  useEffect(() => {
    const fetchPosts = async () => {
      if (currentUser) {
        const postsRef = collection(firestore, 'posts');
        const q = query(postsRef, where('userId', '==', currentUser.uid));
        const snapshot = await getDocs(q);
        const fetchedPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(fetchedPosts);
      }
    };

    fetchPosts();
  }, [currentUser]);

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postsRef = collection(firestore, 'posts');
    await addDoc(postsRef, {
      ...newPost,
      userId: currentUser.uid,
      createdAt: serverTimestamp(),
    });
    setNewPost({ content: '', scheduledDate: '' });
    // Refresh posts
    const q = query(postsRef, where('userId', '==', currentUser.uid));
    const snapshot = await getDocs(q);
    const fetchedPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(fetchedPosts);
  };

  return (
    <StyledContainer maxWidth="lg">
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <StyledPaper>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Scheduled Posts
            </Typography>
            {posts.map((post) => (
              <StyledPaper key={post.id}>
                <Typography>{post.content}</Typography>
                <Typography variant="caption">Scheduled for: {new Date(post.scheduledDate).toLocaleString()}</Typography>
              </StyledPaper>
            ))}
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <StyledPaper>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Create New Post
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="content"
                label="Post Content"
                fullWidth
                multiline
                rows={4}
                value={newPost.content}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                name="scheduledDate"
                label="Schedule Date"
                type="datetime-local"
                fullWidth
                value={newPost.scheduledDate}
                onChange={handleInputChange}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Schedule Post
              </Button>
            </form>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default Dashboard;