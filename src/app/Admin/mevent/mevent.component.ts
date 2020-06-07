import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { startOfDay, endOfDay, isSameDay, isSameMonth } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { AuthService } from '../../shared/auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};


@Component({
    selector: 'app-mevent',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './mevent.component.html',
    styleUrls: ['./mevent.component.scss']
})


export class MeventComponent implements OnInit {

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: string = 'month';

    newEvent: CalendarEvent;

    viewDate: Date = new Date();

    modalData: {
        action: string;
        event: any;
    };

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edit this event', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                // this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('This event is deleted!', event);
            }
        }
    ];

    events$: Observable<Array<CalendarEvent<any>>>;
    demo: any;
    activeDayIsOpen: boolean = true;
    role: boolean;
    constructor(private modal: NgbModal, private AuthService: AuthService, private http: HttpClient, private toast: ToastrService) { }

    fetchstan() {
        this.events$ = this.http.get("http://localhost:8050/Admin/Event").pipe(map((data: any) => {
            return data.map((element: any) => {
                return {
                    start: startOfDay(element.start), end: endOfDay(element.end), title: element.title, color: element.color, _id: element._id, actions: this.AuthService.getRole() === ("Admin" || "Faculty") ? this.actions : null
                }
            })
        }))

    }


    ngOnInit() {
        this.fetchstan()
        this.role = (this.AuthService.getRole() === "Faculty" || this.AuthService.getRole() === "Admin") ? true : false
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
    }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    Submit() {
        switch (this.modalData.action) {
            case 'Edit this event':
                console.log('Edit', this.modalData.event)
                this.http.put("http://localhost:8050/Admin/Event", { ... this.modalData.event }).subscribe((data: any) => {
                    if (data.Error) {
                        this.toast.error(data.Error);
                    } else {
                        this.toast.success(data.Success);
                        this.fetchstan()
                    }
                })
                break;
            case 'This event is deleted!':
                console.log('Edit', this.modalData.event)
                this.http.delete("http://localhost:8050/Admin/Event?_id=" + this.modalData.event._id).subscribe((data: any) => {
                    if (data.Error) {
                        this.toast.error(data.Error);
                    } else {
                        this.toast.error(data.Success);
                        this.fetchstan()
                    }
                })
                break;
            case 'Add new event':
                this.http.post("http://localhost:8050/Admin/Event", this.modalData.event).subscribe((data: any) => {
                    if (data.Success) {
                        this.toast.success(data.Success)
                        this.ngOnInit()
                    } else {
                        this.toast.error(data.Error);
                    }
                })
                break;
        }
        this.modal.dismissAll();
    }

    addEvent(): void {
        this.newEvent = {
            title: 'New event',
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
            color: colors.red,
        }
        this.handleEvent('Add new event', this.newEvent);
    }

}
export const routedComponents = [MeventComponent];
