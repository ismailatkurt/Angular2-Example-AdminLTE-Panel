System.register(["angular2/core", "./header.component", "./sidebar.component", "./footer.component", "./control-sidebar.component", 'angular2/router', "./sample.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, sidebar_component_1, footer_component_1, control_sidebar_component_1, router_1, sample_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (control_sidebar_component_1_1) {
                control_sidebar_component_1 = control_sidebar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sample_component_1_1) {
                sample_component_1 = sample_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/sample',
                            name: 'Sample',
                            component: sample_component_1.SampleComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [
                            header_component_1.HeaderComponent,
                            sidebar_component_1.SidebarComponent,
                            footer_component_1.FooterComponent,
                            control_sidebar_component_1.ControlSidebarComponent
                        ],
                        templateUrl: 'app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map