import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Contador] Incrementar');
export const decrement = createAction('[Contador] Decrementar');

export const multiplicar = createAction(
    '[Contador] Multiplicar',
    props<{numero: number}>()
);

export const dividir = createAction(
    '[Contador] Dividir',
    props<{numero: number}>()
);

export const reset = createAction('[Contador] Reset');

/* export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;

    constructor( public payload: number ) { }
} */

/* export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
    readonly type = increment;
}

export class DecrementarAction implements Action {
    readonly type = increment;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;

    constructor( public payload: number ) { }
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;

    constructor( public payload: number ) { }
}

export class ResetAction implements Action {
    readonly type = RESET;
}


export type actions = IncrementarAction |
                      DecrementarAction |
                      MultiplicarAction |
                      DividirAction |
                      ResetAction;



 */