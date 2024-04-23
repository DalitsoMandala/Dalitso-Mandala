/*---------------------------------
    All Plugins Include Here 
-----------------------------------*/

/*************************************
	Avoid Console
**************************************/

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.

/*==========================
    Youtube Player 
==========================*/
/*! YU2FVL - jQuery Youtube Url To FullScreen Video Lightbox - v0.1.0 - 2016-02-07
 * http://otakod.es/yu2fvl
 * Copyright (c) 2016 darkylmnx; Licensed MIT */
!(function (t, e, s) {
  function i(t) {
    return /youtu\.be/.test(t)
      ? t.split("youtu.be/")[1].split("?")[0].split("&")[0].split("#")[0]
      : /youtube\.com\/v\//.test(t)
      ? t.split("youtube.com/v/")[1].split("?")[0].split("&")[0].split("#")[0]
      : /youtube\.com\/embed\//.test(t)
      ? t
          .split("youtube.com/embed/")[1]
          .split("?")[0]
          .split("&")[0]
          .split("#")[0]
      : /youtube.com|youtuberepeater.com|listenonrepeat.com/.test(t)
      ? t.split("v=")[1].split("&")[0].split("#")[0]
      : !1;
  }
  function n(t, e, s) {
    var i = JSON.stringify({ event: "command", func: e, args: s || [] });
    -1 !== t.src.indexOf("youtube.com/embed") &&
      t.contentWindow.postMessage(i, "*");
  }
  function o(e, i, o) {
    function f() {
      var t = a.width() - e.minPaddingX,
        s = a.height() - e.minPaddingY,
        i = t / s,
        n = e.ratio;
      i > n ? (C.height(s), C.width(s * n)) : (C.width(t), C.height(t / n)),
        C.css("left", (a.width() - C.width()) / 2),
        C.css("top", (a.height() - C.height()) / 2);
    }
    function r() {
      n(w[0], "playVideo"), h();
    }
    function h() {
      b.stop().fadeIn("fast"), C.stop().fadeIn("fast");
    }
    function m() {
      b.stop().fadeOut("fast"),
        C.stop().fadeOut("fast", function () {
          null === i && e.open && (b.remove(), C.remove());
        });
    }
    function v(t) {
      t.on("click", function (t) {
        t.preventDefault(), r();
      });
    }
    function y(t) {
      t.on("click", function (t) {
        t.preventDefault(), n(w[0], "pauseVideo"), m();
      });
    }
    var C = t(s.createElement("DIV")).addClass(e.cssClass).css(c),
      b = t(s.createElement("DIV"))
        .addClass(e.cssClass + e.overlayCssClass)
        .css(p),
      g = t(s.createElement("BUTTON"))
        .addClass(e.cssClass + e.closeCssClass)
        .html(e.closeText),
      w = t(s.createElement("IFRAME"))
        .addClass(e.cssClass + e.iframeCssClass)
        .attr({ src: l + o + d })
        .css(u);
    C.append(w).append(g),
      t("body").append(b).append(C),
      e.open &&
        w.on("load", function () {
          r();
        }),
      null !== i && v(i),
      y(g.add(b)),
      a.on("resize", f).trigger("resize");
  }
  var a = t(e),
    l = "https://www.youtube.com/embed/",
    d = "?enablejsapi=1",
    c = { display: "none", position: "fixed" },
    u = { width: "100%", height: "100%" },
    p = {
      display: "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    f = {
      minPaddingX: 50,
      minPaddingY: 50,
      ratio: 16 / 9,
      cssClass: "yu2fvl",
      overlayCssClass: "-overlay",
      iframeCssClass: "-iframe",
      closeCssClass: "-close",
      closeText: "X",
      open: !1,
      vid: !1,
    };
  (t.yu2fvl = function (e) {
    var s = t.extend({}, f, e);
    if (s.vid === !1) throw "YOU MUST SET THE 'vid' option";
    o(s, null, s.vid);
  }),
    (t.fn.yu2fvl = function (e) {
      function s() {
        var e = t(this),
          s = i(e.attr("href"));
        o(n, e, s);
      }
      var n = t.extend({}, f, e);
      return n.vid !== !1 ? (o(n, this, n.vid), this) : this.each(s);
    });
})(jQuery, window, document);

/*==============================
	Slick Slider
===============================*/

/*
  Version: 1.9.0
  Author: Ken Wheeler
  Website: http://kenwheeler.github.io
  Docs: http://kenwheeler.github.io/slick
  Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        "undefined" != typeof document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : o === !0
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        "object" == typeof o &&
        o.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
          e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
        i.removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(":focus") &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        var i = this;
        return i.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : n.options.centerMode === !0 &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
              ? o[0].offsetLeft * -1
              : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                ? o[0].offsetLeft * -1
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        var e = this;
        return e.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              )
                return (t = s), !1;
            }),
            (e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        var t = this;
        t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + t,
                  tabindex: -1,
                }),
                s !== -1)
              ) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({ "aria-describedby": n });
              }
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: "0" })
          : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        e.options.accessibility === !0 &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
          e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
              data: { message: e.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({
              data: { message: e.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                r.$slider.trigger("lazyLoaded", [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1)
              )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find(".slick-slide").slice(s, n)),
        "anticipated" === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find(".slick-slide")), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider
              .find(".slick-cloned")
              .slice(0, r.options.slidesToShow)),
            e(o))
          : 0 === r.currentSlide &&
            ((o = r.$slider
              .find(".slick-cloned")
              .slice(r.options.slidesToShow * -1)),
            e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr("tabindex", 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          (r = document.createElement("img")),
          (r.onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          "boolean" == typeof i
            ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
            : (i = e === !0 ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : "undefined" != typeof arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (a.animating === !0 && a.options.waitForAnimate === !0) ||
          (a.options.fade === !0 && a.currentSlide === i)
        ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                ((l = a.getNavTarget()),
                (l = l.slick("getSlick")),
                l.slideCount <= l.options.slidesToShow &&
                  l.setSlideClasses(a.currentSlide)),
              a.updateDots(),
              a.updateArrows(),
              a.options.fade === !0
                ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? s.options.rtl === !1
            ? "right"
            : "left"
          : s.options.verticalSwiping === !0
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ("ontouchend" in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
            ? (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || "undefined" == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          "undefined" != typeof t)
        )
          return t;
      return o;
    });
});

/*=============================
	Waypoints
==============================*/

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = false);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function () {
        return d._invoke(this, "disable");
      },
      enable: function () {
        return d._invoke(this, "enable");
      },
      destroy: function () {
        return d._invoke(this, "destroy");
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false,
    };
    h = {
      refresh: function () {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke("enable");
      },
      disable: function () {
        return h._invoke("disable");
      },
      destroy: function () {
        return h._invoke("destroy");
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(this);

/*=================
    Wow Js 
===================*/
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);

/*=========================
    CounterUp 
============================*/
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function () {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length)
              setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

/*=========================
    parallax 
============================*/

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!(function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e &&
      (delete e.refresh, delete e.render, t.extend(this, e)),
      (this.$element = t(i)),
      !this.imageSrc &&
        this.$element.is("img") &&
        (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (
      (r.length < 1 && r.push("center"),
      1 == r.length && r.push(r[0]),
      ("top" == r[0] ||
        "bottom" == r[0] ||
        "left" == r[1] ||
        "right" == r[1]) &&
        (r = [r[1], r[0]]),
      this.positionX != s && (r[0] = this.positionX.toLowerCase()),
      this.positionY != s && (r[1] = this.positionY.toLowerCase()),
      (h.positionX = r[0]),
      (h.positionY = r[1]),
      "left" != this.positionX &&
        "right" != this.positionX &&
        (this.positionX = isNaN(parseInt(this.positionX))
          ? "center"
          : parseInt(this.positionX)),
      "top" != this.positionY &&
        "bottom" != this.positionY &&
        (this.positionY = isNaN(parseInt(this.positionY))
          ? "center"
          : parseInt(this.positionY)),
      (this.position =
        this.positionX +
        (isNaN(this.positionX) ? "" : "px") +
        " " +
        this.positionY +
        (isNaN(this.positionY) ? "" : "px")),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/))
    )
      return (
        this.imageSrc &&
          this.iosFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    if (navigator.userAgent.match(/(Android)/))
      return (
        this.imageSrc &&
          this.androidFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    this.$mirror = t("<div />").prependTo("body");
    var a = this.$element.find(">.parallax-slider"),
      n = !1;
    0 == a.length
      ? (this.$slider = t("<img />").prependTo(this.$mirror))
      : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
      this.$mirror.addClass("parallax-mirror").css({
        visibility: "hidden",
        zIndex: this.zIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }),
      this.$slider.addClass("parallax-slider").one("load", function () {
        (h.naturalHeight && h.naturalWidth) ||
          ((h.naturalHeight = this.naturalHeight || this.height || 1),
          (h.naturalWidth = this.naturalWidth || this.width || 1)),
          (h.aspectRatio = h.naturalWidth / h.naturalHeight),
          o.isSetup || o.setup(),
          o.sliders.push(h),
          (o.isFresh = !1),
          o.requestRender();
      }),
      n || (this.$slider[0].src = this.imageSrc),
      ((this.naturalHeight && this.naturalWidth) ||
        this.$slider[0].complete ||
        a.length > 0) &&
        this.$slider.trigger("load");
  }
  function h(s) {
    return this.each(function () {
      var h = t(this),
        r = "object" == typeof s && s;
      this == i || this == e || h.is("body")
        ? o.configure(r)
        : h.data("px.parallax")
        ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
        : ((r = t.extend({}, h.data(), r)),
          h.data("px.parallax", new o(this, r))),
        "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
      s < e.length && !i.requestAnimationFrame;
      ++s
    )
      (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
        (i.cancelAnimationFrame =
          i[e[s] + "CancelAnimationFrame"] ||
          i[e[s] + "CancelRequestAnimationFrame"]);
    i.requestAnimationFrame ||
      (i.requestAnimationFrame = function (e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
            e(s + o);
          }, o);
        return (t = s + o), h;
      }),
      i.cancelAnimationFrame ||
        (i.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
    t.extend(o.prototype, {
      speed: 0.2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      refresh: function () {
        (this.boxWidth = this.$element.outerWidth()),
          (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
          (this.boxOffsetTop = this.$element.offset().top - this.bleed),
          (this.boxOffsetLeft = this.$element.offset().left),
          (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
        var t = o.winHeight,
          i = o.docHeight,
          e = Math.min(this.boxOffsetTop, i - t),
          s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
          h = (this.boxHeight + (e - s) * (1 - this.speed)) | 0,
          r = ((this.boxOffsetTop - e) * (1 - this.speed)) | 0;
        if (h * this.aspectRatio >= this.boxWidth) {
          (this.imageWidth = (h * this.aspectRatio) | 0),
            (this.imageHeight = h),
            (this.offsetBaseTop = r);
          var a = this.imageWidth - this.boxWidth;
          this.offsetLeft =
            "left" == this.positionX
              ? 0
              : "right" == this.positionX
              ? -a
              : isNaN(this.positionX)
              ? (-a / 2) | 0
              : Math.max(this.positionX, -a);
        } else {
          (this.imageWidth = this.boxWidth),
            (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
            (this.offsetLeft = 0);
          var a = this.imageHeight - h;
          this.offsetBaseTop =
            "top" == this.positionY
              ? r
              : "bottom" == this.positionY
              ? r - a
              : isNaN(this.positionY)
              ? (r - a / 2) | 0
              : r + Math.max(this.positionY, -a);
        }
      },
      render: function () {
        var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
        this.boxOffsetBottom > t && this.boxOffsetTop <= s
          ? ((this.visibility = "visible"),
            (this.mirrorTop = this.boxOffsetTop - t),
            (this.mirrorLeft = this.boxOffsetLeft - i),
            (this.offsetTop =
              this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
          : (this.visibility = "hidden"),
          this.$mirror.css({
            transform: "translate3d(0px, 0px, 0px)",
            visibility: this.visibility,
            top: this.mirrorTop - e,
            left: this.mirrorLeft,
            height: this.boxHeight,
            width: this.boxWidth,
          }),
          this.$slider.css({
            transform: "translate3d(0px, 0px, 0px)",
            position: "absolute",
            top: this.offsetTop,
            left: this.offsetLeft,
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: "none",
          });
      },
    }),
    t.extend(o, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function () {
        if (!this.isReady) {
          var s = t(e),
            h = t(i),
            r = function () {
              (o.winHeight = h.height()),
                (o.winWidth = h.width()),
                (o.docHeight = s.height()),
                (o.docWidth = s.width());
            },
            a = function () {
              var t = h.scrollTop(),
                i = o.docHeight - o.winHeight,
                e = o.docWidth - o.winWidth;
              (o.scrollTop = Math.max(0, Math.min(i, t))),
                (o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft()))),
                (o.overScroll = Math.max(t - i, Math.min(t, 0)));
            };
          h
            .on("resize.px.parallax load.px.parallax", function () {
              r(), (o.isFresh = !1), o.requestRender();
            })
            .on("scroll.px.parallax load.px.parallax", function () {
              a(), o.requestRender();
            }),
            r(),
            a(),
            (this.isReady = !0);
        }
      },
      configure: function (i) {
        "object" == typeof i &&
          (delete i.refresh, delete i.render, t.extend(this.prototype, i));
      },
      refresh: function () {
        t.each(this.sliders, function () {
          this.refresh();
        }),
          (this.isFresh = !0);
      },
      render: function () {
        this.isFresh || this.refresh(),
          t.each(this.sliders, function () {
            this.render();
          });
      },
      requestRender: function () {
        var t = this;
        this.isBusy ||
          ((this.isBusy = !0),
          i.requestAnimationFrame(function () {
            t.render(), (t.isBusy = !1);
          }));
      },
      destroy: function (e) {
        var s,
          h = t(e).data("px.parallax");
        for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
          this.sliders[s] == h && this.sliders.splice(s, 1);
        t(e).data("px.parallax", !1),
          0 === this.sliders.length &&
            (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            (this.isReady = !1),
            (o.isSetup = !1));
      },
    });
  var r = t.fn.parallax;
  (t.fn.parallax = h),
    (t.fn.parallax.Constructor = o),
    (t.fn.parallax.noConflict = function () {
      return (t.fn.parallax = r), this;
    }),
    t(e).on("ready.px.parallax.data-api", function () {
      t('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document);

/*===================================
  10. ScrollUp
===================================-*/

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear Ã¢â‚¬â€ @markgdyr Ã¢â‚¬â€ http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  "use strict";
  (l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") ||
      (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i =
        "top" === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l("html, body").animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7
          ? l(o).off("scroll", r)
          : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*--------------------------
  Feather Icons  
-----------------------------*/

!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.feather = n())
    : (e.feather = n());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var n = {};
    function i(t) {
      if (n[t]) return n[t].exports;
      var l = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
    }
    return (
      (i.m = e),
      (i.c = n),
      (i.d = function (e, n, t) {
        i.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: t,
          });
      }),
      (i.r = function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(n, "a", n), n;
      }),
      (i.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (i.p = ""),
      i((i.s = 80))
    );
  })([
    function (e, n, i) {
      (function (n) {
        var i = "object",
          t = function (e) {
            return e && e.Math == Math && e;
          };
        e.exports =
          t(typeof globalThis == i && globalThis) ||
          t(typeof window == i && window) ||
          t(typeof self == i && self) ||
          t(typeof n == i && n) ||
          Function("return this")();
      }).call(this, i(75));
    },
    function (e, n) {
      var i = {}.hasOwnProperty;
      e.exports = function (e, n) {
        return i.call(e, n);
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(33),
        o = i(62),
        a = t.Symbol,
        c = l("wks");
      e.exports = function (e) {
        return c[e] || (c[e] = (o && a[e]) || (o ? a : r)("Symbol." + e));
      };
    },
    function (e, n, i) {
      var t = i(6);
      e.exports = function (e) {
        if (!t(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    function (e, n) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(10);
      e.exports = t
        ? function (e, n, i) {
            return l.f(e, n, r(1, i));
          }
        : function (e, n, i) {
            return (e[n] = i), e;
          };
    },
    function (e, n) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(35),
        r = i(3),
        o = i(18),
        a = Object.defineProperty;
      n.f = t
        ? a
        : function (e, n, i) {
            if ((r(e), (n = o(n, !0)), r(i), l))
              try {
                return a(e, n, i);
              } catch (e) {}
            if ("get" in i || "set" in i)
              throw TypeError("Accessors not supported");
            return "value" in i && (e[n] = i.value), e;
          };
    },
    function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (e, n) {
      e.exports = {};
    },
    function (e, n) {
      e.exports = function (e, n) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: n,
        };
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(19),
        r = i(17),
        o = t["__core-js_shared__"] || l("__core-js_shared__", {});
      (e.exports = function (e, n) {
        return o[e] || (o[e] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: "3.1.3",
        mode: r ? "pure" : "global",
        copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t = o(i(43)),
        l = o(i(41)),
        r = o(i(40));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n.default = Object.keys(l.default)
        .map(function (e) {
          return new t.default(e, l.default[e], r.default[e]);
        })
        .reduce(function (e, n) {
          return (e[n.name] = n), e;
        }, {});
    },
    function (e, n) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (e, n, i) {
      var t = i(72),
        l = i(20);
      e.exports = function (e) {
        return t(l(e));
      };
    },
    function (e, n) {
      e.exports = {};
    },
    function (e, n, i) {
      var t = i(11),
        l = i(33),
        r = t("keys");
      e.exports = function (e) {
        return r[e] || (r[e] = l(e));
      };
    },
    function (e, n) {
      e.exports = !1;
    },
    function (e, n, i) {
      var t = i(6);
      e.exports = function (e, n) {
        if (!t(e)) return e;
        var i, l;
        if (n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
          return l;
        if ("function" == typeof (i = e.valueOf) && !t((l = i.call(e))))
          return l;
        if (!n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
          return l;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(5);
      e.exports = function (e, n) {
        try {
          l(t, e, n);
        } catch (i) {
          t[e] = n;
        }
        return n;
      };
    },
    function (e, n) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    function (e, n) {
      var i = Math.ceil,
        t = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? t : i)(e);
      };
    },
    function (e, n, i) {
      var t;

      /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function () {
        "use strict";
        var i = (function () {
          function e() {}
          function n(e, n) {
            for (var i = n.length, t = 0; t < i; ++t) l(e, n[t]);
          }
          e.prototype = Object.create(null);
          var i = {}.hasOwnProperty;
          var t = /\s+/;
          function l(e, l) {
            if (l) {
              var r = typeof l;
              "string" === r
                ? (function (e, n) {
                    for (var i = n.split(t), l = i.length, r = 0; r < l; ++r)
                      e[i[r]] = !0;
                  })(e, l)
                : Array.isArray(l)
                ? n(e, l)
                : "object" === r
                ? (function (e, n) {
                    for (var t in n) i.call(n, t) && (e[t] = !!n[t]);
                  })(e, l)
                : "number" === r &&
                  (function (e, n) {
                    e[n] = !0;
                  })(e, l);
            }
          }
          return function () {
            for (var i = arguments.length, t = Array(i), l = 0; l < i; l++)
              t[l] = arguments[l];
            var r = new e();
            n(r, t);
            var o = [];
            for (var a in r) r[a] && o.push(a);
            return o.join(" ");
          };
        })();
        void 0 !== e && e.exports
          ? (e.exports = i)
          : void 0 ===
              (t = function () {
                return i;
              }.apply(n, [])) || (e.exports = t);
      })();
    },
    function (e, n, i) {
      var t = i(7).f,
        l = i(1),
        r = i(2)("toStringTag");
      e.exports = function (e, n, i) {
        e &&
          !l((e = i ? e : e.prototype), r) &&
          t(e, r, { configurable: !0, value: n });
      };
    },
    function (e, n, i) {
      var t = i(20);
      e.exports = function (e) {
        return Object(t(e));
      };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(24),
        r = i(16),
        o = i(63),
        a = r("IE_PROTO"),
        c = Object.prototype;
      e.exports = o
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = l(e)),
              t(e, a)
                ? e[a]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? c
                : null
            );
          };
    },
    function (e, n, i) {
      "use strict";
      var t,
        l,
        r,
        o = i(25),
        a = i(5),
        c = i(1),
        p = i(2),
        y = i(17),
        h = p("iterator"),
        x = !1;
      [].keys &&
        ("next" in (r = [].keys())
          ? (l = o(o(r))) !== Object.prototype && (t = l)
          : (x = !0)),
        void 0 == t && (t = {}),
        y ||
          c(t, h) ||
          a(t, h, function () {
            return this;
          }),
        (e.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: x });
    },
    function (e, n, i) {
      var t = i(21),
        l = Math.min;
      e.exports = function (e) {
        return e > 0 ? l(t(e), 9007199254740991) : 0;
      };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(14),
        r = i(68),
        o = i(15),
        a = r(!1);
      e.exports = function (e, n) {
        var i,
          r = l(e),
          c = 0,
          p = [];
        for (i in r) !t(o, i) && t(r, i) && p.push(i);
        for (; n.length > c; ) t(r, (i = n[c++])) && (~a(p, i) || p.push(i));
        return p;
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(5),
        o = i(1),
        a = i(19),
        c = i(36),
        p = i(37),
        y = p.get,
        h = p.enforce,
        x = String(c).split("toString");
      l("inspectSource", function (e) {
        return c.call(e);
      }),
        (e.exports = function (e, n, i, l) {
          var c = !!l && !!l.unsafe,
            p = !!l && !!l.enumerable,
            y = !!l && !!l.noTargetGet;
          "function" == typeof i &&
            ("string" != typeof n || o(i, "name") || r(i, "name", n),
            (h(i).source = x.join("string" == typeof n ? n : ""))),
            e !== t
              ? (c ? !y && e[n] && (p = !0) : delete e[n],
                p ? (e[n] = i) : r(e, n, i))
              : p
              ? (e[n] = i)
              : a(n, i);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && y(this).source) || c.call(this);
        });
    },
    function (e, n) {
      var i = {}.toString;
      e.exports = function (e) {
        return i.call(e).slice(8, -1);
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(73),
        r = i(10),
        o = i(14),
        a = i(18),
        c = i(1),
        p = i(35),
        y = Object.getOwnPropertyDescriptor;
      n.f = t
        ? y
        : function (e, n) {
            if (((e = o(e)), (n = a(n, !0)), p))
              try {
                return y(e, n);
              } catch (e) {}
            if (c(e, n)) return r(!l.f.call(e, n), e[n]);
          };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(31).f,
        r = i(5),
        o = i(29),
        a = i(19),
        c = i(71),
        p = i(65);
      e.exports = function (e, n) {
        var i,
          y,
          h,
          x,
          s,
          u = e.target,
          d = e.global,
          f = e.stat;
        if ((i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype))
          for (y in n) {
            if (
              ((x = n[y]),
              (h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y]),
              !p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h)
            ) {
              if (typeof x == typeof h) continue;
              c(x, h);
            }
            (e.sham || (h && h.sham)) && r(x, "sham", !0), o(i, y, x, e);
          }
      };
    },
    function (e, n) {
      var i = 0,
        t = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++i + t).toString(36)
        );
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(6),
        r = t.document,
        o = l(r) && l(r.createElement);
      e.exports = function (e) {
        return o ? r.createElement(e) : {};
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(4),
        r = i(34);
      e.exports =
        !t &&
        !l(function () {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (e, n, i) {
      var t = i(11);
      e.exports = t("native-function-to-string", Function.toString);
    },
    function (e, n, i) {
      var t,
        l,
        r,
        o = i(76),
        a = i(0),
        c = i(6),
        p = i(5),
        y = i(1),
        h = i(16),
        x = i(15),
        s = a.WeakMap;
      if (o) {
        var u = new s(),
          d = u.get,
          f = u.has,
          g = u.set;
        (t = function (e, n) {
          return g.call(u, e, n), n;
        }),
          (l = function (e) {
            return d.call(u, e) || {};
          }),
          (r = function (e) {
            return f.call(u, e);
          });
      } else {
        var v = h("state");
        (x[v] = !0),
          (t = function (e, n) {
            return p(e, v, n), n;
          }),
          (l = function (e) {
            return y(e, v) ? e[v] : {};
          }),
          (r = function (e) {
            return y(e, v);
          });
      }
      e.exports = {
        set: t,
        get: l,
        has: r,
        enforce: function (e) {
          return r(e) ? l(e) : t(e, {});
        },
        getterFor: function (e) {
          return function (n) {
            var i;
            if (!c(n) || (i = l(n)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return i;
          };
        },
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
            }
            return e;
          },
        l = o(i(22)),
        r = o(i(12));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n.default = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document)
          throw new Error(
            "`feather.replace()` only works in a browser environment."
          );
        var n = document.querySelectorAll("[data-feather]");
        Array.from(n).forEach(function (n) {
          return (function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = (function (e) {
                return Array.from(e.attributes).reduce(function (e, n) {
                  return (e[n.name] = n.value), e;
                }, {});
              })(e),
              o = i["data-feather"];
            delete i["data-feather"];
            var a = r.default[o].toSvg(
                t({}, n, i, { class: (0, l.default)(n.class, i.class) })
              ),
              c = new DOMParser()
                .parseFromString(a, "image/svg+xml")
                .querySelector("svg");
            e.parentNode.replaceChild(c, e);
          })(n, e);
        });
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t,
        l = i(12),
        r = (t = l) && t.__esModule ? t : { default: t };
      n.default = function (e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (console.warn(
            "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
          ),
          !e)
        )
          throw new Error(
            "The required `key` (icon name) parameter is missing."
          );
        if (!r.default[e])
          throw new Error(
            "No icon matching '" +
              e +
              "'. See the complete list of icons at https://feathericons.com"
          );
        return r.default[e].toSvg(n);
      };
    },
    function (e) {
      e.exports = {
        activity: ["pulse", "health", "action", "motion"],
        airplay: ["stream", "cast", "mirroring"],
        "alert-circle": ["warning", "alert", "danger"],
        "alert-octagon": ["warning", "alert", "danger"],
        "alert-triangle": ["warning", "alert", "danger"],
        "align-center": ["text alignment", "center"],
        "align-justify": ["text alignment", "justified"],
        "align-left": ["text alignment", "left"],
        "align-right": ["text alignment", "right"],
        anchor: [],
        archive: ["index", "box"],
        "at-sign": ["mention", "at", "email", "message"],
        award: ["achievement", "badge"],
        aperture: ["camera", "photo"],
        "bar-chart": ["statistics", "diagram", "graph"],
        "bar-chart-2": ["statistics", "diagram", "graph"],
        battery: ["power", "electricity"],
        "battery-charging": ["power", "electricity"],
        bell: ["alarm", "notification", "sound"],
        "bell-off": ["alarm", "notification", "silent"],
        bluetooth: ["wireless"],
        "book-open": ["read", "library"],
        book: ["read", "dictionary", "booklet", "magazine", "library"],
        bookmark: ["read", "clip", "marker", "tag"],
        box: ["cube"],
        briefcase: ["work", "bag", "baggage", "folder"],
        calendar: ["date"],
        camera: ["photo"],
        cast: ["chromecast", "airplay"],
        circle: ["off", "zero", "record"],
        clipboard: ["copy"],
        clock: ["time", "watch", "alarm"],
        "cloud-drizzle": ["weather", "shower"],
        "cloud-lightning": ["weather", "bolt"],
        "cloud-rain": ["weather"],
        "cloud-snow": ["weather", "blizzard"],
        cloud: ["weather"],
        codepen: ["logo"],
        codesandbox: ["logo"],
        code: ["source", "programming"],
        coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
        columns: ["layout"],
        command: ["keyboard", "cmd", "terminal", "prompt"],
        compass: ["navigation", "safari", "travel", "direction"],
        copy: ["clone", "duplicate"],
        "corner-down-left": ["arrow", "return"],
        "corner-down-right": ["arrow"],
        "corner-left-down": ["arrow"],
        "corner-left-up": ["arrow"],
        "corner-right-down": ["arrow"],
        "corner-right-up": ["arrow"],
        "corner-up-left": ["arrow"],
        "corner-up-right": ["arrow"],
        cpu: ["processor", "technology"],
        "credit-card": ["purchase", "payment", "cc"],
        crop: ["photo", "image"],
        crosshair: ["aim", "target"],
        database: ["storage", "memory"],
        delete: ["remove"],
        disc: ["album", "cd", "dvd", "music"],
        "dollar-sign": ["currency", "money", "payment"],
        droplet: ["water"],
        edit: ["pencil", "change"],
        "edit-2": ["pencil", "change"],
        "edit-3": ["pencil", "change"],
        eye: ["view", "watch"],
        "eye-off": ["view", "watch", "hide", "hidden"],
        "external-link": ["outbound"],
        facebook: ["logo", "social"],
        "fast-forward": ["music"],
        figma: ["logo", "design", "tool"],
        "file-minus": ["delete", "remove", "erase"],
        "file-plus": ["add", "create", "new"],
        "file-text": ["data", "txt", "pdf"],
        film: ["movie", "video"],
        filter: ["funnel", "hopper"],
        flag: ["report"],
        "folder-minus": ["directory"],
        "folder-plus": ["directory"],
        folder: ["directory"],
        framer: ["logo", "design", "tool"],
        frown: ["emoji", "face", "bad", "sad", "emotion"],
        gift: ["present", "box", "birthday", "party"],
        "git-branch": ["code", "version control"],
        "git-commit": ["code", "version control"],
        "git-merge": ["code", "version control"],
        "git-pull-request": ["code", "version control"],
        github: ["logo", "version control"],
        gitlab: ["logo", "version control"],
        globe: ["world", "browser", "language", "translate"],
        "hard-drive": ["computer", "server", "memory", "data"],
        hash: ["hashtag", "number", "pound"],
        headphones: ["music", "audio", "sound"],
        heart: ["like", "love", "emotion"],
        "help-circle": ["question mark"],
        hexagon: ["shape", "node.js", "logo"],
        home: ["house", "living"],
        image: ["picture"],
        inbox: ["email"],
        instagram: ["logo", "camera"],
        key: ["password", "login", "authentication", "secure"],
        layers: ["stack"],
        layout: ["window", "webpage"],
        "life-bouy": ["help", "life ring", "support"],
        link: ["chain", "url"],
        "link-2": ["chain", "url"],
        linkedin: ["logo", "social media"],
        list: ["options"],
        lock: ["security", "password", "secure"],
        "log-in": ["sign in", "arrow", "enter"],
        "log-out": ["sign out", "arrow", "exit"],
        mail: ["email", "message"],
        "map-pin": ["location", "navigation", "travel", "marker"],
        map: ["location", "navigation", "travel"],
        maximize: ["fullscreen"],
        "maximize-2": ["fullscreen", "arrows", "expand"],
        meh: ["emoji", "face", "neutral", "emotion"],
        menu: ["bars", "navigation", "hamburger"],
        "message-circle": ["comment", "chat"],
        "message-square": ["comment", "chat"],
        "mic-off": ["record", "sound", "mute"],
        mic: ["record", "sound", "listen"],
        minimize: ["exit fullscreen", "close"],
        "minimize-2": ["exit fullscreen", "arrows", "close"],
        minus: ["subtract"],
        monitor: ["tv", "screen", "display"],
        moon: ["dark", "night"],
        "more-horizontal": ["ellipsis"],
        "more-vertical": ["ellipsis"],
        "mouse-pointer": ["arrow", "cursor"],
        move: ["arrows"],
        music: ["note"],
        navigation: ["location", "travel"],
        "navigation-2": ["location", "travel"],
        octagon: ["stop"],
        package: ["box", "container"],
        paperclip: ["attachment"],
        pause: ["music", "stop"],
        "pause-circle": ["music", "audio", "stop"],
        "pen-tool": ["vector", "drawing"],
        percent: ["discount"],
        "phone-call": ["ring"],
        "phone-forwarded": ["call"],
        "phone-incoming": ["call"],
        "phone-missed": ["call"],
        "phone-off": ["call", "mute"],
        "phone-outgoing": ["call"],
        phone: ["call"],
        play: ["music", "start"],
        "pie-chart": ["statistics", "diagram"],
        "play-circle": ["music", "start"],
        plus: ["add", "new"],
        "plus-circle": ["add", "new"],
        "plus-square": ["add", "new"],
        pocket: ["logo", "save"],
        power: ["on", "off"],
        printer: ["fax", "office", "device"],
        radio: ["signal"],
        "refresh-cw": ["synchronise", "arrows"],
        "refresh-ccw": ["arrows"],
        repeat: ["loop", "arrows"],
        rewind: ["music"],
        "rotate-ccw": ["arrow"],
        "rotate-cw": ["arrow"],
        rss: ["feed", "subscribe"],
        save: ["floppy disk"],
        scissors: ["cut"],
        search: ["find", "magnifier", "magnifying glass"],
        send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
        settings: ["cog", "edit", "gear", "preferences"],
        "share-2": ["network", "connections"],
        shield: ["security", "secure"],
        "shield-off": ["security", "insecure"],
        "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
        "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
        shuffle: ["music"],
        "skip-back": ["music"],
        "skip-forward": ["music"],
        slack: ["logo"],
        slash: ["ban", "no"],
        sliders: ["settings", "controls"],
        smartphone: ["cellphone", "device"],
        smile: ["emoji", "face", "happy", "good", "emotion"],
        speaker: ["audio", "music"],
        star: ["bookmark", "favorite", "like"],
        "stop-circle": ["media", "music"],
        sun: ["brightness", "weather", "light"],
        sunrise: ["weather", "time", "morning", "day"],
        sunset: ["weather", "time", "evening", "night"],
        tablet: ["device"],
        tag: ["label"],
        target: ["logo", "bullseye"],
        terminal: ["code", "command line", "prompt"],
        thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
        "thumbs-down": ["dislike", "bad", "emotion"],
        "thumbs-up": ["like", "good", "emotion"],
        "toggle-left": ["on", "off", "switch"],
        "toggle-right": ["on", "off", "switch"],
        tool: ["settings", "spanner"],
        trash: ["garbage", "delete", "remove", "bin"],
        "trash-2": ["garbage", "delete", "remove", "bin"],
        triangle: ["delta"],
        truck: ["delivery", "van", "shipping", "transport", "lorry"],
        tv: ["television", "stream"],
        twitch: ["logo"],
        twitter: ["logo", "social"],
        type: ["text"],
        umbrella: ["rain", "weather"],
        unlock: ["security"],
        "user-check": ["followed", "subscribed"],
        "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
        "user-plus": ["new", "add", "create", "follow", "subscribe"],
        "user-x": [
          "delete",
          "remove",
          "unfollow",
          "unsubscribe",
          "unavailable",
        ],
        user: ["person", "account"],
        users: ["group"],
        "video-off": ["camera", "movie", "film"],
        video: ["camera", "movie", "film"],
        voicemail: ["phone"],
        volume: ["music", "sound", "mute"],
        "volume-1": ["music", "sound"],
        "volume-2": ["music", "sound"],
        "volume-x": ["music", "sound", "mute"],
        watch: ["clock", "time"],
        "wifi-off": ["disabled"],
        wifi: ["connection", "signal", "wireless"],
        wind: ["weather", "air"],
        "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
        "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
        "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
        x: ["cancel", "close", "delete", "remove", "times", "clear"],
        youtube: ["logo", "video", "play"],
        "zap-off": ["flash", "camera", "lightning"],
        zap: ["flash", "camera", "lightning"],
        "zoom-in": ["magnifying glass"],
        "zoom-out": ["magnifying glass"],
      };
    },
    function (e) {
      e.exports = {
        activity:
          '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
        airplay:
          '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
        "alert-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-octagon":
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-triangle":
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        "align-center":
          '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
        "align-justify":
          '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
        "align-left":
          '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
        "align-right":
          '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
        anchor:
          '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
        aperture:
          '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
        archive:
          '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
        "arrow-down-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
        "arrow-down-left":
          '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
        "arrow-down-right":
          '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
        "arrow-down":
          '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
        "arrow-left-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
        "arrow-left":
          '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
        "arrow-right-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
        "arrow-right":
          '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
        "arrow-up-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
        "arrow-up-left":
          '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
        "arrow-up-right":
          '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
        "arrow-up":
          '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
        "at-sign":
          '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
        award:
          '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
        "bar-chart-2":
          '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
        "bar-chart":
          '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
        "battery-charging":
          '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
        battery:
          '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
        "bell-off":
          '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
        bluetooth:
          '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
        bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
        "book-open":
          '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        bookmark:
          '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
        box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        briefcase:
          '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
        calendar:
          '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
        "camera-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
        camera:
          '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
        cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
        "check-circle":
          '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
        "check-square":
          '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
        check: '<polyline points="20 6 9 17 4 12"></polyline>',
        "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
        "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
        "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
        "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
        "chevrons-down":
          '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
        "chevrons-left":
          '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
        "chevrons-right":
          '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
        "chevrons-up":
          '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
        chrome:
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
        circle: '<circle cx="12" cy="12" r="10"></circle>',
        clipboard:
          '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
        clock:
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        "cloud-drizzle":
          '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-lightning":
          '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
        "cloud-off":
          '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        "cloud-rain":
          '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-snow":
          '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
        cloud:
          '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        codepen:
          '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
        codesandbox:
          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        coffee:
          '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        columns:
          '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
        command:
          '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
        compass:
          '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
        "corner-down-left":
          '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
        "corner-down-right":
          '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
        "corner-left-down":
          '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
        "corner-left-up":
          '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
        "corner-right-down":
          '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
        "corner-right-up":
          '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
        "corner-up-left":
          '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
        "corner-up-right":
          '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
        "credit-card":
          '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
        crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
        crosshair:
          '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
        database:
          '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        delete:
          '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
        disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
        "dollar-sign":
          '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
        "download-cloud":
          '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
        download:
          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
        droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
        "edit-2":
          '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
        "edit-3":
          '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
        edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
        "external-link":
          '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
        "eye-off":
          '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
        facebook:
          '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
        "fast-forward":
          '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
        feather:
          '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
        figma:
          '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
        "file-minus":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-plus":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-text":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
        file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
        film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        filter:
          '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
        "folder-minus":
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
        "folder-plus":
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
        folder:
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
        framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
        frown:
          '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
        "git-branch":
          '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
        "git-commit":
          '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
        "git-merge":
          '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
        "git-pull-request":
          '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
        github:
          '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        gitlab:
          '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
        globe:
          '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
        "hard-drive":
          '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
        hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
        headphones:
          '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
        heart:
          '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        "help-circle":
          '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        hexagon:
          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        image:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
        inbox:
          '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
        info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
        instagram:
          '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
        italic:
          '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
        key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
        layers:
          '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
        layout:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        "life-buoy":
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
        "link-2":
          '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        linkedin:
          '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
        loader:
          '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
        "log-in":
          '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
        "log-out":
          '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
        mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        "map-pin":
          '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
        "maximize-2":
          '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        maximize:
          '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
        meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
        "message-circle":
          '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
        "message-square":
          '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        "mic-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        "minimize-2":
          '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        minimize:
          '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
        "minus-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
        "minus-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
        minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
        monitor:
          '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
        "more-horizontal":
          '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
        "more-vertical":
          '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
        "mouse-pointer":
          '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
        move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
        music:
          '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
        "navigation-2":
          '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
        navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
        octagon:
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
        package:
          '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        paperclip:
          '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
        "pause-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
        pause:
          '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
        "pen-tool":
          '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
        percent:
          '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
        "phone-call":
          '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-forwarded":
          '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-incoming":
          '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-missed":
          '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-off":
          '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
        "phone-outgoing":
          '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        phone:
          '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "pie-chart":
          '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
        "play-circle":
          '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
        play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
        "plus-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        "plus-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
        pocket:
          '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
        power:
          '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
        printer:
          '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
        radio:
          '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
        "refresh-ccw":
          '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
        "refresh-cw":
          '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        repeat:
          '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
        rewind:
          '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
        "rotate-ccw":
          '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
        "rotate-cw":
          '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
        rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
        save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
        scissors:
          '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
        search:
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
        send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
        server:
          '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
        settings:
          '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        "share-2":
          '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
        share:
          '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
        "shield-off":
          '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        "shopping-bag":
          '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
        "shopping-cart":
          '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
        shuffle:
          '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
        sidebar:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
        "skip-back":
          '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
        "skip-forward":
          '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
        slack:
          '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
        slash:
          '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        sliders:
          '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
        smartphone:
          '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        smile:
          '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        speaker:
          '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
        square:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        "stop-circle":
          '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
        sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
        sunrise:
          '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
        sunset:
          '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
        tablet:
          '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
        target:
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
        terminal:
          '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        thermometer:
          '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        "thumbs-down":
          '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
        "thumbs-up":
          '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
        "toggle-left":
          '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
        "toggle-right":
          '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
        tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        "trash-2":
          '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
        trash:
          '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
        trello:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
        "trending-down":
          '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
        "trending-up":
          '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
        triangle:
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
        truck:
          '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
        tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
        twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
        twitter:
          '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
        type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
        umbrella:
          '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
        underline:
          '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
        unlock:
          '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
        "upload-cloud":
          '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
        upload:
          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
        "user-check":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
        "user-minus":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-plus":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-x":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
        users:
          '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        "video-off":
          '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        video:
          '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
        voicemail:
          '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
        "volume-1":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-2":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-x":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
        volume:
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
        watch:
          '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
        "wifi-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
        "x-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-octagon":
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
        x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
        youtube:
          '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
        "zap-off":
          '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        "zoom-in":
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
        "zoom-out":
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
      };
    },
    function (e) {
      e.exports = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
            }
            return e;
          },
        l = (function () {
          function e(e, n) {
            for (var i = 0; i < n.length; i++) {
              var t = n[i];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
            }
          }
          return function (n, i, t) {
            return i && e(n.prototype, i), t && e(n, t), n;
          };
        })(),
        r = a(i(22)),
        o = a(i(42));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function () {
        function e(n, i) {
          var l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.name = n),
            (this.contents = i),
            (this.tags = l),
            (this.attrs = t({}, o.default, { class: "feather feather-" + n }));
        }
        return (
          l(e, [
            {
              key: "toSvg",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  "<svg " +
                  (function (e) {
                    return Object.keys(e)
                      .map(function (n) {
                        return n + '="' + e[n] + '"';
                      })
                      .join(" ");
                  })(
                    t({}, this.attrs, e, {
                      class: (0, r.default)(this.attrs.class, e.class),
                    })
                  ) +
                  ">" +
                  this.contents +
                  "</svg>"
                );
              },
            },
            {
              key: "toString",
              value: function () {
                return this.contents;
              },
            },
          ]),
          e
        );
      })();
      n.default = c;
    },
    function (e, n, i) {
      "use strict";
      var t = o(i(12)),
        l = o(i(39)),
        r = o(i(38));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = { icons: t.default, toSvg: l.default, replace: r.default };
    },
    function (e, n, i) {
      e.exports = i(0);
    },
    function (e, n, i) {
      var t = i(2)("iterator"),
        l = !1;
      try {
        var r = 0,
          o = {
            next: function () {
              return { done: !!r++ };
            },
            return: function () {
              l = !0;
            },
          };
        (o[t] = function () {
          return this;
        }),
          Array.from(o, function () {
            throw 2;
          });
      } catch (e) {}
      e.exports = function (e, n) {
        if (!n && !l) return !1;
        var i = !1;
        try {
          var r = {};
          (r[t] = function () {
            return {
              next: function () {
                return { done: (i = !0) };
              },
            };
          }),
            e(r);
        } catch (e) {}
        return i;
      };
    },
    function (e, n, i) {
      var t = i(30),
        l = i(2)("toStringTag"),
        r =
          "Arguments" ==
          t(
            (function () {
              return arguments;
            })()
          );
      e.exports = function (e) {
        var n, i, o;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (i = (function (e, n) {
              try {
                return e[n];
              } catch (e) {}
            })((n = Object(e)), l))
          ? i
          : r
          ? t(n)
          : "Object" == (o = t(n)) && "function" == typeof n.callee
          ? "Arguments"
          : o;
      };
    },
    function (e, n, i) {
      var t = i(47),
        l = i(9),
        r = i(2)("iterator");
      e.exports = function (e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || l[t(e)];
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(18),
        l = i(7),
        r = i(10);
      e.exports = function (e, n, i) {
        var o = t(n);
        o in e ? l.f(e, o, r(0, i)) : (e[o] = i);
      };
    },
    function (e, n, i) {
      var t = i(2),
        l = i(9),
        r = t("iterator"),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (l.Array === e || o[r] === e);
      };
    },
    function (e, n, i) {
      var t = i(3);
      e.exports = function (e, n, i, l) {
        try {
          return l ? n(t(i)[0], i[1]) : n(i);
        } catch (n) {
          var r = e.return;
          throw (void 0 !== r && t(r.call(e)), n);
        }
      };
    },
    function (e, n) {
      e.exports = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    function (e, n, i) {
      var t = i(52);
      e.exports = function (e, n, i) {
        if ((t(e), void 0 === n)) return e;
        switch (i) {
          case 0:
            return function () {
              return e.call(n);
            };
          case 1:
            return function (i) {
              return e.call(n, i);
            };
          case 2:
            return function (i, t) {
              return e.call(n, i, t);
            };
          case 3:
            return function (i, t, l) {
              return e.call(n, i, t, l);
            };
        }
        return function () {
          return e.apply(n, arguments);
        };
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(53),
        l = i(24),
        r = i(51),
        o = i(50),
        a = i(27),
        c = i(49),
        p = i(48);
      e.exports = function (e) {
        var n,
          i,
          y,
          h,
          x = l(e),
          s = "function" == typeof this ? this : Array,
          u = arguments.length,
          d = u > 1 ? arguments[1] : void 0,
          f = void 0 !== d,
          g = 0,
          v = p(x);
        if (
          (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)),
          void 0 == v || (s == Array && o(v)))
        )
          for (i = new s((n = a(x.length))); n > g; g++)
            c(i, g, f ? d(x[g], g) : x[g]);
        else
          for (h = v.call(x), i = new s(); !(y = h.next()).done; g++)
            c(i, g, f ? r(h, d, [y.value, g], !0) : y.value);
        return (i.length = g), i;
      };
    },
    function (e, n, i) {
      var t = i(32),
        l = i(54);
      t(
        {
          target: "Array",
          stat: !0,
          forced: !i(46)(function (e) {
            Array.from(e);
          }),
        },
        { from: l }
      );
    },
    function (e, n, i) {
      var t = i(6),
        l = i(3);
      e.exports = function (e, n) {
        if ((l(e), !t(n) && null !== n))
          throw TypeError("Can't set " + String(n) + " as a prototype");
      };
    },
    function (e, n, i) {
      var t = i(56);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                n = !1,
                i = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(i, []),
                  (n = i instanceof Array);
              } catch (e) {}
              return function (i, l) {
                return t(i, l), n ? e.call(i, l) : (i.__proto__ = l), i;
              };
            })()
          : void 0);
    },
    function (e, n, i) {
      var t = i(0).document;
      e.exports = t && t.documentElement;
    },
    function (e, n, i) {
      var t = i(28),
        l = i(13);
      e.exports =
        Object.keys ||
        function (e) {
          return t(e, l);
        };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(3),
        o = i(59);
      e.exports = t
        ? Object.defineProperties
        : function (e, n) {
            r(e);
            for (var i, t = o(n), a = t.length, c = 0; a > c; )
              l.f(e, (i = t[c++]), n[i]);
            return e;
          };
    },
    function (e, n, i) {
      var t = i(3),
        l = i(60),
        r = i(13),
        o = i(15),
        a = i(58),
        c = i(34),
        p = i(16)("IE_PROTO"),
        y = function () {},
        h = function () {
          var e,
            n = c("iframe"),
            i = r.length;
          for (
            n.style.display = "none",
              a.appendChild(n),
              n.src = String("javascript:"),
              (e = n.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              h = e.F;
            i--;

          )
            delete h.prototype[r[i]];
          return h();
        };
      (e.exports =
        Object.create ||
        function (e, n) {
          var i;
          return (
            null !== e
              ? ((y.prototype = t(e)),
                (i = new y()),
                (y.prototype = null),
                (i[p] = e))
              : (i = h()),
            void 0 === n ? i : l(i, n)
          );
        }),
        (o[p] = !0);
    },
    function (e, n, i) {
      var t = i(4);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !t(function () {
          return !String(Symbol());
        });
    },
    function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    function (e, n, i) {
      "use strict";
      var t = i(26).IteratorPrototype,
        l = i(61),
        r = i(10),
        o = i(23),
        a = i(9),
        c = function () {
          return this;
        };
      e.exports = function (e, n, i) {
        var p = n + " Iterator";
        return (
          (e.prototype = l(t, { next: r(1, i) })),
          o(e, p, !1, !0),
          (a[p] = c),
          e
        );
      };
    },
    function (e, n, i) {
      var t = i(4),
        l = /#|\.prototype\./,
        r = function (e, n) {
          var i = a[o(e)];
          return i == p || (i != c && ("function" == typeof n ? t(n) : !!n));
        },
        o = (r.normalize = function (e) {
          return String(e).replace(l, ".").toLowerCase();
        }),
        a = (r.data = {}),
        c = (r.NATIVE = "N"),
        p = (r.POLYFILL = "P");
      e.exports = r;
    },
    function (e, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    function (e, n, i) {
      var t = i(21),
        l = Math.max,
        r = Math.min;
      e.exports = function (e, n) {
        var i = t(e);
        return i < 0 ? l(i + n, 0) : r(i, n);
      };
    },
    function (e, n, i) {
      var t = i(14),
        l = i(27),
        r = i(67);
      e.exports = function (e) {
        return function (n, i, o) {
          var a,
            c = t(n),
            p = l(c.length),
            y = r(o, p);
          if (e && i != i) {
            for (; p > y; ) if ((a = c[y++]) != a) return !0;
          } else
            for (; p > y; y++)
              if ((e || y in c) && c[y] === i) return e || y || 0;
          return !e && -1;
        };
      };
    },
    function (e, n, i) {
      var t = i(28),
        l = i(13).concat("length", "prototype");
      n.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return t(e, l);
        };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(69),
        r = i(66),
        o = i(3),
        a = t.Reflect;
      e.exports =
        (a && a.ownKeys) ||
        function (e) {
          var n = l.f(o(e)),
            i = r.f;
          return i ? n.concat(i(e)) : n;
        };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(70),
        r = i(31),
        o = i(7);
      e.exports = function (e, n) {
        for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
          var y = i[p];
          t(e, y) || a(e, y, c(n, y));
        }
      };
    },
    function (e, n, i) {
      var t = i(4),
        l = i(30),
        r = "".split;
      e.exports = t(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == l(e) ? r.call(e, "") : Object(e);
          }
        : Object;
    },
    function (e, n, i) {
      "use strict";
      var t = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        r = l && !t.call({ 1: 2 }, 1);
      n.f = r
        ? function (e) {
            var n = l(this, e);
            return !!n && n.enumerable;
          }
        : t;
    },
    function (e, n, i) {
      "use strict";
      var t = i(32),
        l = i(64),
        r = i(25),
        o = i(57),
        a = i(23),
        c = i(5),
        p = i(29),
        y = i(2),
        h = i(17),
        x = i(9),
        s = i(26),
        u = s.IteratorPrototype,
        d = s.BUGGY_SAFARI_ITERATORS,
        f = y("iterator"),
        g = function () {
          return this;
        };
      e.exports = function (e, n, i, y, s, v, m) {
        l(i, n, y);
        var w,
          M,
          b,
          z = function (e) {
            if (e === s && O) return O;
            if (!d && e in H) return H[e];
            switch (e) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new i(this, e);
                };
            }
            return function () {
              return new i(this);
            };
          },
          A = n + " Iterator",
          k = !1,
          H = e.prototype,
          V = H[f] || H["@@iterator"] || (s && H[s]),
          O = (!d && V) || z(s),
          j = ("Array" == n && H.entries) || V;
        if (
          (j &&
            ((w = r(j.call(new e()))),
            u !== Object.prototype &&
              w.next &&
              (h ||
                r(w) === u ||
                (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)),
              a(w, A, !0, !0),
              h && (x[A] = g))),
          "values" == s &&
            V &&
            "values" !== V.name &&
            ((k = !0),
            (O = function () {
              return V.call(this);
            })),
          (h && !m) || H[f] === O || c(H, f, O),
          (x[n] = O),
          s)
        )
          if (
            ((M = {
              values: z("values"),
              keys: v ? O : z("keys"),
              entries: z("entries"),
            }),
            m)
          )
            for (b in M) (!d && !k && b in H) || p(H, b, M[b]);
          else t({ target: n, proto: !0, forced: d || k }, M);
        return M;
      };
    },
    function (e, n) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (i = window);
      }
      e.exports = i;
    },
    function (e, n, i) {
      var t = i(0),
        l = i(36),
        r = t.WeakMap;
      e.exports = "function" == typeof r && /native code/.test(l.call(r));
    },
    function (e, n, i) {
      var t = i(21),
        l = i(20);
      e.exports = function (e, n, i) {
        var r,
          o,
          a = String(l(e)),
          c = t(n),
          p = a.length;
        return c < 0 || c >= p
          ? i
            ? ""
            : void 0
          : (r = a.charCodeAt(c)) < 55296 ||
            r > 56319 ||
            c + 1 === p ||
            (o = a.charCodeAt(c + 1)) < 56320 ||
            o > 57343
          ? i
            ? a.charAt(c)
            : r
          : i
          ? a.slice(c, c + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(77),
        l = i(37),
        r = i(74),
        o = l.set,
        a = l.getterFor("String Iterator");
      r(
        String,
        "String",
        function (e) {
          o(this, { type: "String Iterator", string: String(e), index: 0 });
        },
        function () {
          var e,
            n = a(this),
            i = n.string,
            l = n.index;
          return l >= i.length
            ? { value: void 0, done: !0 }
            : ((e = t(i, l, !0)),
              (n.index += e.length),
              { value: e, done: !1 });
        }
      );
    },
    function (e, n, i) {
      i(78), i(55);
      var t = i(45);
      e.exports = t.Array.from;
    },
    function (e, n, i) {
      i(79), (e.exports = i(44));
    },
  ]);
});

/*===============================
	Lightbox JS
================================*/

/**!
 * lightgallery.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N;
 * @license GPLv3
 */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    (t =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (t.Lightgallery = e());
  }
})(function () {
  var e, t, s;
  return (function e(t, s, l) {
    function i(r, d) {
      if (!s[r]) {
        if (!t[r]) {
          var a = "function" == typeof require && require;
          if (!d && a) return a(r, !0);
          if (o) return o(r, !0);
          var n = new Error("Cannot find module '" + r + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        var u = (s[r] = { exports: {} });
        t[r][0].call(
          u.exports,
          function (e) {
            var s = t[r][1][e];
            return i(s ? s : e);
          },
          u,
          u.exports,
          e,
          t,
          s,
          l
        );
      }
      return s[r].exports;
    }
    for (
      var o = "function" == typeof require && require, r = 0;
      r < l.length;
      r++
    )
      i(l[r]);
    return i;
  })(
    {
      1: [
        function (t, s, l) {
          !(function (t, s) {
            if ("function" == typeof e && e.amd) e(["exports"], s);
            else if ("undefined" != typeof l) s(l);
            else {
              var i = { exports: {} };
              s(i.exports), (t.lgUtils = i.exports);
            }
          })(this, function (e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (window.getAttribute = function (e) {
                return window[e];
              }),
              (window.setAttribute = function (e, t) {
                window[e] = t;
              }),
              (document.getAttribute = function (e) {
                return document[e];
              }),
              (document.setAttribute = function (e, t) {
                document[e] = t;
              });
            var t = {
              wrap: function e(t, s) {
                if (t) {
                  var l = document.createElement("div");
                  (l.className = s),
                    t.parentNode.insertBefore(l, t),
                    t.parentNode.removeChild(t),
                    l.appendChild(t);
                }
              },
              addClass: function e(t, s) {
                t &&
                  (t.classList ? t.classList.add(s) : (t.className += " " + s));
              },
              removeClass: function e(t, s) {
                t &&
                  (t.classList
                    ? t.classList.remove(s)
                    : (t.className = t.className.replace(
                        new RegExp(
                          "(^|\\b)" + s.split(" ").join("|") + "(\\b|$)",
                          "gi"
                        ),
                        " "
                      )));
              },
              hasClass: function e(t, s) {
                return t.classList
                  ? t.classList.contains(s)
                  : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className);
              },
              setVendor: function e(t, s, l) {
                t &&
                  ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l),
                  (t.style["webkit" + s] = l),
                  (t.style["moz" + s] = l),
                  (t.style["ms" + s] = l),
                  (t.style["o" + s] = l));
              },
              trigger: function e(t, s) {
                var l =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                if (t) {
                  var i = new CustomEvent(s, { detail: l });
                  t.dispatchEvent(i);
                }
              },
              Listener: { uid: 0 },
              on: function e(s, l, i) {
                s &&
                  l.split(" ").forEach(function (e) {
                    var l = s.getAttribute("lg-event-uid") || "";
                    t.Listener.uid++,
                      (l += "&" + t.Listener.uid),
                      s.setAttribute("lg-event-uid", l),
                      (t.Listener[e + t.Listener.uid] = i),
                      s.addEventListener(e.split(".")[0], i, !1);
                  });
              },
              off: function e(s, l) {
                if (s) {
                  var i = s.getAttribute("lg-event-uid");
                  if (i) {
                    i = i.split("&");
                    for (var o = 0; o < i.length; o++)
                      if (i[o]) {
                        var r = l + i[o];
                        if ("." === r.substring(0, 1))
                          for (var d in t.Listener)
                            t.Listener.hasOwnProperty(d) &&
                              d.split(".").indexOf(r.split(".")[1]) > -1 &&
                              (s.removeEventListener(
                                d.split(".")[0],
                                t.Listener[d]
                              ),
                              s.setAttribute(
                                "lg-event-uid",
                                s
                                  .getAttribute("lg-event-uid")
                                  .replace("&" + i[o], "")
                              ),
                              delete t.Listener[d]);
                        else
                          s.removeEventListener(r.split(".")[0], t.Listener[r]),
                            s.setAttribute(
                              "lg-event-uid",
                              s
                                .getAttribute("lg-event-uid")
                                .replace("&" + i[o], "")
                            ),
                            delete t.Listener[r];
                      }
                  }
                }
              },
              param: function e(t) {
                return Object.keys(t)
                  .map(function (e) {
                    return (
                      encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    );
                  })
                  .join("&");
              },
            };
            e.default = t;
          });
        },
        {},
      ],
      2: [
        function (t, s, l) {
          !(function (s, i) {
            if ("function" == typeof e && e.amd) e(["./lg-utils"], i);
            else if ("undefined" != typeof l) i(t("./lg-utils"));
            else {
              var o = { exports: {} };
              i(s.lgUtils), (s.lightgallery = o.exports);
            }
          })(this, function (e) {
            "use strict";
            function t(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function s(e, t) {
              if (
                ((this.el = e),
                (this.s = i({}, o, t)),
                this.s.dynamic &&
                  "undefined" !== this.s.dynamicEl &&
                  this.s.dynamicEl.constructor === Array &&
                  !this.s.dynamicEl.length)
              )
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
              return (
                (this.modules = {}),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.hideBartimeout = !1),
                (this.isTouch = "ontouchstart" in document.documentElement),
                this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                (this.items = []),
                this.s.dynamic
                  ? (this.items = this.s.dynamicEl)
                  : "this" === this.s.selector
                  ? this.items.push(this.el)
                  : "" !== this.s.selector
                  ? this.s.selectWithin
                    ? (this.items = document
                        .querySelector(this.s.selectWithin)
                        .querySelectorAll(this.s.selector))
                    : (this.items = this.el.querySelectorAll(this.s.selector))
                  : (this.items = this.el.children),
                (this.___slide = ""),
                (this.outer = ""),
                this.init(),
                this
              );
            }
            var l = t(e),
              i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var l in s)
                      Object.prototype.hasOwnProperty.call(s, l) &&
                        (e[l] = s[l]);
                  }
                  return e;
                };
            !(function () {
              function e(e, t) {
                t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                var s = document.createEvent("CustomEvent");
                return (
                  s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
                );
              }
              return (
                "function" != typeof window.CustomEvent &&
                ((e.prototype = window.Event.prototype),
                void (window.CustomEvent = e))
              );
            })(),
              (window.utils = l.default),
              (window.lgData = { uid: 0 }),
              (window.lgModules = {});
            var o = {
              mode: "lg-slide",
              cssEasing: "ease",
              easing: "linear",
              speed: 600,
              height: "100%",
              width: "100%",
              addClass: "",
              startClass: "lg-start-zoom",
              backdropDuration: 150,
              hideBarsDelay: 6e3,
              useLeft: !1,
              closable: !0,
              loop: !0,
              escKey: !0,
              keyPress: !0,
              controls: !0,
              slideEndAnimatoin: !0,
              hideControlOnEnd: !1,
              mousewheel: !1,
              getCaptionFromTitleOrAlt: !0,
              appendSubHtmlTo: ".lg-sub-html",
              subHtmlSelectorRelative: !1,
              preload: 1,
              showAfterLoad: !0,
              selector: "",
              selectWithin: "",
              nextHtml: "",
              prevHtml: "",
              index: !1,
              iframeMaxWidth: "100%",
              download: !0,
              counter: !0,
              appendCounterTo: ".lg-toolbar",
              swipeThreshold: 50,
              enableSwipe: !0,
              enableDrag: !0,
              dynamic: !1,
              dynamicEl: [],
              galleryId: 1,
            };
            (s.prototype.init = function () {
              var e = this;
              e.s.preload > e.items.length && (e.s.preload = e.items.length);
              var t = window.location.hash;
              if (
                (t.indexOf("lg=" + this.s.galleryId) > 0 &&
                  ((e.index = parseInt(t.split("&slide=")[1], 10)),
                  l.default.addClass(document.body, "lg-from-hash"),
                  l.default.hasClass(document.body, "lg-on") ||
                    (l.default.addClass(document.body, "lg-on"),
                    setTimeout(function () {
                      e.build(e.index);
                    }))),
                e.s.dynamic)
              )
                l.default.trigger(this.el, "onBeforeOpen"),
                  (e.index = e.s.index || 0),
                  l.default.hasClass(document.body, "lg-on") ||
                    (l.default.addClass(document.body, "lg-on"),
                    setTimeout(function () {
                      e.build(e.index);
                    }));
              else
                for (var s = 0; s < e.items.length; s++)
                  !(function (t) {
                    l.default.on(e.items[t], "click.lgcustom", function (s) {
                      s.preventDefault(),
                        l.default.trigger(e.el, "onBeforeOpen"),
                        (e.index = e.s.index || t),
                        l.default.hasClass(document.body, "lg-on") ||
                          (e.build(e.index),
                          l.default.addClass(document.body, "lg-on"));
                    });
                  })(s);
            }),
              (s.prototype.build = function (e) {
                var t = this;
                t.structure();
                for (var s in window.lgModules)
                  t.modules[s] = new window.lgModules[s](t.el);
                t.slide(e, !1, !1),
                  t.s.keyPress && t.keyPress(),
                  t.items.length > 1 &&
                    (t.arrow(),
                    setTimeout(function () {
                      t.enableDrag(), t.enableSwipe();
                    }, 50),
                    t.s.mousewheel && t.mousewheel()),
                  t.counter(),
                  t.closeGallery(),
                  l.default.trigger(t.el, "onAfterOpen"),
                  l.default.on(
                    t.outer,
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      l.default.removeClass(t.outer, "lg-hide-items"),
                        clearTimeout(t.hideBartimeout),
                        (t.hideBartimeout = setTimeout(function () {
                          l.default.addClass(t.outer, "lg-hide-items");
                        }, t.s.hideBarsDelay));
                    }
                  );
              }),
              (s.prototype.structure = function () {
                var e = "",
                  t = "",
                  s = 0,
                  i = "",
                  o,
                  r = this;
                for (
                  document.body.insertAdjacentHTML(
                    "beforeend",
                    '<div class="lg-backdrop"></div>'
                  ),
                    l.default.setVendor(
                      document.querySelector(".lg-backdrop"),
                      "TransitionDuration",
                      this.s.backdropDuration + "ms"
                    ),
                    s = 0;
                  s < this.items.length;
                  s++
                )
                  e += '<div class="lg-item"></div>';
                if (
                  (this.s.controls &&
                    this.items.length > 1 &&
                    (t =
                      '<div class="lg-actions"><div class="lg-prev lg-icon">' +
                      this.s.prevHtml +
                      '</div><div class="lg-next lg-icon">' +
                      this.s.nextHtml +
                      "</div></div>"),
                  ".lg-sub-html" === this.s.appendSubHtmlTo &&
                    (i = '<div class="lg-sub-html"></div>'),
                  (o =
                    '<div class="lg-outer ' +
                    this.s.addClass +
                    " " +
                    this.s.startClass +
                    '"><div class="lg" style="width:' +
                    this.s.width +
                    "; height:" +
                    this.s.height +
                    '"><div class="lg-inner">' +
                    e +
                    '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
                    t +
                    i +
                    "</div></div>"),
                  document.body.insertAdjacentHTML("beforeend", o),
                  (this.outer = document.querySelector(".lg-outer")),
                  (this.___slide = this.outer.querySelectorAll(".lg-item")),
                  this.s.useLeft
                    ? (l.default.addClass(this.outer, "lg-use-left"),
                      (this.s.mode = "lg-slide"))
                    : l.default.addClass(this.outer, "lg-use-css3"),
                  r.setTop(),
                  l.default.on(
                    window,
                    "resize.lg orientationchange.lg",
                    function () {
                      setTimeout(function () {
                        r.setTop();
                      }, 100);
                    }
                  ),
                  l.default.addClass(this.___slide[this.index], "lg-current"),
                  this.doCss()
                    ? l.default.addClass(this.outer, "lg-css3")
                    : (l.default.addClass(this.outer, "lg-css"),
                      (this.s.speed = 0)),
                  l.default.addClass(this.outer, this.s.mode),
                  this.s.enableDrag &&
                    this.items.length > 1 &&
                    l.default.addClass(this.outer, "lg-grab"),
                  this.s.showAfterLoad &&
                    l.default.addClass(this.outer, "lg-show-after-load"),
                  this.doCss())
                ) {
                  var d = this.outer.querySelector(".lg-inner");
                  l.default.setVendor(
                    d,
                    "TransitionTimingFunction",
                    this.s.cssEasing
                  ),
                    l.default.setVendor(
                      d,
                      "TransitionDuration",
                      this.s.speed + "ms"
                    );
                }
                setTimeout(function () {
                  l.default.addClass(
                    document.querySelector(".lg-backdrop"),
                    "in"
                  );
                }),
                  setTimeout(function () {
                    l.default.addClass(r.outer, "lg-visible");
                  }, this.s.backdropDuration),
                  this.s.download &&
                    this.outer
                      .querySelector(".lg-toolbar")
                      .insertAdjacentHTML(
                        "beforeend",
                        '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
                      ),
                  (this.prevScrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop);
              }),
              (s.prototype.setTop = function () {
                if ("100%" !== this.s.height) {
                  var e = window.innerHeight,
                    t = (e - parseInt(this.s.height, 10)) / 2,
                    s = this.outer.querySelector(".lg");
                  e >= parseInt(this.s.height, 10)
                    ? (s.style.top = t + "px")
                    : (s.style.top = "0px");
                }
              }),
              (s.prototype.doCss = function () {
                var e = function e() {
                  var t = [
                      "transition",
                      "MozTransition",
                      "WebkitTransition",
                      "OTransition",
                      "msTransition",
                      "KhtmlTransition",
                    ],
                    s = document.documentElement,
                    l = 0;
                  for (l = 0; l < t.length; l++) if (t[l] in s.style) return !0;
                };
                return !!e();
              }),
              (s.prototype.isVideo = function (e, t) {
                if (!e)
                  throw new Error(
                    "Make sure that slide " + t + " has an image/video src"
                  );
                var s;
                if (
                  ((s = this.s.dynamic
                    ? this.s.dynamicEl[t].html
                    : this.items[t].getAttribute("data-html")),
                  !e && s)
                )
                  return { html5: !0 };
                var l = e.match(
                    /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                  ),
                  i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                  o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                  r = e.match(
                    /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
                  );
                return l
                  ? { youtube: l }
                  : i
                  ? { vimeo: i }
                  : o
                  ? { dailymotion: o }
                  : r
                  ? { vk: r }
                  : void 0;
              }),
              (s.prototype.counter = function () {
                this.s.counter &&
                  this.outer
                    .querySelector(this.s.appendCounterTo)
                    .insertAdjacentHTML(
                      "beforeend",
                      '<div id="lg-counter"><span id="lg-counter-current">' +
                        (parseInt(this.index, 10) + 1) +
                        '</span> / <span id="lg-counter-all">' +
                        this.items.length +
                        "</span></div>"
                    );
              }),
              (s.prototype.addHtml = function (e) {
                var t = null,
                  s;
                if (
                  (this.s.dynamic
                    ? (t = this.s.dynamicEl[e].subHtml)
                    : ((s = this.items[e]),
                      (t = s.getAttribute("data-sub-html")),
                      this.s.getCaptionFromTitleOrAlt &&
                        !t &&
                        ((t = s.getAttribute("title")),
                        t &&
                          s.querySelector("img") &&
                          (t = s.querySelector("img").getAttribute("alt")))),
                  "undefined" != typeof t && null !== t)
                ) {
                  var i = t.substring(0, 1);
                  ("." !== i && "#" !== i) ||
                    (t =
                      this.s.subHtmlSelectorRelative && !this.s.dynamic
                        ? s.querySelector(t).innerHTML
                        : document.querySelector(t).innerHTML);
                } else t = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo
                  ? (this.outer.querySelector(
                      this.s.appendSubHtmlTo
                    ).innerHTML = t)
                  : this.___slide[e].insertAdjacentHTML("beforeend", t),
                  "undefined" != typeof t &&
                    null !== t &&
                    ("" === t
                      ? l.default.addClass(
                          this.outer.querySelector(this.s.appendSubHtmlTo),
                          "lg-empty-html"
                        )
                      : l.default.removeClass(
                          this.outer.querySelector(this.s.appendSubHtmlTo),
                          "lg-empty-html"
                        )),
                  l.default.trigger(this.el, "onAfterAppendSubHtml", {
                    index: e,
                  });
              }),
              (s.prototype.preload = function (e) {
                var t = 1,
                  s = 1;
                for (
                  t = 1;
                  t <= this.s.preload && !(t >= this.items.length - e);
                  t++
                )
                  this.loadContent(e + t, !1, 0);
                for (s = 1; s <= this.s.preload && !(e - s < 0); s++)
                  this.loadContent(e - s, !1, 0);
              }),
              (s.prototype.loadContent = function (e, t, s) {
                var i = this,
                  o = !1,
                  r,
                  d,
                  a,
                  n,
                  u,
                  c,
                  g = function e(t) {
                    for (var s = [], l = [], i = 0; i < t.length; i++) {
                      var o = t[i].split(" ");
                      "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1]);
                    }
                    for (var r = window.innerWidth, a = 0; a < s.length; a++)
                      if (parseInt(s[a], 10) > r) {
                        d = l[a];
                        break;
                      }
                  };
                if (i.s.dynamic) {
                  if (
                    (i.s.dynamicEl[e].poster &&
                      ((o = !0), (a = i.s.dynamicEl[e].poster)),
                    (c = i.s.dynamicEl[e].html),
                    (d = i.s.dynamicEl[e].src),
                    i.s.dynamicEl[e].responsive)
                  ) {
                    var f = i.s.dynamicEl[e].responsive.split(",");
                    g(f);
                  }
                  (n = i.s.dynamicEl[e].srcset), (u = i.s.dynamicEl[e].sizes);
                } else {
                  if (
                    (i.items[e].getAttribute("data-poster") &&
                      ((o = !0), (a = i.items[e].getAttribute("data-poster"))),
                    (c = i.items[e].getAttribute("data-html")),
                    (d =
                      i.items[e].getAttribute("href") ||
                      i.items[e].getAttribute("data-src")),
                    i.items[e].getAttribute("data-responsive"))
                  ) {
                    var h = i.items[e]
                      .getAttribute("data-responsive")
                      .split(",");
                    g(h);
                  }
                  (n = i.items[e].getAttribute("data-srcset")),
                    (u = i.items[e].getAttribute("data-sizes"));
                }
                var m = !1;
                i.s.dynamic
                  ? i.s.dynamicEl[e].iframe && (m = !0)
                  : "true" === i.items[e].getAttribute("data-iframe") &&
                    (m = !0);
                var p = i.isVideo(d, e);
                if (!l.default.hasClass(i.___slide[e], "lg-loaded")) {
                  if (m)
                    i.___slide[e].insertAdjacentHTML(
                      "afterbegin",
                      '<div class="lg-video-cont" style="max-width:' +
                        i.s.iframeMaxWidth +
                        '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                        d +
                        '"  allowfullscreen="true"></iframe></div></div>'
                    );
                  else if (o) {
                    var v = "";
                    (v =
                      p && p.youtube
                        ? "lg-has-youtube"
                        : p && p.vimeo
                        ? "lg-has-vimeo"
                        : "lg-has-html5"),
                      i.___slide[e].insertAdjacentHTML(
                        "beforeend",
                        '<div class="lg-video-cont ' +
                          v +
                          ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                          a +
                          '" /></div></div>'
                      );
                  } else
                    p
                      ? (i.___slide[e].insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                        ),
                        l.default.trigger(i.el, "hasVideo", {
                          index: e,
                          src: d,
                          html: c,
                        }))
                      : i.___slide[e].insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                            d +
                            '" /></div>'
                        );
                  if (
                    (l.default.trigger(i.el, "onAferAppendSlide", { index: e }),
                    (r = i.___slide[e].querySelector(".lg-object")),
                    u && r.setAttribute("sizes", u),
                    n)
                  ) {
                    r.setAttribute("srcset", n);
                    try {
                      picturefill({ elements: [r[0]] });
                    } catch (e) {
                      console.error(
                        "Make sure you have included Picturefill version 2"
                      );
                    }
                  }
                  ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e),
                    l.default.addClass(i.___slide[e], "lg-loaded");
                }
                l.default.on(
                  i.___slide[e].querySelector(".lg-object"),
                  "load.lg error.lg",
                  function () {
                    var t = 0;
                    s &&
                      !l.default.hasClass(document.body, "lg-from-hash") &&
                      (t = s),
                      setTimeout(function () {
                        l.default.addClass(i.___slide[e], "lg-complete"),
                          l.default.trigger(i.el, "onSlideItemLoad", {
                            index: e,
                            delay: s || 0,
                          });
                      }, t);
                  }
                ),
                  p &&
                    p.html5 &&
                    !o &&
                    l.default.addClass(i.___slide[e], "lg-complete"),
                  t === !0 &&
                    (l.default.hasClass(i.___slide[e], "lg-complete")
                      ? i.preload(e)
                      : l.default.on(
                          i.___slide[e].querySelector(".lg-object"),
                          "load.lg error.lg",
                          function () {
                            i.preload(e);
                          }
                        ));
              }),
              (s.prototype.slide = function (e, t, s) {
                for (var i = 0, o = 0; o < this.___slide.length; o++)
                  if (l.default.hasClass(this.___slide[o], "lg-current")) {
                    i = o;
                    break;
                  }
                var r = this;
                if (!r.lGalleryOn || i !== e) {
                  var d = this.___slide.length,
                    a = r.lGalleryOn ? this.s.speed : 0,
                    n = !1,
                    u = !1;
                  if (!r.lgBusy) {
                    if (this.s.download) {
                      var c;
                      (c = r.s.dynamic
                        ? r.s.dynamicEl[e].downloadUrl !== !1 &&
                          (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src)
                        : "false" !==
                            r.items[e].getAttribute("data-download-url") &&
                          (r.items[e].getAttribute("data-download-url") ||
                            r.items[e].getAttribute("href") ||
                            r.items[e].getAttribute("data-src"))),
                        c
                          ? (document
                              .getElementById("lg-download")
                              .setAttribute("href", c),
                            l.default.removeClass(r.outer, "lg-hide-download"))
                          : l.default.addClass(r.outer, "lg-hide-download");
                    }
                    if (
                      (l.default.trigger(r.el, "onBeforeSlide", {
                        prevIndex: i,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      }),
                      (r.lgBusy = !0),
                      clearTimeout(r.hideBartimeout),
                      ".lg-sub-html" === this.s.appendSubHtmlTo &&
                        setTimeout(function () {
                          r.addHtml(e);
                        }, a),
                      this.arrowDisable(e),
                      t)
                    ) {
                      var g = e - 1,
                        f = e + 1;
                      0 === e && i === d - 1
                        ? ((f = 0), (g = d - 1))
                        : e === d - 1 && 0 === i && ((f = 0), (g = d - 1)),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-prev-slide"),
                          "lg-prev-slide"
                        ),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-current"),
                          "lg-current"
                        ),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-next-slide"),
                          "lg-next-slide"
                        ),
                        l.default.addClass(r.___slide[g], "lg-prev-slide"),
                        l.default.addClass(r.___slide[f], "lg-next-slide"),
                        l.default.addClass(r.___slide[e], "lg-current");
                    } else {
                      l.default.addClass(r.outer, "lg-no-trans");
                      for (var h = 0; h < this.___slide.length; h++)
                        l.default.removeClass(
                          this.___slide[h],
                          "lg-prev-slide"
                        ),
                          l.default.removeClass(
                            this.___slide[h],
                            "lg-next-slide"
                          );
                      e < i
                        ? ((u = !0),
                          0 !== e || i !== d - 1 || s || ((u = !1), (n = !0)))
                        : e > i &&
                          ((n = !0),
                          e !== d - 1 || 0 !== i || s || ((u = !0), (n = !1))),
                        u
                          ? (l.default.addClass(
                              this.___slide[e],
                              "lg-prev-slide"
                            ),
                            l.default.addClass(
                              this.___slide[i],
                              "lg-next-slide"
                            ))
                          : n &&
                            (l.default.addClass(
                              this.___slide[e],
                              "lg-next-slide"
                            ),
                            l.default.addClass(
                              this.___slide[i],
                              "lg-prev-slide"
                            )),
                        setTimeout(function () {
                          l.default.removeClass(
                            r.outer.querySelector(".lg-current"),
                            "lg-current"
                          ),
                            l.default.addClass(r.___slide[e], "lg-current"),
                            l.default.removeClass(r.outer, "lg-no-trans");
                        }, 50);
                    }
                    r.lGalleryOn
                      ? (setTimeout(function () {
                          r.loadContent(e, !0, 0);
                        }, this.s.speed + 50),
                        setTimeout(function () {
                          (r.lgBusy = !1),
                            l.default.trigger(r.el, "onAfterSlide", {
                              prevIndex: i,
                              index: e,
                              fromTouch: t,
                              fromThumb: s,
                            });
                        }, this.s.speed))
                      : (r.loadContent(e, !0, r.s.backdropDuration),
                        (r.lgBusy = !1),
                        l.default.trigger(r.el, "onAfterSlide", {
                          prevIndex: i,
                          index: e,
                          fromTouch: t,
                          fromThumb: s,
                        })),
                      (r.lGalleryOn = !0),
                      this.s.counter &&
                        document.getElementById("lg-counter-current") &&
                        (document.getElementById(
                          "lg-counter-current"
                        ).innerHTML = e + 1);
                  }
                }
              }),
              (s.prototype.goToNextSlide = function (e) {
                var t = this;
                t.lgBusy ||
                  (t.index + 1 < t.___slide.length
                    ? (t.index++,
                      l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.loop
                    ? ((t.index = 0),
                      l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.slideEndAnimatoin &&
                      (l.default.addClass(t.outer, "lg-right-end"),
                      setTimeout(function () {
                        l.default.removeClass(t.outer, "lg-right-end");
                      }, 400)));
              }),
              (s.prototype.goToPrevSlide = function (e) {
                var t = this;
                t.lgBusy ||
                  (t.index > 0
                    ? (t.index--,
                      l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.loop
                    ? ((t.index = t.items.length - 1),
                      l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.slideEndAnimatoin &&
                      (l.default.addClass(t.outer, "lg-left-end"),
                      setTimeout(function () {
                        l.default.removeClass(t.outer, "lg-left-end");
                      }, 400)));
              }),
              (s.prototype.keyPress = function () {
                var e = this;
                this.items.length > 1 &&
                  l.default.on(window, "keyup.lg", function (t) {
                    e.items.length > 1 &&
                      (37 === t.keyCode &&
                        (t.preventDefault(), e.goToPrevSlide()),
                      39 === t.keyCode &&
                        (t.preventDefault(), e.goToNextSlide()));
                  }),
                  l.default.on(window, "keydown.lg", function (t) {
                    e.s.escKey === !0 &&
                      27 === t.keyCode &&
                      (t.preventDefault(),
                      l.default.hasClass(e.outer, "lg-thumb-open")
                        ? l.default.removeClass(e.outer, "lg-thumb-open")
                        : e.destroy());
                  });
              }),
              (s.prototype.arrow = function () {
                var e = this;
                l.default.on(
                  this.outer.querySelector(".lg-prev"),
                  "click.lg",
                  function () {
                    e.goToPrevSlide();
                  }
                ),
                  l.default.on(
                    this.outer.querySelector(".lg-next"),
                    "click.lg",
                    function () {
                      e.goToNextSlide();
                    }
                  );
              }),
              (s.prototype.arrowDisable = function (e) {
                if (!this.s.loop && this.s.hideControlOnEnd) {
                  var t = this.outer.querySelector(".lg-next"),
                    s = this.outer.querySelector(".lg-prev");
                  e + 1 < this.___slide.length
                    ? (t.removeAttribute("disabled"),
                      l.default.removeClass(t, "disabled"))
                    : (t.setAttribute("disabled", "disabled"),
                      l.default.addClass(t, "disabled")),
                    e > 0
                      ? (s.removeAttribute("disabled"),
                        l.default.removeClass(s, "disabled"))
                      : (t.setAttribute("disabled", "disabled"),
                        l.default.addClass(t, "disabled"));
                }
              }),
              (s.prototype.setTranslate = function (e, t, s) {
                this.s.useLeft
                  ? (e.style.left = t)
                  : l.default.setVendor(
                      e,
                      "Transform",
                      "translate3d(" + t + "px, " + s + "px, 0px)"
                    );
              }),
              (s.prototype.touchMove = function (e, t) {
                var s = t - e;
                Math.abs(s) > 15 &&
                  (l.default.addClass(this.outer, "lg-dragging"),
                  this.setTranslate(this.___slide[this.index], s, 0),
                  this.setTranslate(
                    document.querySelector(".lg-prev-slide"),
                    -this.___slide[this.index].clientWidth + s,
                    0
                  ),
                  this.setTranslate(
                    document.querySelector(".lg-next-slide"),
                    this.___slide[this.index].clientWidth + s,
                    0
                  ));
              }),
              (s.prototype.touchEnd = function (e) {
                var t = this;
                "lg-slide" !== t.s.mode &&
                  l.default.addClass(t.outer, "lg-slide");
                for (var s = 0; s < this.___slide.length; s++)
                  l.default.hasClass(this.___slide[s], "lg-current") ||
                    l.default.hasClass(this.___slide[s], "lg-prev-slide") ||
                    l.default.hasClass(this.___slide[s], "lg-next-slide") ||
                    (this.___slide[s].style.opacity = "0");
                setTimeout(function () {
                  l.default.removeClass(t.outer, "lg-dragging"),
                    e < 0 && Math.abs(e) > t.s.swipeThreshold
                      ? t.goToNextSlide(!0)
                      : e > 0 && Math.abs(e) > t.s.swipeThreshold
                      ? t.goToPrevSlide(!0)
                      : Math.abs(e) < 5 &&
                        l.default.trigger(t.el, "onSlideClick");
                  for (var s = 0; s < t.___slide.length; s++)
                    t.___slide[s].removeAttribute("style");
                }),
                  setTimeout(function () {
                    l.default.hasClass(t.outer, "lg-dragging") ||
                      "lg-slide" === t.s.mode ||
                      l.default.removeClass(t.outer, "lg-slide");
                  }, t.s.speed + 100);
              }),
              (s.prototype.enableSwipe = function () {
                var e = this,
                  t = 0,
                  s = 0,
                  i = !1;
                if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                  for (var o = 0; o < e.___slide.length; o++)
                    l.default.on(e.___slide[o], "touchstart.lg", function (s) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        e.lgBusy ||
                        (s.preventDefault(),
                        e.manageSwipeClass(),
                        (t = s.targetTouches[0].pageX));
                    });
                  for (var r = 0; r < e.___slide.length; r++)
                    l.default.on(e.___slide[r], "touchmove.lg", function (o) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        (o.preventDefault(),
                        (s = o.targetTouches[0].pageX),
                        e.touchMove(t, s),
                        (i = !0));
                    });
                  for (var d = 0; d < e.___slide.length; d++)
                    l.default.on(e.___slide[d], "touchend.lg", function () {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        (i
                          ? ((i = !1), e.touchEnd(s - t))
                          : l.default.trigger(e.el, "onSlideClick"));
                    });
                }
              }),
              (s.prototype.enableDrag = function () {
                var e = this,
                  t = 0,
                  s = 0,
                  i = !1,
                  o = !1;
                if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                  for (var r = 0; r < e.___slide.length; r++)
                    l.default.on(e.___slide[r], "mousedown.lg", function (s) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        ((l.default.hasClass(s.target, "lg-object") ||
                          l.default.hasClass(s.target, "lg-video-play")) &&
                          (s.preventDefault(),
                          e.lgBusy ||
                            (e.manageSwipeClass(),
                            (t = s.pageX),
                            (i = !0),
                            (e.outer.scrollLeft += 1),
                            (e.outer.scrollLeft -= 1),
                            l.default.removeClass(e.outer, "lg-grab"),
                            l.default.addClass(e.outer, "lg-grabbing"),
                            l.default.trigger(e.el, "onDragstart"))));
                    });
                  l.default.on(window, "mousemove.lg", function (r) {
                    i &&
                      ((o = !0),
                      (s = r.pageX),
                      e.touchMove(t, s),
                      l.default.trigger(e.el, "onDragmove"));
                  }),
                    l.default.on(window, "mouseup.lg", function (r) {
                      o
                        ? ((o = !1),
                          e.touchEnd(s - t),
                          l.default.trigger(e.el, "onDragend"))
                        : (l.default.hasClass(r.target, "lg-object") ||
                            l.default.hasClass(r.target, "lg-video-play")) &&
                          l.default.trigger(e.el, "onSlideClick"),
                        i &&
                          ((i = !1),
                          l.default.removeClass(e.outer, "lg-grabbing"),
                          l.default.addClass(e.outer, "lg-grab"));
                    });
                }
              }),
              (s.prototype.manageSwipeClass = function () {
                var e = this.index + 1,
                  t = this.index - 1,
                  s = this.___slide.length;
                this.s.loop &&
                  (0 === this.index
                    ? (t = s - 1)
                    : this.index === s - 1 && (e = 0));
                for (var i = 0; i < this.___slide.length; i++)
                  l.default.removeClass(this.___slide[i], "lg-next-slide"),
                    l.default.removeClass(this.___slide[i], "lg-prev-slide");
                t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"),
                  l.default.addClass(this.___slide[e], "lg-next-slide");
              }),
              (s.prototype.mousewheel = function () {
                var e = this;
                l.default.on(e.outer, "mousewheel.lg", function (t) {
                  t.deltaY &&
                    (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
                    t.preventDefault());
                });
              }),
              (s.prototype.closeGallery = function () {
                var e = this,
                  t = !1;
                l.default.on(
                  this.outer.querySelector(".lg-close"),
                  "click.lg",
                  function () {
                    e.destroy();
                  }
                ),
                  e.s.closable &&
                    (l.default.on(e.outer, "mousedown.lg", function (e) {
                      t = !!(
                        l.default.hasClass(e.target, "lg-outer") ||
                        l.default.hasClass(e.target, "lg-item") ||
                        l.default.hasClass(e.target, "lg-img-wrap")
                      );
                    }),
                    l.default.on(e.outer, "mouseup.lg", function (s) {
                      (l.default.hasClass(s.target, "lg-outer") ||
                        l.default.hasClass(s.target, "lg-item") ||
                        (l.default.hasClass(s.target, "lg-img-wrap") && t)) &&
                        (l.default.hasClass(e.outer, "lg-dragging") ||
                          e.destroy());
                    }));
              }),
              (s.prototype.destroy = function (e) {
                var t = this;
                if (
                  (e || l.default.trigger(t.el, "onBeforeClose"),
                  (document.body.scrollTop = t.prevScrollTop),
                  (document.documentElement.scrollTop = t.prevScrollTop),
                  e)
                ) {
                  if (!t.s.dynamic)
                    for (var s = 0; s < this.items.length; s++)
                      l.default.off(this.items[s], ".lg"),
                        l.default.off(this.items[s], ".lgcustom");
                  var i = t.el.getAttribute("lg-uid");
                  delete window.lgData[i], t.el.removeAttribute("lg-uid");
                }
                l.default.off(this.el, ".lgtm");
                for (var o in window.lgModules)
                  t.modules[o] && t.modules[o].destroy();
                (this.lGalleryOn = !1),
                  clearTimeout(t.hideBartimeout),
                  (this.hideBartimeout = !1),
                  l.default.off(window, ".lg"),
                  l.default.removeClass(document.body, "lg-on"),
                  l.default.removeClass(document.body, "lg-from-hash"),
                  t.outer && l.default.removeClass(t.outer, "lg-visible"),
                  l.default.removeClass(
                    document.querySelector(".lg-backdrop"),
                    "in"
                  ),
                  setTimeout(function () {
                    try {
                      t.outer && t.outer.parentNode.removeChild(t.outer),
                        document.querySelector(".lg-backdrop") &&
                          document
                            .querySelector(".lg-backdrop")
                            .parentNode.removeChild(
                              document.querySelector(".lg-backdrop")
                            ),
                        e || l.default.trigger(t.el, "onCloseAfter");
                    } catch (e) {}
                  }, t.s.backdropDuration + 50);
              }),
              (window.lightGallery = function (e, t) {
                if (e)
                  try {
                    if (e.getAttribute("lg-uid"))
                      try {
                        window.lgData[e.getAttribute("lg-uid")].init();
                      } catch (e) {
                        console.error(
                          "lightGallery has not initiated properly"
                        );
                      }
                    else {
                      var l = "lg" + window.lgData.uid++;
                      (window.lgData[l] = new s(e, t)),
                        e.setAttribute("lg-uid", l);
                    }
                  } catch (e) {
                    console.error("lightGallery has not initiated properly");
                  }
              });
          });
        },
        { "./lg-utils": 1 },
      ],
    },
    {},
    [2]
  )(2);
});

/*====================================*/

/*---------------------------------
    All Plugins Include Here 
-----------------------------------*/

/*************************************
	Avoid Console
**************************************/

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.

/*==========================
    Youtube Player 
==========================*/
/*! YU2FVL - jQuery Youtube Url To FullScreen Video Lightbox - v0.1.0 - 2016-02-07
 * http://otakod.es/yu2fvl
 * Copyright (c) 2016 darkylmnx; Licensed MIT */
!(function (t, e, s) {
  function i(t) {
    return /youtu\.be/.test(t)
      ? t.split("youtu.be/")[1].split("?")[0].split("&")[0].split("#")[0]
      : /youtube\.com\/v\//.test(t)
      ? t.split("youtube.com/v/")[1].split("?")[0].split("&")[0].split("#")[0]
      : /youtube\.com\/embed\//.test(t)
      ? t
          .split("youtube.com/embed/")[1]
          .split("?")[0]
          .split("&")[0]
          .split("#")[0]
      : /youtube.com|youtuberepeater.com|listenonrepeat.com/.test(t)
      ? t.split("v=")[1].split("&")[0].split("#")[0]
      : !1;
  }
  function n(t, e, s) {
    var i = JSON.stringify({ event: "command", func: e, args: s || [] });
    -1 !== t.src.indexOf("youtube.com/embed") &&
      t.contentWindow.postMessage(i, "*");
  }
  function o(e, i, o) {
    function f() {
      var t = a.width() - e.minPaddingX,
        s = a.height() - e.minPaddingY,
        i = t / s,
        n = e.ratio;
      i > n ? (C.height(s), C.width(s * n)) : (C.width(t), C.height(t / n)),
        C.css("left", (a.width() - C.width()) / 2),
        C.css("top", (a.height() - C.height()) / 2);
    }
    function r() {
      n(w[0], "playVideo"), h();
    }
    function h() {
      b.stop().fadeIn("fast"), C.stop().fadeIn("fast");
    }
    function m() {
      b.stop().fadeOut("fast"),
        C.stop().fadeOut("fast", function () {
          null === i && e.open && (b.remove(), C.remove());
        });
    }
    function v(t) {
      t.on("click", function (t) {
        t.preventDefault(), r();
      });
    }
    function y(t) {
      t.on("click", function (t) {
        t.preventDefault(), n(w[0], "pauseVideo"), m();
      });
    }
    var C = t(s.createElement("DIV")).addClass(e.cssClass).css(c),
      b = t(s.createElement("DIV"))
        .addClass(e.cssClass + e.overlayCssClass)
        .css(p),
      g = t(s.createElement("BUTTON"))
        .addClass(e.cssClass + e.closeCssClass)
        .html(e.closeText),
      w = t(s.createElement("IFRAME"))
        .addClass(e.cssClass + e.iframeCssClass)
        .attr({ src: l + o + d })
        .css(u);
    C.append(w).append(g),
      t("body").append(b).append(C),
      e.open &&
        w.on("load", function () {
          r();
        }),
      null !== i && v(i),
      y(g.add(b)),
      a.on("resize", f).trigger("resize");
  }
  var a = t(e),
    l = "https://www.youtube.com/embed/",
    d = "?enablejsapi=1",
    c = { display: "none", position: "fixed" },
    u = { width: "100%", height: "100%" },
    p = {
      display: "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    f = {
      minPaddingX: 50,
      minPaddingY: 50,
      ratio: 16 / 9,
      cssClass: "yu2fvl",
      overlayCssClass: "-overlay",
      iframeCssClass: "-iframe",
      closeCssClass: "-close",
      closeText: "X",
      open: !1,
      vid: !1,
    };
  (t.yu2fvl = function (e) {
    var s = t.extend({}, f, e);
    if (s.vid === !1) throw "YOU MUST SET THE 'vid' option";
    o(s, null, s.vid);
  }),
    (t.fn.yu2fvl = function (e) {
      function s() {
        var e = t(this),
          s = i(e.attr("href"));
        o(n, e, s);
      }
      var n = t.extend({}, f, e);
      return n.vid !== !1 ? (o(n, this, n.vid), this) : this.each(s);
    });
})(jQuery, window, document);

/*==============================
	Slick Slider
===============================*/

/*
  Version: 1.9.0
  Author: Ken Wheeler
  Website: http://kenwheeler.github.io
  Docs: http://kenwheeler.github.io/slick
  Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        "undefined" != typeof document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : o === !0
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        "object" == typeof o &&
        o.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
          e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
        i.removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(":focus") &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        var i = this;
        return i.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : n.options.centerMode === !0 &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
              ? o[0].offsetLeft * -1
              : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                ? o[0].offsetLeft * -1
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        var e = this;
        return e.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              )
                return (t = s), !1;
            }),
            (e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        var t = this;
        t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + t,
                  tabindex: -1,
                }),
                s !== -1)
              ) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({ "aria-describedby": n });
              }
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: "0" })
          : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        e.options.accessibility === !0 &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
          e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
              data: { message: e.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({
              data: { message: e.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                r.$slider.trigger("lazyLoaded", [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                r.$slider.trigger("lazyLoadError", [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1)
              )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find(".slick-slide").slice(s, n)),
        "anticipated" === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find(".slick-slide")), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider
              .find(".slick-cloned")
              .slice(0, r.options.slidesToShow)),
            e(o))
          : 0 === r.currentSlide &&
            ((o = r.$slider
              .find(".slick-cloned")
              .slice(r.options.slidesToShow * -1)),
            e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr("tabindex", 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        var i = this;
        i.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          (r = document.createElement("img")),
          (r.onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          "boolean" == typeof i
            ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
            : (i = e === !0 ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : "undefined" != typeof arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (a.animating === !0 && a.options.waitForAnimate === !0) ||
          (a.options.fade === !0 && a.currentSlide === i)
        ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                ((l = a.getNavTarget()),
                (l = l.slick("getSlick")),
                l.slideCount <= l.options.slidesToShow &&
                  l.setSlideClasses(a.currentSlide)),
              a.updateDots(),
              a.updateArrows(),
              a.options.fade === !0
                ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? s.options.rtl === !1
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? s.options.rtl === !1
            ? "right"
            : "left"
          : s.options.verticalSwiping === !0
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ("ontouchend" in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          e.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
            ? (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              e.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || "undefined" == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          "undefined" != typeof t)
        )
          return t;
      return o;
    });
});

/*=============================
	Waypoints
==============================*/

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = false);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function () {
        return d._invoke(this, "disable");
      },
      enable: function () {
        return d._invoke(this, "enable");
      },
      destroy: function () {
        return d._invoke(this, "destroy");
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false,
    };
    h = {
      refresh: function () {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke("enable");
      },
      disable: function () {
        return h._invoke("disable");
      },
      destroy: function () {
        return h._invoke("destroy");
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(this);

/*=================
    Wow Js 
===================*/
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);

/*=========================
    CounterUp 
============================*/
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function () {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length)
              setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

/*=========================
    parallax 
============================*/

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!(function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e &&
      (delete e.refresh, delete e.render, t.extend(this, e)),
      (this.$element = t(i)),
      !this.imageSrc &&
        this.$element.is("img") &&
        (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (
      (r.length < 1 && r.push("center"),
      1 == r.length && r.push(r[0]),
      ("top" == r[0] ||
        "bottom" == r[0] ||
        "left" == r[1] ||
        "right" == r[1]) &&
        (r = [r[1], r[0]]),
      this.positionX != s && (r[0] = this.positionX.toLowerCase()),
      this.positionY != s && (r[1] = this.positionY.toLowerCase()),
      (h.positionX = r[0]),
      (h.positionY = r[1]),
      "left" != this.positionX &&
        "right" != this.positionX &&
        (this.positionX = isNaN(parseInt(this.positionX))
          ? "center"
          : parseInt(this.positionX)),
      "top" != this.positionY &&
        "bottom" != this.positionY &&
        (this.positionY = isNaN(parseInt(this.positionY))
          ? "center"
          : parseInt(this.positionY)),
      (this.position =
        this.positionX +
        (isNaN(this.positionX) ? "" : "px") +
        " " +
        this.positionY +
        (isNaN(this.positionY) ? "" : "px")),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/))
    )
      return (
        this.imageSrc &&
          this.iosFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    if (navigator.userAgent.match(/(Android)/))
      return (
        this.imageSrc &&
          this.androidFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    this.$mirror = t("<div />").prependTo("body");
    var a = this.$element.find(">.parallax-slider"),
      n = !1;
    0 == a.length
      ? (this.$slider = t("<img />").prependTo(this.$mirror))
      : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
      this.$mirror.addClass("parallax-mirror").css({
        visibility: "hidden",
        zIndex: this.zIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }),
      this.$slider.addClass("parallax-slider").one("load", function () {
        (h.naturalHeight && h.naturalWidth) ||
          ((h.naturalHeight = this.naturalHeight || this.height || 1),
          (h.naturalWidth = this.naturalWidth || this.width || 1)),
          (h.aspectRatio = h.naturalWidth / h.naturalHeight),
          o.isSetup || o.setup(),
          o.sliders.push(h),
          (o.isFresh = !1),
          o.requestRender();
      }),
      n || (this.$slider[0].src = this.imageSrc),
      ((this.naturalHeight && this.naturalWidth) ||
        this.$slider[0].complete ||
        a.length > 0) &&
        this.$slider.trigger("load");
  }
  function h(s) {
    return this.each(function () {
      var h = t(this),
        r = "object" == typeof s && s;
      this == i || this == e || h.is("body")
        ? o.configure(r)
        : h.data("px.parallax")
        ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
        : ((r = t.extend({}, h.data(), r)),
          h.data("px.parallax", new o(this, r))),
        "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
      s < e.length && !i.requestAnimationFrame;
      ++s
    )
      (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
        (i.cancelAnimationFrame =
          i[e[s] + "CancelAnimationFrame"] ||
          i[e[s] + "CancelRequestAnimationFrame"]);
    i.requestAnimationFrame ||
      (i.requestAnimationFrame = function (e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
            e(s + o);
          }, o);
        return (t = s + o), h;
      }),
      i.cancelAnimationFrame ||
        (i.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
    t.extend(o.prototype, {
      speed: 0.2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      refresh: function () {
        (this.boxWidth = this.$element.outerWidth()),
          (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
          (this.boxOffsetTop = this.$element.offset().top - this.bleed),
          (this.boxOffsetLeft = this.$element.offset().left),
          (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
        var t = o.winHeight,
          i = o.docHeight,
          e = Math.min(this.boxOffsetTop, i - t),
          s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
          h = (this.boxHeight + (e - s) * (1 - this.speed)) | 0,
          r = ((this.boxOffsetTop - e) * (1 - this.speed)) | 0;
        if (h * this.aspectRatio >= this.boxWidth) {
          (this.imageWidth = (h * this.aspectRatio) | 0),
            (this.imageHeight = h),
            (this.offsetBaseTop = r);
          var a = this.imageWidth - this.boxWidth;
          this.offsetLeft =
            "left" == this.positionX
              ? 0
              : "right" == this.positionX
              ? -a
              : isNaN(this.positionX)
              ? (-a / 2) | 0
              : Math.max(this.positionX, -a);
        } else {
          (this.imageWidth = this.boxWidth),
            (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
            (this.offsetLeft = 0);
          var a = this.imageHeight - h;
          this.offsetBaseTop =
            "top" == this.positionY
              ? r
              : "bottom" == this.positionY
              ? r - a
              : isNaN(this.positionY)
              ? (r - a / 2) | 0
              : r + Math.max(this.positionY, -a);
        }
      },
      render: function () {
        var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
        this.boxOffsetBottom > t && this.boxOffsetTop <= s
          ? ((this.visibility = "visible"),
            (this.mirrorTop = this.boxOffsetTop - t),
            (this.mirrorLeft = this.boxOffsetLeft - i),
            (this.offsetTop =
              this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
          : (this.visibility = "hidden"),
          this.$mirror.css({
            transform: "translate3d(0px, 0px, 0px)",
            visibility: this.visibility,
            top: this.mirrorTop - e,
            left: this.mirrorLeft,
            height: this.boxHeight,
            width: this.boxWidth,
          }),
          this.$slider.css({
            transform: "translate3d(0px, 0px, 0px)",
            position: "absolute",
            top: this.offsetTop,
            left: this.offsetLeft,
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: "none",
          });
      },
    }),
    t.extend(o, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function () {
        if (!this.isReady) {
          var s = t(e),
            h = t(i),
            r = function () {
              (o.winHeight = h.height()),
                (o.winWidth = h.width()),
                (o.docHeight = s.height()),
                (o.docWidth = s.width());
            },
            a = function () {
              var t = h.scrollTop(),
                i = o.docHeight - o.winHeight,
                e = o.docWidth - o.winWidth;
              (o.scrollTop = Math.max(0, Math.min(i, t))),
                (o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft()))),
                (o.overScroll = Math.max(t - i, Math.min(t, 0)));
            };
          h
            .on("resize.px.parallax load.px.parallax", function () {
              r(), (o.isFresh = !1), o.requestRender();
            })
            .on("scroll.px.parallax load.px.parallax", function () {
              a(), o.requestRender();
            }),
            r(),
            a(),
            (this.isReady = !0);
        }
      },
      configure: function (i) {
        "object" == typeof i &&
          (delete i.refresh, delete i.render, t.extend(this.prototype, i));
      },
      refresh: function () {
        t.each(this.sliders, function () {
          this.refresh();
        }),
          (this.isFresh = !0);
      },
      render: function () {
        this.isFresh || this.refresh(),
          t.each(this.sliders, function () {
            this.render();
          });
      },
      requestRender: function () {
        var t = this;
        this.isBusy ||
          ((this.isBusy = !0),
          i.requestAnimationFrame(function () {
            t.render(), (t.isBusy = !1);
          }));
      },
      destroy: function (e) {
        var s,
          h = t(e).data("px.parallax");
        for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
          this.sliders[s] == h && this.sliders.splice(s, 1);
        t(e).data("px.parallax", !1),
          0 === this.sliders.length &&
            (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            (this.isReady = !1),
            (o.isSetup = !1));
      },
    });
  var r = t.fn.parallax;
  (t.fn.parallax = h),
    (t.fn.parallax.Constructor = o),
    (t.fn.parallax.noConflict = function () {
      return (t.fn.parallax = r), this;
    }),
    t(e).on("ready.px.parallax.data-api", function () {
      t('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document);

/*===================================
  10. ScrollUp
===================================-*/

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear Ã¢â‚¬â€ @markgdyr Ã¢â‚¬â€ http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  "use strict";
  (l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") ||
      (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i =
        "top" === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l("html, body").animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7
          ? l(o).off("scroll", r)
          : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*--------------------------
  Feather Icons  
-----------------------------*/

!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.feather = n())
    : (e.feather = n());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var n = {};
    function i(t) {
      if (n[t]) return n[t].exports;
      var l = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
    }
    return (
      (i.m = e),
      (i.c = n),
      (i.d = function (e, n, t) {
        i.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: t,
          });
      }),
      (i.r = function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(n, "a", n), n;
      }),
      (i.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (i.p = ""),
      i((i.s = 80))
    );
  })([
    function (e, n, i) {
      (function (n) {
        var i = "object",
          t = function (e) {
            return e && e.Math == Math && e;
          };
        e.exports =
          t(typeof globalThis == i && globalThis) ||
          t(typeof window == i && window) ||
          t(typeof self == i && self) ||
          t(typeof n == i && n) ||
          Function("return this")();
      }).call(this, i(75));
    },
    function (e, n) {
      var i = {}.hasOwnProperty;
      e.exports = function (e, n) {
        return i.call(e, n);
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(33),
        o = i(62),
        a = t.Symbol,
        c = l("wks");
      e.exports = function (e) {
        return c[e] || (c[e] = (o && a[e]) || (o ? a : r)("Symbol." + e));
      };
    },
    function (e, n, i) {
      var t = i(6);
      e.exports = function (e) {
        if (!t(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    function (e, n) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(10);
      e.exports = t
        ? function (e, n, i) {
            return l.f(e, n, r(1, i));
          }
        : function (e, n, i) {
            return (e[n] = i), e;
          };
    },
    function (e, n) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(35),
        r = i(3),
        o = i(18),
        a = Object.defineProperty;
      n.f = t
        ? a
        : function (e, n, i) {
            if ((r(e), (n = o(n, !0)), r(i), l))
              try {
                return a(e, n, i);
              } catch (e) {}
            if ("get" in i || "set" in i)
              throw TypeError("Accessors not supported");
            return "value" in i && (e[n] = i.value), e;
          };
    },
    function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (e, n) {
      e.exports = {};
    },
    function (e, n) {
      e.exports = function (e, n) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: n,
        };
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(19),
        r = i(17),
        o = t["__core-js_shared__"] || l("__core-js_shared__", {});
      (e.exports = function (e, n) {
        return o[e] || (o[e] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: "3.1.3",
        mode: r ? "pure" : "global",
        copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t = o(i(43)),
        l = o(i(41)),
        r = o(i(40));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n.default = Object.keys(l.default)
        .map(function (e) {
          return new t.default(e, l.default[e], r.default[e]);
        })
        .reduce(function (e, n) {
          return (e[n.name] = n), e;
        }, {});
    },
    function (e, n) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (e, n, i) {
      var t = i(72),
        l = i(20);
      e.exports = function (e) {
        return t(l(e));
      };
    },
    function (e, n) {
      e.exports = {};
    },
    function (e, n, i) {
      var t = i(11),
        l = i(33),
        r = t("keys");
      e.exports = function (e) {
        return r[e] || (r[e] = l(e));
      };
    },
    function (e, n) {
      e.exports = !1;
    },
    function (e, n, i) {
      var t = i(6);
      e.exports = function (e, n) {
        if (!t(e)) return e;
        var i, l;
        if (n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
          return l;
        if ("function" == typeof (i = e.valueOf) && !t((l = i.call(e))))
          return l;
        if (!n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
          return l;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(5);
      e.exports = function (e, n) {
        try {
          l(t, e, n);
        } catch (i) {
          t[e] = n;
        }
        return n;
      };
    },
    function (e, n) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    function (e, n) {
      var i = Math.ceil,
        t = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? t : i)(e);
      };
    },
    function (e, n, i) {
      var t;

      /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function () {
        "use strict";
        var i = (function () {
          function e() {}
          function n(e, n) {
            for (var i = n.length, t = 0; t < i; ++t) l(e, n[t]);
          }
          e.prototype = Object.create(null);
          var i = {}.hasOwnProperty;
          var t = /\s+/;
          function l(e, l) {
            if (l) {
              var r = typeof l;
              "string" === r
                ? (function (e, n) {
                    for (var i = n.split(t), l = i.length, r = 0; r < l; ++r)
                      e[i[r]] = !0;
                  })(e, l)
                : Array.isArray(l)
                ? n(e, l)
                : "object" === r
                ? (function (e, n) {
                    for (var t in n) i.call(n, t) && (e[t] = !!n[t]);
                  })(e, l)
                : "number" === r &&
                  (function (e, n) {
                    e[n] = !0;
                  })(e, l);
            }
          }
          return function () {
            for (var i = arguments.length, t = Array(i), l = 0; l < i; l++)
              t[l] = arguments[l];
            var r = new e();
            n(r, t);
            var o = [];
            for (var a in r) r[a] && o.push(a);
            return o.join(" ");
          };
        })();
        void 0 !== e && e.exports
          ? (e.exports = i)
          : void 0 ===
              (t = function () {
                return i;
              }.apply(n, [])) || (e.exports = t);
      })();
    },
    function (e, n, i) {
      var t = i(7).f,
        l = i(1),
        r = i(2)("toStringTag");
      e.exports = function (e, n, i) {
        e &&
          !l((e = i ? e : e.prototype), r) &&
          t(e, r, { configurable: !0, value: n });
      };
    },
    function (e, n, i) {
      var t = i(20);
      e.exports = function (e) {
        return Object(t(e));
      };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(24),
        r = i(16),
        o = i(63),
        a = r("IE_PROTO"),
        c = Object.prototype;
      e.exports = o
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = l(e)),
              t(e, a)
                ? e[a]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? c
                : null
            );
          };
    },
    function (e, n, i) {
      "use strict";
      var t,
        l,
        r,
        o = i(25),
        a = i(5),
        c = i(1),
        p = i(2),
        y = i(17),
        h = p("iterator"),
        x = !1;
      [].keys &&
        ("next" in (r = [].keys())
          ? (l = o(o(r))) !== Object.prototype && (t = l)
          : (x = !0)),
        void 0 == t && (t = {}),
        y ||
          c(t, h) ||
          a(t, h, function () {
            return this;
          }),
        (e.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: x });
    },
    function (e, n, i) {
      var t = i(21),
        l = Math.min;
      e.exports = function (e) {
        return e > 0 ? l(t(e), 9007199254740991) : 0;
      };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(14),
        r = i(68),
        o = i(15),
        a = r(!1);
      e.exports = function (e, n) {
        var i,
          r = l(e),
          c = 0,
          p = [];
        for (i in r) !t(o, i) && t(r, i) && p.push(i);
        for (; n.length > c; ) t(r, (i = n[c++])) && (~a(p, i) || p.push(i));
        return p;
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(11),
        r = i(5),
        o = i(1),
        a = i(19),
        c = i(36),
        p = i(37),
        y = p.get,
        h = p.enforce,
        x = String(c).split("toString");
      l("inspectSource", function (e) {
        return c.call(e);
      }),
        (e.exports = function (e, n, i, l) {
          var c = !!l && !!l.unsafe,
            p = !!l && !!l.enumerable,
            y = !!l && !!l.noTargetGet;
          "function" == typeof i &&
            ("string" != typeof n || o(i, "name") || r(i, "name", n),
            (h(i).source = x.join("string" == typeof n ? n : ""))),
            e !== t
              ? (c ? !y && e[n] && (p = !0) : delete e[n],
                p ? (e[n] = i) : r(e, n, i))
              : p
              ? (e[n] = i)
              : a(n, i);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && y(this).source) || c.call(this);
        });
    },
    function (e, n) {
      var i = {}.toString;
      e.exports = function (e) {
        return i.call(e).slice(8, -1);
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(73),
        r = i(10),
        o = i(14),
        a = i(18),
        c = i(1),
        p = i(35),
        y = Object.getOwnPropertyDescriptor;
      n.f = t
        ? y
        : function (e, n) {
            if (((e = o(e)), (n = a(n, !0)), p))
              try {
                return y(e, n);
              } catch (e) {}
            if (c(e, n)) return r(!l.f.call(e, n), e[n]);
          };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(31).f,
        r = i(5),
        o = i(29),
        a = i(19),
        c = i(71),
        p = i(65);
      e.exports = function (e, n) {
        var i,
          y,
          h,
          x,
          s,
          u = e.target,
          d = e.global,
          f = e.stat;
        if ((i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype))
          for (y in n) {
            if (
              ((x = n[y]),
              (h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y]),
              !p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h)
            ) {
              if (typeof x == typeof h) continue;
              c(x, h);
            }
            (e.sham || (h && h.sham)) && r(x, "sham", !0), o(i, y, x, e);
          }
      };
    },
    function (e, n) {
      var i = 0,
        t = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(
          void 0 === e ? "" : e,
          ")_",
          (++i + t).toString(36)
        );
      };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(6),
        r = t.document,
        o = l(r) && l(r.createElement);
      e.exports = function (e) {
        return o ? r.createElement(e) : {};
      };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(4),
        r = i(34);
      e.exports =
        !t &&
        !l(function () {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (e, n, i) {
      var t = i(11);
      e.exports = t("native-function-to-string", Function.toString);
    },
    function (e, n, i) {
      var t,
        l,
        r,
        o = i(76),
        a = i(0),
        c = i(6),
        p = i(5),
        y = i(1),
        h = i(16),
        x = i(15),
        s = a.WeakMap;
      if (o) {
        var u = new s(),
          d = u.get,
          f = u.has,
          g = u.set;
        (t = function (e, n) {
          return g.call(u, e, n), n;
        }),
          (l = function (e) {
            return d.call(u, e) || {};
          }),
          (r = function (e) {
            return f.call(u, e);
          });
      } else {
        var v = h("state");
        (x[v] = !0),
          (t = function (e, n) {
            return p(e, v, n), n;
          }),
          (l = function (e) {
            return y(e, v) ? e[v] : {};
          }),
          (r = function (e) {
            return y(e, v);
          });
      }
      e.exports = {
        set: t,
        get: l,
        has: r,
        enforce: function (e) {
          return r(e) ? l(e) : t(e, {});
        },
        getterFor: function (e) {
          return function (n) {
            var i;
            if (!c(n) || (i = l(n)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return i;
          };
        },
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
            }
            return e;
          },
        l = o(i(22)),
        r = o(i(12));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n.default = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("undefined" == typeof document)
          throw new Error(
            "`feather.replace()` only works in a browser environment."
          );
        var n = document.querySelectorAll("[data-feather]");
        Array.from(n).forEach(function (n) {
          return (function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = (function (e) {
                return Array.from(e.attributes).reduce(function (e, n) {
                  return (e[n.name] = n.value), e;
                }, {});
              })(e),
              o = i["data-feather"];
            delete i["data-feather"];
            var a = r.default[o].toSvg(
                t({}, n, i, { class: (0, l.default)(n.class, i.class) })
              ),
              c = new DOMParser()
                .parseFromString(a, "image/svg+xml")
                .querySelector("svg");
            e.parentNode.replaceChild(c, e);
          })(n, e);
        });
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t,
        l = i(12),
        r = (t = l) && t.__esModule ? t : { default: t };
      n.default = function (e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (console.warn(
            "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
          ),
          !e)
        )
          throw new Error(
            "The required `key` (icon name) parameter is missing."
          );
        if (!r.default[e])
          throw new Error(
            "No icon matching '" +
              e +
              "'. See the complete list of icons at https://feathericons.com"
          );
        return r.default[e].toSvg(n);
      };
    },
    function (e) {
      e.exports = {
        activity: ["pulse", "health", "action", "motion"],
        airplay: ["stream", "cast", "mirroring"],
        "alert-circle": ["warning", "alert", "danger"],
        "alert-octagon": ["warning", "alert", "danger"],
        "alert-triangle": ["warning", "alert", "danger"],
        "align-center": ["text alignment", "center"],
        "align-justify": ["text alignment", "justified"],
        "align-left": ["text alignment", "left"],
        "align-right": ["text alignment", "right"],
        anchor: [],
        archive: ["index", "box"],
        "at-sign": ["mention", "at", "email", "message"],
        award: ["achievement", "badge"],
        aperture: ["camera", "photo"],
        "bar-chart": ["statistics", "diagram", "graph"],
        "bar-chart-2": ["statistics", "diagram", "graph"],
        battery: ["power", "electricity"],
        "battery-charging": ["power", "electricity"],
        bell: ["alarm", "notification", "sound"],
        "bell-off": ["alarm", "notification", "silent"],
        bluetooth: ["wireless"],
        "book-open": ["read", "library"],
        book: ["read", "dictionary", "booklet", "magazine", "library"],
        bookmark: ["read", "clip", "marker", "tag"],
        box: ["cube"],
        briefcase: ["work", "bag", "baggage", "folder"],
        calendar: ["date"],
        camera: ["photo"],
        cast: ["chromecast", "airplay"],
        circle: ["off", "zero", "record"],
        clipboard: ["copy"],
        clock: ["time", "watch", "alarm"],
        "cloud-drizzle": ["weather", "shower"],
        "cloud-lightning": ["weather", "bolt"],
        "cloud-rain": ["weather"],
        "cloud-snow": ["weather", "blizzard"],
        cloud: ["weather"],
        codepen: ["logo"],
        codesandbox: ["logo"],
        code: ["source", "programming"],
        coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
        columns: ["layout"],
        command: ["keyboard", "cmd", "terminal", "prompt"],
        compass: ["navigation", "safari", "travel", "direction"],
        copy: ["clone", "duplicate"],
        "corner-down-left": ["arrow", "return"],
        "corner-down-right": ["arrow"],
        "corner-left-down": ["arrow"],
        "corner-left-up": ["arrow"],
        "corner-right-down": ["arrow"],
        "corner-right-up": ["arrow"],
        "corner-up-left": ["arrow"],
        "corner-up-right": ["arrow"],
        cpu: ["processor", "technology"],
        "credit-card": ["purchase", "payment", "cc"],
        crop: ["photo", "image"],
        crosshair: ["aim", "target"],
        database: ["storage", "memory"],
        delete: ["remove"],
        disc: ["album", "cd", "dvd", "music"],
        "dollar-sign": ["currency", "money", "payment"],
        droplet: ["water"],
        edit: ["pencil", "change"],
        "edit-2": ["pencil", "change"],
        "edit-3": ["pencil", "change"],
        eye: ["view", "watch"],
        "eye-off": ["view", "watch", "hide", "hidden"],
        "external-link": ["outbound"],
        facebook: ["logo", "social"],
        "fast-forward": ["music"],
        figma: ["logo", "design", "tool"],
        "file-minus": ["delete", "remove", "erase"],
        "file-plus": ["add", "create", "new"],
        "file-text": ["data", "txt", "pdf"],
        film: ["movie", "video"],
        filter: ["funnel", "hopper"],
        flag: ["report"],
        "folder-minus": ["directory"],
        "folder-plus": ["directory"],
        folder: ["directory"],
        framer: ["logo", "design", "tool"],
        frown: ["emoji", "face", "bad", "sad", "emotion"],
        gift: ["present", "box", "birthday", "party"],
        "git-branch": ["code", "version control"],
        "git-commit": ["code", "version control"],
        "git-merge": ["code", "version control"],
        "git-pull-request": ["code", "version control"],
        github: ["logo", "version control"],
        gitlab: ["logo", "version control"],
        globe: ["world", "browser", "language", "translate"],
        "hard-drive": ["computer", "server", "memory", "data"],
        hash: ["hashtag", "number", "pound"],
        headphones: ["music", "audio", "sound"],
        heart: ["like", "love", "emotion"],
        "help-circle": ["question mark"],
        hexagon: ["shape", "node.js", "logo"],
        home: ["house", "living"],
        image: ["picture"],
        inbox: ["email"],
        instagram: ["logo", "camera"],
        key: ["password", "login", "authentication", "secure"],
        layers: ["stack"],
        layout: ["window", "webpage"],
        "life-bouy": ["help", "life ring", "support"],
        link: ["chain", "url"],
        "link-2": ["chain", "url"],
        linkedin: ["logo", "social media"],
        list: ["options"],
        lock: ["security", "password", "secure"],
        "log-in": ["sign in", "arrow", "enter"],
        "log-out": ["sign out", "arrow", "exit"],
        mail: ["email", "message"],
        "map-pin": ["location", "navigation", "travel", "marker"],
        map: ["location", "navigation", "travel"],
        maximize: ["fullscreen"],
        "maximize-2": ["fullscreen", "arrows", "expand"],
        meh: ["emoji", "face", "neutral", "emotion"],
        menu: ["bars", "navigation", "hamburger"],
        "message-circle": ["comment", "chat"],
        "message-square": ["comment", "chat"],
        "mic-off": ["record", "sound", "mute"],
        mic: ["record", "sound", "listen"],
        minimize: ["exit fullscreen", "close"],
        "minimize-2": ["exit fullscreen", "arrows", "close"],
        minus: ["subtract"],
        monitor: ["tv", "screen", "display"],
        moon: ["dark", "night"],
        "more-horizontal": ["ellipsis"],
        "more-vertical": ["ellipsis"],
        "mouse-pointer": ["arrow", "cursor"],
        move: ["arrows"],
        music: ["note"],
        navigation: ["location", "travel"],
        "navigation-2": ["location", "travel"],
        octagon: ["stop"],
        package: ["box", "container"],
        paperclip: ["attachment"],
        pause: ["music", "stop"],
        "pause-circle": ["music", "audio", "stop"],
        "pen-tool": ["vector", "drawing"],
        percent: ["discount"],
        "phone-call": ["ring"],
        "phone-forwarded": ["call"],
        "phone-incoming": ["call"],
        "phone-missed": ["call"],
        "phone-off": ["call", "mute"],
        "phone-outgoing": ["call"],
        phone: ["call"],
        play: ["music", "start"],
        "pie-chart": ["statistics", "diagram"],
        "play-circle": ["music", "start"],
        plus: ["add", "new"],
        "plus-circle": ["add", "new"],
        "plus-square": ["add", "new"],
        pocket: ["logo", "save"],
        power: ["on", "off"],
        printer: ["fax", "office", "device"],
        radio: ["signal"],
        "refresh-cw": ["synchronise", "arrows"],
        "refresh-ccw": ["arrows"],
        repeat: ["loop", "arrows"],
        rewind: ["music"],
        "rotate-ccw": ["arrow"],
        "rotate-cw": ["arrow"],
        rss: ["feed", "subscribe"],
        save: ["floppy disk"],
        scissors: ["cut"],
        search: ["find", "magnifier", "magnifying glass"],
        send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
        settings: ["cog", "edit", "gear", "preferences"],
        "share-2": ["network", "connections"],
        shield: ["security", "secure"],
        "shield-off": ["security", "insecure"],
        "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
        "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
        shuffle: ["music"],
        "skip-back": ["music"],
        "skip-forward": ["music"],
        slack: ["logo"],
        slash: ["ban", "no"],
        sliders: ["settings", "controls"],
        smartphone: ["cellphone", "device"],
        smile: ["emoji", "face", "happy", "good", "emotion"],
        speaker: ["audio", "music"],
        star: ["bookmark", "favorite", "like"],
        "stop-circle": ["media", "music"],
        sun: ["brightness", "weather", "light"],
        sunrise: ["weather", "time", "morning", "day"],
        sunset: ["weather", "time", "evening", "night"],
        tablet: ["device"],
        tag: ["label"],
        target: ["logo", "bullseye"],
        terminal: ["code", "command line", "prompt"],
        thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
        "thumbs-down": ["dislike", "bad", "emotion"],
        "thumbs-up": ["like", "good", "emotion"],
        "toggle-left": ["on", "off", "switch"],
        "toggle-right": ["on", "off", "switch"],
        tool: ["settings", "spanner"],
        trash: ["garbage", "delete", "remove", "bin"],
        "trash-2": ["garbage", "delete", "remove", "bin"],
        triangle: ["delta"],
        truck: ["delivery", "van", "shipping", "transport", "lorry"],
        tv: ["television", "stream"],
        twitch: ["logo"],
        twitter: ["logo", "social"],
        type: ["text"],
        umbrella: ["rain", "weather"],
        unlock: ["security"],
        "user-check": ["followed", "subscribed"],
        "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
        "user-plus": ["new", "add", "create", "follow", "subscribe"],
        "user-x": [
          "delete",
          "remove",
          "unfollow",
          "unsubscribe",
          "unavailable",
        ],
        user: ["person", "account"],
        users: ["group"],
        "video-off": ["camera", "movie", "film"],
        video: ["camera", "movie", "film"],
        voicemail: ["phone"],
        volume: ["music", "sound", "mute"],
        "volume-1": ["music", "sound"],
        "volume-2": ["music", "sound"],
        "volume-x": ["music", "sound", "mute"],
        watch: ["clock", "time"],
        "wifi-off": ["disabled"],
        wifi: ["connection", "signal", "wireless"],
        wind: ["weather", "air"],
        "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
        "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
        "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
        x: ["cancel", "close", "delete", "remove", "times", "clear"],
        youtube: ["logo", "video", "play"],
        "zap-off": ["flash", "camera", "lightning"],
        zap: ["flash", "camera", "lightning"],
        "zoom-in": ["magnifying glass"],
        "zoom-out": ["magnifying glass"],
      };
    },
    function (e) {
      e.exports = {
        activity:
          '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
        airplay:
          '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
        "alert-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-octagon":
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        "alert-triangle":
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        "align-center":
          '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
        "align-justify":
          '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
        "align-left":
          '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
        "align-right":
          '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
        anchor:
          '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
        aperture:
          '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
        archive:
          '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
        "arrow-down-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
        "arrow-down-left":
          '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
        "arrow-down-right":
          '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
        "arrow-down":
          '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
        "arrow-left-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
        "arrow-left":
          '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
        "arrow-right-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
        "arrow-right":
          '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
        "arrow-up-circle":
          '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
        "arrow-up-left":
          '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
        "arrow-up-right":
          '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
        "arrow-up":
          '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
        "at-sign":
          '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
        award:
          '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
        "bar-chart-2":
          '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
        "bar-chart":
          '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
        "battery-charging":
          '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
        battery:
          '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
        "bell-off":
          '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
        bluetooth:
          '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
        bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
        "book-open":
          '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        bookmark:
          '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
        box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        briefcase:
          '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
        calendar:
          '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
        "camera-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
        camera:
          '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
        cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
        "check-circle":
          '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
        "check-square":
          '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
        check: '<polyline points="20 6 9 17 4 12"></polyline>',
        "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
        "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
        "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
        "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
        "chevrons-down":
          '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
        "chevrons-left":
          '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
        "chevrons-right":
          '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
        "chevrons-up":
          '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
        chrome:
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
        circle: '<circle cx="12" cy="12" r="10"></circle>',
        clipboard:
          '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
        clock:
          '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        "cloud-drizzle":
          '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-lightning":
          '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
        "cloud-off":
          '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        "cloud-rain":
          '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
        "cloud-snow":
          '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
        cloud:
          '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        codepen:
          '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
        codesandbox:
          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        coffee:
          '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
        columns:
          '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
        command:
          '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
        compass:
          '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
        "corner-down-left":
          '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
        "corner-down-right":
          '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
        "corner-left-down":
          '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
        "corner-left-up":
          '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
        "corner-right-down":
          '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
        "corner-right-up":
          '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
        "corner-up-left":
          '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
        "corner-up-right":
          '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
        cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
        "credit-card":
          '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
        crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
        crosshair:
          '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
        database:
          '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
        delete:
          '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
        disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
        "dollar-sign":
          '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
        "download-cloud":
          '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
        download:
          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
        droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
        "edit-2":
          '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
        "edit-3":
          '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
        edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
        "external-link":
          '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
        "eye-off":
          '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
        facebook:
          '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
        "fast-forward":
          '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
        feather:
          '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
        figma:
          '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
        "file-minus":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-plus":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
        "file-text":
          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
        file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
        film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
        filter:
          '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
        "folder-minus":
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
        "folder-plus":
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
        folder:
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
        framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
        frown:
          '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
        "git-branch":
          '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
        "git-commit":
          '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
        "git-merge":
          '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
        "git-pull-request":
          '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
        github:
          '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        gitlab:
          '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
        globe:
          '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
        "hard-drive":
          '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
        hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
        headphones:
          '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
        heart:
          '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        "help-circle":
          '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        hexagon:
          '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
        home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        image:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
        inbox:
          '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
        info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
        instagram:
          '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
        italic:
          '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
        key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
        layers:
          '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
        layout:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
        "life-buoy":
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
        "link-2":
          '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        linkedin:
          '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
        loader:
          '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
        lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
        "log-in":
          '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
        "log-out":
          '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
        mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        "map-pin":
          '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
        "maximize-2":
          '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        maximize:
          '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
        meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
        "message-circle":
          '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
        "message-square":
          '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        "mic-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
        "minimize-2":
          '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
        minimize:
          '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
        "minus-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
        "minus-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
        minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
        monitor:
          '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
        "more-horizontal":
          '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
        "more-vertical":
          '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
        "mouse-pointer":
          '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
        move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
        music:
          '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
        "navigation-2":
          '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
        navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
        octagon:
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
        package:
          '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
        paperclip:
          '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
        "pause-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
        pause:
          '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
        "pen-tool":
          '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
        percent:
          '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
        "phone-call":
          '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-forwarded":
          '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-incoming":
          '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-missed":
          '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "phone-off":
          '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
        "phone-outgoing":
          '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        phone:
          '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "pie-chart":
          '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
        "play-circle":
          '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
        play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
        "plus-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        "plus-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
        plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
        pocket:
          '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
        power:
          '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
        printer:
          '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
        radio:
          '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
        "refresh-ccw":
          '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
        "refresh-cw":
          '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        repeat:
          '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
        rewind:
          '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
        "rotate-ccw":
          '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
        "rotate-cw":
          '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
        rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
        save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
        scissors:
          '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
        search:
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
        send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
        server:
          '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
        settings:
          '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        "share-2":
          '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
        share:
          '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
        "shield-off":
          '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        "shopping-bag":
          '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
        "shopping-cart":
          '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
        shuffle:
          '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
        sidebar:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
        "skip-back":
          '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
        "skip-forward":
          '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
        slack:
          '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
        slash:
          '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
        sliders:
          '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
        smartphone:
          '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        smile:
          '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
        speaker:
          '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
        square:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        "stop-circle":
          '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
        sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
        sunrise:
          '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
        sunset:
          '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
        tablet:
          '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
        tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
        target:
          '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
        terminal:
          '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
        thermometer:
          '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
        "thumbs-down":
          '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
        "thumbs-up":
          '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
        "toggle-left":
          '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
        "toggle-right":
          '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
        tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
        "trash-2":
          '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
        trash:
          '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
        trello:
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
        "trending-down":
          '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
        "trending-up":
          '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
        triangle:
          '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
        truck:
          '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
        tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
        twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
        twitter:
          '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
        type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
        umbrella:
          '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
        underline:
          '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
        unlock:
          '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
        "upload-cloud":
          '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
        upload:
          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
        "user-check":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
        "user-minus":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-plus":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
        "user-x":
          '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
        users:
          '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        "video-off":
          '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
        video:
          '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
        voicemail:
          '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
        "volume-1":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-2":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
        "volume-x":
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
        volume:
          '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
        watch:
          '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
        "wifi-off":
          '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
        wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
        "x-circle":
          '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-octagon":
          '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        "x-square":
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
        x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
        youtube:
          '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
        "zap-off":
          '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        "zoom-in":
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
        "zoom-out":
          '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
      };
    },
    function (e) {
      e.exports = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      };
    },
    function (e, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
            }
            return e;
          },
        l = (function () {
          function e(e, n) {
            for (var i = 0; i < n.length; i++) {
              var t = n[i];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
            }
          }
          return function (n, i, t) {
            return i && e(n.prototype, i), t && e(n, t), n;
          };
        })(),
        r = a(i(22)),
        o = a(i(42));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function () {
        function e(n, i) {
          var l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.name = n),
            (this.contents = i),
            (this.tags = l),
            (this.attrs = t({}, o.default, { class: "feather feather-" + n }));
        }
        return (
          l(e, [
            {
              key: "toSvg",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  "<svg " +
                  (function (e) {
                    return Object.keys(e)
                      .map(function (n) {
                        return n + '="' + e[n] + '"';
                      })
                      .join(" ");
                  })(
                    t({}, this.attrs, e, {
                      class: (0, r.default)(this.attrs.class, e.class),
                    })
                  ) +
                  ">" +
                  this.contents +
                  "</svg>"
                );
              },
            },
            {
              key: "toString",
              value: function () {
                return this.contents;
              },
            },
          ]),
          e
        );
      })();
      n.default = c;
    },
    function (e, n, i) {
      "use strict";
      var t = o(i(12)),
        l = o(i(39)),
        r = o(i(38));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = { icons: t.default, toSvg: l.default, replace: r.default };
    },
    function (e, n, i) {
      e.exports = i(0);
    },
    function (e, n, i) {
      var t = i(2)("iterator"),
        l = !1;
      try {
        var r = 0,
          o = {
            next: function () {
              return { done: !!r++ };
            },
            return: function () {
              l = !0;
            },
          };
        (o[t] = function () {
          return this;
        }),
          Array.from(o, function () {
            throw 2;
          });
      } catch (e) {}
      e.exports = function (e, n) {
        if (!n && !l) return !1;
        var i = !1;
        try {
          var r = {};
          (r[t] = function () {
            return {
              next: function () {
                return { done: (i = !0) };
              },
            };
          }),
            e(r);
        } catch (e) {}
        return i;
      };
    },
    function (e, n, i) {
      var t = i(30),
        l = i(2)("toStringTag"),
        r =
          "Arguments" ==
          t(
            (function () {
              return arguments;
            })()
          );
      e.exports = function (e) {
        var n, i, o;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (i = (function (e, n) {
              try {
                return e[n];
              } catch (e) {}
            })((n = Object(e)), l))
          ? i
          : r
          ? t(n)
          : "Object" == (o = t(n)) && "function" == typeof n.callee
          ? "Arguments"
          : o;
      };
    },
    function (e, n, i) {
      var t = i(47),
        l = i(9),
        r = i(2)("iterator");
      e.exports = function (e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || l[t(e)];
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(18),
        l = i(7),
        r = i(10);
      e.exports = function (e, n, i) {
        var o = t(n);
        o in e ? l.f(e, o, r(0, i)) : (e[o] = i);
      };
    },
    function (e, n, i) {
      var t = i(2),
        l = i(9),
        r = t("iterator"),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (l.Array === e || o[r] === e);
      };
    },
    function (e, n, i) {
      var t = i(3);
      e.exports = function (e, n, i, l) {
        try {
          return l ? n(t(i)[0], i[1]) : n(i);
        } catch (n) {
          var r = e.return;
          throw (void 0 !== r && t(r.call(e)), n);
        }
      };
    },
    function (e, n) {
      e.exports = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    function (e, n, i) {
      var t = i(52);
      e.exports = function (e, n, i) {
        if ((t(e), void 0 === n)) return e;
        switch (i) {
          case 0:
            return function () {
              return e.call(n);
            };
          case 1:
            return function (i) {
              return e.call(n, i);
            };
          case 2:
            return function (i, t) {
              return e.call(n, i, t);
            };
          case 3:
            return function (i, t, l) {
              return e.call(n, i, t, l);
            };
        }
        return function () {
          return e.apply(n, arguments);
        };
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(53),
        l = i(24),
        r = i(51),
        o = i(50),
        a = i(27),
        c = i(49),
        p = i(48);
      e.exports = function (e) {
        var n,
          i,
          y,
          h,
          x = l(e),
          s = "function" == typeof this ? this : Array,
          u = arguments.length,
          d = u > 1 ? arguments[1] : void 0,
          f = void 0 !== d,
          g = 0,
          v = p(x);
        if (
          (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)),
          void 0 == v || (s == Array && o(v)))
        )
          for (i = new s((n = a(x.length))); n > g; g++)
            c(i, g, f ? d(x[g], g) : x[g]);
        else
          for (h = v.call(x), i = new s(); !(y = h.next()).done; g++)
            c(i, g, f ? r(h, d, [y.value, g], !0) : y.value);
        return (i.length = g), i;
      };
    },
    function (e, n, i) {
      var t = i(32),
        l = i(54);
      t(
        {
          target: "Array",
          stat: !0,
          forced: !i(46)(function (e) {
            Array.from(e);
          }),
        },
        { from: l }
      );
    },
    function (e, n, i) {
      var t = i(6),
        l = i(3);
      e.exports = function (e, n) {
        if ((l(e), !t(n) && null !== n))
          throw TypeError("Can't set " + String(n) + " as a prototype");
      };
    },
    function (e, n, i) {
      var t = i(56);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                n = !1,
                i = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(i, []),
                  (n = i instanceof Array);
              } catch (e) {}
              return function (i, l) {
                return t(i, l), n ? e.call(i, l) : (i.__proto__ = l), i;
              };
            })()
          : void 0);
    },
    function (e, n, i) {
      var t = i(0).document;
      e.exports = t && t.documentElement;
    },
    function (e, n, i) {
      var t = i(28),
        l = i(13);
      e.exports =
        Object.keys ||
        function (e) {
          return t(e, l);
        };
    },
    function (e, n, i) {
      var t = i(8),
        l = i(7),
        r = i(3),
        o = i(59);
      e.exports = t
        ? Object.defineProperties
        : function (e, n) {
            r(e);
            for (var i, t = o(n), a = t.length, c = 0; a > c; )
              l.f(e, (i = t[c++]), n[i]);
            return e;
          };
    },
    function (e, n, i) {
      var t = i(3),
        l = i(60),
        r = i(13),
        o = i(15),
        a = i(58),
        c = i(34),
        p = i(16)("IE_PROTO"),
        y = function () {},
        h = function () {
          var e,
            n = c("iframe"),
            i = r.length;
          for (
            n.style.display = "none",
              a.appendChild(n),
              n.src = String("javascript:"),
              (e = n.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              h = e.F;
            i--;

          )
            delete h.prototype[r[i]];
          return h();
        };
      (e.exports =
        Object.create ||
        function (e, n) {
          var i;
          return (
            null !== e
              ? ((y.prototype = t(e)),
                (i = new y()),
                (y.prototype = null),
                (i[p] = e))
              : (i = h()),
            void 0 === n ? i : l(i, n)
          );
        }),
        (o[p] = !0);
    },
    function (e, n, i) {
      var t = i(4);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !t(function () {
          return !String(Symbol());
        });
    },
    function (e, n, i) {
      var t = i(4);
      e.exports = !t(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    function (e, n, i) {
      "use strict";
      var t = i(26).IteratorPrototype,
        l = i(61),
        r = i(10),
        o = i(23),
        a = i(9),
        c = function () {
          return this;
        };
      e.exports = function (e, n, i) {
        var p = n + " Iterator";
        return (
          (e.prototype = l(t, { next: r(1, i) })),
          o(e, p, !1, !0),
          (a[p] = c),
          e
        );
      };
    },
    function (e, n, i) {
      var t = i(4),
        l = /#|\.prototype\./,
        r = function (e, n) {
          var i = a[o(e)];
          return i == p || (i != c && ("function" == typeof n ? t(n) : !!n));
        },
        o = (r.normalize = function (e) {
          return String(e).replace(l, ".").toLowerCase();
        }),
        a = (r.data = {}),
        c = (r.NATIVE = "N"),
        p = (r.POLYFILL = "P");
      e.exports = r;
    },
    function (e, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    function (e, n, i) {
      var t = i(21),
        l = Math.max,
        r = Math.min;
      e.exports = function (e, n) {
        var i = t(e);
        return i < 0 ? l(i + n, 0) : r(i, n);
      };
    },
    function (e, n, i) {
      var t = i(14),
        l = i(27),
        r = i(67);
      e.exports = function (e) {
        return function (n, i, o) {
          var a,
            c = t(n),
            p = l(c.length),
            y = r(o, p);
          if (e && i != i) {
            for (; p > y; ) if ((a = c[y++]) != a) return !0;
          } else
            for (; p > y; y++)
              if ((e || y in c) && c[y] === i) return e || y || 0;
          return !e && -1;
        };
      };
    },
    function (e, n, i) {
      var t = i(28),
        l = i(13).concat("length", "prototype");
      n.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return t(e, l);
        };
    },
    function (e, n, i) {
      var t = i(0),
        l = i(69),
        r = i(66),
        o = i(3),
        a = t.Reflect;
      e.exports =
        (a && a.ownKeys) ||
        function (e) {
          var n = l.f(o(e)),
            i = r.f;
          return i ? n.concat(i(e)) : n;
        };
    },
    function (e, n, i) {
      var t = i(1),
        l = i(70),
        r = i(31),
        o = i(7);
      e.exports = function (e, n) {
        for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
          var y = i[p];
          t(e, y) || a(e, y, c(n, y));
        }
      };
    },
    function (e, n, i) {
      var t = i(4),
        l = i(30),
        r = "".split;
      e.exports = t(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == l(e) ? r.call(e, "") : Object(e);
          }
        : Object;
    },
    function (e, n, i) {
      "use strict";
      var t = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        r = l && !t.call({ 1: 2 }, 1);
      n.f = r
        ? function (e) {
            var n = l(this, e);
            return !!n && n.enumerable;
          }
        : t;
    },
    function (e, n, i) {
      "use strict";
      var t = i(32),
        l = i(64),
        r = i(25),
        o = i(57),
        a = i(23),
        c = i(5),
        p = i(29),
        y = i(2),
        h = i(17),
        x = i(9),
        s = i(26),
        u = s.IteratorPrototype,
        d = s.BUGGY_SAFARI_ITERATORS,
        f = y("iterator"),
        g = function () {
          return this;
        };
      e.exports = function (e, n, i, y, s, v, m) {
        l(i, n, y);
        var w,
          M,
          b,
          z = function (e) {
            if (e === s && O) return O;
            if (!d && e in H) return H[e];
            switch (e) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new i(this, e);
                };
            }
            return function () {
              return new i(this);
            };
          },
          A = n + " Iterator",
          k = !1,
          H = e.prototype,
          V = H[f] || H["@@iterator"] || (s && H[s]),
          O = (!d && V) || z(s),
          j = ("Array" == n && H.entries) || V;
        if (
          (j &&
            ((w = r(j.call(new e()))),
            u !== Object.prototype &&
              w.next &&
              (h ||
                r(w) === u ||
                (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)),
              a(w, A, !0, !0),
              h && (x[A] = g))),
          "values" == s &&
            V &&
            "values" !== V.name &&
            ((k = !0),
            (O = function () {
              return V.call(this);
            })),
          (h && !m) || H[f] === O || c(H, f, O),
          (x[n] = O),
          s)
        )
          if (
            ((M = {
              values: z("values"),
              keys: v ? O : z("keys"),
              entries: z("entries"),
            }),
            m)
          )
            for (b in M) (!d && !k && b in H) || p(H, b, M[b]);
          else t({ target: n, proto: !0, forced: d || k }, M);
        return M;
      };
    },
    function (e, n) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (i = window);
      }
      e.exports = i;
    },
    function (e, n, i) {
      var t = i(0),
        l = i(36),
        r = t.WeakMap;
      e.exports = "function" == typeof r && /native code/.test(l.call(r));
    },
    function (e, n, i) {
      var t = i(21),
        l = i(20);
      e.exports = function (e, n, i) {
        var r,
          o,
          a = String(l(e)),
          c = t(n),
          p = a.length;
        return c < 0 || c >= p
          ? i
            ? ""
            : void 0
          : (r = a.charCodeAt(c)) < 55296 ||
            r > 56319 ||
            c + 1 === p ||
            (o = a.charCodeAt(c + 1)) < 56320 ||
            o > 57343
          ? i
            ? a.charAt(c)
            : r
          : i
          ? a.slice(c, c + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    function (e, n, i) {
      "use strict";
      var t = i(77),
        l = i(37),
        r = i(74),
        o = l.set,
        a = l.getterFor("String Iterator");
      r(
        String,
        "String",
        function (e) {
          o(this, { type: "String Iterator", string: String(e), index: 0 });
        },
        function () {
          var e,
            n = a(this),
            i = n.string,
            l = n.index;
          return l >= i.length
            ? { value: void 0, done: !0 }
            : ((e = t(i, l, !0)),
              (n.index += e.length),
              { value: e, done: !1 });
        }
      );
    },
    function (e, n, i) {
      i(78), i(55);
      var t = i(45);
      e.exports = t.Array.from;
    },
    function (e, n, i) {
      i(79), (e.exports = i(44));
    },
  ]);
});

/*===============================
	Lightbox JS
================================*/

/**!
 * lightgallery.js | 1.0.0 | October 5th 2016
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N;
 * @license GPLv3
 */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    (t =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (t.Lightgallery = e());
  }
})(function () {
  var e, t, s;
  return (function e(t, s, l) {
    function i(r, d) {
      if (!s[r]) {
        if (!t[r]) {
          var a = "function" == typeof require && require;
          if (!d && a) return a(r, !0);
          if (o) return o(r, !0);
          var n = new Error("Cannot find module '" + r + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        var u = (s[r] = { exports: {} });
        t[r][0].call(
          u.exports,
          function (e) {
            var s = t[r][1][e];
            return i(s ? s : e);
          },
          u,
          u.exports,
          e,
          t,
          s,
          l
        );
      }
      return s[r].exports;
    }
    for (
      var o = "function" == typeof require && require, r = 0;
      r < l.length;
      r++
    )
      i(l[r]);
    return i;
  })(
    {
      1: [
        function (t, s, l) {
          !(function (t, s) {
            if ("function" == typeof e && e.amd) e(["exports"], s);
            else if ("undefined" != typeof l) s(l);
            else {
              var i = { exports: {} };
              s(i.exports), (t.lgUtils = i.exports);
            }
          })(this, function (e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (window.getAttribute = function (e) {
                return window[e];
              }),
              (window.setAttribute = function (e, t) {
                window[e] = t;
              }),
              (document.getAttribute = function (e) {
                return document[e];
              }),
              (document.setAttribute = function (e, t) {
                document[e] = t;
              });
            var t = {
              wrap: function e(t, s) {
                if (t) {
                  var l = document.createElement("div");
                  (l.className = s),
                    t.parentNode.insertBefore(l, t),
                    t.parentNode.removeChild(t),
                    l.appendChild(t);
                }
              },
              addClass: function e(t, s) {
                t &&
                  (t.classList ? t.classList.add(s) : (t.className += " " + s));
              },
              removeClass: function e(t, s) {
                t &&
                  (t.classList
                    ? t.classList.remove(s)
                    : (t.className = t.className.replace(
                        new RegExp(
                          "(^|\\b)" + s.split(" ").join("|") + "(\\b|$)",
                          "gi"
                        ),
                        " "
                      )));
              },
              hasClass: function e(t, s) {
                return t.classList
                  ? t.classList.contains(s)
                  : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className);
              },
              setVendor: function e(t, s, l) {
                t &&
                  ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l),
                  (t.style["webkit" + s] = l),
                  (t.style["moz" + s] = l),
                  (t.style["ms" + s] = l),
                  (t.style["o" + s] = l));
              },
              trigger: function e(t, s) {
                var l =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                if (t) {
                  var i = new CustomEvent(s, { detail: l });
                  t.dispatchEvent(i);
                }
              },
              Listener: { uid: 0 },
              on: function e(s, l, i) {
                s &&
                  l.split(" ").forEach(function (e) {
                    var l = s.getAttribute("lg-event-uid") || "";
                    t.Listener.uid++,
                      (l += "&" + t.Listener.uid),
                      s.setAttribute("lg-event-uid", l),
                      (t.Listener[e + t.Listener.uid] = i),
                      s.addEventListener(e.split(".")[0], i, !1);
                  });
              },
              off: function e(s, l) {
                if (s) {
                  var i = s.getAttribute("lg-event-uid");
                  if (i) {
                    i = i.split("&");
                    for (var o = 0; o < i.length; o++)
                      if (i[o]) {
                        var r = l + i[o];
                        if ("." === r.substring(0, 1))
                          for (var d in t.Listener)
                            t.Listener.hasOwnProperty(d) &&
                              d.split(".").indexOf(r.split(".")[1]) > -1 &&
                              (s.removeEventListener(
                                d.split(".")[0],
                                t.Listener[d]
                              ),
                              s.setAttribute(
                                "lg-event-uid",
                                s
                                  .getAttribute("lg-event-uid")
                                  .replace("&" + i[o], "")
                              ),
                              delete t.Listener[d]);
                        else
                          s.removeEventListener(r.split(".")[0], t.Listener[r]),
                            s.setAttribute(
                              "lg-event-uid",
                              s
                                .getAttribute("lg-event-uid")
                                .replace("&" + i[o], "")
                            ),
                            delete t.Listener[r];
                      }
                  }
                }
              },
              param: function e(t) {
                return Object.keys(t)
                  .map(function (e) {
                    return (
                      encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    );
                  })
                  .join("&");
              },
            };
            e.default = t;
          });
        },
        {},
      ],
      2: [
        function (t, s, l) {
          !(function (s, i) {
            if ("function" == typeof e && e.amd) e(["./lg-utils"], i);
            else if ("undefined" != typeof l) i(t("./lg-utils"));
            else {
              var o = { exports: {} };
              i(s.lgUtils), (s.lightgallery = o.exports);
            }
          })(this, function (e) {
            "use strict";
            function t(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function s(e, t) {
              if (
                ((this.el = e),
                (this.s = i({}, o, t)),
                this.s.dynamic &&
                  "undefined" !== this.s.dynamicEl &&
                  this.s.dynamicEl.constructor === Array &&
                  !this.s.dynamicEl.length)
              )
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
              return (
                (this.modules = {}),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.hideBartimeout = !1),
                (this.isTouch = "ontouchstart" in document.documentElement),
                this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                (this.items = []),
                this.s.dynamic
                  ? (this.items = this.s.dynamicEl)
                  : "this" === this.s.selector
                  ? this.items.push(this.el)
                  : "" !== this.s.selector
                  ? this.s.selectWithin
                    ? (this.items = document
                        .querySelector(this.s.selectWithin)
                        .querySelectorAll(this.s.selector))
                    : (this.items = this.el.querySelectorAll(this.s.selector))
                  : (this.items = this.el.children),
                (this.___slide = ""),
                (this.outer = ""),
                this.init(),
                this
              );
            }
            var l = t(e),
              i =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var l in s)
                      Object.prototype.hasOwnProperty.call(s, l) &&
                        (e[l] = s[l]);
                  }
                  return e;
                };
            !(function () {
              function e(e, t) {
                t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                var s = document.createEvent("CustomEvent");
                return (
                  s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s
                );
              }
              return (
                "function" != typeof window.CustomEvent &&
                ((e.prototype = window.Event.prototype),
                void (window.CustomEvent = e))
              );
            })(),
              (window.utils = l.default),
              (window.lgData = { uid: 0 }),
              (window.lgModules = {});
            var o = {
              mode: "lg-slide",
              cssEasing: "ease",
              easing: "linear",
              speed: 600,
              height: "100%",
              width: "100%",
              addClass: "",
              startClass: "lg-start-zoom",
              backdropDuration: 150,
              hideBarsDelay: 6e3,
              useLeft: !1,
              closable: !0,
              loop: !0,
              escKey: !0,
              keyPress: !0,
              controls: !0,
              slideEndAnimatoin: !0,
              hideControlOnEnd: !1,
              mousewheel: !1,
              getCaptionFromTitleOrAlt: !0,
              appendSubHtmlTo: ".lg-sub-html",
              subHtmlSelectorRelative: !1,
              preload: 1,
              showAfterLoad: !0,
              selector: "",
              selectWithin: "",
              nextHtml: "",
              prevHtml: "",
              index: !1,
              iframeMaxWidth: "100%",
              download: !0,
              counter: !0,
              appendCounterTo: ".lg-toolbar",
              swipeThreshold: 50,
              enableSwipe: !0,
              enableDrag: !0,
              dynamic: !1,
              dynamicEl: [],
              galleryId: 1,
            };
            (s.prototype.init = function () {
              var e = this;
              e.s.preload > e.items.length && (e.s.preload = e.items.length);
              var t = window.location.hash;
              if (
                (t.indexOf("lg=" + this.s.galleryId) > 0 &&
                  ((e.index = parseInt(t.split("&slide=")[1], 10)),
                  l.default.addClass(document.body, "lg-from-hash"),
                  l.default.hasClass(document.body, "lg-on") ||
                    (l.default.addClass(document.body, "lg-on"),
                    setTimeout(function () {
                      e.build(e.index);
                    }))),
                e.s.dynamic)
              )
                l.default.trigger(this.el, "onBeforeOpen"),
                  (e.index = e.s.index || 0),
                  l.default.hasClass(document.body, "lg-on") ||
                    (l.default.addClass(document.body, "lg-on"),
                    setTimeout(function () {
                      e.build(e.index);
                    }));
              else
                for (var s = 0; s < e.items.length; s++)
                  !(function (t) {
                    l.default.on(e.items[t], "click.lgcustom", function (s) {
                      s.preventDefault(),
                        l.default.trigger(e.el, "onBeforeOpen"),
                        (e.index = e.s.index || t),
                        l.default.hasClass(document.body, "lg-on") ||
                          (e.build(e.index),
                          l.default.addClass(document.body, "lg-on"));
                    });
                  })(s);
            }),
              (s.prototype.build = function (e) {
                var t = this;
                t.structure();
                for (var s in window.lgModules)
                  t.modules[s] = new window.lgModules[s](t.el);
                t.slide(e, !1, !1),
                  t.s.keyPress && t.keyPress(),
                  t.items.length > 1 &&
                    (t.arrow(),
                    setTimeout(function () {
                      t.enableDrag(), t.enableSwipe();
                    }, 50),
                    t.s.mousewheel && t.mousewheel()),
                  t.counter(),
                  t.closeGallery(),
                  l.default.trigger(t.el, "onAfterOpen"),
                  l.default.on(
                    t.outer,
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      l.default.removeClass(t.outer, "lg-hide-items"),
                        clearTimeout(t.hideBartimeout),
                        (t.hideBartimeout = setTimeout(function () {
                          l.default.addClass(t.outer, "lg-hide-items");
                        }, t.s.hideBarsDelay));
                    }
                  );
              }),
              (s.prototype.structure = function () {
                var e = "",
                  t = "",
                  s = 0,
                  i = "",
                  o,
                  r = this;
                for (
                  document.body.insertAdjacentHTML(
                    "beforeend",
                    '<div class="lg-backdrop"></div>'
                  ),
                    l.default.setVendor(
                      document.querySelector(".lg-backdrop"),
                      "TransitionDuration",
                      this.s.backdropDuration + "ms"
                    ),
                    s = 0;
                  s < this.items.length;
                  s++
                )
                  e += '<div class="lg-item"></div>';
                if (
                  (this.s.controls &&
                    this.items.length > 1 &&
                    (t =
                      '<div class="lg-actions"><div class="lg-prev lg-icon">' +
                      this.s.prevHtml +
                      '</div><div class="lg-next lg-icon">' +
                      this.s.nextHtml +
                      "</div></div>"),
                  ".lg-sub-html" === this.s.appendSubHtmlTo &&
                    (i = '<div class="lg-sub-html"></div>'),
                  (o =
                    '<div class="lg-outer ' +
                    this.s.addClass +
                    " " +
                    this.s.startClass +
                    '"><div class="lg" style="width:' +
                    this.s.width +
                    "; height:" +
                    this.s.height +
                    '"><div class="lg-inner">' +
                    e +
                    '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
                    t +
                    i +
                    "</div></div>"),
                  document.body.insertAdjacentHTML("beforeend", o),
                  (this.outer = document.querySelector(".lg-outer")),
                  (this.___slide = this.outer.querySelectorAll(".lg-item")),
                  this.s.useLeft
                    ? (l.default.addClass(this.outer, "lg-use-left"),
                      (this.s.mode = "lg-slide"))
                    : l.default.addClass(this.outer, "lg-use-css3"),
                  r.setTop(),
                  l.default.on(
                    window,
                    "resize.lg orientationchange.lg",
                    function () {
                      setTimeout(function () {
                        r.setTop();
                      }, 100);
                    }
                  ),
                  l.default.addClass(this.___slide[this.index], "lg-current"),
                  this.doCss()
                    ? l.default.addClass(this.outer, "lg-css3")
                    : (l.default.addClass(this.outer, "lg-css"),
                      (this.s.speed = 0)),
                  l.default.addClass(this.outer, this.s.mode),
                  this.s.enableDrag &&
                    this.items.length > 1 &&
                    l.default.addClass(this.outer, "lg-grab"),
                  this.s.showAfterLoad &&
                    l.default.addClass(this.outer, "lg-show-after-load"),
                  this.doCss())
                ) {
                  var d = this.outer.querySelector(".lg-inner");
                  l.default.setVendor(
                    d,
                    "TransitionTimingFunction",
                    this.s.cssEasing
                  ),
                    l.default.setVendor(
                      d,
                      "TransitionDuration",
                      this.s.speed + "ms"
                    );
                }
                setTimeout(function () {
                  l.default.addClass(
                    document.querySelector(".lg-backdrop"),
                    "in"
                  );
                }),
                  setTimeout(function () {
                    l.default.addClass(r.outer, "lg-visible");
                  }, this.s.backdropDuration),
                  this.s.download &&
                    this.outer
                      .querySelector(".lg-toolbar")
                      .insertAdjacentHTML(
                        "beforeend",
                        '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
                      ),
                  (this.prevScrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop);
              }),
              (s.prototype.setTop = function () {
                if ("100%" !== this.s.height) {
                  var e = window.innerHeight,
                    t = (e - parseInt(this.s.height, 10)) / 2,
                    s = this.outer.querySelector(".lg");
                  e >= parseInt(this.s.height, 10)
                    ? (s.style.top = t + "px")
                    : (s.style.top = "0px");
                }
              }),
              (s.prototype.doCss = function () {
                var e = function e() {
                  var t = [
                      "transition",
                      "MozTransition",
                      "WebkitTransition",
                      "OTransition",
                      "msTransition",
                      "KhtmlTransition",
                    ],
                    s = document.documentElement,
                    l = 0;
                  for (l = 0; l < t.length; l++) if (t[l] in s.style) return !0;
                };
                return !!e();
              }),
              (s.prototype.isVideo = function (e, t) {
                if (!e)
                  throw new Error(
                    "Make sure that slide " + t + " has an image/video src"
                  );
                var s;
                if (
                  ((s = this.s.dynamic
                    ? this.s.dynamicEl[t].html
                    : this.items[t].getAttribute("data-html")),
                  !e && s)
                )
                  return { html5: !0 };
                var l = e.match(
                    /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                  ),
                  i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                  o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                  r = e.match(
                    /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
                  );
                return l
                  ? { youtube: l }
                  : i
                  ? { vimeo: i }
                  : o
                  ? { dailymotion: o }
                  : r
                  ? { vk: r }
                  : void 0;
              }),
              (s.prototype.counter = function () {
                this.s.counter &&
                  this.outer
                    .querySelector(this.s.appendCounterTo)
                    .insertAdjacentHTML(
                      "beforeend",
                      '<div id="lg-counter"><span id="lg-counter-current">' +
                        (parseInt(this.index, 10) + 1) +
                        '</span> / <span id="lg-counter-all">' +
                        this.items.length +
                        "</span></div>"
                    );
              }),
              (s.prototype.addHtml = function (e) {
                var t = null,
                  s;
                if (
                  (this.s.dynamic
                    ? (t = this.s.dynamicEl[e].subHtml)
                    : ((s = this.items[e]),
                      (t = s.getAttribute("data-sub-html")),
                      this.s.getCaptionFromTitleOrAlt &&
                        !t &&
                        ((t = s.getAttribute("title")),
                        t &&
                          s.querySelector("img") &&
                          (t = s.querySelector("img").getAttribute("alt")))),
                  "undefined" != typeof t && null !== t)
                ) {
                  var i = t.substring(0, 1);
                  ("." !== i && "#" !== i) ||
                    (t =
                      this.s.subHtmlSelectorRelative && !this.s.dynamic
                        ? s.querySelector(t).innerHTML
                        : document.querySelector(t).innerHTML);
                } else t = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo
                  ? (this.outer.querySelector(
                      this.s.appendSubHtmlTo
                    ).innerHTML = t)
                  : this.___slide[e].insertAdjacentHTML("beforeend", t),
                  "undefined" != typeof t &&
                    null !== t &&
                    ("" === t
                      ? l.default.addClass(
                          this.outer.querySelector(this.s.appendSubHtmlTo),
                          "lg-empty-html"
                        )
                      : l.default.removeClass(
                          this.outer.querySelector(this.s.appendSubHtmlTo),
                          "lg-empty-html"
                        )),
                  l.default.trigger(this.el, "onAfterAppendSubHtml", {
                    index: e,
                  });
              }),
              (s.prototype.preload = function (e) {
                var t = 1,
                  s = 1;
                for (
                  t = 1;
                  t <= this.s.preload && !(t >= this.items.length - e);
                  t++
                )
                  this.loadContent(e + t, !1, 0);
                for (s = 1; s <= this.s.preload && !(e - s < 0); s++)
                  this.loadContent(e - s, !1, 0);
              }),
              (s.prototype.loadContent = function (e, t, s) {
                var i = this,
                  o = !1,
                  r,
                  d,
                  a,
                  n,
                  u,
                  c,
                  g = function e(t) {
                    for (var s = [], l = [], i = 0; i < t.length; i++) {
                      var o = t[i].split(" ");
                      "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1]);
                    }
                    for (var r = window.innerWidth, a = 0; a < s.length; a++)
                      if (parseInt(s[a], 10) > r) {
                        d = l[a];
                        break;
                      }
                  };
                if (i.s.dynamic) {
                  if (
                    (i.s.dynamicEl[e].poster &&
                      ((o = !0), (a = i.s.dynamicEl[e].poster)),
                    (c = i.s.dynamicEl[e].html),
                    (d = i.s.dynamicEl[e].src),
                    i.s.dynamicEl[e].responsive)
                  ) {
                    var f = i.s.dynamicEl[e].responsive.split(",");
                    g(f);
                  }
                  (n = i.s.dynamicEl[e].srcset), (u = i.s.dynamicEl[e].sizes);
                } else {
                  if (
                    (i.items[e].getAttribute("data-poster") &&
                      ((o = !0), (a = i.items[e].getAttribute("data-poster"))),
                    (c = i.items[e].getAttribute("data-html")),
                    (d =
                      i.items[e].getAttribute("href") ||
                      i.items[e].getAttribute("data-src")),
                    i.items[e].getAttribute("data-responsive"))
                  ) {
                    var h = i.items[e]
                      .getAttribute("data-responsive")
                      .split(",");
                    g(h);
                  }
                  (n = i.items[e].getAttribute("data-srcset")),
                    (u = i.items[e].getAttribute("data-sizes"));
                }
                var m = !1;
                i.s.dynamic
                  ? i.s.dynamicEl[e].iframe && (m = !0)
                  : "true" === i.items[e].getAttribute("data-iframe") &&
                    (m = !0);
                var p = i.isVideo(d, e);
                if (!l.default.hasClass(i.___slide[e], "lg-loaded")) {
                  if (m)
                    i.___slide[e].insertAdjacentHTML(
                      "afterbegin",
                      '<div class="lg-video-cont" style="max-width:' +
                        i.s.iframeMaxWidth +
                        '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                        d +
                        '"  allowfullscreen="true"></iframe></div></div>'
                    );
                  else if (o) {
                    var v = "";
                    (v =
                      p && p.youtube
                        ? "lg-has-youtube"
                        : p && p.vimeo
                        ? "lg-has-vimeo"
                        : "lg-has-html5"),
                      i.___slide[e].insertAdjacentHTML(
                        "beforeend",
                        '<div class="lg-video-cont ' +
                          v +
                          ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                          a +
                          '" /></div></div>'
                      );
                  } else
                    p
                      ? (i.___slide[e].insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                        ),
                        l.default.trigger(i.el, "hasVideo", {
                          index: e,
                          src: d,
                          html: c,
                        }))
                      : i.___slide[e].insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                            d +
                            '" /></div>'
                        );
                  if (
                    (l.default.trigger(i.el, "onAferAppendSlide", { index: e }),
                    (r = i.___slide[e].querySelector(".lg-object")),
                    u && r.setAttribute("sizes", u),
                    n)
                  ) {
                    r.setAttribute("srcset", n);
                    try {
                      picturefill({ elements: [r[0]] });
                    } catch (e) {
                      console.error(
                        "Make sure you have included Picturefill version 2"
                      );
                    }
                  }
                  ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e),
                    l.default.addClass(i.___slide[e], "lg-loaded");
                }
                l.default.on(
                  i.___slide[e].querySelector(".lg-object"),
                  "load.lg error.lg",
                  function () {
                    var t = 0;
                    s &&
                      !l.default.hasClass(document.body, "lg-from-hash") &&
                      (t = s),
                      setTimeout(function () {
                        l.default.addClass(i.___slide[e], "lg-complete"),
                          l.default.trigger(i.el, "onSlideItemLoad", {
                            index: e,
                            delay: s || 0,
                          });
                      }, t);
                  }
                ),
                  p &&
                    p.html5 &&
                    !o &&
                    l.default.addClass(i.___slide[e], "lg-complete"),
                  t === !0 &&
                    (l.default.hasClass(i.___slide[e], "lg-complete")
                      ? i.preload(e)
                      : l.default.on(
                          i.___slide[e].querySelector(".lg-object"),
                          "load.lg error.lg",
                          function () {
                            i.preload(e);
                          }
                        ));
              }),
              (s.prototype.slide = function (e, t, s) {
                for (var i = 0, o = 0; o < this.___slide.length; o++)
                  if (l.default.hasClass(this.___slide[o], "lg-current")) {
                    i = o;
                    break;
                  }
                var r = this;
                if (!r.lGalleryOn || i !== e) {
                  var d = this.___slide.length,
                    a = r.lGalleryOn ? this.s.speed : 0,
                    n = !1,
                    u = !1;
                  if (!r.lgBusy) {
                    if (this.s.download) {
                      var c;
                      (c = r.s.dynamic
                        ? r.s.dynamicEl[e].downloadUrl !== !1 &&
                          (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src)
                        : "false" !==
                            r.items[e].getAttribute("data-download-url") &&
                          (r.items[e].getAttribute("data-download-url") ||
                            r.items[e].getAttribute("href") ||
                            r.items[e].getAttribute("data-src"))),
                        c
                          ? (document
                              .getElementById("lg-download")
                              .setAttribute("href", c),
                            l.default.removeClass(r.outer, "lg-hide-download"))
                          : l.default.addClass(r.outer, "lg-hide-download");
                    }
                    if (
                      (l.default.trigger(r.el, "onBeforeSlide", {
                        prevIndex: i,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      }),
                      (r.lgBusy = !0),
                      clearTimeout(r.hideBartimeout),
                      ".lg-sub-html" === this.s.appendSubHtmlTo &&
                        setTimeout(function () {
                          r.addHtml(e);
                        }, a),
                      this.arrowDisable(e),
                      t)
                    ) {
                      var g = e - 1,
                        f = e + 1;
                      0 === e && i === d - 1
                        ? ((f = 0), (g = d - 1))
                        : e === d - 1 && 0 === i && ((f = 0), (g = d - 1)),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-prev-slide"),
                          "lg-prev-slide"
                        ),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-current"),
                          "lg-current"
                        ),
                        l.default.removeClass(
                          r.outer.querySelector(".lg-next-slide"),
                          "lg-next-slide"
                        ),
                        l.default.addClass(r.___slide[g], "lg-prev-slide"),
                        l.default.addClass(r.___slide[f], "lg-next-slide"),
                        l.default.addClass(r.___slide[e], "lg-current");
                    } else {
                      l.default.addClass(r.outer, "lg-no-trans");
                      for (var h = 0; h < this.___slide.length; h++)
                        l.default.removeClass(
                          this.___slide[h],
                          "lg-prev-slide"
                        ),
                          l.default.removeClass(
                            this.___slide[h],
                            "lg-next-slide"
                          );
                      e < i
                        ? ((u = !0),
                          0 !== e || i !== d - 1 || s || ((u = !1), (n = !0)))
                        : e > i &&
                          ((n = !0),
                          e !== d - 1 || 0 !== i || s || ((u = !0), (n = !1))),
                        u
                          ? (l.default.addClass(
                              this.___slide[e],
                              "lg-prev-slide"
                            ),
                            l.default.addClass(
                              this.___slide[i],
                              "lg-next-slide"
                            ))
                          : n &&
                            (l.default.addClass(
                              this.___slide[e],
                              "lg-next-slide"
                            ),
                            l.default.addClass(
                              this.___slide[i],
                              "lg-prev-slide"
                            )),
                        setTimeout(function () {
                          l.default.removeClass(
                            r.outer.querySelector(".lg-current"),
                            "lg-current"
                          ),
                            l.default.addClass(r.___slide[e], "lg-current"),
                            l.default.removeClass(r.outer, "lg-no-trans");
                        }, 50);
                    }
                    r.lGalleryOn
                      ? (setTimeout(function () {
                          r.loadContent(e, !0, 0);
                        }, this.s.speed + 50),
                        setTimeout(function () {
                          (r.lgBusy = !1),
                            l.default.trigger(r.el, "onAfterSlide", {
                              prevIndex: i,
                              index: e,
                              fromTouch: t,
                              fromThumb: s,
                            });
                        }, this.s.speed))
                      : (r.loadContent(e, !0, r.s.backdropDuration),
                        (r.lgBusy = !1),
                        l.default.trigger(r.el, "onAfterSlide", {
                          prevIndex: i,
                          index: e,
                          fromTouch: t,
                          fromThumb: s,
                        })),
                      (r.lGalleryOn = !0),
                      this.s.counter &&
                        document.getElementById("lg-counter-current") &&
                        (document.getElementById(
                          "lg-counter-current"
                        ).innerHTML = e + 1);
                  }
                }
              }),
              (s.prototype.goToNextSlide = function (e) {
                var t = this;
                t.lgBusy ||
                  (t.index + 1 < t.___slide.length
                    ? (t.index++,
                      l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.loop
                    ? ((t.index = 0),
                      l.default.trigger(t.el, "onBeforeNextSlide", {
                        index: t.index,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.slideEndAnimatoin &&
                      (l.default.addClass(t.outer, "lg-right-end"),
                      setTimeout(function () {
                        l.default.removeClass(t.outer, "lg-right-end");
                      }, 400)));
              }),
              (s.prototype.goToPrevSlide = function (e) {
                var t = this;
                t.lgBusy ||
                  (t.index > 0
                    ? (t.index--,
                      l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.loop
                    ? ((t.index = t.items.length - 1),
                      l.default.trigger(t.el, "onBeforePrevSlide", {
                        index: t.index,
                        fromTouch: e,
                      }),
                      t.slide(t.index, e, !1))
                    : t.s.slideEndAnimatoin &&
                      (l.default.addClass(t.outer, "lg-left-end"),
                      setTimeout(function () {
                        l.default.removeClass(t.outer, "lg-left-end");
                      }, 400)));
              }),
              (s.prototype.keyPress = function () {
                var e = this;
                this.items.length > 1 &&
                  l.default.on(window, "keyup.lg", function (t) {
                    e.items.length > 1 &&
                      (37 === t.keyCode &&
                        (t.preventDefault(), e.goToPrevSlide()),
                      39 === t.keyCode &&
                        (t.preventDefault(), e.goToNextSlide()));
                  }),
                  l.default.on(window, "keydown.lg", function (t) {
                    e.s.escKey === !0 &&
                      27 === t.keyCode &&
                      (t.preventDefault(),
                      l.default.hasClass(e.outer, "lg-thumb-open")
                        ? l.default.removeClass(e.outer, "lg-thumb-open")
                        : e.destroy());
                  });
              }),
              (s.prototype.arrow = function () {
                var e = this;
                l.default.on(
                  this.outer.querySelector(".lg-prev"),
                  "click.lg",
                  function () {
                    e.goToPrevSlide();
                  }
                ),
                  l.default.on(
                    this.outer.querySelector(".lg-next"),
                    "click.lg",
                    function () {
                      e.goToNextSlide();
                    }
                  );
              }),
              (s.prototype.arrowDisable = function (e) {
                if (!this.s.loop && this.s.hideControlOnEnd) {
                  var t = this.outer.querySelector(".lg-next"),
                    s = this.outer.querySelector(".lg-prev");
                  e + 1 < this.___slide.length
                    ? (t.removeAttribute("disabled"),
                      l.default.removeClass(t, "disabled"))
                    : (t.setAttribute("disabled", "disabled"),
                      l.default.addClass(t, "disabled")),
                    e > 0
                      ? (s.removeAttribute("disabled"),
                        l.default.removeClass(s, "disabled"))
                      : (t.setAttribute("disabled", "disabled"),
                        l.default.addClass(t, "disabled"));
                }
              }),
              (s.prototype.setTranslate = function (e, t, s) {
                this.s.useLeft
                  ? (e.style.left = t)
                  : l.default.setVendor(
                      e,
                      "Transform",
                      "translate3d(" + t + "px, " + s + "px, 0px)"
                    );
              }),
              (s.prototype.touchMove = function (e, t) {
                var s = t - e;
                Math.abs(s) > 15 &&
                  (l.default.addClass(this.outer, "lg-dragging"),
                  this.setTranslate(this.___slide[this.index], s, 0),
                  this.setTranslate(
                    document.querySelector(".lg-prev-slide"),
                    -this.___slide[this.index].clientWidth + s,
                    0
                  ),
                  this.setTranslate(
                    document.querySelector(".lg-next-slide"),
                    this.___slide[this.index].clientWidth + s,
                    0
                  ));
              }),
              (s.prototype.touchEnd = function (e) {
                var t = this;
                "lg-slide" !== t.s.mode &&
                  l.default.addClass(t.outer, "lg-slide");
                for (var s = 0; s < this.___slide.length; s++)
                  l.default.hasClass(this.___slide[s], "lg-current") ||
                    l.default.hasClass(this.___slide[s], "lg-prev-slide") ||
                    l.default.hasClass(this.___slide[s], "lg-next-slide") ||
                    (this.___slide[s].style.opacity = "0");
                setTimeout(function () {
                  l.default.removeClass(t.outer, "lg-dragging"),
                    e < 0 && Math.abs(e) > t.s.swipeThreshold
                      ? t.goToNextSlide(!0)
                      : e > 0 && Math.abs(e) > t.s.swipeThreshold
                      ? t.goToPrevSlide(!0)
                      : Math.abs(e) < 5 &&
                        l.default.trigger(t.el, "onSlideClick");
                  for (var s = 0; s < t.___slide.length; s++)
                    t.___slide[s].removeAttribute("style");
                }),
                  setTimeout(function () {
                    l.default.hasClass(t.outer, "lg-dragging") ||
                      "lg-slide" === t.s.mode ||
                      l.default.removeClass(t.outer, "lg-slide");
                  }, t.s.speed + 100);
              }),
              (s.prototype.enableSwipe = function () {
                var e = this,
                  t = 0,
                  s = 0,
                  i = !1;
                if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                  for (var o = 0; o < e.___slide.length; o++)
                    l.default.on(e.___slide[o], "touchstart.lg", function (s) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        e.lgBusy ||
                        (s.preventDefault(),
                        e.manageSwipeClass(),
                        (t = s.targetTouches[0].pageX));
                    });
                  for (var r = 0; r < e.___slide.length; r++)
                    l.default.on(e.___slide[r], "touchmove.lg", function (o) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        (o.preventDefault(),
                        (s = o.targetTouches[0].pageX),
                        e.touchMove(t, s),
                        (i = !0));
                    });
                  for (var d = 0; d < e.___slide.length; d++)
                    l.default.on(e.___slide[d], "touchend.lg", function () {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        (i
                          ? ((i = !1), e.touchEnd(s - t))
                          : l.default.trigger(e.el, "onSlideClick"));
                    });
                }
              }),
              (s.prototype.enableDrag = function () {
                var e = this,
                  t = 0,
                  s = 0,
                  i = !1,
                  o = !1;
                if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                  for (var r = 0; r < e.___slide.length; r++)
                    l.default.on(e.___slide[r], "mousedown.lg", function (s) {
                      l.default.hasClass(e.outer, "lg-zoomed") ||
                        ((l.default.hasClass(s.target, "lg-object") ||
                          l.default.hasClass(s.target, "lg-video-play")) &&
                          (s.preventDefault(),
                          e.lgBusy ||
                            (e.manageSwipeClass(),
                            (t = s.pageX),
                            (i = !0),
                            (e.outer.scrollLeft += 1),
                            (e.outer.scrollLeft -= 1),
                            l.default.removeClass(e.outer, "lg-grab"),
                            l.default.addClass(e.outer, "lg-grabbing"),
                            l.default.trigger(e.el, "onDragstart"))));
                    });
                  l.default.on(window, "mousemove.lg", function (r) {
                    i &&
                      ((o = !0),
                      (s = r.pageX),
                      e.touchMove(t, s),
                      l.default.trigger(e.el, "onDragmove"));
                  }),
                    l.default.on(window, "mouseup.lg", function (r) {
                      o
                        ? ((o = !1),
                          e.touchEnd(s - t),
                          l.default.trigger(e.el, "onDragend"))
                        : (l.default.hasClass(r.target, "lg-object") ||
                            l.default.hasClass(r.target, "lg-video-play")) &&
                          l.default.trigger(e.el, "onSlideClick"),
                        i &&
                          ((i = !1),
                          l.default.removeClass(e.outer, "lg-grabbing"),
                          l.default.addClass(e.outer, "lg-grab"));
                    });
                }
              }),
              (s.prototype.manageSwipeClass = function () {
                var e = this.index + 1,
                  t = this.index - 1,
                  s = this.___slide.length;
                this.s.loop &&
                  (0 === this.index
                    ? (t = s - 1)
                    : this.index === s - 1 && (e = 0));
                for (var i = 0; i < this.___slide.length; i++)
                  l.default.removeClass(this.___slide[i], "lg-next-slide"),
                    l.default.removeClass(this.___slide[i], "lg-prev-slide");
                t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"),
                  l.default.addClass(this.___slide[e], "lg-next-slide");
              }),
              (s.prototype.mousewheel = function () {
                var e = this;
                l.default.on(e.outer, "mousewheel.lg", function (t) {
                  t.deltaY &&
                    (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
                    t.preventDefault());
                });
              }),
              (s.prototype.closeGallery = function () {
                var e = this,
                  t = !1;
                l.default.on(
                  this.outer.querySelector(".lg-close"),
                  "click.lg",
                  function () {
                    e.destroy();
                  }
                ),
                  e.s.closable &&
                    (l.default.on(e.outer, "mousedown.lg", function (e) {
                      t = !!(
                        l.default.hasClass(e.target, "lg-outer") ||
                        l.default.hasClass(e.target, "lg-item") ||
                        l.default.hasClass(e.target, "lg-img-wrap")
                      );
                    }),
                    l.default.on(e.outer, "mouseup.lg", function (s) {
                      (l.default.hasClass(s.target, "lg-outer") ||
                        l.default.hasClass(s.target, "lg-item") ||
                        (l.default.hasClass(s.target, "lg-img-wrap") && t)) &&
                        (l.default.hasClass(e.outer, "lg-dragging") ||
                          e.destroy());
                    }));
              }),
              (s.prototype.destroy = function (e) {
                var t = this;
                if (
                  (e || l.default.trigger(t.el, "onBeforeClose"),
                  (document.body.scrollTop = t.prevScrollTop),
                  (document.documentElement.scrollTop = t.prevScrollTop),
                  e)
                ) {
                  if (!t.s.dynamic)
                    for (var s = 0; s < this.items.length; s++)
                      l.default.off(this.items[s], ".lg"),
                        l.default.off(this.items[s], ".lgcustom");
                  var i = t.el.getAttribute("lg-uid");
                  delete window.lgData[i], t.el.removeAttribute("lg-uid");
                }
                l.default.off(this.el, ".lgtm");
                for (var o in window.lgModules)
                  t.modules[o] && t.modules[o].destroy();
                (this.lGalleryOn = !1),
                  clearTimeout(t.hideBartimeout),
                  (this.hideBartimeout = !1),
                  l.default.off(window, ".lg"),
                  l.default.removeClass(document.body, "lg-on"),
                  l.default.removeClass(document.body, "lg-from-hash"),
                  t.outer && l.default.removeClass(t.outer, "lg-visible"),
                  l.default.removeClass(
                    document.querySelector(".lg-backdrop"),
                    "in"
                  ),
                  setTimeout(function () {
                    try {
                      t.outer && t.outer.parentNode.removeChild(t.outer),
                        document.querySelector(".lg-backdrop") &&
                          document
                            .querySelector(".lg-backdrop")
                            .parentNode.removeChild(
                              document.querySelector(".lg-backdrop")
                            ),
                        e || l.default.trigger(t.el, "onCloseAfter");
                    } catch (e) {}
                  }, t.s.backdropDuration + 50);
              }),
              (window.lightGallery = function (e, t) {
                if (e)
                  try {
                    if (e.getAttribute("lg-uid"))
                      try {
                        window.lgData[e.getAttribute("lg-uid")].init();
                      } catch (e) {
                        console.error(
                          "lightGallery has not initiated properly"
                        );
                      }
                    else {
                      var l = "lg" + window.lgData.uid++;
                      (window.lgData[l] = new s(e, t)),
                        e.setAttribute("lg-uid", l);
                    }
                  } catch (e) {
                    console.error("lightGallery has not initiated properly");
                  }
              });
          });
        },
        { "./lg-utils": 1 },
      ],
    },
    {},
    [2]
  )(2);
});
