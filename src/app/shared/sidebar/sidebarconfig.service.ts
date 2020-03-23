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
        { path: '/Admin/dashbord', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mstudent', title: 'Manage Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mfaculty', title: 'Manage Faculty', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mcourse', title: 'Manage Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mstandard', title: 'Manage Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mdivision', title: 'Manage Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/msubject', title: 'Manage Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/noticeboard', title: 'Manage Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mtimetable', title: 'Manage Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
    } else if (role === "Faculty") {
      return [
        { path: '/Faculty/dashbord', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mstudent', title: 'Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/course', title: 'Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/standard', title: 'Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/division', title: 'Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/subject', title: 'Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/attendance', title: 'Take Attendance', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/vattendace', title: 'View Attendance', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/noticeboard', title: 'Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/timetable', title: 'Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      ]
    } else if (role === "Student") {
      return [

        { path: '/Student/dashbord', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mstudent', title: 'Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/course', title: 'Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/standard', title: 'Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/division', title: 'Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/subject', title: 'Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/vattendace', title: 'View Attendance', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/noticeboard', title: 'Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/timetable', title: 'Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      ]
    }
  }
}