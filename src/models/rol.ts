import { IBase } from "./base";
import { IModule } from "./module";

export interface IRol extends IBase{
    modules: IModule[];
}