import React from 'react';
import {Box, Link, Stack, Typography} from "@mui/material";
import CurvedText from "../CurvedText";
import {info} from "../../info/Info";
import Avatar from '../../img/avatar.png';
import SocialIcon from "../SocialIcon";

export default function Info() {
    return(
        <Box>
            <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'70vh'}>
                <CurvedText text={info.hello} objectSize={200} overlap={true} spacing={30} offset={60} />
                <img src= {Avatar} alt="Human Avatar" width={150}/>
                <Stack gap={2} mt={2} textAlign={'center'}>
                    <Typography fontWeight={'bold'}>📱 {info.currentCompany} </Typography>
                    <Typography fontWeight={'bold'}>📍 {info.basedIn}</Typography> 
                    <Typography fontWeight={'bold'}>👩🏻‍💻 {info.resume} <Link href={'/img/Resume.pdf'} target={'blank'}> my Resume</Link></Typography>
                    <Box display={'flex'} gap={'1.5rem'} justifyContent={'left'} fontSize={{xs: '1.5rem', md: '2.0rem'}}>
                    {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                    ))}
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}