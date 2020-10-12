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
            <button>-</button>
            <div>{props.counter}</div>
            <button>+</button>
            <button onClick={props.deleteCounter}>ELIMINAR</button>
        </li>
    </ul>)
}
export default counter;