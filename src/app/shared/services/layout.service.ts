import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    private emitChangeSource = new Subject<any>();
    changeEmitted$ = this.emitChangeSource.asObservable();
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }


    private emitCustomizerSource = new Subject<any>();
    customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();
    emitCustomizerChange(change: any) {
        this.emitCustomizerSource.next(change);
    }

}