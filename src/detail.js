import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

export function Detail() {
    const navigate = useNavigate()
    const [data, setdata] = useState(null)
    const param = useParams()
    const { id } = param

    const [showyourself, setshowyourself] = useState(false)
    const MyModel = () => {

        return (
            <div style={{ 
                position: 'absolute',
                top:'0'
            }}>
                <h2>Delete</h2>
            </div>
        )
    }

    useEffect(() => {
        const url = 'http://localhost:1234/posts/' + id + '/'
        async function view() {
            const fetch = await axios(url)
            return setdata(fetch.data)
        }
        view()
    }, [])

    return (
        <center>
            {data && <>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
                <Button color={'warning'} onClick={() => navigate(`/update/${id}`)}>
                    Update
                </Button>
                <br />
                <Button color={'error'} onClick={() => setshowyourself(true)}>
                    Delete
                </Button>
                {showyourself && MyModel()}

                
            </>
            }
        </center>
    )
}
