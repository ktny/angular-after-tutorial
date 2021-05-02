import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "../../service/data.service";

@Component({
  selector: "app-async-pipe",
  template: `<div>{{ value$ | async }}</div>`,
  // templateUrl: "./async-pipe.component.html",
  // styleUrls: ["./async-pipe.component.scss"],
})
export class AsyncPipeComponent {
  value$: Observable<any>;

  constructor(private dataService: DataService) {
    this.value$ = this.dataService.valueChanges;
  }
}
