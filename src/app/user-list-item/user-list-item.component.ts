import { Component, Input, ChangeDetectionStrategy, DoCheck } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "user-list-item",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemComponent implements DoCheck {
  @Input() user!: User;

  ngDoCheck() {
    console.log("user-list-item check");
  }
}
