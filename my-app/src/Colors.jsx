import React from "react"
import  Color  from "./Color"
function Colors({ colorArray }) {
    return(
        <ul>
            {colorArray.map(color => (
                <Color key={color.id} color={color} />
            ))}
        </ul>
    )
}
export default Colors