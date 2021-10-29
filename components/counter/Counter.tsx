import React, {useState} from 'react';

import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from '../../state/counterSlice';
import styles from './Counter.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

export type nullable<T> = (T | null | undefined);

export function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

//if component internally does dispatch , pass and propogate dispatch to component ,dispatch:any

    return (
        <div>
            <BtnActionRow dispatch={dispatch} count={count}/>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    );
}


export function BtnActionRow(props:any) {

    return (
        <div className={styles.row}>
            <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => props.dispatch(decrement())}
            >
                -
            </button>
            <span className={styles.value}>{props.count}</span>
            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => props.dispatch(increment())}
            >
                +
            </button>
        </div>
    );
}