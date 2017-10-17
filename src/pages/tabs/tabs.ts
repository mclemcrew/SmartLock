import { Component } from '@angular/core';

import { DashPage } from '../dash/dash';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { LogPage } from '../log/log';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashPage;
  tab2Root = LogPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
