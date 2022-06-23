import { Injectable } from "@angular/core"
import { LoggingService } from "./logging.service"

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status: 'inactive'
        },
        {
            name: 'Unknown Account',
            status: 'unknown'
        }
    ]

    constructor(private loggingService: LoggingService) {}

    addAccount(theName: string, theStatus: string) {
        this.accounts.push({name: theName, status: theStatus })
        this.loggingService.logStatusChangger(theStatus)
    }

    updateAccount(theId: number, theStatus: string) {
        this.accounts[theId].status = theStatus
        this.loggingService.logStatusChangger(theStatus)
    }
}