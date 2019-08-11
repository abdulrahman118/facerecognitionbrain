import React from 'react';

const ImageFace = ({ box, id }) => {
    return (
        <div key={id} className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
    )
}

export default ImageFace;