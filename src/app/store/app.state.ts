import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { Auth } from './app.action';
import { IUser } from '../shared/types';
import { AuthService } from '../shared/services';
import { Observable, tap } from 'rxjs';

const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

export interface AppStateModel {
  isLogging: boolean;
  user: IUser;
}

const initialState: AppStateModel = {
  isLogging: false,
  user: {} as IUser,
};

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class AppState {
  private readonly authService = inject(AuthService);

  @Action(Auth.Logging)
  authLogging(ctx: StateContext<AppStateModel>, action: Auth.Logging): Observable<IUser> {
    const { user } = action;

    return this.authService.login(user).pipe(
      tap((user: IUser) => {
        ctx.setState({
          ...ctx.getState(),
          isLogging: true,
          user: {
            ...ctx.getState().user,
            ...user,
          },
        });
      }),
    );
  }

  @Action(Auth.NotLogging)
  authNotLogging(ctx: StateContext<AppStateModel>): void {
    ctx.setState({
      ...ctx.getState(),
      isLogging: false,
    });
  }

  @Selector([APP_STATE_TOKEN])
  static logging(state: AppStateModel): boolean {
    return state.isLogging;
  }
}
