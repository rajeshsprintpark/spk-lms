import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../services/course.service';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{
  course: any[] = [];
  newCourse = { title: '', description: '' };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.course = this.courseService.getCourses();  
  }

  // addCourse(): void {
  //   if (this.newCourse.title && this.newCourse.description) {
  //     this.courseService.addCourse(this.newCourse);
  //     this.newCourse = { title: '', description: '' }; // Reset form
  //   }
  // }
  courses = [
    {
      id: 1,
      title: 'C Programming',
      description: 'Learn the basics of C programming language.',
      price: 499,
      originalPrice: 999,
      rating: 4.5,
      reviews: 120,
      imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20210330135657/C.png'
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      description: 'Master JavaScript from scratch.',
      price: 799,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 200,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
      id: 3,
      title: 'Python for Beginners',
      description: 'A complete guide to Python programming.',
      price: 999,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 250,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    }
  ];
}