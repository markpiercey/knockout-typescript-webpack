/// <reference path="../../typings/tsd.d.ts" />
import * as ko from 'knockout'

class SideBarViewModel {
    constructor(){
        this.heading("Sidebar");
    }

    heading = ko.observable<string>();

}

ko.components.register('sidebar', {
    viewModel: SideBarViewModel,
    template: require('raw!./sidebar.html')
});



