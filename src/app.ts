/// <reference path="../typings/tsd.d.ts" />
import * as ko from 'knockout'

class AppViewModel {
    constructor() {
        this.greeting('hello world!!');
    }
    greeting = ko.observable<string>()
}

ko.components.register('app', {
    viewModel: AppViewModel,
    template: require('./app.html')
});

ko.applyBindings();
