import React from 'react'
import Story from './Story'
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
        <Story
            image="https://i.ibb.co/rb033LP/photo1.jpg"
            profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p120x120/128277187_3487235778021513_2496616901414810708_o.jpg?_nc_cat=100&ccb=2&_nc_sid=7206a8&_nc_ohc=Lpxm_UZQOPsAX8ugf4U&_nc_oc=AQmXQrdHe54E9PECwW4dPICE7pDEfLcf976O7jGKuXJ35XHg8YXy1x8z8z4BTxBwxorMcG8RL-rRVkHOLlvFdq9c&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=dde5e0e70b3d84ba523015c88cd3328e&oe=600C9F4D"
            title="Peter B. Parker"
        />
        <Story
            image="https://i.ibb.co/0jFPDPM/photo2.jpg"
            profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/c10.22.119.119a/p160x160/122416481_10217483940594048_2939288498390697154_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=hbt8GJKhQMoAX86Qq7z&_nc_ht=scontent-sjc3-1.xx&tp=27&oh=7cc191e49295823f19e264867436a5de&oe=600BCFD2"
            title="Penny Parker"
        />
        <Story
            image="https://i.ibb.co/3TZ0BBZ/photo3.jpg" 
            profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p120x120/119122003_10157278609317382_7170947948199215567_n.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=0zSix7xN7m4AX80X50S&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=97528fd28c86a0e4a71ec4265fb50083&oe=600D0FA9"
            title="Peter Porker"
        />
        <Story
            image="https://i.ibb.co/9sy7h47/photo4.jpg"
            profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/c10.22.119.119a/p160x160/122416481_10217483940594048_2939288498390697154_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=hbt8GJKhQMoAX86Qq7z&_nc_ht=scontent-sjc3-1.xx&tp=27&oh=7cc191e49295823f19e264867436a5de&oe=600BCFD2"
            title="Gwonda Stacey"
        />
        </div>
    )
}

export default StoryReel;
