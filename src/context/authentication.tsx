import { createContext, ReactNode, useReducer } from 'react'

interface AuthenticationProviderProps {
  children: ReactNode;
}

interface ReducerAction {
  type: string;
}

interface IInitialState {
  authenticationStage: string;
}

type TAuthenticationContextProps = {
  dispatch(value: ReducerAction): void;
  state: IInitialState;
}

const STAGES = ['login', 'register'];

const initialStage = {
  authenticationStage: STAGES[0],
} as IInitialState;

const authenticationReducer = (state: IInitialState, action: ReducerAction) => {
  console.log(state);
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        authenticationStage: STAGES[1]
      }

    case "LOGAR":
      return {
        ...state,
        authenticationStage: STAGES[0]
      }

    default:
      return state;
  }
}

export const AuthenticationContext = createContext<TAuthenticationContextProps | null>(null);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {

  const [state, dispatch] = useReducer(authenticationReducer, initialStage);

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
}