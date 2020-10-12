import { render } from '@testing-library/react';
import React from 'react';

const counter = (props) => {
    return(<ul>
        <li>
            {props.created}
        </li>
        <li>
            {props.updated}
        </li>
        <li>
            <button onClick={props.decrement} value={props.counter}>-</button>
            <div>{props.counter}</div>
            <button onClick={props.increment} value={props.counter}>+</button>
            <button onClick={props.deleteCounter}>ELIMINAR</button>
        </li>
    </ul>)
}
export default counter;