/// <reference path="../typings/tsd.d.ts" />
import * as ko from 'knockout'
import * as _ from 'lodash'
import './components/sidebar'

class AppViewModel {
    constructor() {
        this.greeting("hello")
    }
    greeting = ko.observable<string>()

}

ko.components.register('app', {
    viewModel: AppViewModel,
    template: require('./app.html')
});

ko.applyBindings();
