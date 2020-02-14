import { Component, OnInit } from '@angular/core';
import { ResetAction } from '../contador.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
    selector: 'app-nieto',
    templateUrl: './nieto.component.html',
    styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

    /* @Input() contador: any;
    @Output() resetAll = new EventEmitter(); */

    contador: any;

    constructor(private store: Store<AppState>) { }

    reset() {
        this.contador = 0;
        // this.resetAll.emit(0);

        const action = new ResetAction();
        this.store.dispatch( action );
    }

    ngOnInit(): void {
        this.store.select('contador')
            .subscribe( state => {
                console.log(state);
                this.contador = state
            })
    }

}
