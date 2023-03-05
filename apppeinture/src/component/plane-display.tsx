import React, {useState} from 'react';
import SearchBar from "./search-bar";


const PlaneDisplay = () => {
    const [word, setWord] = useState<string>(undefined)
    const handleWord = (researchWord: string) => {
        setWord(researchWord)
    }
    return (
        <div>
            <SearchBar researchWord={handleWord}/>
        </div>
    );
};

export default PlaneDisplay;
