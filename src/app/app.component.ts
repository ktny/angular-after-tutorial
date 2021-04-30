import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers();
  }

  onClick() {
    console.log("click");
  }
}
