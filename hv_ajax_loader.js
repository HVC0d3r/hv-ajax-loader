/**
 *
 * HV Ajax Loader
 * @version: 1.0
 * @author Hubert Viktor
 *
 * Licensed under MIT licence:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function($) {
	
	var methods = {
		// 'Constructor'
		init: function(options) {
			// Settings
			var s = $.extend(true, {
				delay: false,
				classes: {
					base: 'hv_ajax_loader',
					start: null,
					active: 'active',
					custom: null,
					parent: null
				},
				template: '<img class="{{BASE_CLASS}}" src="style/hv_ajax_loader.gif" height="15" width="15" />',
				insert: 'append'
			}, options);
			
			return this.each(function() {
				var $this = $(this);

				var data = {
					s: s,
					started: null,
					is_blocked: true,
					timeout: null
				};

				s.template = s.template.replace('{{BASE_CLASS}}', s.classes.base);

				$this.data('d', data);
				if (s.insert=='append') {
					$this.append(s.template);
				} else {
					$this.prepend(s.template);
				}

				if (s.classes.custom!=null) {
					$this.find('.'+s.classes.base).addClass(s.classes.custom);
				}
				
			});
		},
		show_img: function(iteration) {
			var $this = $(this);
			var d = $this.data('d');
			function active() {
				$this.find('.'+d.s.classes.base)
					.addClass(d.s.classes.active)
					.removeClass(d.s.classes.start);
				$this.addClass(d.s.classes.parent);
			}

			if (iteration==null) {
				$this.find('.'+d.s.classes.base).addClass(d.s.classes.start);
			}

			if (d.s.delay===0||d.s.delay===false) {
				active();
			} else {
				var time = new Date().getTime();
				if (!d.is_blocked) {
					if ((time-d.started)>d.s.delay) {
						active();
					} else {
						if (iteration==null) {
							iteration=1;
						}
						d.timeout = setTimeout(function(){
							$this.hv_ajax_loader('show_img', iteration++);
						}, 10);
					}
				}
			}

		},
		hide_img: function() {

			var $this = $(this);
			var d = $this.data('d');

			clearTimeout(d.timeout);
			$this.data('is_blocked', true);
			$this.removeClass(d.s.classes.parent);
			$this.find('.'+d.s.classes.base).removeClass(d.s.classes.active);

		},
		switch: function(onoff) {

			var $this = $(this);
			var d = $this.data('d');

			if (onoff=='on') {
				d.is_blocked = false;
				d.started = new Date().getTime();
				$this.data('d', d);

				$this.hv_ajax_loader('show_img');
			} else {
				$this.hv_ajax_loader('hide_img');
			}

		}
	};

	$.fn.hv_ajax_loader = function(methodOrOptions) {

		if ( methods[methodOrOptions] ) {
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.hv_ajax_loader.' );
		}

	};

})(jQuery);
