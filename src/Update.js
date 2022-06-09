import React, { useEffect, useState } from 'react'
import { Container, Box, TextField, Button, Stack } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Layout from './Layout'


const Update = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {id} = params

    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('');

    useEffect(() => {
        let url = `http://localhost:1234/posts/${id}`
        axios.get(url).then((res) =>{
            setTitle(res.data.title)
            setBody(res.data.body)
        } )
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault()
        let url = `http://localhost:1234/posts/${id}`
        axios.patch(url, {
            title: Title,
            body: Body,
        })
            .then(function (res) {
                console.log('Submitted')
                navigate(`/read/${id}`)
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
                        <h2>Update Your Post</h2>
                        <h2>Title = {Title}</h2>
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
                            onClick={handleUpdate}
                            color={'warning'}
                            variant='outlined'
                        >
                            Update
                        </Button>
                    </Stack>
                    {/* </form> */}
                </Box>
            </Container>

    )
}

export { Update }
