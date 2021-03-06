import React, { createContext, useContext, useReducer, Dispatch }  from "react";

interface GlobalState {
  currentPage: number;
  hasMore: boolean;
  posts: any
}

interface Action {
  type: 'page' | 'posts',
  currentPage?: number;
  hasMore?: boolean;
  posts?: any;
}

// state
const GlobalStateContext = createContext<GlobalState>({
  currentPage: 1,
  hasMore: true,
  posts: []
});

// dispatch
const GlobalDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

function globalReducer(state: GlobalState, action: Action): GlobalState {
  if (action.type === 'page') {
    if (!state.hasMore) {
      return {
        ...state
      };
    }

    return {
      ...state,
      currentPage: state.currentPage + 1
    }
  }

  if (action.type === 'posts') {
    return {
      ...state,
      hasMore: action.hasMore || false,
      posts: state.posts.concat(action.posts)
    }
  }

  return {...state};
}

export const GlobalContextProvider = ({children}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentPage: 1,
    hasMore: true,
    posts: []
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
};

export function useGlobalState () {
  const state = useContext(GlobalStateContext);

  if (!state) {
    throw new Error('Error, state is undefined X_X');
  }

  return state;
}

export function useGlobalDispatch() {
  const dispatch = useContext(GlobalDispatchContext);

  if (!dispatch) {
    throw new Error('Error, dispatch is undefined X_X');
  }

  return dispatch;
}
