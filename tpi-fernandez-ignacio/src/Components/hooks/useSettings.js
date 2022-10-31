import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";
import { SettingsDispatchContext } from "../Context/SettingsDispatchContext";

const useSettings = () => {
  const appTheme = useContext(SettingsContext);
  const setAppTheme = useContext(SettingsDispatchContext);
  return [appTheme, setAppTheme];
};
export default useSettings;
