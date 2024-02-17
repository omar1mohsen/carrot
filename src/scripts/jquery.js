import axios from "axios";
import $ from "jquery";
import toast from "react-hot-toast";

window.$ = $;
window.jQuery = $;
let CarrotFrontend = {};

CarrotFrontend.load = {
  tre_add_cart() {
    $(document).on("click", ".tre-addcart-btn", async function () {
      let th = $(this),
        id = th.attr("data-id"),
        stroage = JSON.parse(localStorage.getItem("cart_items")),
        myItems = stroage ? stroage : [];

      await axios
        .get(`${process.env.REACT_APP__ALL_PRODUCTS_URL}/${id}`)
        .then((res) => {
          myItems.push(res.data);
          localStorage.setItem("cart_items", JSON.stringify(myItems));
          console.log(myItems);
        })
        .then(() => toast.success("Added To Cart Successfully"));
    });
  },
  tre_listing_Style() {
    $(document).on("click", ".tre-list-style", function () {
      let th = $(this),
        style = th.attr("data-style"),
        btns = $(document).find(".tre-list-style");
      if (btns.length) {
        btns.each(function () {
          $(this).removeClass("active-grid");
          $(this)
            .parents(".tre-products-contanier")
            .removeClass($(this).attr("data-style"));
        });
        th.addClass("active-grid");
        th.parents(".tre-products-contanier").addClass(style);
        localStorage.setItem("listing_style", style);
      }
    });
  },
  tre_listing_render() {
    $(function () {
      let listing_style = localStorage.getItem("listing_style"),
        btns = $(document).find(".tre-list-style");
      if (listing_style == null) return;
      btns.each(function () {
        console.log($(this).attr("data-style"));
        if ($(this).attr("data-style") === listing_style) {
          $(this).addClass("active-grid");
        } else {
          $(this).removeClass("active-grid");
        }
      });
      $(document).find(`.tre-products-contanier`).addClass(listing_style);
    });
  },
  tre_select_checkbox() {
    $(document).on("click", ".tre-fliter-checkbox", function () {
      let boxs = $(document).find(".tre-fliter-checkbox");
      if (boxs.length) {
        boxs.each(function () {
          $(this).prop("checked", false);
        });
        $(this).prop("checked", true);
        $(".tre-fliter-btn").attr("data-type", $(this).val());
      }
    });
  },
  tre_fliter() {
    $(document).on("click", ".tre-fliter-btn", function () {
      let th = $(this),
        cat = th.attr("data-type"),
        url = `/products${cat !== "all" ? `/${cat}` : "/all"}`;
      window.location.replace(url);
    });
  },
};

$(window).on("load", function () {
  CarrotFrontend.load.tre_add_cart();
  CarrotFrontend.load.tre_listing_Style();
  CarrotFrontend.load.tre_listing_render();
  CarrotFrontend.load.tre_select_checkbox();
  CarrotFrontend.load.tre_fliter();
});
