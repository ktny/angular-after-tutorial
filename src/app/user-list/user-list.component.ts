import { Component, ChangeDetectionStrategy, Input, DoCheck } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements DoCheck {
  @Input() users!: User[];

  ngDoCheck() {
    console.log("user-list check");
  }
}
