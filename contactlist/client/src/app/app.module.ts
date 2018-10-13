import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {Http, HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { SchoolService } from "./school.service";
import { SchooldataService } from "./schooldata.service";
import { AlertService } from './shared/services/alert.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './shared/_helpers';
import { JwtInterceptor, ErrorInterceptor } from './shared/_helpers';
// import { AlertComponent } from './shared/services/alert.service';
import {AuthenticationService} from './shared/services/authentication.service';
import {UserService} from './user.service';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,
        SchoolService,
        SchooldataService,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
