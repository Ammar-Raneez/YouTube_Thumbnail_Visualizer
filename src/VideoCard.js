import React, { useState } from 'react'
import './VideoCard.css'
import Modal from '@material-ui/core/Modal';
import { TextField, makeStyles, Button } from '@material-ui/core';

//just some modal configurations and styling
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


//individual videos
function VideoCard({ thumbnailUrl, channelImageUrl, postedDate, isCustom, title, channelName, noOfViews }) {
    const classes = useStyles();

    //currently entered input, being updated dynamically
    const [input, setInput] = useState('');
//final image url, we have 2 separate states cuz the image would render dynamically cuz there might be an image for that
//specific url that we are still entering (ie. we wanna enter google, there can be an image at the url goog, so goog renders
//and then google renders) so to prevent this unnecessary rendering we have two states
    const [imageUrl, setImageUrl] = useState('');

//title can have only one state, but kept the same just because
    const [thumbTitle, setThumbTitle] = useState('');
    const [titleInput, setTitleInput] = useState('');

    const [open, setOpen] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    //the final output is set only upon submitting
    const handleClose = event => {
        event.preventDefault();
        setImageUrl(input);
        setThumbTitle(titleInput);
        setOpen(false);
    }

    return (
        <div className="videoCard">
            <Modal open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <form>
                        <TextField placeholder="Image URL" value={input} onChange={event => setInput(event.target.value)}/>
                        <TextField placeholder="Video Title" value={titleInput} onChange={event => setTitleInput(event.target.value)}/>
                        <Button type="submit" onClick={handleClose}>Confirm</Button>
                    </form>
                </div>
            </Modal>            

            {isCustom && !imageUrl ? (
                <button onClick={() => setOpen(true)}>Select Thumbnail</button>
            ) : 
                <img className="videoCard__thumbnail" src={imageUrl || thumbnailUrl} alt="Thumbnail" />
            }

            <div className="videoCard__info">
                <div className="videoCard__channelImgContainer">
                    <img src={channelImageUrl} alt="Channel" />   
                </div>

                <div className="videoCard__infoText">
{/*if we have added a new thumbnail, thumbTitle is present and so that displays, else the currently displayed one is*/}
                    <p className="videoCard__title">{thumbTitle || title}</p>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__noOfViewsPostedDate">{noOfViews} • {postedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
