const initState: any = [];

export const add = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    default:
      return state;
  }
};
