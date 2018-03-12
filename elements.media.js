var medias = [
	{
		"title" : "Clickable image",
		"category" : "media",
		"html" : '<a href="#" ><img src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" class="img-responsive"></a>',
		"selector" : "a:has(img)",
		"catch" : 'a *',
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-80px -200px"
	},
	{
		"title" : "Image",
		"category" : "media",
		"html" : '<img src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" class="img-responsive">',
		"selector" : "img",
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-80px -200px"
	},
	{
		"title" : "Clickable icon",
		"category" : "media",
		"html" : '<a href="#" ><i class="fa fa-3x fa-mobile fa-fw" /></a>',
		"selector" : "a:not(.btn):has(i.fa)",
		"catch" : 'a *',
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-480px -200px"
	},
	{
		"title" : "Icon",
		"category" : "media",
		"html" : '<i class="fa fa-3x fa-mobile fa-fw" />',
		"selector" : ".fa",
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-480px -200px"
	},
	{
		"title" : "Thumbnail",
		"category" : "media",
	 	"html" : '<div class="thumbnail"><img src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" class="img-responsive"><div class="caption"><h3>Thumbnail label</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></div></div>',
		"selector" : ".thumbnail",
		"group" : ".thumbnail *:not(.caption, .caption:not(:empty) *)",
		"catch" : ".thumbnail > img, .caption:not(:empty)",
		// "group" : ".thumbnail *",
		// "catch" : ".thumbnail .caption, .thumbnail img",
		"childSelector" : "> img, .caption > *",
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-240px -200px"
	},
	// {
	// 	"title" : "List Item",
	// 	"selector" : "ul:not(.nav):not(.breadcrumb):not(.pagination):not(.media-list):not(.pager):not(.list-group)",
	// 	"html" : "<li></li>",
	// 	"contentEditable": true,
	// 	"selectClosest" : "ol,ul:not(.nav):not(.breadcrumb):not(.pagination):not(.list-group)"
	// }
	{
		"title" : "Carousel",
		"category" : "media",
		"html" : '<div id="carousel-example" data-interval="false" class="carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="item active"><img src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png"><div class="carousel-caption"><h2>Title</h2><p>Description</p></div></div></div><a class="left carousel-control" href="#carousel-example" data-slide="prev"><i class="icon-prev  fa fa-angle-left"></i></a><a class="right carousel-control" href="#carousel-example" data-slide="next"><i class="icon-next fa fa-angle-right"></i></a></div>',
		"selector" : ".carousel, #carousel-example",
		"group" : ".carousel *",
		"catch" : ".carousel .carousel-control, .carousel .carousel-control *",
		"childSelector" : ".item",
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-160px -200px"
	},
	{
		"title" : "Carousel slide",
		"addTo" : ".carousel",
		"position" : ".carousel-inner",
		"selector" : ".carousel .item",
		"group" : ".carousel .item *",
		deleteHelper : function() {
			var $p = $(pEditor.domSelection).parent();
			if($p.children().length == 1){
				pEditor.domSelection = $p;
				pCommands.execute("pcmd_delete");  
			}else{
				$(pEditor.domSelection).remove();
			}
		},
		"catch" : ".carousel .item img, .carousel .carousel-caption:not(:empty)",
		"html" : '<div class="item"><img src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png"><div class="carousel-caption"><h2>Title</h2><p>Description</p></div></div>'
	},
	{		
		"title" : "Carousel inner",
		"category" : "components",
		"selector" : ".carousel-inner",
		deleteHelper : function() {
			var $el = $(pEditor.domSelection);
			if($el.children().length < 2) { // se ha solo un figlio
				pEditor.domSelection = $(pEditor.domSelection).parent(); // all carousel
				pCommands.execute("pcmd_delete");  
			}else
				$(pEditor.domSelection).remove();
		},

	},
	{		
		"title" : "Carousel caption",
		"category" : "components",
		"selector" : ".carousel .carousel-caption",
		"container" : true
	},
	{		
		"title" : "Thumbnail caption",
		"category" : "components",
		"selector" : ".thumbnail .caption",
		"container" : true
	},
	{
		"title" : "Media list",
		"category" : "media",
	 	"html" : '<ul class="media-list"><li class="media"><a class="pull-left" href="#"><img class="media-object" src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" height="64" width="64" ></a><div class="media-body"><h4 class="media-heading">Media heading</h4> <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p></div></li><li class="media"><a class="pull-left" href="#"><img class="media-object" src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" height="64" width="64" ></a><div class="media-body"><h4 class="media-heading">Media heading</h4><p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p></div></li></ul>',
	 	"selector" : "ul.media-list",
	 	"group" : "ul.media-list *",
		"childSelector" : "li.media",
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-320px -200px"
	},
	{		
		"title" : "Media body",
		"category" : "media",
		"type" : "component",
		"selector" : ".media .media-body",
		"container" : true 
	},
	{
		"title" : "Media",
		"category" : "media",
	 	"html" : '<li class="media"><a class="pull-left" href="#"><img class="media-object" height="64" width="64" src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" ></a><div class="media-body"><h4 class="media-heading">Media heading</h4> <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p></div></li>',
	 	"selector" : "li.media",
		"childSelector" : "> *",
		"group" : ".media *",
		"catch" : ".media > a *, .media .media-body:not(:empty)",
		"addTo" : "ul.media-list"
	},
	{
		"title" : "Responsive video",
		"category" : "media",
		"selector" : ".embed-responsive"
	},
	{
		"title" : "Google Maps",
		"category" : "media",
		"html" : '<img class="img-responsive" src="http://maps.googleapis.com/maps/api/staticmap?center=Tombouctou,Mali&zoom=12&size=200x200&sensor=false">',	
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "0px -200px"
	},
	{
		"title" : "Youtube",
		"category" : "media",
		"html" : '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="http://www.youtube.com/embed/i__1Z5a9Sak" allowfullscreen></iframe></div>',
		"selector" : "iframe[src*='www.youtube.com']",
		"logo" : HOST + "resources/thumbs.png",
		"logoPosition" : "-400px -200px"
	},
	{
		"title" : "Iframe",
		"selector" : "iframe"
	}
	
];
pElements = pElements.concat(medias);