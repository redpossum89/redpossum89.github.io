import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { itemData } from '../const/const_detailInfo';
const PortfolioList = (props) => {
  const category = props.category;
  return (
    <Box sx={{ width: 'calc(100% - 160px)', paddingLeft: '80px' }}>
      <ImageList variant='masonry' cols={3} gap={8}>
        {itemData.map((item) => {
          console.log(`category: ${category}, item.category: ${item.category}`);
          if (!category || item.category == category) {
            return (
              <ImageListItem className='image-master' key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  className='image-thumbnail'
                  loading='lazy'
                  onClick={() => props.handleClick(item)}
                />
                <ImageListItemBar
                  style={{ fontFamily: 'Pretendard' }}
                  position='below'
                  title={item.title}
                />
              </ImageListItem>
            );
          }
        })}
      </ImageList>
    </Box>
  );
};
export default PortfolioList;
