import { memo } from 'react'

function Footer(props) {
    return (
        <h1>{props.content}</h1>   
    )
}

export default memo(Footer)