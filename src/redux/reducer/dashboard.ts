export const TEMPLATE_NAME = "DASHBOARD"

const initialState = () : IDashboardState => ({
  contaBanco: {
    id: undefined,
    lancamentos: [] as ILancamentosData[],
    saldo: '',
  },
  contaCredito: {
    id: undefined,
    lancamentos: [] as ILancamentosData[],
    saldo: '',
  },
  plans: [],
  loading: false,
  error: false,
})

type Action = IDashboardPlansSuccess | IDashboardPending | IDashboardRejected;

const reducer = (state = initialState(), action: Action): IDashboardState => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_PENDING`: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    // case `${TEMPLATE_NAME}_SUCCESS`: {
    //   const { payload } = action;
    //   return {
    //     ...state,
    //     error: false,
    //     loading: false,
    //   };
    // }
    case `${TEMPLATE_NAME}_PLANS_SUCCESS`: {
      const { payload } = action as IDashboardPlansSuccess;
      return {
        ...state,
        ...payload,
        error: false,
        loading: false,
      };
    }
    case `${TEMPLATE_NAME}_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case `${TEMPLATE_NAME}_RESET`: {
      return initialState();
    }
    case 'RESET': {
      return initialState();
    }
    default: {
      return state;
    }
  }
};

export default reducer;
