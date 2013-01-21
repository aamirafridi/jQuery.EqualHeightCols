jQuery.EqualHeightCols
======================

This plugin gets the list of columns with different height, takes the smallest column and than assign that height to other columns by removing some text for each column and you have option to add three dots at the end.

**Blog post:** http://aamirafridi.com/jquery/jquery-equal-columns-height-plugin

Before the plugin applied:
-------------------------

![ScreenShot](http://aamirafridi.com/wp-content/uploads/2010/11/before.png)

After plugin is applied:
-------------------------

![ScreenShot](http://aamirafridi.com/wp-content/uploads/2010/11/after.png)


Options:
--------
 - **itemsToEqualize:** the selector string that plugin will find and assume they are columns.
 - **threeDots:** Boolean put three dots at the end of the paragraph if its not ending with a full stop.

Demo:
-----
 - **Demo link:** http://aamirafridi.com/jquery/equalheight/example.html

Use:
----

###HTML:

```html
<ul class="equalHeightExample" id="panels">
  <li><strong>Heading 1: </strong>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua , vel illum qui dolorem eum...
	</p>
	
	</li>
	<li><strong>Heading 2: </strong>
	<p>
		Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...
	</p>
	
	</li>
	<li><strong>Heading 2: </strong>
	<p>
		 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
	</p>
	
	</li>
</ul>
```

###CSS:
```css
.equalHeightExample {
	margin:0 !important;
	padding:5px !important;
	width:600px;
}
.equalHeightExample li {
	list-style-type:none !important;
	list-style-image:none !important;
	float:left;
	width:30%;
	padding:8px;
	font-size: 12px;
}
```

###Apply plugin:
```javascript
$(function() {
  $('#panels').equalheightcols();
});
```
