import React from 'react';
import { Col, Card, CardTitle, CardText } from "reactstrap";

//create a card to give the temperature details
const Temperature = (props) => {
    return (
        <Col xs={2} style={{ marginTop: 10, marginBottom: 10 }}>
            <Card body>
                <CardTitle tag="h5">{getDayByDate(props.data.applicable_date)}</CardTitle>
                <CardText>Max {parseFloat(props.data.max_temp).toFixed(2)} deg</CardText>
                <CardText>Min {parseFloat(props.data.min_temp).toFixed(2)} deg</CardText>
            </Card>
        </Col>
    )
}

/**
 * get day with the given date
 * @param {*} date 
 */
const getDayByDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDay();
    switch(day){
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            break;
    }
}

export default Temperature;