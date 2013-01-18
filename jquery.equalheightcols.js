/**
 * jQuery.equalheightcols - Making an equal height panels.
 * @copyright (c) 2010-2011 Aamir Afridi - http://www.aamirafridi.com/blog
 * Dual licensed under MIT and GPL.
 * Date: 25/11/2010
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com | http://www.aamirafridi.com
 * @version 1.0
 */

;(function($) {
	$.fn.equalheightcols = function(options) {
		return this.each(function() {
			// Extend the options if any provided
			var o = $.extend({}, $.fn.equalheightcols.defaults, options), $this = $(this);
			//Find the shortest height item
			var shortestHeight = 10000;
			$this.find(o.itemsToEqualize).each(function(){
				shortestHeight = $(this).height() < shortestHeight ? $(this).height() : shortestHeight;
			});
			//Now loop through the each element and keep removing word by word untill its height reaches to the minimal
			$this.find(o.itemsToEqualize).each(function(){
				//If height is already equal to the minimum than return
				if($(this).height()==shortestHeight) return;
				//Now loop until the heights is equal to the minimum height by removing word by word
				while($(this).height()>shortestHeight)
				{
					$(this).html($.trim($(this).html()).replace(/ \S*$/,''));
				}
				//Now check if the last char of the last word is not a full stop than remove the last word and put three dots with the last word
				if($.trim($(this).html()).slice(-1)!='.' && o.threeDots)
				{
					//Remove one more word and append three dots
					$(this).html($.trim($(this).html()).replace(/ \S*$/,'')+'...');
				}
			});
		});
	};//End of Plugin
	
	// Public: plugin defaults options
	$.fn.equalheightcols.defaults = {
		itemsToEqualize : 'p',
		threeDots : true //If the last word is not fullstop than put three dots at the end
	};
})(jQuery);