import { Component } from "@angular/core";

@Component({
    selector: 'showpass-app',
    templateUrl: './showpass.component.html',
    styleUrls: ['./showpass.component.css']
})
export class ShowpassComponent {
    showSecret = false
    log: any[] = []

    onToggle() {
        this.showSecret = !this.showSecret
        // this.log.push(this.log.length + 1)
        this.log.push(new Date());
    }
}