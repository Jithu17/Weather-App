import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Temperature from '../components/Temperature';
import React from 'react';


it('renders correct temperature', () => {
    let mockData = 
        {
            id: 4579001503842304,
            weather_state_name: "Clear",
            weather_state_abbr: "c",
            wind_direction_compass: "WSW",
            created: "2021-01-22T03:20:02.475961Z",
            applicable_date: "2021-01-22",
            min_temp: 2.245,
            max_temp: 6.765000000000001,
            the_temp: 6.24,
            wind_speed: 5.219969840573716,
            wind_direction: 255.1708445961271,
            air_pressure: 993.5,
            humidity: 71,
            visibility: 8.514960132824307,
            predictability: 68
        }

    const { getByText } = render(<Temperature data={mockData} />);
    const minTemperature = getByText(`Min 2.25 deg`);
    const maxTemperature = getByText(`Max 6.77 deg`);
    expect(minTemperature).toBeTruthy();
    expect(maxTemperature).toBeTruthy();
});