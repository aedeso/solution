export const List = ({array, isLoading}) => {
        
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <ul>
                {array.map((obj,i) => {
                    return (
                        <li key={i}>
                            {obj.word}
                        </li>
                    )
                    
                })}
            </ul>
        )
    }
        
            
        
    
}