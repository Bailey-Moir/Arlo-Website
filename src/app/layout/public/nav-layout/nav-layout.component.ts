import { AfterViewChecked, AfterViewInit, Component, NgModule, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'nav-layout',
    templateUrl: './nav-layout.component.html',
    styleUrls: ['./nav-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavLayoutComponent implements AfterViewInit
{
    buttons: NavButton[] = [
        {
            label: 'Download',
            url: '/download'
        },
        {
            label: 'Leaderboard',
            url: '/leaderboard'
        }
    ];

    constructor() {}
    ngAfterViewInit() {}
}

export interface NavButton {
    label: string;
    url: string;
}