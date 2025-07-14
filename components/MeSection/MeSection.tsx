
"use client";
import React from 'react'
import Grid from '@mui/material/GridLegacy';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { FlipWordsDemo } from '@/components/FlipWords/FlipWords';
import Typography from '@mui/material/Typography';
const MeSection = () => {
    return (
        <>
            <Grid container spacing={1} alignItems="center" >
                <Grid item xs={12} md={6}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={12} md={6} className='sm:mx-auto'>
                    <FlipWordsDemo />   
                </Grid>
            </Grid>
        </>
    )
}

export default MeSection