/*jslint browser: true, eqeq: true, nomen: true, plusplus: true, maxerr: 50, indent: 2, white: false */
/*global $, document, EightShapes, enquire, jQuery, window */

var Marriott = Marriott || {};
Marriott.Responsive = Marriott.Responsive || {};
Marriott.Responsive.App = Marriott.Responsive.App || {};

$(document).ready(function () {

  $('html').removeClass('no-js').addClass('js');

  // Universal drawer toggle
  $(document).on('click', 'a.l-collapsible:not(.non-collapsible)', function (event) {
    Marriott.Responsive.App.toggleCollapsible($(this), event);
  });

  // Drawer toggle
  $(document).on('click', '.l-shell .l-drawer .toggle', function (event) {
    Marriott.Responsive.App.toggleDrawer($(this), event);
  });

  // Drawer toggle v2
  $(document).on('click', '[data-object="drawer"] .drawer-toggle', function (event) {
    var $state_el = $(this).closest('[data-state]'),
      state = $state_el.attr('data-state');

    $(this).blur(); // Removes focus

    event.preventDefault();
    event.stopPropagation();

    if (state === 'is-closed') {
      $state_el.attr('data-state', 'is-open');
    } else if (state === 'is-open') {
      $state_el.attr('data-state', 'is-closed');
    }
  });

  // Content show more link
  $(document).on('click', '.l-shell a.show-more', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).hide().parent().next().show();
    return false;
  });

  // Off Canvas for Global Nav (left or top)
  $(document).on("click", ".l-shell a.offcanvas-left", function (event) {
    $(this).blur().closest('.viewport').children('.canvas').toggleClass('offcanvasleft');
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  // Global bind of layout toggles
  $(document).on('click', '.l-shell .layout-toggle a', function (e) {
    var self = $(this);
    self.parent().siblings().removeClass('active');
    self.parent().addClass('active');
    e.preventDefault();
  });

  // Search list vs gallery toggle
  $(document).on('click', '.l-shell .searchresults .layout-toggle a', function () {
    var tab = $(this).blur().parent();

    if ($(tab).hasClass('list')) {
      $(tab).closest('.searchresults').find('form.hotels').addClass('list').removeClass('gallery');
    } else {
      $(tab).closest('.searchresults').find('form.hotels').addClass('gallery').removeClass('list');
    }
    return false;
  });

  // Search - Edit Search
  $(document).on('click', '.l-shell .editsearch-action', function (e) {
    var $viewport = $(this).closest('.viewport');
    $($viewport).find('.lightbox');
  });

  // Search - Filter Offcanvas Toggle
  $(document).on('click', '.l-shell .rightoffcanvas-toggle', function (e) {
    var $button = $(this);

    $(this).closest('.viewport').find('.container.l-with-rightoffcanvas').toggleClass('l-show-rightoffcanvas');

    if ($button.html() === "Filter Results") {
      $button.html('Close Filter');
    } else if ($button.html() === "Close Filter") {
      $button.html('Filter Results');
    }
    e.stopPropagation();
    return false;
  });

  $(document).on('click', '.leftoffcanvas-toggle', function (e) {
    var $button = $(this);

    $(this).closest('.viewport').find('.container.l-with-leftoffcanvas').toggleClass('l-show-leftoffcanvas');

    if ($button.html() === "Filter Results") {
      $button.html('Close Filter');
    } else if ($button.html() === "Close Filter") {
      $button.html('Filter Results');
    }
    e.stopPropagation();
    return false;
  });

  // View all link reveals content (deals)
  $(document).on('click', '.l-shell .viewport.deals-landing .view-all a', function (e) {
    var $self = $(this),
      $viewport = $('.viewport.deals-landing'),
      $reveal_content = $viewport.find('.show-more'),
      $carousel_dots = $viewport.find('.carousel-dots');

    $reveal_content.fadeIn('slow', function () {
      $reveal_content.removeClass('is-closed');
      $self.parent().hide();
      $carousel_dots.hide();
    });
  });

  // Themed title area menus
  $('section.viewport').on('click', '.l-menu.save > a', function (event) {
    var menu = $(this).blur().parent();

    $(menu).toggleClass('saved');

    if ($(menu).hasClass('saved')) {
      $(menu).children('a').html('Saved');
    } else {
      $(menu).children('a').html('Save');
    }

    event.stopPropagation();
  });

  // Auto-collapse collapsibles for HWS pages
  setTimeout(function () {
    $(document).find('.l-shell .viewport.hws a.collapsible').attr('data-state', 'is-closed');
  }, 500);
});

Marriott.Responsive.App = (function (window) {
  "use strict";

  // Dependencies
  // ------------
  var $ = window.jQuery,
    MIN_WIDTH_SWITCH_TO_TALLER_HEADER = '768px',
    MIN_WIDTH_SWITCH_TO_WIDE_HEADER = '960px',

  // Private methods
  // -----------------
  enableCollapsible = function (opts) {
    if (opts.drawers !== undefined && opts.drawers.length > 0) {
      window.console.debug('App.js disableCollapsible UNMATCHED!');
      opts.drawers.attr('data-state', 'is-closed');

      opts.drawers.on('click', function (event) {
        toggleCollapsible($(this), event);
      });
    }
  },

  disableCollapsible = function (opts) {
    var $drawers = opts.drawers,
      expand = opts.expand;

    if ($drawers !== undefined && $drawers.length > 0) {
      window.console.debug('App.js disableCollapsible MATCHED!');

      if (expand === true) {
        $drawers.attr('data-state', 'is-open');
      }
      // Sigh. jquery's .off() isn't doing the job on it's own
      // (so it can't be used in unmatch)
      // BUT you need it for the match, unmatch, match case. Grumble.
      $drawers.off('click');
      $drawers.on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  },

  disableCollapsibles = function () {
    var $drawers,
      filters_selector = [
      '.l-shell .search-advanced .l-rightrail.l-search-filters .l-hotels-by-brand a.collapsible',
      '.l-shell .search-advanced .l-rightrail.l-search-filters .l-special-rates a.collapsible'
    ];

    // Certain search filter drawers are disabled at larger sizes
    setTimeout(function () {
      enquire.register("screen and (min-width: 864px)", {
        match: function () {
          $drawers = $(document).find(filters_selector.join(', '));
          Marriott.Responsive.App.disableCollapsible({ drawers: $drawers, expand: true });
        },
        unmatch: function () {
          $drawers = $(document).find(filters_selector.join(', '));
          Marriott.Responsive.App.enableCollapsible({ drawers: $drawers });
        }
      });
    }, 1600);
  },

  toggleCollapsible = function ($link, event) {
    var state = $link.attr('data-state');

    event.preventDefault();
    event.stopPropagation();

    if (state === 'is-closed') {
      if ($link.closest('section').parent().hasClass('close-siblings')) {
        $link.closest('section').siblings().find('[data-state="is-open"]').attr('data-state', 'is-closed');
        $link.closest('section').siblings().find('.drawer').slideUp();
      }

      $link.attr('data-state', 'is-open').siblings('.drawer').slideDown();

    } else if (state === 'is-open') {
      $link.attr('data-state', 'is-closed').siblings('.drawer').slideUp();

      if ($link.hasClass('close-siblings')) {
        $link.siblings('.drawer').slideDown();
      }
    } else {
      window.console.log('ERR: Unknown mainmenu drawer data-state.');
    }
  },

  toggleDrawer = function ($link, event) {
    $link.parent().toggleClass('is-closed');
    event.preventDefault();
    event.stopPropagation();
  };
  // end var

  // Public methods
  // --------------
  return {
    disableCollapsible: disableCollapsible,
    disableCollapsibles: disableCollapsibles,
    enableCollapsible: enableCollapsible,
    toggleCollapsible: toggleCollapsible,
    toggleDrawer: toggleDrawer
  };
}(window));