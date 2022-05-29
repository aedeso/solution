import React, { useState, useEffect } from "react";
import { List } from "./list";
export const Datamuse = () => {

    const [appState, setAppState] = useState({
        data: [],
        isLoading: false
    })

    const url = 'https://api.datamuse.com/words?';
    const queryparams = 'rel_syn=';
    const word = 'slow';
    const endpoint = `${url}${queryparams}${word}`
    useEffect(()=>{
        
        setAppState({isLoading: true})
        const fetchData = async() => {
        try {
            const response = await fetch(endpoint);
            const json = await response.json();
            setAppState({ data: json, isLoading: false})
            
        } catch(error) {
            console.log("error",error)
        }
        }

        fetchData();
    },[endpoint]);

    console.log(appState.data)
    // return <p>{JSON.stringify(appState.data, null, 2)}</p>

    return <List isLoading={appState.isLoading} array={appState.data} />
            
    // return (
    //     <ul>
    //         {
    //             (appState.data).map((obj, i) => {
    //                 return (
    //                     <li key={i}>{obj.word}</li>
    //                 )
    //             })
    //         }
    //     </ul>
    // )
}
