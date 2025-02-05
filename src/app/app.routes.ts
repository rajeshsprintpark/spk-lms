import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { DashboardComponent } from './Instructor/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses/:id', component: CourseDetailsComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'Instructor/dashboard', component: DashboardComponent },
    { path: 'Instructor/communication-student-engagement', loadChildren: () => import("../app/Instructor/communication-student-engagement/communication-student-engagement-routing.module").then(x => x.CommunicationStudentEngagementRoutingModule) },
    { path: 'Instructor/course-contant-flow', loadChildren: () => import("../app/Instructor/course-contant-flow/course-contant-flow-routing.module").then(x => x.CourseContantFlowRoutingModule) },
    { path: 'Instructor/course-creation', loadChildren: () => import("../app/Instructor/course-creation/course-creation-routing.module").then(x => x.CourseCreationRoutingModule) },
    { path: 'Instructor/course-marketing', loadChildren: () => import("../app/Instructor/course-marketing/course-marketing-routing.module").then(x => x.CourseMarketingRoutingModule) },
    { path: 'Instructor/engagement-traffic-analysis', loadChildren: () => import("../app/Instructor/engagement-traffic-analysis/engagement-traffic-analysis-routing.module").then(x => x.EngagementTrafficAnalysisRoutingModule) },
    { path: 'Instructor/instructor-community-support', loadChildren: () => import("../app/Instructor/instructor-community-support/instructor-community-support-routing.module").then(x => x.InstructorCommunitySupportRoutingModule) },
    { path: 'Instructor/performance-analysis', loadChildren: () => import("../app/Instructor/performance-analytics/performance-analytics-routing.module").then(x => x.PerformanceAnalyticsRoutingModule) }
];
