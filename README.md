hv-ajax-loader
==============

A small jQuery plugin to help visualize ajax loading.


The basic idea of this project is to be able to switch on/off ajax loading effect(s) easily when needed.

The javascript and the css are completely separated. The script won't even use a 'display: none' code.



The logic:

  initiate the plugin: $(selector).hv_ajax_loader( configuration );
    This will add the template html to the selected element.
    
  switch on loader effect when loading starts: $(selector).hv_ajax_loader( 'switch', 'on' );
    The configuration's 'active' class is added to the base element.
 
  switch off when the request ends: $(selector).hv_ajax_loader( 'switch', 'off' );
    Removing the 'active' class.
 
 
Configuration options:

    delay: false
      The showing of the effect can be delayed. (msec) If the switch off method is
      called before the delay triggers the effect, it won't be shown.
    
    classes:
      base: 'hv_ajax_loader'
        The script will replace the '{{BASE_CLASS}}' string with this in the template.
        Basic styling can be done here.
        
      start: null
        If set, the script will add this class to the base element when calling the switch on method.
        
      active: 'active'
        After the time defined in the delay parameter elapsed, the class defined here will be added to the base element.
      
      custom: null
        If set, this class will be added to the base element upon initializing.
        Useful if the page contains multiple different ajax loaders.
        
      parent: null
        If set, this class will be added to the base element's parent upon initializing.
      
    template: '<img class="{{BASE_CLASS}}" src="style/hv_ajax_loader.gif" height="15" width="15" />',
      The script will add this html code to the selected element.
    
    insert: 'append'
      'append' or 'prepend' the loader in the selected element.
      It only matters when the added element is inline, not absolute positioned.

    
Some example were set up in the index file.
Since the script don't mess with the styling, everything can be changed through the css classes.
