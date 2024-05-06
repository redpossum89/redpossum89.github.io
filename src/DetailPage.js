import React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
const DetailPage = () => {
    const {state} = useLocation();

    const makeImgSet = (count, path) => {
        const ret = [];
        for(let i=1;i<=count;i++){
            const tempPath = `${process.env.PUBLIC_URL}/images/${path}/${path}${i}.jpg`
            ret.push(<img src={tempPath} style={{width: '80%'}}/>)
        }
        return ret;
        
    }
    return (
        <Box style={{paddingLeft: '80px', paddingRight:'80px'}}>
        <Grid container spacing={2}>
            <Grid item xs={2} textAlign='left'>
                <h3>작업 참여도</h3>
                <p>100% 1인 작업</p>

                <h3>기간</h3>
                <p>2019.01</p>

                <h3>카테고리</h3>
                <p>상세페이지 디자인</p>

            </Grid>
            <Divider orientation="vertical" flexItem/>
            <Grid Item flex={1} alignContent='left' textAlign='left' style={{paddingLeft: '10%'}}>
                <h1> {state.title} </h1>
                
                {makeImgSet(state.total, state.path)}
            </Grid>
        </Grid>
        </Box>
    )
}

export default DetailPage;