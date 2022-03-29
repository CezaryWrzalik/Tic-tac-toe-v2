import { atom } from "recoil";

export const winnerState = atom({
  key: "winnerState",
  default: "",
});

export const notificationState = atom({
  key: "notificationState",
  default: "",
});
