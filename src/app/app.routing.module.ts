import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { YourMusicComponent } from './your-music/your-music.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'app-browse',
        pathMatch: 'full'
    },
    // { path: 'app-root', component: AppComponent },
    { path: 'app-browse', component: BrowseComponent },
    { path: 'app-your-music', component: YourMusicComponent },
    { path: 'app-header-nav', component: HeaderNavComponent },
    { path: '**', redirectTo: 'app-browse', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
