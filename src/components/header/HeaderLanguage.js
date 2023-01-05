import React, { useState} from 'react';

import { Select } from "./Select";

const HeaderLanguage = () => {
    const languages = [
        { value: 'UA'},
        { value: 'RU'}
      ];
      
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].value);

    return (
        <>
            <div className="header-top__language">
                {
                    languages.map(({value}, i) => {
                        return (
                          <button 
                            className={`header-top__language-btn 
                                        ${value == selectedLanguage ? 'active' : ''}`} 
                            key={i}
                            onClick={()=>{
                              setSelectedLanguage(value);
                          }}>{value}</button>
                        )           
                      })
                }                           
            </div>  
            <Select props={languages} option={selectedLanguage} setOption={setSelectedLanguage}/>
        </>
    )
}

export {HeaderLanguage};