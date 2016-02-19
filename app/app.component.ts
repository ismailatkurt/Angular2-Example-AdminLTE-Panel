/**
 * Created by ismail on 18/02/16.
 *
 * ismail.atkurt@gmail.com
 *
 */
import {Component} from "angular2/core";
import {HeaderComponent} from "./header.component"
import {SidebarComponent} from "./sidebar.component";
import {FooterComponent} from "./footer.component";
import {ControlSidebarComponent} from "./control-sidebar.component";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {SampleComponent} from "./sample.component";

@RouteConfig([
    {
        path: '/sample',
        name: 'Sample',
        component: SampleComponent
    }
])

@Component({
    selector: 'my-app',
    directives: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        ControlSidebarComponent
    ],
    templateUrl: 'app/app.html'
})

export class AppComponent {

}