import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/contador.actions';
import { AppState } from './app.reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    contador: number

    constructor( private store: Store<AppState>) {
        this.store.select('contador').subscribe( state => this.contador = state)
    }

    incrementar() {
        //const action = new IncrementarAction();
        // this.store.dispatch({type: 'INCREMENTAR'})
        this.store.dispatch( actions.increment() )
    }

    decrementar() {
        //const action = new DecrementarAction();
        this.store.dispatch( actions.decrement() )
    }
}
