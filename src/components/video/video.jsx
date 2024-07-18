import React from 'react';
import '../video/style.css';



function Video() {
    return (
        <div className="Video">
                <div className="container_video">
                    <div className="video">
                    <iframe className='iframes' width="1218" height="685" src="https://www.youtube.com/embed/7xWe8CTBXSw" title="Как работает виджет Comin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div><br />
                </div>
            </div>
    );
}

export default Video;
