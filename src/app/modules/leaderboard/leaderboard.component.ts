import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'leaderboard-component',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

    public currentCatergory: number = 0;

    private records: Record[] = [
        {
            name: "test person",
            time: new Date(0, 0, 2, 12, 12, 5, 53)
        }
    ]

    public categories: string[] = [
        "Game",
        "Level 1",
        "Level 2",
        "Level 3"
    ]

    public getRecords(): Record[] {
        return this.records.sort((a, b) => this.dateToNumber(a.time) - this.dateToNumber(b.time));
    }

    public dateToTime(date: Date): string {
        return `${date.getHours() + date.getDate()*24}h ${date.getMinutes()}m ${date.getSeconds()}s`;
    }

    private dateToNumber(date: Date): number {
        return ((date.getDate() * 24 + date.getHours()) * 60 + date.getMinutes()) * 60 + date.getSeconds();
    }
}

export interface Record {
    name: string,
    time: Date
}
