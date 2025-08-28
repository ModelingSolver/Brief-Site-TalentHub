import { Controller } from "./Controller";
import { missions } from "../src/data";
export class GlobalController extends Controller {
 
  public homepage() {

    this.response.render("pages/home.ejs", { missions });
  }
}
  

