import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', route: '' },
        { title: 'ProgressBar', route: '/progress' },
        { title: 'Charts', route: '/charts' },
        { title: 'Promises', route: '/promises' },
        { title: 'rxjs', route: '/rxjs' },
      ],
    },
  ];
  constructor() {}
}
