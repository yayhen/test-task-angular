import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AuthComponent } from './pages/auth/auth.component';
import { UsersComponent } from './pages/users/users.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginService } from './login.service';
import { DataService } from './data.service';
import { DataOfBirthDirective } from './shared/validators/data-of-birth.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AuthComponent,
    UsersComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
    DataOfBirthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
