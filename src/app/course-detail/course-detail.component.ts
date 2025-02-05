import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Get the course ID from the route parameters
    const courseId = +this.route.snapshot.paramMap.get('id')!;  // Use the `+` to convert to a number
    this.course = this.courseService.getCourseById(courseId);
  }
}
