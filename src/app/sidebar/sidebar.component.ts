import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Declare Bootstrap globally
declare var bootstrap: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isExpanded = false;

  modules = [
    {
      moduleName: 'Dashboard',
      url: '/dashboard',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>',
      aspNetMenuItems: []
    },
    {
      moduleName: 'Course Creation',
      url: '',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#file-earmark"></use></svg>',
      aspNetMenuItems: [
        { menuItemName: 'Create Course', url: '/Instructor/course-creation/create-course' },
        { menuItemName: 'Define Course Learnings', url: '/Instructor/course-creation/define-course-learnings' },
        { menuItemName: 'List Requirements', url: '/Instructor/course-creation/list-requirements' }
      ]
    },
    {
      moduleName: 'Course Content Flow',
      url: '',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#file-earmark"></use></svg>',
      aspNetMenuItems: [
        { menuItemName: 'Add Accessibility', url: '/Instructor/course-contant-flow/add-accessibility' },
        { menuItemName: 'Add Assignment', url: '/Instructor/course-contant-flow/add-assignment' },
        { menuItemName: 'Add Lecture', url: '/Instructor/course-contant-flow/add-lecture' },
        { menuItemName: 'Add Practice Test', url: '/Instructor/course-contant-flow/add-practicee-test' },
        { menuItemName: 'Add Quiz', url: '/Instructor/course-contant-flow/add-quiz' },
        { menuItemName: 'Create Course Content', url: '/Instructor/course-contant-flow/create-course-contant' }
      ]
    },

    {
      moduleName: 'Course Marketing',
      url: '',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#megaphone"></use></svg>',
      aspNetMenuItems: [
        { menuItemName: 'Course Landing Page', url: '/Instructor/course-marketing/course-landing-page' },
        { menuItemName: 'Course Message', url: '/Instructor/course-marketing/course-message' },
        { menuItemName: 'Pricing Page', url: '/Instructor/course-marketing/pricing-page' },
        { menuItemName: 'Promotions Page', url: '/Instructor/course-marketing/promotions-page' },
        { menuItemName: 'Send Course for Review', url: '/Instructor/course-marketing/send-course-for-review' }
      ]
    },
    {
      moduleName: 'Communication & Student Engagement',
      url: '',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#message"></use></svg>',
      aspNetMenuItems: [
        { menuItemName: 'Add FAQs', url: '/Instructor/communication-student-engagement/add-faqs' },
        { menuItemName: 'View Assignment Feedback', url: '/Instructor/communication-student-engagement/view-assignments-feedback' },
        { menuItemName: 'View Messages', url: '/Instructor/communication-student-engagement/view-messages' }
      ]
    },

    {
      moduleName: 'Engagement & Traffic Analysis',
      url: '',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#bar-chart"></use></svg>',
      aspNetMenuItems: [
        { menuItemName: 'Track Course Engagement', url: '/Instructor/engagement-traffic-analysis/track-course-engagement' },
        { menuItemName: 'View Marketplace Insights', url: '/Instructor/engagement-traffic-analysis/view-marketplace-insights' },
        { menuItemName: 'View Traffic', url: '/Instructor/engagement-traffic-analysis/view-traffic' }
      ]
    },
    {
      moduleName: 'Instructor Community Support',
      url: '',
      icon: '<svg class="bi" width="24" height="24"><use xlink:href="#people"></use></svg>',
      aspNetMenuItems: [
        { menuItemName: 'Access Teaching Resources', url: '/Instructor/instructor-community-support/access-teaching-resources' },
        { menuItemName: 'Contact Help & Support', url: '/Instructor/instructor-community-support/contact-help-support' },
        { menuItemName: 'Instructor Community', url: '/Instructor/instructor-community-support/instructor-community' }
      ]
    }
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;  // Toggle between expanded and collapsed state
  }

  toggleMenu(event: Event) {
    event.preventDefault();
    const target = (event.target as HTMLElement).closest('.nav-item');
    if (target) {
      target.classList.toggle('open');
    }
  }
}
