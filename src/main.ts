import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { BasicProgrammingComponent } from './app/components/basicProgrammingComponent/basic-programming-component/basic-programming-component';

bootstrapApplication(BasicProgrammingComponent, appConfig)
  .catch((err) => console.error(err));
