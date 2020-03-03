import {Action, ActionCreator} from 'redux';

/*
 Notice that our action creator functions return the type ActionCreator<Action>.
 ActionCreator is a generic class defined by Redux that we use to define functions that create actions.
*/
export const INCREMENT: string = 'INCREMENT';
export const increment: ActionCreator<Action> = () => ({type: INCREMENT});

export const DECREMENT: string = 'DECREMENT';
export const decrement: ActionCreator<Action> = () => ({type: DECREMENT});

export const RESET: string = 'RESET';
export const reset: ActionCreator<Action> = () => ({type: RESET});