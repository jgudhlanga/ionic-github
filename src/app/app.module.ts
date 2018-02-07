import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {ProfilesPage} from "../pages/profiles/profiles";
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {RepoDetailsPage} from "../pages/repo-details/repo-details";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GithubServiceProvider} from '../providers/github-service/github-service';
import {ProfilesPageModule} from "../pages/profiles/profiles.module";

@NgModule({
    declarations: [
        MyApp,
        ProfilesPage,
        ContactPage,
        HomePage,
        TabsPage,
        RepoDetailsPage
    ],
    imports: [
        BrowserModule, HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ProfilesPage,
        ContactPage,
        HomePage,
        TabsPage,
        RepoDetailsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        GithubServiceProvider
    ]
})
export class AppModule {
}
