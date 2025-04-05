import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface TaskSliceState {
  idCount: number
  tasks: Array<{ id: number; title: string; completed: boolean }>
}

const initialState: TaskSliceState = {
  idCount: 3,
  tasks: [
    {
      id: 1,
      title: "TASK A",
      completed: false,
    },
    {
      id: 2,
      title: "TASK B",
      completed: true,
    },
    {
      id: 3,
      title: "TASK C",
      completed: false,
    },
  ],
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const taskSlice = createAppSlice({
  name: "task",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    newTask: create.reducer((state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.idCount++
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      }
      state.tasks = [...state.tasks, newItem]
    }),
    completeTask: create.reducer(
      (
        state,
        action: PayloadAction<{
          id: number
          title: string
          completed: boolean
        }>,
      ) => {
        const task = state.tasks.find(t => t.id === action.payload.id)
        if (task) task.completed = !task.completed
      },
    ),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    deleteTask: create.reducer(
      (
        state,
        action: PayloadAction<{
          id: number
          title: string
          completed: boolean
        }>,
      ) => {
        state.tasks = state.tasks.filter(t => t.id !== action.payload.id)
      },
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    // incrementAsync: create.asyncThunk(
    //   async (amount: number) => {
    //     const response = await fetchCount(amount)
    //     // The value we return becomes the `fulfilled` action payload
    //     return response.data
    //   },
    //   {
    //     pending: state => {
    //       state.status = "loading"
    //     },
    //     fulfilled: (state, action) => {
    //       state.status = "idle"
    //       state.value += action.payload
    //     },
    //     rejected: state => {
    //       state.status = "failed"
    //     },
    //   },
    // ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectTasks: task => task.tasks,
    selectIdCount: task => task.idCount,
  },
})

// Action creators are generated for each case reducer function.
export const { newTask, completeTask, deleteTask } = taskSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectTasks, selectIdCount } = taskSlice.selectors

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }
