import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    templateUrl: './warning.component.html',
    styles: [`
        p{
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
    `]
})
export class WarningComponent {

}