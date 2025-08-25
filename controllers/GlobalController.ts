
import { Controller } from "./Controller";

export class GlobalsController extends Controller {
 
  public homepage() {
    this.response.render("pages/home.ejs");
  }
}
