import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'something';
  title = 'hello-world!!!';
  post = {
    isFavorite: false
  };

  tweet = {
    isLiked: false,
    likesCount: 10
  }

  courses: {id: number, name: string}[];
  
  onFavoriteChange($event: { newValue: boolean }) {
    console.log('isFavorite set to ' + $event.newValue);
  }

  addCourse() {
    this.courses.push( {id: 4, name: 'course4'});
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }

  trackCourse(index, course) {
    if (course) return course.id;
  }

  removeCourse(course) {
    // const index = this.courses.findIndex(c => c.id === course.id);
    const index = this.courses.indexOf(course);
    if (index > -1) this.courses.splice(index, 1);
  }

  updateCourse(course) {
    // const index = this.courses.findIndex(c => c.id === course.id);
    course.name = 'New Name';
  }
}
