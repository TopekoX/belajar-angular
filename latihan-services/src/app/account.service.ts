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

    addAccount(theName: string, theStatus: string) {
        this.accounts.push({name: theName, status: theStatus })
    }

    updateAccount(theId: number, theStatus: string) {
        this.accounts[theId].status = theStatus
    }
}