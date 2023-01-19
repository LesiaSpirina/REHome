import React, { useEffect, useState } from 'react';
import { api } from '../constants';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';



export function Articles () {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState('')

    const getFetchArticles = async () => {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(api)
        if(res.ok) {
          const data = await res.json()
          setArticles(data)
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    useEffect(() => {

    }, [])

    return (
        <>
        <div >
          <h1 >Articles</h1>
        </div>
        <Button 
                    variant="contained"
                    color="secondary"
                    size="medium"
                    onClick={getFetchArticles}
                >Get API
        </Button>
        {loading && (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
      </Stack>
        )}


        {!loading && articles.map((article) => (

        
        <Card sx={{ maxWidth: 345,
        margin: 'auto' }}
         key={article.id}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl}
          alt="foto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    ))}
       {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    
    )
}