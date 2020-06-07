import { Routes } from '@angular/router';

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'dashbord',
    loadChildren: () => import('../../Student/dashboard/dashbord.module').then(m => m.DashbordModule),
  },
  {
    path: 'division',
    loadChildren: () => import('../../Comman/division/division.module').then(m => m.DivisionModule),
  },
  {
    path: 'course',
    loadChildren: () => import('../../Comman/course/course.module').then(m => m.CourseModule),
  },
  {
    path: 'subject',
    loadChildren: () => import('../../Comman/subject/subject.module').then(m => m.SubjectModule)
  },
  {
    path: 'mevent',
    loadChildren: () => import('../../Admin/mevent/mevent.module').then(m => m.MeventModule),
  },
  {
    path: 'standard',
    loadChildren: () => import('../../Comman/standard/standard.module').then(m => m.StandardModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('../../Comman/timetable/timetable.module').then(m => m.TimetableModule)
  },
  {
    path: 'noticeboard',
    loadChildren: () => import('../../Comman/noticeboard/noticeboard.module').then(m => m.NoticeboardModule)
  },
  {
    path: 'test',
    loadChildren: () => import('../../Student/test/test.module').then(m => m.TestModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('../../Student/assignment/assignment.module').then(m => m.AssignmentImgModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  },
];

export const FACULTY_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'dashbord',
    loadChildren: () => import('../../Faculty/dashboard/dashbord.module').then(m => m.DashbordModule),
  },
  {
    path: 'attendance',
    loadChildren: () => import('../../Faculty/attendance/attendance.module').then(m => m.AttendanceModule),
  },
  {
    path: 'vattendace',
    loadChildren: () => import('../../Faculty/vattendace/vattendace.module').then(m => m.VattendaceModule)
  },
  {
    path: 'test',
    loadChildren: () => import('../../Faculty/test/test.module').then(m => m.TestModule)
  },
  {
    path: 'mevent',
    loadChildren: () => import('../../Admin/mevent/mevent.module').then(m => m.MeventModule),
  },
  {
    path: 'assignment',
    loadChildren: () => import('../../Faculty/assignment/assignment.module').then(m => m.AssignmentModule),
  },
  {
    path: 'division',
    loadChildren: () => import('../../Comman/division/division.module').then(m => m.DivisionModule),
  },
  {
    path: 'course',
    loadChildren: () => import('../../Comman/course/course.module').then(m => m.CourseModule),
  },
  {
    path: 'event-gallery',
    loadChildren: () => import('../../Comman/event-gallery/event-gallery.module').then(m => m.EventGalleryModule),
  },
  {
    path: 'subject',
    loadChildren: () => import('../../Comman/subject/subject.module').then(m => m.SubjectModule)
  },
  {
    path: 'standard',
    loadChildren: () => import('../../Comman/standard/standard.module').then(m => m.StandardModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('../../Comman/timetable/timetable.module').then(m => m.TimetableModule)
  },
  {
    path: 'noticeboard',
    loadChildren: () => import('../../Comman/noticeboard/noticeboard.module').then(m => m.NoticeboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../../Admin/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  },
];

export const ADMIN_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'dashbord',
    loadChildren: () => import('../../Admin/dashboard/dashbord.module').then(m => m.DashbordModule),
  },
  {
    path: 'adminregister',
    loadChildren: () => import('../../registrationa/registrationa.module').then(m => m.RegistrationaModule),
  },
  {
    path: 'mcourse',
    loadChildren: () => import('../../Admin/mcourse/mcourse.module').then(m => m.McourseModule),
  },
  {
    path: 'mcourse',
    loadChildren: () => import('../../Admin/mcourse/mcourse.module').then(m => m.McourseModule),
  },
  {
    path: 'mevent',
    loadChildren: () => import('../../Admin/mevent/mevent.module').then(m => m.MeventModule),
  },
  {
    path: 'event-gallery',
    loadChildren: () => import('../../Comman/event-gallery/event-gallery.module').then(m => m.EventGalleryModule),
  },
  {
    path: 'mstandard',
    loadChildren: () => import('../../Admin/mstandard/mstandard.module').then(m => m.MstandardModule)
  },
  {
    path: 'mdivision',
    loadChildren: () => import('../../Admin/mdivision/mdivision.module').then(m => m.MdivisionModule)
  },
  {
    path: 'msubject',
    loadChildren: () => import('../../Admin/msubject/msubject.module').then(m => m.MsubjectModule)
  },

  {
    path: 'mstudent',
    loadChildren: () => import('../../Admin/mstudent/mstudent.module').then(m => m.MstudentModule)
  },
  {
    path: 'mfaculty',
    loadChildren: () => import('../../Admin/mfaculty/mfaculty.module').then(m => m.MfacultyModule)
  },
  {
    path: 'noticeboard',
    loadChildren: () => import('../../Admin/noticeboard/noticeboard.module').then(m => m.NoticeBoardModule)
  },
  {
    path: 'mtimetable',
    loadChildren: () => import('../../Admin/mtimetable/mtimetable.module').then(m => m.MtimetableModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  },
];

export const Comman_ROUTES: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../../Admin/profile/profile.module').then(m => m.ProfileModule)
  },
]
