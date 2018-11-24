import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.rating | number: '2.1-1' }} <br/>
    {{ course.students | number }} <br/>
    {{ course.price | currency: 'CAD':false:'3.1-1' }} <br/>
    {{ course.releaseDate | date: 'yyyy-MM-dd' }} <br/> <br/>
    {{ text | summary: 30 }}
    `
}) 

export class CoursesComponent {
    title = 'List of courses';
    service: CoursesService;
    courses;
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = 'This is a test text string for custom pipe testing.'

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
        
    }
}