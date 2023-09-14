import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box} from "@mui/material";

const ClubsTitle = () => {
    const [clubs, setClubs] = useState([])
    useEffect( () => {
        axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            .then(res => setClubs(res.data))
            .catch(err => console.log(err))
    },[])

    console.log(clubs)
    return (
        <div className={'row'}>
            {
                clubs && clubs.map(clubs => {
                    console.log(clubs.image)
                    return (
                        <div key={clubs.id} className={'col-3'}>
                            <Box>
                                <div className="box">
                                    <img className={'list-img'} src={`${clubs.image}`} alt="dsfsd"/>
                                    <div>
                                        <h3>{clubs.title}</h3>
                                        <p>{clubs.price}</p>
                                    </div>

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