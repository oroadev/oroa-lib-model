import { IAction } from "./action";
import { IBase } from "./base";

export interface IModule extends IBase{
    actions: IAction[];
}