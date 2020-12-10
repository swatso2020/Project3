import React from "react";
import { StoreProvider } from "./utils/GlobalState";
import RootContainer from './RootContainer';
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <StoreProvider>
      <RootContainer />
    </StoreProvider>
  );
}


export default App;


