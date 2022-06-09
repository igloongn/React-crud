import React, { useState } from 'react'
import { Container, Box, TextField, Button, Stack } from '@mui/material'
import axios from 'axios'
import Layout from './Layout'


const Create = () => {
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('');

    const handleUpload = (e) => {
        e.preventDefault()
        let url = 'http://localhost:1234/posts/'
        axios.post(url, {
            title: Title,
            body: Body,
        })
            .then(function (res) {
                console.log('Submitted')
                setTitle('')
                setBody('')
            })
            .catch(function (error) {
                console.log('Error')
            })
    }

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
                <Box>
                    <Stack spacing={4}>
                        <h2>Create Your Post</h2>
                        {/* <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '200px',
                        }}
                    > */}
                        <TextField
                            label='Title'
                            variant='filled'
                            autoComplete='name'
                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label='Body'
                            variant='filled'
                            multiline
                            minRows={3}
                            autoComplete='body'
                            value={Body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <Button
                            onClick={handleUpload}
                        >
                            Upload
                        </Button>
                    </Stack>
                    {/* </form> */}
                </Box>
            </Container>

    )
}

export { Create }
