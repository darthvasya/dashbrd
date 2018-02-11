import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'items', loadChildren: './items/items.module#ItemsModule' },
            // // { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
            // { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
            // { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
            // { path: 'instruction', loadChildren: './instruction/instruction.module#InstructionModule' },
            // { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
