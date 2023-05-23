import React from "react";

const DescItem = (props) =>{
    {/* Dispaly value of ItemDesc */}
    return(
        <div className="description-td">
                <div className="itemDesc">{props.desc}</div>
        </div>
    );
}
export default DescItem;