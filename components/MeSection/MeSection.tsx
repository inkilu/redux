
"use client";
import React from 'react'
import Grid from '@mui/material/Grid';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { FlipWordsDemo } from '@/components/FlipWords/FlipWords';
import { useWindowSize } from '@/lib/useWindowSize';
const MeSection = () => {
    const { width } = useWindowSize();

    const TEXTS = {
        bigScreen:{
            txt1: "Hi, I'm Gautham Krishna, a JavaScript developer passionate about building",
            txt2: "web applications. I specialize in",
            txt3:".Whether it's crafting sleek UIs or integrating complex APIs, I love turning ideas into polished digital experiences."
        },
        smallScreen:{
            txt1: "Hi, I'm Gautham, a JavaScript developer building",
            txt2: "web applications. I specialize in",
            txt3:", I love turning ideas into polished digital experiences."
        },
    }

    return (
        <>
            <Grid container spacing={1} alignItems="center">
                <Grid size={{ xs: 12, md: 5 }} className='max-md:mb-8'>
                    <ProfileCard />
                </Grid>
                {width > 899 ? <Grid size={{ xs: 12, md: 7 }} className='sm:mx-auto px-6 md:pl-0 md:pr-16 lg:pr-24'>
                    <FlipWordsDemo TEXTS={TEXTS.bigScreen} />
                </Grid> :
                    <Grid size={{ xs: 12, md: 7 }} className='sm:mx-auto px-6 md:pl-0 md:pr-16 lg:pr-24'>
                        <FlipWordsDemo TEXTS={TEXTS.smallScreen} />
                    </Grid>
                }
            </Grid>
        </>
    )
}

export default MeSection