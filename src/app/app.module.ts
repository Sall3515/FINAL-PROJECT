import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

import { OurTeamComponent } from './pages/about/our-team/our-team.component';
import { OurStoryComponent } from './pages/about/our-story/our-story.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    ShopComponent,
    CartComponent,
    CardComponent,
    HomePageComponent,
    AboutComponent,
    SearchResultsComponent,

    OurTeamComponent,
    OurStoryComponent,
    FooterComponent,
    SignInComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
