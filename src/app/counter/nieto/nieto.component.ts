import { Component, OnInit } from '@angular/core';
import * as accions from '../contador.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
    selector: 'app-nieto',
    templateUrl: './nieto.component.html',
    styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

    contador: any;

    constructor(private store: Store<AppState>) { }

    reset() {
        this.store.dispatch(accions.reset())
    }

    ngOnInit(): void {
        this.store.select('contador')
            .subscribe( state => {
                console.log(state);
                this.contador = state
            })
    }

}
