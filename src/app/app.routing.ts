import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { SubscriptionPlanComponent } from './account-subscription/subscription-plan.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'organisation',
    component: FullLayoutComponent,
    data: {
      title: 'Organisation'
    },
    children: [
      {
        path: '',
        loadChildren: './organisation/organisation.module#OrganisationModule',
      }
    ]
  },
  {
    path: 'customer',
    component: FullLayoutComponent,
    data: {
      title: 'Customer'
    },
    children: [
      {
        path: '',
        loadChildren: './customer/customer.module#CustomerModule',
      }
    ]
  },
  {
    path: 'forgotpassword',
    component: SimpleLayoutComponent,
    data: {
      title: 'forgotpassword'
    },
    children: [
      {
        path: '',
        loadChildren: './forgotpassword/forgotpassword.module#forgotpasswordModule',
      }
    ]
  },
  {
    path: 'paymentplan',
    component: SimpleLayoutComponent,
    data: {
      title: 'paymentplan'
    },
    children: [
      {
        path: '',
        loadChildren: './paymentplan/paymentplan.module#PaymentplanModule',
      }
    ]
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: {
      title: 'login'
    },
    children: [
      {
        path: '',
        loadChildren: './login/login.module#loginModule',
      }
    ]
  },
  {
    path: 'creditcardinfo',
    component: SimpleLayoutComponent,
    data: {
      title: 'creditcardinfo'
    },
    children: [
      {
        path: '',
        loadChildren: './creditcardinfo/creditcardinfo.module#creditcardinfoModule',
      }
    ]
  },
  {
    path: 'codeconfirmation',
    component: SimpleLayoutComponent,
    data: {
      title: 'codeconfirmation'
    },
    children: [
      {
        path: '',
        loadChildren: './codeconfirmation/codeconfirmation.module#codeconfirmationModule',
      }
    ]
  },
  {
    path: 'menu',
    component: FullLayoutComponent,
    data: {
      title: 'menu'
    },
    children: [
      {
        path: '',
        loadChildren: './menu/menu.module#menuModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
