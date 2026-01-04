import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BasicComponentComponent } from './app/components/basic-component/basic-component.component';

bootstrapApplication(BasicComponentComponent, appConfig)
  .catch((err) => console.error(err));
