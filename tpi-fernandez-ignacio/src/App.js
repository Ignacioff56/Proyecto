import { uid } from "uid";
import { useState } from "react";
import "./App.css";

import { SettingsContext } from "./Components/Context/SettingsContext";
import { SettingsDispatchContext } from "./Components/Context/SettingsDispatchContext";
import { AuthContext } from "./Components/Context/AuthContext";
import { AuthDispatchContext } from "./Components/Context/AuthDispatchContext";
import Router from "./Components/Router/Router";

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider value={currentUser}>
      <AuthDispatchContext.Provider value={setCurrentUser}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const SettingsProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState({ theme: "dark" });
  return (
    <SettingsContext.Provider value={appTheme}>
      <SettingsDispatchContext.Provider value={setAppTheme}>{children}</SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
};
