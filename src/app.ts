/// <reference path="../typings/tsd.d.ts" />
import * as ko from 'knockout'
class AppViewModel {
    constructor() {

    }
}

ko.components.register('app', {
    viewModel: AppViewModel,
    template: require('raw!./app.html')
});
ko.applyBindings();
