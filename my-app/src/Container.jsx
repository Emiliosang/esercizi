import { useState } from "react"

function Container({ title, children }){
    const [collapsed, setCollapsed] = useState(false)

    function handleClick() {
        setCollapsed(t => !t)
    }
    return (
        <>
            <div onClick={handleClick}>{title}</div>
            {!collapsed && <div>{children}</div>}
        </>
    )
}

export default Container