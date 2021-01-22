import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forecast from '../components/Forecast';
import React from 'react';

it('render forecast component', () => {

    const selectedValue = {
        latt_long: "51.506321,-0.12714",
        location_type: "City",
        title: "London",
        woeid: 44418
    }
    const component = render(<Forecast selectedValue={selectedValue} />);
    expect(component).toBeDefined();

})
