import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box} from "@mui/material";
import './style.css';

const ClubsTitle = () => {
    const [clubs, setClubs] = useState([])
    useEffect( () => {
        axios.get('https://64e2f01ebac46e480e77eeff.mockapi.io/api/lvl1/users')
            .then(res => setClubs(res.data))
            .catch(err => console.log(err))
    },[])

    console.log(clubs)
    return (
        <div className={'clubsWrapper'}>
            {
                clubs && clubs.map(clubs => {
                    console.log(clubs.image)
                    return (
                        <div  key={clubs.id}>
                            <Box className={'cardInfo'}>
                                <div className={'imgCarad'}>
                                    <img src={clubs.image} alt=""/>
                                </div>
                                <div className={'titleCard'}>
                                    <h3>{clubs.heading}</h3>
                                    <p>{clubs.title}</p>
                                    <h4>{clubs.rating}</h4>
                                </div>
                            </Box>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ClubsTitle;