import {Component, OnInit} from '@angular/core';
import {RecentMenuService} from "./recent-Menu.service";

@Component({
  selector: 'sa-recent-Menu',
  templateUrl: './recent-Menu.component.html',
  providers: [RecentMenuService]
})
export class RecentMenuComponent implements OnInit {

  public Menu1: Array<any>;
  public Menu2: Array<any>;

  constructor(private projectsService: RecentMenuService) {

  }

  ngOnInit() {
    this.Menu1 = this.projectsService.getMenu1()
    this.Menu2 = this.projectsService.getMenu2()
  }

 

}
