import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select/async';

const searchApi = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=`

const SearchBar = (props) => {

    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

   // handle selection
    const handleChange = value => {
        setSelectedValue(value);
        props.handleSelected(value);
    }

    // handle input change event
    const handleInputChange = value => {
        setValue(value);
    };
    
   
    let cancel;
    // load options using API call
    const loadOptions = async () => {
        if(cancel){
            cancel.cancel()
        }
        // Create a new CancelToken
        cancel = axios.CancelToken.source();
        try{
            if(inputValue !== ''){
                const res = await axios.get(`${searchApi}${inputValue}`);
                const result = res.data;
                return result;
            }
            
        } catch(error) {
            if(axios.isCancel(error)) {
                // Handle if request was cancelled
                console.log('Request canceled', error.message);
            } else {
                // Handle usual errors
                console.log('Something went wrong: ', error)
            }
        }
    };

    return (
        <div data-testid="search-component">
        <Select
            placeholder="Enter Location"
            isClearable
            cacheOptions
            defaultOptions
            value={selectedValue}
            getOptionLabel={e => e.title}
            getOptionValue={e => e.title}
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onChange={handleChange}
        />
        </div>
    )
}

export default SearchBar;