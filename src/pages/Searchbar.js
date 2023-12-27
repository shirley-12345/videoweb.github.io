import React, { useState, useEffect, axios } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import YouTube from 'react-youtube';
import { useParams } from 'react-router';



var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic SVM6UEBzc3cwcmQ=");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// const response = await fetch("https://www.googleapis.com/youtube/v3/search?q=apple&part=snippet&maxResult=1&type=video&key=AIzaSyDrFzC20XaK9MkwLzqA09J3-CqMwwx94Ps", requestOptions)


const Fetch = () => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?q=apple&part=snippet&maxResult=1&type=video&key=AIzaSyDrFzC20XaK9MkwLzqA09J3-CqMwwx94Ps', requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setVideo(data.items.id);
            });
    }, []);



    return (
        <form >
            <input
                type="text"
                defaultValue="Search"
            // onChange={(event) => setTerm(event.target.value)}


            />
            <AiOutlineSearch
                className="searchbutton"
                size={20}
            // onClick={HandleClick}
            />

            <div>

                <ul>
                    {video.map(video => (
                        <li key={video.id}>{video.id}</li>
                    ))}
                </ul>

            </div>

            {/* <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div> */}


            {/* <div>
                <div className="ui embed">
                
                    <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen title="Video player" />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div> */}







        </form>


    );


}


export default Fetch;

