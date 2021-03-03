export const initialAppState = {
    prompt: '',
    function:  '',
    winner: 'dummy winner',
    completedAlgos: {},
    totalRows: 0,
    submissionTestStatus: "dummy false",
    currentPlayers: {},
    userFxn: '',
    time: '',
    endGame: '',
    // algoID: '',
    // algoName: '',
    // algoStart: FALSE,
    // algoPrompt: '',
};

//from react hook, return hook which is a general state and general dispatch (is reducer)
export const appReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PROMPT':
      return {
        ...state,
        prompt: action.payload,
      };
    }
    switch (action.type) {
        case 'UPDATE_FUNCTION':
      return {
        ...state,
        function: action.payload.function,
      };
    }
    switch (action.type) {
        case 'UPDATE_WINNER':
      return {
        ...state,
        winner: action.payload.winner,
      };
    }
    switch (action.type) {
        case 'UPDATE_COMPLETEDALGOS':
      return {
        ...state,
        completedAlgos: action.payload.completedAlgos,
      };
    }
    switch (action.type) {
        case 'UPDATE_TOTALROWS':
      return {
        ...state,
        totalRows: action.payload.totalRows,
      };
    }
    switch (action.type) {
        case 'UPDATE_SUBMISSIONTESTSTATUS':
      return {
        ...state,
        submissionTestStatus: action.payload.submissionTestStatus,
      };
    }
    switch (action.type) {
        case 'UPDATE_USERNAME':
      return {
        ...state,
        currentPlayers: action.payload.currentPlayers,
      };
    }
    switch (action.type) {
        case 'UPDATE_TIME':
      return {
        ...state,
        time: action.payload.time,
      };
    }
    switch (action.type) {
        case 'UPDATE_EndGame':
      return {
        ...state,
        endGame: action.payload.endGame,
      };
    }
}

