import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { HttpModule }       from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }     from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent} from './hero-detail.component';
import { DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';

import { HeroService } from './hero.service';

import { routing } from './app.routing'

import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        InMemoryWebApiModule.forRoot( InMemoryDataService )
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    bootstrap: [
        AppComponent 
    ],
    providers: [
        HeroService
    ]
})

export class AppModule {}
