<script>
// <![CDATA[
  $(function() {
    if($("#goodframe").length>0) {
var title = $(".single-post-title").text();
$("#titlevid").text(title);
var bigvideo = $("#goodframe").attr("src");
var videotag = '<iframe src="'+bigvideo+'" id="amp-img" frameborder="0"></iframe>';
$(videotag).appendTo("#afnanafvideo");
$("#goodframe").remove();
    }
    else {
$("#afnanvideo").remove();
    }
  });
// ]]>
</script>
