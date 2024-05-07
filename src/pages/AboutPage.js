import { Box } from '@mui/material';
import React from 'react';

const AboutPage = () => {
  return (
    <Box style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <Box className='about-title'>
        안녕하세요. <br></br> 디자이너 김소연입니다.
      </Box>
      <Box className='about-content'>
        1994년에 태어나서 행복하게 살고 있어요 <br />
        스쿠버 다이빙과 수영이 취미이구요 <br />
        행복하게 살고 싶습니다 <br />
      </Box>
      <Box className='about-content'>
        1994년에 태어나서 행복하게 살고 있어요 <br />
        스쿠버 다이빙과 수영이 취미이구요 <br />
        행복하게 살고 싶습니다 <br />
      </Box>
    </Box>
  );
};

export default AboutPage;
