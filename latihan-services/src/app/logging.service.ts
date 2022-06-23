import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logStatusChangger(status: string) {
        console.log('A Server changed, new status: ' + status)
    }
}