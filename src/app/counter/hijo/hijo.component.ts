import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html',
    styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

    // Con Redux esto de aqui ya no es necesario
    // @Input() contador: any;
    // @Output() cambioContador = new EventEmitter<number>();

    contador: any;

    constructor(private store: Store<AppState>) { }

    multiplicar() {
        // this.contador *= 2;
        // this.cambioContador.emit(this.contador)

        const action = new MultiplicarAction(2);
        this.store.dispatch(action);
    }

    dividir() {
        this.contador /= 2;
        // this.cambioContador.emit(this.contador)

        const action = new DividirAction(2);
        this.store.dispatch(action);
    }

    resetNieto( nuevoContador ) {
        this.contador = nuevoContador;
        // this.cambioContador.emit(this.contador)
    }

    ngOnInit(): void {
        this.store.select('contador').subscribe( state => {
            this.contador = state;
            console.log('State', state);
        })
    }

}
