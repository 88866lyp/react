import React from 'react';
import PictureSelect from './PictureSelect.js'
const Page = () => {
    const [value, setValue] = React.useState(['1']);
    const pictures =  [

        {
      
          id: '1',
      
          name: 'foo',
      
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      
        },
      
        {
      
          id: '2',
      
          name: 'foo',
      
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      
        },
      
        {
      
          id: '3',
      
          name: 'foo',
      
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      
        },
      
      ];; // 同上面的数据
  
    
    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
  };
  
  
  export default Page;
  
  