import React from 'react';


const Rank = ({ userName, entries }) => {
    return (
        <div>
            <div className="f3 white">
                {`${userName}, your current entry count is. . .`}
            </div>
            <div className="f1 white">
                {entries}
            </div>
        </div>
    )
}

export default Rank;