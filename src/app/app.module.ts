import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
  
 
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ProductComponent } from './componentes/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './componentes/detail/detail.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormularioComponent,
    HomeComponent,
    BlogComponent,
    ProductComponent,
    DetailComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'detail', component: DetailComponent},
      {path: '**', component: HomepageComponent}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
