import { render } from '@testing-library/react';
import React from 'react';

const counter = (props) => {
    return(<ul className="boxCounter">
        <li>
            Creado:{props.created}
        </li>
        <li>
            Actualizado:{props.updated}
        </li>
        <li className="counterDirection">
            <button onClick={props.decrement} value={props.counter} className="buttonCounter">-</button>
            <div>{props.counter}</div>
            <button onClick={props.increment} value={props.counter} className="buttonCounter">+</button>
            <button onClick={props.deleteCounter} className="buttonCounter">ELIMINAR</button>
        </li>
    </ul>)
}
export default counter;