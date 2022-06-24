import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    activeUsers = ['Ucup', 'Aprizal'] 
    inactiveUsers = ['Dini', 'Mike']

    constructor(private counterService: CounterService) {}

    setToActive(index: number) {
        this.activeUsers.push(this.inactiveUsers[index])
        this.inactiveUsers.splice(index, 1)
        this.counterService.incrementActiveCounter()
    }

    setToInactive(index: number) {
        this.inactiveUsers.push(this.activeUsers[index])
        this.activeUsers.splice(index, 1)
        this.counterService.incrementInactiveCounter()
    }
}