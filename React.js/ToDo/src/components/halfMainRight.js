import React from "react";
import DescItem from "./DescItem";
import Form from "./Form";
const RHContent = (active) => {
    return(
        <div>
            {active === "RHC" &&  <DescItem/>}
            {active === "FRM" &&  <Form/>}
        </div>
    );
}
export default RHContent;