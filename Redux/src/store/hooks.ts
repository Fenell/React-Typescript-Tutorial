import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = useDispatch;
