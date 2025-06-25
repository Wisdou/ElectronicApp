import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { IndexPageComponent } from './app/components/index-page/index-page.component';

bootstrapApplication(IndexPageComponent, appConfig).catch((err) =>
  console.error(err)
);
