import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatTableModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserdataService } from './service/userdata.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'users', component: UsersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,HttpModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
