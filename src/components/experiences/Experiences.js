import React from 'react';
import Style from './Experiences.module.scss';
import {Container, Box, Stack} from "@mui/material";
import {info} from "../../info/Info";

export default function Experiences() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Container>
                <h1 className={Style.h1}>Experiences</h1>
                <ul>
                    {info.experiences.map((experience, index) => (
                        <li key={index}>

                            <Stack direction="row"><h2 className={Style.subtitle}>{experience.position}</h2></Stack> 
                            <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={2}>
                                <h4 className={Style.university}>{experience.company}</h4>
                                <p className={Style.date}>{experience.startDate} - {experience.endDate}</p>
                            </Stack>
                            <p className={Style.text}>{experience.description}</p>
                            {/* <ul className={Style.text}>
                                {experience.activities.map((activity, index) => (
                                    <li key={index}>
                                        <Stack direction="row">
                                            <p className={Style.copy}>{activity}</p>
                                        </Stack>
                                    </li>
                                ))}
                            </ul>  */}
                        </li>
                    ))}
                </ul>        
                <h1 className={Style.h1}>Education</h1>
                <ul>
                    {info.educations.map((education, index) => (
                        <li key={index}>

                            <Stack direction="row"><h2 className={Style.subtitle}>{education.course}</h2></Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="baseline" spacing={2}>
                                <h4 className={Style.university}>{education.university}</h4>
                                <p className={Style.date}>{education.startDate} - {education.endDate}</p>
                            </Stack>
                        </li>
                    ))}
                </ul>  

                <h1 className={Style.h1}>Certifications</h1>    
                <ul>
                    {info.certifications.map((certification, index) => (
                        <li key={index}>
                            <Stack  direction="row">
                                <i class="fa fa-check"></i>
                                <p className={Style.copy}>{certification}</p>   
                            </Stack>
                            
                        </li>
                    ))}
                </ul>  
                <br></br>
                <br></br>
                <br></br>
            </Container>
        </Box>
    )
}