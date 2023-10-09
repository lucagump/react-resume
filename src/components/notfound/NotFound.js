import React from 'react';
import {Box, Stack} from "@mui/material";
import {info} from "../../info/Info";
import Avatar from '../../img/avatarNotFound.png';

export default function NotFound() {
    return(
        <Box>
            <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'70vh'}>
                <img src= {Avatar} alt="Human Avatar" width={150}/>
                <h2>{info.notFound}</h2>
            </Stack>
        </Box>
    )
}