import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html',
    styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

    contador: any;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store.select('contador').subscribe( state => {
            this.contador = state;
            console.log('State', state);
        })
    }

    multiplicar() {
        this.store.dispatch(actions.multiplicar({numero: 2}))
    }

    dividir() {
        this.store.dispatch(actions.dividir({ numero : 2}))
    }
}
