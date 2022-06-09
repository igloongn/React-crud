import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material'
import axios from 'axios'


export function Read() {
    const [data, setdata] = useState(null)
    const goto = useNavigate()

    useEffect(() => {
        const url = 'http://localhost:1234/posts/'
        async function view() {
            const fetch = await axios(url)
            return setdata(fetch.data)
        }
        view()
    }, [])
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Stack>
                <Typography
                    align='center'
                    gutterBottom
                    variant='h2'
                    
                >
                    List Of Post
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {data && data.map((loop) => (
                        <div key={loop.id} >
                            <ListItem alignItems="flex-start" onClick={() => goto('/read/' + loop.id)}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={loop.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="primary"
                                            >
                                            </Typography>
                                            {loop.body}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}

                </List>

            </Stack>
        </Container>
    );
}
