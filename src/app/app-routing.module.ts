import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLayoutComponent } from './layout/public/nav-layout/nav-layout.component';
import { DownloadComponent } from './modules/download/download.component';
import { HomeComponent } from './modules/home/home.component';
import { LeaderboardComponent } from './modules/leaderboard/leaderboard.component';

const routes: Routes = [
    {
        // Unauthed "general pages"
        path: '',
        component: NavLayoutComponent, 
        children: [
            {
            path: '',
            component: HomeComponent,
            }
        ]
    },
    {
        path: 'download',
        component: NavLayoutComponent,
        children: [
            {
            path: '',
            component: DownloadComponent
            }
        ]
    },
    {
        path: 'leaderboard',
        component: NavLayoutComponent,
        children: [
            {
            path: '',
            component: LeaderboardComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }