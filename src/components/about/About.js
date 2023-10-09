import React from 'react';
import Style from './About.module.scss';
import {Container, Box, Grid, } from "@mui/material";
import InstaMountain from '../../img/insta-1.jpg';
import InstaBike from '../../img/insta-2.jpg';
import InstaSnow from '../../img/insta-3.jpg';
import {info} from "../../info/Info";

export default function About() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Container>

                <h1 className={Style.h1}>Interests</h1>

                <iframe 
                    title="spotify" 
                    src={info.playlistAbout} 
                    width="90%" 
                    height="45%" 
                    frameBorder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>

                <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                    <Grid xs>
                        <img src= {InstaMountain} alt="Human Avatar" width={200}/>
                    </Grid>
                    <Grid xs>
                        <img src= {InstaBike} alt="Human Avatar" width={300}/>
                    </Grid>
                    <Grid xs>
                        <img src= {InstaSnow} alt="Human Avatar" width={200}/> 
                    </Grid>
                </Grid>
                <p className={Style.text}>{info.interests}</p>

            </Container>
        </Box>
    )
}