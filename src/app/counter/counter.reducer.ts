import { createReducer, on } from '@ngrx/store';
import { increment, decrement, multiplicar, dividir, reset } from './contador.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(multiplicar, (state, { numero }) => state * numero ),
    on(dividir, (state, { numero }) => state / numero ),
    on(reset, state => state = initialState),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}

/* export function contadorReducer(state: number = 10, action: fromContador.actions) {
    switch ( action.type ) {
        case fromContador.INCREMENTAR:
            return state + 1;
        case fromContador.DECREMENTAR:
            return state - 1;
        case fromContador.MULTIPLICAR:
            return state * action.payload;
        case fromContador.DIVIDIR:
            return state / action.payload;
        case fromContador.RESET:
            return 0

        default:
            return state;
    }

} */