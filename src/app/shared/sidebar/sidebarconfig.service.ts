import { Injectable } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})

export class SidebarconfigService {
  ROUTES: RouteInfo[] = [];
  constructor(private AuthService: AuthService) { }

  GetRouteinfo() {
    const role = this.AuthService.getRole();
    if (role === "Admin") {
      return [
        { path: '/Admin/dashbord', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mstudent', title: 'Manage Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mfaculty', title: 'Manage Faculty', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mcourse', title: 'Manage Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mstandard', title: 'Manage Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mdivision', title: 'Manage Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/msubject', title: 'Manage Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/noticeboard', title: 'Manage Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mtimetable', title: 'Manage Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/event-gallery', title: 'Manage Event Gallery', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Comman/ems-chat-app', title: 'Chating App', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
    } else if (role === "Faculty") {
      return [
        { path: '/Faculty/dashbord', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mstudent', title: 'View Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/attendance', title: 'Take Attendance', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Comman/vattendace', title: 'View Attendance', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/test', title: 'Online Test', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/assignment', title: 'Manage Assignment', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/noticeboard', title: 'View Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/event-gallery', title: 'Manage Event Gallery', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        {
          path: '', title: 'View', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/Faculty/timetable', title: 'View Time-Table', icon: 'ft-arrow-right', class: 'p-0', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Faculty/course', title: 'View Courses', icon: 'ft-arrow-right', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Faculty/standard', title: 'View Standard', icon: 'ft-arrow-right', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Faculty/division', title: 'View Divison', icon: 'ft-arrow-right', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Faculty/subject', title: 'View Subject', icon: 'ft-arrow-right', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          ]
        },

      ]
    } else if (role === "Student") {
      return [
        { path: '/Student/dashbord', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/noticeboard', title: 'View Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mevent', title: 'View Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/timetable', title: 'View Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Comman/vattendace', title: 'View Attendance', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/test', title: 'Online Test', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/assignment', title: 'View Assignment', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/course', title: 'View Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/standard', title: 'View Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/division', title: 'View Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/subject', title: 'View Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      ]
    }
  }
}