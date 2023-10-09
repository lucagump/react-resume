import React from 'react';
import Style from './Technologies.module.scss';
import {Container, Box, Stack, Grid, } from "@mui/material";
import {info} from "../../info/Info";

export default function Technologies() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Container>
            
                <h1 className={Style.h1}>Skills</h1>  
                
                <iframe 
                    title="spotify" 
                    src={info.playlistTechnologies} 
                    width="90%" 
                    height="75%" 
                    frameBorder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>

                <h3 className={Style.someone}>As a Project Manager</h3>    
                <ul className={Style.text}>
                    {info.methodologies.map((methodology, index) => (
                        <li key={index}>
                            <Stack direction="row">
                                <i class="fa fa-folder-open-o"></i>
                                <p className={Style.copy}>&nbsp;{methodology}</p>
                            </Stack>
                        </li>
                    ))}
                </ul> 
                


                <h3 className={Style.someone}>As a Human</h3>    
                <ul className={Style.text}>
                    {info.approaches.map((approach, index) => (
                        <li key={index}>
                            <Stack direction="row">
                                <i class="fa fa-star-o" ></i>
                                <p className={Style.copy}>&nbsp;{approach}</p>
                            </Stack>
                        </li>
                    ))}
                </ul> 

                <h3 className={Style.someone}>As a Developer - DISCONTIUNED</h3>    
                <ul className={Style.text}>
                    {info.technologies.map((technology, index) => (
                        <li key={index}>
                            <Stack direction="row">
                                <i class="fa fa-terminal"></i>
                                <p className={Style.copy}>&nbsp;{technology}</p>
                            </Stack>
                        </li>
                    ))}
                </ul> 

                <h3 className={Style.someone}>Programming Languages &amp; Tools</h3>    
                <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                    {info.techIcon.map((icon, index) => (
                        <Grid key={index} xs>
                            <i class={icon}></i>
                        </Grid>
                    ))}
                </Grid>
                <br></br>
                <br></br>

            </Container>
        </Box>
    )
}