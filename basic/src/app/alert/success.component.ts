import { Component } from "@angular/core";

@Component({
    selector: 'success-alert',
    templateUrl: './success.component.html',
    styles: [`
        p{
            padding: 20px;
            background-color: palegreen;
            border: 1px solid green;
        }
    `]
})
export class SuccessComponent {

}