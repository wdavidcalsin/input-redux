const initState: any = [];

export const add = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      let value = state.filter((val: any) => val.id !== action.payload);
      console.log(value);
      return [...value];

    default:
      return state;
  }
};
