package controllers;

import play.*;
import play.mvc.*;

import play.twirl.api.Html;
import views.html.*;
import views.html.layouts.govuk_template;

public class Application extends Controller {

    public static Result index() {

        return ok(map.render("Chicken."));
    }

    public static Result template() {

        return ok(govuk_template.render(new Html("content")));
    }

    public static Result map() {

        return ok(map.render("Map URL"));
    }
}
