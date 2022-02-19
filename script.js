import { Controller } from "./script/controller.js";
import { Model } from "./script/model.js";
import { View } from "./script/view.js";

const model = new Model();
const view = new View();
const app = new Controller(model, view);
