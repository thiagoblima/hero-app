import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    static log(msg: string, data: {}): void {
        console.log(msg, data);
    }

    static error(msg: string, obj: {}): void {
        console.error(msg, obj);
    }
}
