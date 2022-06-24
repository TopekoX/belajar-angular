import { Injectable } from "@angular/core"

@Injectable()
export class CounterService {
    activeCounter = 0
    inactiveCounter = 0

    incrementActiveCounter() {
        this.activeCounter++
        console.log('Active to Inactive: ' + this.activeCounter);       
    }

    incrementInactiveCounter() {
        this.inactiveCounter++
        console.log('Inactive to Active: ' + this.inactiveCounter);   
    }
}