/* eslint-disable react-hooks/exhaustive-deps */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


function MainCard() {  
  const [like, setLike] = useState(true)
  const [data, setData] = useState({})
  
  const toggleLike = () => {
    setLike(!like)
    localStorage.setItem(setLike);
  }; 
  

  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
  
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(API_URL)
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();    
  }, []);

  
  return (
    <div className="col d-flex justify-content-center">
      <Card 
        style={{ height: '80%', margin: '2em'}}
        className="mb-2"
        bg="dark"
        text="light"
      >
        <Card.Title>
        <FontAwesomeIcon/>
          Nasa Image of The Day
        </Card.Title>
        <Card.Img variant="top" src={data.hdurl} />
        <Card.Body>
          <Card.Subtitle>{data.title}</Card.Subtitle>
          <Card.Text>
            {data.explanation}
          </Card.Text>
          <Button 
            variant="primary" 
            onClick={toggleLike} active           
          >
            
            {like ? "Like" : 
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ paddingRight: 1 }}
            />}
          </Button>
          <Button 
            style={{marginLeft: '2em'}}
            href={data.hdurl}
          >
            Download Image
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MainCard
