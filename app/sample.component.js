/**
 * Created by ismail on 19/02/16.
 *
 * ismail.atkurt@gmail.com
 *
 */
System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SampleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SampleComponent = (function () {
                function SampleComponent() {
                }
                SampleComponent = __decorate([
                    core_1.Component({}), 
                    __metadata('design:paramtypes', [])
                ], SampleComponent);
                return SampleComponent;
            })();
            exports_1("SampleComponent", SampleComponent);
        }
    }
});
//# sourceMappingURL=sample.component.js.map