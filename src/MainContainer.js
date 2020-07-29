import React from 'react'
import './MainContainer.css'
import VideoCard from './VideoCard'

//main container that holds all the videos
function MainContainer() {
    return (
        <div className="mainContainer">
            <h2 className="mainContainer__title">Recommended</h2>
            <div className="mainContainer__videos">
                <VideoCard title="Test Video" channelName="Some channel" noOfViews="5.2M Views" postedDate="3 Days ago"
                    thumbnailUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg" 
                    channelImageUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg"
                />
                <VideoCard title="Test Video" channelName="Some channel" noOfViews="5.2M Views" postedDate="3 Days ago" isCustom={true}
                    thumbnailUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg" 
                    channelImageUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg"
                />            
                <VideoCard title="Test Video" channelName="Some channel" noOfViews="5.2M Views" postedDate="3 Days ago"
                    thumbnailUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg" 
                    channelImageUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg"
                />            
                <VideoCard title="Test Video" channelName="Some channel" noOfViews="5.2M Views" postedDate="3 Days ago"
                    thumbnailUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg" 
                    channelImageUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg"
                />
                <VideoCard title="Test Video" channelName="Some channel" noOfViews="5.2M Views" postedDate="3 Days ago"
                    thumbnailUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg" 
                    channelImageUrl="https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-1280x995.55555555556-c-default.jpg"
                />
            </div>
        </div>
    )
}

export default MainContainer
