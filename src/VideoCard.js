import React from 'react'
import './VideoCard.css'

//individual videos
function VideoCard({ thumbnailUrl, channelImageUrl, postedDate, title, channelName, noOfViews }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={thumbnailUrl} alt="Thumbnail" />

            <div className="videoCard__info">
                <div className="videoCard__channelImgContainer">
                    <img src={channelImageUrl} alt="Channel" />   
                </div>

                <div className="videoCard__infoText">
                    <p className="videoCard__title">{title}</p>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__noOfViewsPostedDate">{noOfViews} • {postedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
