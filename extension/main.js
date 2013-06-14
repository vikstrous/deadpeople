
var lookup = {
	'202228009': 'http://www.makemezombie.com/shared/4/mmz/1306144/zombified_wb20130614045459261285.png',
	'63754522': 'http://www.makemezombie.com/shared/4/mmz/1306144/zombified_wb20130614044413149561.png'
};
$('.profile-picture img').attr('src', lookup[/id=([0-9]+)/.exec(location.href)[1]]);
$('#text-ad-container').html('');
$('#top-card-guided-edit-btn span').text('Eat more brains');

function global_replace(search, replace){
	var els = document.getElementsByTagName("*");
	for(var i = 0, l = els.length; i < l; i++) {
		var el = els[i];
	    if(el.innerHTML)
			el.innerHTML = el.innerHTML.replace(search, replace);
	}
}

global_replace(/LinkedIn/gi, 'HideOut');

skill_replacements = [
	'Biting',
	'Gnawing',
	'Skull Crushing',
	'Human Hunting',
	'Human Tracking',
	'Endurance',
	'Regeneration',
	'Apathy',
	'Crawling',
	'Infection',
	'Jumping',
	'Frightening Children',
	'Dispersing Crowds',
	'Chewing',
	'Eating Flesh',
	'Eating Brains',
	'Scaling Buildings'
];

function hashCode(str){
    var hash = 0, i, char;
    if (str.length == 0) return hash;
    for (i = 0, l = str.length; i < l; i++) {
        char  = str.charCodeAt(i);
        hash  = ((hash<<5)-hash)+char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

$('.endorse-item-name-text').each(function(i, item){
	var $item = $(item);
	$item.text(skill_replacements[Math.abs(hashCode($item.text()))%skill_replacements.length]);
});