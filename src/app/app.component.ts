import { Component } from "@angular/core";
import { DataService } from "./service/data.service";

@Component({
  selector: "my-app",
  template: `<button (click)="updateValue()">Update Value</button>`,
  // templateUrl: "./app.component.html",
  // styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }
}
