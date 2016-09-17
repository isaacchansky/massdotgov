(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesSiteSettingsJs = require("./modules/siteSettings.js");

var _modulesSiteSettingsJs2 = _interopRequireDefault(_modulesSiteSettingsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

var _modulesZoomControlsJs = require("./modules/zoomControls.js");

var _modulesZoomControlsJs2 = _interopRequireDefault(_modulesZoomControlsJs);

},{"./modules/back2top.js":3,"./modules/clickable.js":4,"./modules/dropdown.js":5,"./modules/keywordSearch.js":6,"./modules/mainNav.js":7,"./modules/mobileNav.js":8,"./modules/scrollAnchors.js":9,"./modules/siteSettings.js":10,"./modules/utilNav.js":11,"./modules/zoomControls.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        previousKey = null,
        breakpoint = 780;

    $parent.find('.js-main-nav-toggle').on('keydown mouseenter', function (e) {
      if (windowWidth <= breakpoint) {
        return;
      }

      var $link = $(this),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass);

      if (e.keyCode === 38 && open) {
        // up arrow
        // hide content
        hide($openContent);
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }

      // hide content
      hide($openContent);
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      show($link.find('.js-main-nav-content'));
    });

    $parent.find('.js-main-nav-toggle').on('mouseleave', function (e) {
      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });

    $parent.find('.js-main-nav-toggle').on('click', function (e) {
      if (windowWidth <= breakpoint) {
        e.preventDefault;

        var $content = $(this).find('.js-main-nav-content');
        // add open class to this item
        $(this).addClass(openClass);
        show($content);
      }
    });

    $parent.find('.js-main-nav-toggle').last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        elHeight = undefined,
        headerBuffer = undefined,
        windowSize = undefined,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchor = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        mobileBreakpoint = 780,
        // match CSS breakpoint
    linkScrolling = false;

    setVariables();

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $el.find('a').on('click', function (e) {
      e.preventDefault();

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      // find the location of the desired link and scroll the page
      var hash = this.hash,
          // TODO try with a span tag
      position = $(hash).offset().top;

      // prevent the scroll event for updating active links
      linkScrolling = true;
      activeAnchor = $(this).index() - 1;

      $("html, body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
      });

      // remove active flag from other links
      $el.find('.' + activeClass).removeClass(activeClass);
      // add active flag to this link
      $(this).addClass(activeClass);
      // close the menu
      $el.removeClass('is-open');
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      activateLink();
      setPosition();
    });

    function setVariables() {
      elHeight = $el.outerHeight(true);
      windowSize = $(window).innerWidth();
      upperLimit = $elParent.offset().top;

      if (windowSize <= mobileBreakpoint) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $el.find('a').each(function (i, e) {
        var hash = this.hash,
            position = $(hash).offset().top;

        anchors[i] = { hash: hash, position: position };
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop();

      if (!isMobile && windowSize <= mobileBreakpoint) {
        $elParent.css({ 'paddingTop': elHeight });
        isMobile = true;
      }

      if (isMobile && windowSize > mobileBreakpoint) {
        $elParent.removeAttr('style');
        isMobile = false;
      }

      if (windowTop <= upperLimit) {
        $el.attr('data-sticky', 'top');
        $elParent.removeAttr('style');
      } else if (windowTop < lowerLimit && windowTop > upperLimit) {
        $el.attr('data-sticky', 'middle');
      } else if (windowTop >= lowerLimit) {
        $el.attr('data-sticky', 'bottom');
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 3;
      // is there a prev target
      // and
      // is the current scroll position above the prev target
      if (activeAnchor > 0 && windowTop < anchors[activeAnchor - 1].position) {
        // make the prev link active
        --activeAnchor;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      if (activeAnchor < numAnchors - 1 && windowTop > anchors[activeAnchor + 1].position) {
        // make the next link active
        ++activeAnchor;
      }

      // move the active flag
      $el.find('.' + activeClass).removeClass(activeClass);
      $el.find('a').eq(activeAnchor).addClass(activeClass);
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-site-setting-form').each(function () {
    var $parent = $(this),
        $reset = $parent.find('.js-button-reset'),
        $themeSelect = $parent.find('.js-site-settings-theme select'),
        $langSelect = $parent.find('.js-site-settings-lang select'),
        $zoomControls = $parent.find('.js-zoom-controls'),
        defaultZoomVal = $zoomControls.find('input[type="radio"]:checked').val(),
        cookieName = "site-settings",
        cookieExpires = 365,
        cookieValue = JSON.parse(_helpersCookiesJs2['default'].getCookie(cookieName) || "{}");

    // set default values to match cookie values
    if (typeof cookieValue.zoom !== "undefined") {
      $zoomControls.find('input[value="' + cookieValue.zoom + '"]').prop('checked', true);
      $zoomControls.trigger('reset');
    }

    if (typeof cookieValue.theme !== "undefined") {
      $themeSelect.val(cookieValue.theme).trigger('change');
      $('body').attr('data-theme', cookieValue.theme);
    }

    if (typeof cookieValue.lang !== "undefined") {
      $langSelect.val(cookieValue.lang).trigger('change');
      $('html').attr('lang', cookieValue.lang);
    }

    $zoomControls.find('input[type="radio"]').on('change', function () {
      cookieValue.zoom = $(this).val();
      updateCookie();
    });

    $themeSelect.on('change', function () {
      cookieValue.theme = $(this).val();
      updateCookie();
      $('body').attr('data-theme', cookieValue.theme);
    });

    $langSelect.on('change', function () {
      cookieValue.lang = $(this).val();
      updateCookie();
      $('html').attr('lang', cookieValue.lang);
    });

    $reset.on("click", function (e) {
      cookieValue.zoom = defaultZoomVal;
      updateCookie();
      // trigger a reset of the custom form input JS
      setTimeout(function () {
        $zoomControls.trigger('reset');
        $parent.find('select').trigger('change');
      }, .1);
    });

    function updateCookie() {
      _helpersCookiesJs2['default'].setCookie(cookieName, JSON.stringify(cookieValue), cookieExpires);
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        waitForIt = null;

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  // zoom controls updates/adds a data-zoom attribute to the html tag
  // with the desired level of zooming requeted.  CSS applies a scale
  // transform based on that value.

  $(".js-zoom-controls").each(function () {

    var $parent = $(this),
        $inputs = $(this).find('input[type="radio"]');

    $('html').attr("data-zoom", getCurrentValue());

    $inputs.on('change', function () {
      $('html').attr("data-zoom", $(this).val());
    });

    $parent.on('reset', function () {
      $('html').attr("data-zoom", getCurrentValue());
    });

    function getCurrentValue() {
      return $parent.find('input[type="radio"]:checked').val();
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}]},{},[2])


//# sourceMappingURL=index-generated.js.map
