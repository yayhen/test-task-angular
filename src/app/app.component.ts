import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private translateService: TranslateService, public http: HttpClient) {}
  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }
  title = 'test-task-angular';
  useLanguage(language: string): void {
    this.translateService.use(language);
}
}
