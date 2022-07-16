import { createContext, useState } from "react";

const USER_DATA_DEFAULT = {
  displayName: '',
  monthlyGrossIncome: 0,
  dividers: [
    {
      id: 0,
      name: '',
      percent: 0,
      expenses: [
        {
          id: 0,
          name: '',
          value: 0,
          reaccuring: false,
        }
      ]
    }
  ]
}

//parent
const DIVIDERS_DEFAULT = [
  {
    id: 0,
    name: '',
    percent: 0,
    expenses: []
  }
]

//child
const EXPENSES_DEFAULT = [
  {
    id: 0,
    name: '',
    value: 0,
    reaccuring: false
  }
]

export const SetupDataContext = createContext({
  setupData: USER_DATA_DEFAULT,
  setSetupData: () => {},
  addDivider: () => {},
  addExpenseToDivider: () => {}
})

export const SetupDataProvider = ({children}) => {
  const [setupData, setSetupData] = useState(USER_DATA_DEFAULT)
  const value = {setupData, setSetupData}

  
}