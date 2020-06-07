import * as React from 'react';
import { MainNewsCard } from './main-news-card';
//@ts-ignore
import exampleimage from '/images/example/220200125114027.jpg';
export default 
    {
        title: 'Main News Card',
        component: MainNewsCard,
    };
/**
 * @type  {import('components/list-tag/list-tag').ListTagProps}
 */

const mainListTagProps = 
    {
        tags : [
                {text:'AMD'},
                {text:'Graphic Card'}
               ],
        gap: '20',
    }
    
/**
 * @type {import('./main-news-card').mainNewsCardProps}
*/
   const mainNewsCardStory = {
    mainImage:exampleimage,
    tags : [
        mainListTagProps,
      ],
    title:'AMD Launch the Radeon VII: The next power product against Nvidia',
    link: 'https://github.com/diegonzs/hermanospc-news/tree/main-new-card',
    source: 'Reactions Section',
    createdAt: '1 day ago',
  }
  

export const mainNewsCardSimple = () => <MainNewsCard {...mainNewsCardStory} />
