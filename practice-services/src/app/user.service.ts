import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    activeUsers = ['Ucup', 'Aprizal'] 
    inactiveUsers = ['Dini', 'Mike']

    setToActive(index: number) {
        console.log('index: ' + index + ' : ' + this.inactiveUsers[index]);
        
        this.activeUsers.push(this.inactiveUsers[index])
        this.inactiveUsers.splice(index, 1)
    }

    setToInactive(index: number) {
        console.log('index: ' + index + ' : ' + this.activeUsers[index]);

        this.inactiveUsers.push(this.activeUsers[index])
        this.activeUsers.splice(index, 1)
    }
}