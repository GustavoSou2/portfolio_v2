import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './components/menu/menu.module';
import { FooterModule } from './pages/footer/footer.module';
import { CharacterLimitPipe } from './shared/utils/pipes/character-limit/character-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharacterLimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
