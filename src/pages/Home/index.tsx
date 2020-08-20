import React, { useState } from 'react'

export default (props: any) => {
    
    const [ count, setCount ] = useState<number>(0)
    
    const addCount = () => {
        setCount(count + 1)
    }
    
    return (
        <div onClick={addCount}>say hello pano {count} times</div>
    )
}