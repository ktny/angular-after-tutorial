import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "../service/store.service";
import { UserApiService } from "../service/user-api.service";
import { User } from "../user";

@Injectable({ providedIn: "root" })
export class UserDetailUsecase {
  get user$() {
    return this.store.select(state => state.userDetail.user);
  }

  constructor(private userApi: UserApiService, private store: Store) {}

  async fetchUser(userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null,
      },
    }));

    const user = await this.userApi.getUserById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user,
      },
    }));
  }
}
