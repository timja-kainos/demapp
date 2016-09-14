package controllers;

import play.*;
import play.mvc.*;

import play.twirl.api.Html;
import views.html.*;

public class Application extends Controller {

  public static Result index() {

    return ok(map.render("Chicken."));
  }
}
