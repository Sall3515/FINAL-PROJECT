import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

import { OurTeamComponent } from './pages/about/our-team/our-team.component';
import { OurStoryComponent } from './pages/about/our-story/our-story.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const APP_ROUTES: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'search-results', component: SearchResultsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomePageComponent },

  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'our-team', component: OurTeamComponent },
      { path: 'our-story', component: OurStoryComponent },
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' }, //'' this route configuration matches the base URL of my application.
  { path: '**', component: NotFoundComponent }, // უცხო მისმართებისათვის
];
