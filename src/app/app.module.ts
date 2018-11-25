import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { CasePipe } from './case.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { GithubFollowerService } from './services/github-follower.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasingComponent,
    CasePipe,
    BootstrapPanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    GithubFollowerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    PostService,
    CoursesService,
    GithubFollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
