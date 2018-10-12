import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { MdTabsModule, MdCard, MdSidenav, MdSidenavContainer } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { YourMusicComponent } from './your-music/your-music.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FormsModule }   from '@angular/forms';
import { FilterPipe }from './filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        FilterPipe,
        BrowseComponent,
        MdCard,
        YourMusicComponent,
        MdSidenav,
        MdSidenavContainer,
        HeaderNavComponent,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MdTabsModule,
        
        HttpClientModule,
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
