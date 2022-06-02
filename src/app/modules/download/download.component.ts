import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'download-component',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
    constructor() {}
    ngOnInit() {}

    platforms: string[] = [
        "Windows",
        "Linux",
        "Mac"
    ];
}
