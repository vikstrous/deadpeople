
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
global_replace(/software/gi, 'Soft Brains');
global_replace(/university/gi, 'Buffet');
global_replace(/college/gi, 'Buffet');
$('.member-connections').html($('.member-connections').html().replace(/connections/g, 'kills'));

$($('.background-experience').children()[2]).find('h4>a').text('Zombie Food');
$('#languages-view>ol').append('<li class="section-item "><h4>Zombie<span class="edit-tools"><span class="edit-order">Re-order</span></span></h4><span class="languages-proficiency">Native or bilingual proficiency</span></li>')

$($('.background-experience').children()[1]).find('.associated-endorsements .row-first>p>span').text("DO NOT HIRE. THEY TRIED TO BITE ME!");
$($('.background-experience').children()[2]).find('.associated-endorsements .row-first>p>span').text("TASTY!");

skill_replacements = [
'Persistance',
'Patience',
'Spreading the disease',
'Focus',
'Groaning',
'Sieging',
'Moaning',
'Howling',
'Pouncing',
'Terrifying the locals',
'Lurching',
'Short Incubation',
'Face eating',
'Strength',
'Swarming',
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

var used = [];

$('.endorse-item-name-text').each(function(i, item){
	var $item = $(item);
	var pos = Math.abs(hashCode($item.text()))%skill_replacements.length;
	while (true) {
		if (used.length == skill_replacements.length){
			break;
		}
		if (!used[pos]){
			$item.text(skill_replacements[pos]);
			used[pos] = true;
			break;
		} else {
			pos += 1;
		}
	}
});

