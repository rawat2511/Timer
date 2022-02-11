import React, { useState, useEffect } from 'react'

export const Timer = ({ initialTime, finalTime, setStart }) => {

    const [value, setValue] = useState( initialTime );

    useEffect(() => {

        var id = setInterval(() => {
            setValue(
                (pre) => {
                    if( pre < finalTime ){
                        return pre + 1;
                    }
                    else{
                        setStart( false );
                    }
                }
            );
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [])
    
    return (
        <div>
            <h1>Value : {value}</h1>
            <h1>Timer Running </h1>
        </div>
    )
}
