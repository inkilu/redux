
"use client";
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { FlipWordsDemo } from '@/components/FlipWords/FlipWords';
import Typography from '@mui/material/Typography';
const MeSection = () => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const TEXTS = {
        bigScreen:{
            txt1: "Hi, I'm Gautham Krishna, a JavaScript developer passionate about building",
            txt2: "web applications. I specialize in",
            txt3:".Whether it's crafting sleek UIs or integrating complex APIs, I love turning ideas into polished digital experiences."
        },
        smallScreen:{
            txt1: "Hi, I'm Gautham Krishna, a JavaScript developer building",
            txt2: "web applications. I specialize in",
            txt3:"I love turning ideas into polished digital experiences."
        },
    }
    useEffect(() => {
        function handleResize() {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // cleanup
    }, []);

    return (
        <>
            <Grid container spacing={1} alignItems="center">
                <Grid size={{ xs: 12, md: 5 }} className='max-md:mb-48'>
                    <ProfileCard />
                </Grid>
                {size.width > 899 ? <Grid size={{ xs: 12, md: 7 }} className='sm:mx-auto'>
                    <FlipWordsDemo TEXTS={TEXTS.bigScreen}/>
                </Grid> :
                    <Grid size={{ xs: 12, md: 7 }} className='sm:mx-auto'>
                        <FlipWordsDemo TEXTS={TEXTS.smallScreen}/>
                    </Grid>
                }
            </Grid>
        </>
    )
}

export default MeSection