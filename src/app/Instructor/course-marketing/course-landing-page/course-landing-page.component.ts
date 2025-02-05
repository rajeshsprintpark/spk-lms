import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-landing-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-landing-page.component.html',
  styleUrl: './course-landing-page.component.css'
})
export class CourseLandingPageComponent {
  course = {
    title: '',
    description: '',
    price: null, // Add price field
    imageUrl: '',
    features: [{ text: '', imageUrl: '' }]
  };

  onBannerUpload(event: any) {
    const file = event.target.files[0];
    this.course.imageUrl = URL.createObjectURL(file); // Replace with actual upload logic
  }

  onFeatureImageUpload(event: any, index: number) {
    const file = event.target.files[0];
    this.course.features[index].imageUrl = URL.createObjectURL(file); // Replace with actual upload logic
  }

  addFeature() {
    this.course.features.push({ text: '', imageUrl: '' });
  }

  removeFeature(index: number) {
    this.course.features.splice(index, 1);
  }

  submitCourse() {
    console.log('Course Uploaded:', this.course);
    alert('Course Uploaded Successfully!');
  }
}