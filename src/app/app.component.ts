import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }
  title = 'test-task-angular';
}
