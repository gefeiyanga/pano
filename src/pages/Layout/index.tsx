import React, { useState } from 'react'

import Header from '../../componment/Header'

export default (props: any) => {
    
    const [ count, setCount ] = useState<number>(0)
    
    const addCount = () => {
        setCount(count + 1)
    }
    
    return (
        (
            <>
                <Header />
                {props.children}
            </>
        )
    )
}