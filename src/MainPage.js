import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { useNavigate } from "react-router-dom";
const itemData = [
    {
      img: process.env.PUBLIC_URL + '/images/pudding/pudding1.jpg',
      path: 'pudding',
      title: 'Pudding 상세페이지',
      total: 7
    },
    {
      img: process.env.PUBLIC_URL + '/images/KakaoTalk_20220614_135116312_02.jpg',
      path: 'Books',
      title: '대단한 상세페이지2'
    },
    {
      img: process.env.PUBLIC_URL + '/images/KakaoTalk_20220614_135116312_01.jpg',
      path: 'Sink',
      title: '대단한 상세페이지3'
    },
    {
      img: process.env.PUBLIC_URL + '/images/KakaoTalk_20220614_135116312_01.jpg',
      path: 'Kitchen',
      title: '대단한 상세페이지4'
    },
    {
      img: process.env.PUBLIC_URL + '/images/KakaoTalk_20220614_135116312_01.jpg',
      path: 'Blinds',
      title: '대단한 상세페이지5'
    },
    {
      img: process.env.PUBLIC_URL + '/images/KakaoTalk_20220614_135116312_01.jpg',
      path: 'Chairs',
      title: '대단한 상세페이지6'
    },
    {
      img: process.env.PUBLIC_URL + '/images/KakaoTalk_20220614_135116312_01.jpg',
      path: 'Laptop',
      title: '대단한 상세페이지7'
    }
  ];
const MainPage = () => {
    let navigate = useNavigate();
    function handleClick(item) {
      navigate("/portfolio/detail", {state: item});
    }
    return (
        <Box sx={{width: 'calc(100% - 160px)', paddingLeft: '80px'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem className='image-master' key={item.img} >
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        className='image-thumbnail'
                        loading="lazy"
                        onClick={() => handleClick(item)}
                    />
                    <ImageListItemBar position="below" title={item.author} />
                </ImageListItem>
            ))}
            </ImageList>
        </Box>
    )
}

export default MainPage;