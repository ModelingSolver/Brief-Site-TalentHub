import { Controller } from "./Controller";

export class GlobalController extends Controller {
 
  public homepage() {
    this.response.render("pages/home.ejs");
  }
}
