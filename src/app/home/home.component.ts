import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { HeadComponent } from "../head/head.component";
import { FooterComponent } from "../footer/footer.component";
import { NavBar1Component } from "../nav-bar1/nav-bar1.component";
import { CourseListComponent } from "../courses/course-list/course-list.component";
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CoursespComponent } from "../courses/coursesp/coursesp.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [HeadComponent, NavBar1Component, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
    this.dialog.open(LoginDialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '80vw',  // Set the width to 80% of the viewport width
      height: '80vh', // Set the height to 80% of the viewport heigh
      // Optional for advanced styling
    });
  }
  openDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '80vw',
      height: '80vh',
    });
  }

}