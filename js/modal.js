$(document).ready(function(){
	$('#form').click(
		function(){
			$('#formi').slideToggle(500, function(){
					if($('#form').html() == 'Открыть форму'){
						$('#form').html('Открыть форму');
				}
					else $('#form').html('Открыть форму');
				}
			)
			return false;
		}
	)
});