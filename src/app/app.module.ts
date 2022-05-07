import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { HistoryComponent } from './pages/history/history.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';
import { UrlLabelPipe } from './pipes/url_label/url-label.pipe';
import { NotNullPipe } from './pipes/not_null/not-null.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HistoryComponent,
    DashboardComponent,
    NavbarComponent,
    UrlLabelPipe,
    NotNullPipe,
  ],
  imports: [
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
