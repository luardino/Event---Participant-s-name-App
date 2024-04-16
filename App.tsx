import { StatusBar } from "react-native";
import { Home } from "./src/Screens/HOME";

export default function App(){
  return(
    <>
      <StatusBar
         barStyle={"light-content"}
         backgroundColor='transparent'
         translucent
         />
      <Home/>
    </>
  )
};