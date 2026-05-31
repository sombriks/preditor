import {Component, signal} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './App.html',
    styleUrls: ['./App.scss']
})
export class AppComponent {
    counter  = signal(0)
}





















