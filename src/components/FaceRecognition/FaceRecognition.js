import React from 'react';
import './FaceRecognition.css'
import ImageFace from './ImageFace';

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className="center">
            <div className="mt2 absolute">
                <img id="inputImage" alt="" src={imageUrl} width="500px" height="auto" />

                {boxes.map((box, idx) => <ImageFace box={box} key={idx} />)}

                {/* <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div> */}
            </div>
        </div>
    )
}

export default FaceRecognition;