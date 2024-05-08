import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Auth } from './app.action';

const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

export interface AppStateModel {
  isLogging: boolean;
}

const initialState: AppStateModel = {
  isLogging: false,
};

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class AppState {
  @Action(Auth.Logging)
  authLogging(ctx: StateContext<AppStateModel>): void {
    ctx.setState({
      ...ctx.getState(),
      isLogging: true,
    });
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
