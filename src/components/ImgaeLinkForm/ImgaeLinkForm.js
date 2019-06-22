import React from 'react';
import './ImgaeLinkForm.css'


const ImgaeLinkForm = ({ onInputChange, onButtonClick}) => {
    return (
        <div>
            <p className="f3">{'This magic brain will detect faces in your picture. Give it a try!'}</p>
            <div className='center'>
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 w-70 pa2" type="text" onChange={onInputChange} />
                    <button className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple" onClick={onButtonClick}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImgaeLinkForm;