//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

//Services
import { DataService } from './data.service';
import { TransferService } from './transfer.service';

//Routes
const views : Routes = [
{path:'',component:HomeComponent},
{path:'details',component:DetailsComponent},
{path:'cart',component:CartComponent},
{path:'form',component:FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    DetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(views),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    DataService,
    TransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
