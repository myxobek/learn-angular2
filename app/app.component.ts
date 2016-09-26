import { Component,OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" 
                (click)="onSelect(hero)"
                [class.selected] = "hero === selectedHero"
            >
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
})

export class AppComponent implements OnInit{
    title:string = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){}

    getHeroes(): void{
        this.heroService.getHeroesSlowly().then( heroes => this.heroes = heroes );
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect( hero:Hero ):void {
        this.selectedHero = hero;
    };
}