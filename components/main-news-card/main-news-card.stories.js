import * as React from 'react';
import { MainNewsCard } from './main-news-card';

export default {
    title: 'Main News Card',
    component: MainNewsCard,
};
  

export const mainNewsCardSimple = () => (
    <MainNewsCard 
        image="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC"
        tags={[{ text: 'AMD'}, {text: 'Graphic Card' }]}
        title="AMD Launch the Radeon VII: The next power product against Nvidia"
        link="https://github.com/diegonzs/hermanospc-news/tree/main-new-card"
        source="TomsHardware"
        howLong="1 day ago"
    />
)
