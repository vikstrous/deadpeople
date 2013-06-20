
var lookup = {
  '202228009': 'http://www.makemezombie.com/shared/4/mmz/1306144/zombified_wb20130614045459261285.png',
  '63754522': 'http://www.makemezombie.com/shared/4/mmz/1306144/zombified_wb20130614044413149561.png',
  '119948225': 'http://www.makemezombie.com/shared/4/mmz/1306177/zombified_wb20130616070023278921.png'
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

global_replace(/LinkedIn/gi, 'BraINs');
// global_replace(/software/gi, 'Soft Brains');
// global_replace(/university/gi, 'Buffet');
// global_replace(/college/gi, 'Diner');
global_replace(/is now connected/gi, 'is now chewing on');
$('#background-education>h3').text('Feeding Gruonds');
$('#overview-summary-education th a').text('Feeding Gruonds');
// global_replace(/education/gi, 'Feeding Grounds');
// global_replace(/ACM chapter/gi, 'Zombies');
// global_replace(/People/gi, 'Zombies');
// global_replace(/Reid Hoffman/gi, 'Patient Zero');
$('.member-connections').html($('.member-connections').html().replace(/connections/g, 'kills'));
$('.industry').text('The Undead Horde');
$('.discovery-header-text').text('Tasty Suggestions');
$('.insights-browse-map>h3').text('People also hunting for');
$('.endorse-v2').hide();
$('#strength').hide();


var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = '  body { background: #fff; font: 13px helvetica, arial, sans-serif; margin: 0; padding: 0; }'+
'      #ad-right-top a { text-decoration: none; }'+
'      #ad-right-top a,'+
'      #ad-right-top img { border: none; }'+
'      #ad-right-top h4,'+
'      #ad-right-top h6 { color: #666; font-size: 10px; font-weight: normal; line-height: 1.2; margin: 0; padding: 5px 0 5px 9px; text-align: left; }'+
'      #ad-right-top h4 a,'+
'      #ad-right-top h6 a { color: #333; font-size: 13px; text-transform: uppercase; }'+
'      #ad-right-top h5 { color: #039; font-size: 13px; font-weight: normal; line-height: 1; margin: 2px 0; padding: 0; }'+
'      #ad-right-top h5 a { color: #0073B2; font-weight: bold; text-decoration: none; display: block; }'+
'      #ad-right-top h5 a:visited { color: #069; }'+
'      #ad-right-top p { color: #333; font-size: 12px; line-height: 1.3; margin: 0 10px 5px 0; }'+
'      #ad-right-top p a { color: #666; font-size: 13px; display: block; }'+
'      #ad-right-top p a:visited { color: #666; }'+
''+
'      #ad-right-top .member-ads { overflow: hidden; }'+
'      #ad-right-top .section { background: #fff; text-align:left; }'+
'      #ad-right-top .header { overflow: hidden; padding: 0; width: 100%; }'+
'      #ad-right-top .dad { position: relative; overflow: hidden; height: 65px; border-top: none; margin: 0; padding: 4px 12px 6px 12px; }'+
'      #ad-right-top .dad a.logo { float: left; width: 50px; height: 50px; margin: 2px 14px 10px 0; padding: 0; }'+
'      #ad-right-top .dad img { background: #fff; padding: 0; max-width: 50px; max-height: 50px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);'+
'        filter: progid:DXImageTransform.Microsoft.Shadow(color=#3FDDDDDD,direction=180,strength=3);'+
'      }'+
'      #ad-right-top .twocount .dad { height:100px; }'+
'      #ad-right-top .more { font-family: Arial; position: absolute; right: 10px; top: 26px; margin-right: 0; }'+
'      #ad-right-top .more a { font-size: 16px; font-weight: normal; }'+
'      #ad-right-top .create-ad { display: none; }'+
'      #ad-right-top .media-type { padding: 1px 4px 0 0; font-size: 11px; font-weight: bold; float:left; color: #666; cursor: pointer;}'+
'      #ad-right-top .media-type .separator { font-size: 15px; line-height: 0; position: relative; top: 2px;}'+
''+
'      /* ----- Format Variations ----- */'+
''+
'      /* -- Shared Styles -- */'+
''+
'      .format-300x250-exp-4-1,'+
'      .format-300x250-exp-4-2,'+
'      .format-300x250-exp-4-3,'+
'      .format-300x250-exp-4-4,'+
'      .format-300x250-exp-4-5,'+
'      .format-300x250-exp-4-6,'+
'      .format-300x250-exp-4-7,'+
'      .format-300x250-exp-4-8 { width: 300px; height: 250px; }'+
'      .format-160x600-exp-4-1,'+
'      .format-160x600-exp-4-2,'+
'      .format-160x600-exp-4-3a,'+
'      .format-160x600-exp-4-3b,'+
'      .format-160x600-exp-4-3c,'+
'      .format-160x600-exp-4-3d,'+
'      .format-160x600-exp-4-4a,'+
'      .format-160x600-exp-4-4b,'+
'      .format-160x600-exp-4-4c,'+
'      .format-160x600-exp-4-4d,'+
'      .format-160x600-exp-4-5,'+
'      .format-160x600-exp-4-6 { width: 160px; height: 600px; }'+
'      .format-728x90-exp-4-1,'+
'      .format-728x90-exp-4-2 { width: 728px; height: 90px; background-color: #FFF; }'+
''+
'      .format-300x250-exp-4-1 .section,'+
'      .format-300x250-exp-4-2 .section,'+
'      .format-300x250-exp-4-3 .section,'+
'      .format-300x250-exp-4-4 .section,'+
'      .format-300x250-exp-4-5 .section,'+
'      .format-300x250-exp-4-6 .section,'+
'      .format-300x250-exp-4-7 .section,'+
'      .format-300x250-exp-4-8 .section { height: 250px; }'+
''+
'      .format-160x600-exp-4-3a h4 a,'+
'      .format-160x600-exp-4-3b h4 a,'+
'      .format-160x600-exp-4-3c h4 a,'+
'      .format-160x600-exp-4-3d h4 a,'+
'      .format-160x600-exp-4-4a h4 a,'+
'      .format-160x600-exp-4-4b h4 a,'+
'      .format-160x600-exp-4-4c h4 a,'+
'      .format-160x600-exp-4-4d h4 a { text-transform: none; font-size: 10px; color: #959595;}'+
''+
'      .format-160x600-exp-4-1 .dad,'+
'      .format-160x600-exp-4-2 .dad { height: 162px; padding: 14px 14px 10px 9px; }'+
'      .format-160x600-exp-4-3a .dad,'+
'      .format-160x600-exp-4-3b .dad,'+
'      .format-160x600-exp-4-3c .dad,'+
'      .format-160x600-exp-4-3d .dad,'+
'      .format-160x600-exp-4-4a .dad,'+
'      .format-160x600-exp-4-4b .dad,'+
'      .format-160x600-exp-4-4c .dad,'+
'      .format-160x600-exp-4-4d .dad { height: auto; padding: 14px 14px 10px 9px; }'+
'      .format-160x600-exp-4-1 .dad a.logo,'+
'      .format-160x600-exp-4-2 .dad a.logo,'+
'      .format-160x600-exp-4-3a .dad a.logo,'+
'      .format-160x600-exp-4-3b .dad a.logo,'+
'      .format-160x600-exp-4-3c .dad a.logo,'+
'      .format-160x600-exp-4-4b .dad a.logo,'+
'      .format-160x600-exp-4-4c .dad a.logo { float: none; }'+
'      .format-160x600-exp-4-1 .dad p,'+
'      .format-160x600-exp-4-2 .dad p,'+
'      .format-160x600-exp-4-3a .dad p,'+
'      .format-160x600-exp-4-3b .dad p,'+
'      .format-160x600-exp-4-3c .dad p,'+
'      .format-160x600-exp-4-3d .dad p,'+
'      .format-160x600-exp-4-4a .dad p,'+
'      .format-160x600-exp-4-4b .dad p,'+
'      .format-160x600-exp-4-4c .dad p,'+
'      .format-160x600-exp-4-4d .dad p { margin: 0 0 5px 0; }'+
'      .format-160x600-exp-4-1 .section,'+
'      .format-160x600-exp-4-2 .section { height: 600px; }'+
''+
'      .format-160x600-exp-4-3d .dad p,'+
'      .format-160x600-exp-4-4d .dad p { clear: left; }'+
'      .format-160x600-exp-4-3d h5 a,'+
'      .format-160x600-exp-4-4d h5 a { height: 50px; display: table-cell; vertical-align: middle; }'+
''+
'      .format-160x600-exp-4-3b h5 a,'+
'      .format-160x600-exp-4-4a h5 a,'+
'      .format-160x600-exp-4-4b h5 a { font-weight: normal; }'+
''+
'      .format-160x600-exp-4-4a h5 a,'+
'      .format-160x600-exp-4-4b h5 a,'+
'      .format-160x600-exp-4-4c h5 a,'+
'      .format-160x600-exp-4-4d h5 a { font-size: 12px }'+
''+
'      .format-160x600-exp-4-4a p a,'+
'      .format-160x600-exp-4-4b p a,'+
'      .format-160x600-exp-4-4c p a,'+
'      .format-160x600-exp-4-4d p a { font-size: 12px; color: #000; }'+
''+
'      .format-160x600-exp-4-4a .logo img,'+
'      .format-160x600-exp-4-4b .logo img,'+
'      .format-160x600-exp-4-4c .logo img,'+
'      .format-160x600-exp-4-4d .logo img { border: 1px solid #D6D6D6; }'+
''+
'      .format-728x90-exp-4-1 .dad,'+
'      .format-728x90-exp-4-2 .dad { float: left; width: 340px; height: 55px; padding-top: 6px; }'+
'      .format-728x90-exp-4-1 .dad img,'+
'      .format-728x90-exp-4-2 .dad img { margin-left: 0; }'+
'      .format-728x90-exp-4-1 .dad a.logo,'+
'      .format-728x90-exp-4-2 .dad a.logo { margin-right: 6px; }'+
'      .format-728x90-exp-4-1 .section,'+
'      .format-728x90-exp-4-2 .section { float: left; position: relative; height: 90px; }'+
'      '+
'      .format-300x250-exp-4-1 .dad:hover,'+
'      .format-160x600-exp-4-1 .dad:hover,'+
'      .format-728x90-exp-4-1 .dad:hover { background-color: #EFEFEF; }'+
''+
'      /* -- Specific Styles -- */'+
''+
'      .format-300x250-exp-4-1 .dad a.logo,'+
'      .format-300x250-exp-4-5 .dad a.logo { margin-top: 0; }'+
'      .format-300x250-exp-4-1 .dad,'+
'      .format-300x250-exp-4-5 .dad { padding: 5px 10px; }'+
''+
'      .format-160x600-exp-4-1 h5 { margin: 6px 0 4px 0; }'+
'      .format-160x600-exp-4-1 .dad img { margin-left: 0; }'+
'      .format-160x600-exp-4-1 .more { top: 30px; }'+
''+
'      .format-728x90-exp-4-1 .dad img { margin-left: 0; }'+
'      .format-728x90-exp-4-1 .dad a.logo { margin-right: 6px; }'+
'      .format-728x90-exp-4-1 .section { float: left; }'+
'      .format-728x90-exp-4-1 .footer { background-color: #EEE; border-collapse: separate; box-shadow: inset 0 6px 4px -6px rgba(0, 0, 0, 0.25);}'+
'      .format-728x90-exp-4-1 h6 a { font-size: 11px; color: #8B8B8B; }'+
''+
'      .format-300x250-exp-4-2 .dad { border-top: 1px solid #EEE; margin: 0 10px; padding: 4px 12px 6px 2px; }'+
'      .format-300x250-exp-4-2 .dad.first { border: none; height: 63px; }'+
'      .format-300x250-exp-4-2 .dad-1 a.logo { float: right; margin-right: 10px; margin-left: 4px; }'+
'      .format-300x250-exp-4-2 .more { right: 0; }'+
''+
'      .format-160x600-exp-4-2 .dad { border-top: 1px solid #EEE; margin: 0 10px; padding: 13px 4px 10px 0px; }'+
'      .format-160x600-exp-4-2 .dad.first { border: none; }'+
'      .format-160x600-exp-4-2 .dad a.logo { margin-left: 42px; line-height: 18px }'+
'      .format-160x600-exp-4-2 h5 { margin-bottom: 6px; }'+
'      .format-160x600-exp-4-2 .wologo h5 { }'+
''+
'      .format-728x90-exp-4-2 .more { display: none; }'+
'      .format-728x90-exp-4-2 h6 a { font-size: 11px; color: #666; }'+
'      .format-728x90-exp-4-2 h6 { float: left; }'+
'      .format-728x90-exp-4-2 .create-ad { display: block; float: right; font-size: 12px; color: #0073B2; margin: 4px 12px 0 0; }'+
''+
'      .format-300x250-exp-4-5 .dad { height: 65px; padding-top: 10px; padding-bottom: 25px; }'+
'      .format-300x250-exp-4-5 .dad + .dad { padding-top: 35px; padding-bottom: 0; }'+
'      .format-300x250-exp-4-5 .dad.dad-video + .dad { padding-top: 10px; padding-bottom: 25px; }'+
'      .format-300x250-exp-4-5 .dad.first + .dad { background: url(https://static.licdn.com/scds/common/u/img/bg/bg_grey_dotted_h-line_5x1.png) repeat-x scroll 0 0 transparent; }'+
'      .format-300x250-exp-4-5 .dad.dad-video + .dad { background: none; }'+
'      .format-300x250-exp-4-5 .dad.dad-video.first { background: none; }'+
'      .format-300x250-exp-4-5 .dad.dad-video,'+
'      .format-300x250-exp-4-6 .dad.dad-video { margin: 5px 10px; border-width: 0 1px 2px 1px; border-style: solid; border-color: #CCC; position: relative; height: 78px; padding-top: 5px; padding-bottom: 25px; }'+
'      .format-300x250-exp-4-6 .dad.dad-video { padding-bottom: 10px; }'+
'      .format-300x250-exp-4-5 .dad.dad-video .logo,'+
'      .format-300x250-exp-4-6 .dad.dad-video .logo { height: 78px; width: 100%; } '+
'      .format-300x250-exp-4-5 .dad.dad-video .dad-info { position: absolute; bottom: 4px; left: 10px; }'+
'      .format-300x250-exp-4-5 .dad.dad-video .play-icon,'+
'      .format-300x250-exp-4-6 .dad.dad-video .play-icon { height: 50px; width: 50px; position: absolute; top: 14px; left: 104px; background: transparent url(https://static.licdn.com/scds/common/u/images/apps/sasbe/circle_plate_play_50x50.png); }'+
'      .format-300x250-exp-4-5 .dad.dad-video:hover .play-icon { background-position: 0 -50px; }'+
'      .format-300x250-exp-4-5 .dad.dad-video .more,'+
'      .format-300x250-exp-4-6 .dad.dad-video .more { display: none; }'+
'      .format-300x250-exp-4-5 .dad.dad-video a,'+
'      .format-300x250-exp-4-6 .dad.dad-video a { position: relative; overflow: hidden; margin: 0; }'+
'      .format-300x250-exp-4-5 .dad.dad-video a img,'+
'      .format-300x250-exp-4-6 .dad.dad-video a img { max-width: none; max-height: none; opacity: 1; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; filter: alpha(opacity = 100); *zoom: 1; position: relative; left: -31px; top: -51px; }'+
'      .format-300x250-exp-4-5 .dad.dad-video .description { display: none; }'+
'      .format-300x250-exp-4-6 .dad.dad-video .description { margin-right: 0; filter: inherit; position: relative; }'+
'      .format-300x250-exp-4-6 .dad.dad-video .description a { height: 49px; filter: inherit; position: relative; }'+
'      .format-300x250-exp-4-6 .dad.dad-video h5, .format-300x250-exp-4-6 .dad.dad-video a { filter: inherit; position: relative; }'+
''+
'      .format-300x250-exp-4-6 .dad.dad-video, .format-300x250-exp-4-6 .dad.dad-video .logo { height: 208px; }'+
'      .format-300x250-exp-4-6 .dad.dad-video .dad-info { '+
'            position: absolute;'+
'            bottom: 10px;'+
'            *left: 12px;'+
'            width: 240px;'+
'            height: 15px;'+
'            padding: 7px;'+
'            overflow: hidden;'+
'            background: transparent;'+
'            background-image: -o-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: -moz-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: -ms-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
''+
'            background-image: -webkit-gradient('+
'                  linear,'+
'                  left bottom,'+
'                  left top,'+
'                  color-stop(0, rgba(0,0,0)),'+
'                  color-stop(1, rgba(0,0,0))'+
'            );'+
'            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000, endColorstr=#7F000000);'+
''+
'            -webkit-transition: height 0.2s ease-in-out;'+
'            -o-transition: height 0.2s ease-in-out;'+
'            -moz-transition: height 0.2s ease-in-out;'+
'            transition: height 0.2s ease-in-out;'+
''+
'      }'+
'      .format-300x250-exp-4-6 .dad.dad-video .dad-info h5, .format-300x250-exp-4-6 .dad.dad-video .dad-info p { '+
'        filter: 0; '+
'      }'+
'      .format-300x250-exp-4-6 .dad.dad-video:hover .dad-info {'+
'        height: 65px;'+
'      }'+
'      .format-300x250-exp-4-6 .dad.dad-video .play-icon { top: 79px; left: 104px; }'+
'      .format-300x250-exp-4-6 .dad.dad-video a img { left: -111px; top: -76px; }'+
'      .format-300x250-exp-4-6 .dad.dad-video:hover .video-thumb .play-icon { background-position: 0 0; }'+
'      .format-300x250-exp-4-6 .dad.dad-video h5 a { color: #FFF; }'+
'      .format-300x250-exp-4-6 .dad.dad-video .description a { height: 44px; margin-top: 5px; color: #CCC; }'+
'      .format-300x250-exp-4-6 .dad.dad-video { margin-top: 0; margin-bottom: 0; padding-top: 3px; }'+
''+
'      /* Keeping 4-7 css separate for readability */'+
'      .format-300x250-exp-4-7 .dad { padding: 5px 10px 12px 10px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li a { margin: 0; height: auto; width: auto; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li .play-icon { height: 50px; width: 50px; position: absolute; top: 50px; left: 115px; background: transparent url(https://static.licdn.com/scds/common/u/images/apps/sasbe/circle_plate_play_50x50.png); }'+
'      .format-300x250-exp-4-7 .dad.dad-video li:hover .play-icon { background-position: 0 -50px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video { position: relative; height: 208px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video ul { position: absolute; padding: 0; margin: 155px 0 0 0; height: 51px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li { float: left; list-style-type: none; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.logo-li { '+
'            height: 51px; '+
'            width: 90px; '+
'            opacity: 0.4; '+
'            filter:alpha(opacity=40);'+
'            *zoom: 1;'+
'            -webkit-transition: opacity 0.2s ease-in-out;'+
'            -o-transition: opacity 0.2s ease-in-out;'+
'            -moz-transition: opacity 0.2s ease-in-out;'+
'            transition: opacity 0.2s ease-in-out; '+
'      }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.logo-li a { height: 51px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.logo-li.active { opacity: 1; filter:alpha(opacity=100); *zoom: 1; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.logo-first { margin-right: 5px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.logo-last { margin-left: 5px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video .dad-info { height: 150px; width: 280px; position: absolute; left: 10px; top: 5px; overflow: hidden; }'+
'      .format-300x250-exp-4-7 .dad.dad-video .dad-info ul { position: absolute; left: 0; margin: 0; height: 150px; width: 840px;}'+
'      .format-300x250-exp-4-7 .dad.dad-video .dad-info li.info { position: relative; width: 280px; height: 150px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li img { box-shadow: none; max-height: none; filter: 0; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.logo-li img { max-width: 90px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video li.info img { max-width: 280px; }'+
'      .format-300x250-exp-4-7 .dad.dad-video .video-thumb img { opacity: 1; }'+
'      .format-300x250-exp-4-7 .dad.dad-video .ad-info { '+
'            position: absolute;'+
'            bottom: 0;'+
'            *left: 0;'+
'            width: 266px;'+
'            height: 15px;'+
'            padding: 7px;'+
'            overflow: hidden;'+
'            background: transparent;'+
'            background-image: -o-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: -moz-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: -ms-linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
'            background-image: linear-gradient(top, rgba(0,0,0,0.278431) 0%, rgba(0,0,0,0.8) 100%);'+
''+
'            background-image: -webkit-gradient('+
'                  linear,'+
'                  left bottom,'+
'                  left top,'+
'                  color-stop(0, rgba(0,0,0)),'+
'                  color-stop(1, rgba(0,0,0))'+
'            );'+
'            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000, endColorstr=#7F000000);'+
'      }'+
'      .format-300x250-exp-4-7 .dad.dad-video .ad-info h5 { filter: 0; }'+
'      .format-300x250-exp-4-7 .dad.dad-video .ad-info h5 a { color: #FFF; }'+
'      .format-300x250-exp-4-7 .dad.dad-video .ad-info p { margin-top: 10px; }'+
'      .format-300x250-exp-4-7 .request-info.hidden { display: none; }'+
''+
'      .format-300x250-exp-4-8 .dad { border: 1px solid #FFF; padding: 0 0 0 10px; width: 288px; }'+
'      .format-300x250-exp-4-8 .dad .more { background: #EEE; border-left: 1px solid #FBFBFB; top: 0; right: 0; visibility: hidden; }'+
'      .format-300x250-exp-4-8 .dad .more a { padding: 25px 10px 25px 9px; }'+
'      .format-300x250-exp-4-8 .dad .dad-info { height: 100%; padding: 0; margin-right: 25px; }'+
'      .format-300x250-exp-4-8 .dad.first { border: 1px solid #EEE; }'+
'      .format-300x250-exp-4-8 .dad.first .more { visibility: visible; }'+
'      .format-300x250-exp-4-8 .dad.first .dad-info { border-right: 1px solid #EEE; }'+
'      .format-300x250-exp-4-8:hover .dad { border: 1px solid #FFF; }'+
'      .format-300x250-exp-4-8:hover .dad .more { visibility: hidden; }'+
'      .format-300x250-exp-4-8:hover .dad .dad-info { border-width: 0; }'+
'      .format-300x250-exp-4-8 .dad:hover { background: #FFF; border: 1px solid #EEE; }'+
'      .format-300x250-exp-4-8 .dad:hover .more { visibility: visible; }'+
'      .format-300x250-exp-4-8 .dad:hover .dad-info { border-right: 1px solid #EEE; }'+
''+
'      .format-160x600-exp-4-5 .section { border: 1px solid #BBB; }'+
'      .format-160x600-exp-4-5 .dad { height: 150px; padding: 10px 10px 9px; border-bottom: 1px solid #BBB;}'+
'      .format-160x600-exp-4-5 .dad a.logo { float: none; margin-left: 30px;}'+
'      .format-160x600-exp-4-5 .dad img { border: 1px solid #CCC;}'+
'      .format-160x600-exp-4-5 .footer { background-color: #EEE; border-collapse: separate; padding: 6px 0; }'+
'      .format-160x600-exp-4-5 h6 a { color: #555; font-size: 11px; font-weight: bold; text-transform: none; }'+
'      .format-160x600-exp-4-5 p a { font-size: 11px; }'+
''+
'      .format-160x600-exp-4-6 .section { height: 585px; }'+
'      .format-160x600-exp-4-6 .dad { max-height: 170px; height: auto; padding: 5px 0 0; border: 1px solid #BBB; margin-bottom: 10px; }'+
'      .format-160x600-exp-4-6 .dad h5 { padding: 0 5px; }'+
'      .format-160x600-exp-4-6 .dad a.logo { float: none; margin-left: 30px;}'+
'      .format-160x600-exp-4-6 .dad img { border: 1px solid #CCC;}'+
'      .format-160x600-exp-4-6 .footer { border: 1px solid #BBB; padding: 6px 0; }'+
'      .format-160x600-exp-4-6 h6 { padding-left: 5px; }'+
'      .format-160x600-exp-4-6 h6 a { color: #555; font-size: 11px; font-weight: bold; text-transform: none; }'+
'      .format-160x600-exp-4-6 p.description { display: block; border-top: 1px solid #BBB; margin: 0; background-color: #F9F9F9; padding: 5px; text-align: center; }'+
'      .format-160x600-exp-4-6 p a { font-size: 11px; }';
document.body.appendChild(css);

$('#ad-right-top').html('<div id="container" class="formats format-300x250-exp-4-1">'+
'          <div id="member-ads" class="member-ads">'+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
'<div class="section ads">'+
''+
'    <div class="header">'+
'      <h4>'+
'        <a href="https://www.linkedin.com/ads/start?src=en-all-ad-li-ads_by_li&amp;trk=ads_by_li&amp;utm_medium=ad&amp;utm_source=li&amp;utm_campaign=ads_by_li" target="_blank">Ads You May Be Interested In</a>'+
'      </h4>'+
'    </div>'+
''+
'  <div class="content">'+
''+
'    <div class="dad dad-0 wilogo first">'+
''+
''+
'      <a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_vgtI54BjfIWq0eAuSht8F5s3G6f4eqVGINyBg-hFZabct27i-6qXX_foFoxhCAEoycI1M7pxnI2pKdyNL0IzW_pv9q_oSzsD573e3ASf18zfBNsLEqu1LvBHM9pVOXr4qJtsABqJu0Ya5AATQPsCUn3rD2YcKs7D2zg_p0-rG5544nEJqttHwMAWhda4R2OseiKkxanOj7d-aLaSEWQ-PBdEy8L42tisYX0O8T-v9WqcWTS3a3tBgnX0MXDkhwqb8Eqrtu2Ftoj2ZYM93mU9BBGyJ6lOs79jJ1NdCjVUNMn2UCgD1f_zO1ZZrZ5C2zU_A2HCFEpMK3Pn7YkFFx0GNDH1UEUgPk0S_gGtRwmVWPliwuyX80DLBZvtghrQZtOGrtZIBf66DH2Rkw8w0E4wWG0N4zHRMvF3a4KSchM5FjeYwETE67yqsNhOgmvYGEUCb10r3lq25wpzx25ej_uuTbwphqKs7R4NtBPGYPLMLMmzX7Ahnp0KB1m1lJgKFpAH6LqLXAhLlIY-6qF9J5sSz1w97neVkPrWJOSB14WBP8JPiLixJS-dKjJyTDZJeoONqwvVZ0YYYZctnq5hdxFWwtfgMB5fUOiVQB3Gp3IqavjboVQc1JeQ10jTfNP77nAj1v0OwdM8gvnAA_fECn2le03DZpKwyhKiotpIvNBc1Wfsga9TxyaAVbPmmq3QekVCie7Wz5WUO9qYYoBQ_bHp0FfxROOD_5QbfdeIkIsYHpJJGxkcnnwaxsp8xZ1OvQobzaYoxu2DcXBch9hs1ac0Zi3qFLoVFDtNCsI6GGvbVu6j6vHZ-uqwXcBhbPAXrCOU" target="_blank" class="logo">'+
'        <img src="https://media.licdn.com/mpr/mpr/shrink_50_50/p/2/000/203/0ec/2e23174.png" height="50" width="50" alt="New Relic, Inc.">'+
'      </a>'+
'          '+
''+
''+
'    <h5 class="headline"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_vgtI54BjfIWq0eAuSht8F5s3G6f4eqVGINyBg-hFZabct27i-6qXX_foFoxhCAEoycI1M7pxnI2pKdyNL0IzW_pv9q_oSzsD573e3ASf18zfBNsLEqu1LvBHM9pVOXr4qJtsABqJu0Ya5AATQPsCUn3rD2YcKs7D2zg_p0-rG5544nEJqttHwMAWhda4R2OseiKkxanOj7d-aLaSEWQ-PBdEy8L42tisYX0O8T-v9WqcWTS3a3tBgnX0MXDkhwqb8Eqrtu2Ftoj2ZYM93mU9BBGyJ6lOs79jJ1NdCjVUNMn2UCgD1f_zO1ZZrZ5C2zU_A2HCFEpMK3Pn7YkFFx0GNDH1UEUgPk0S_gGtRwmVWPliwuyX80DLBZvtghrQZtOGrtZIBf66DH2Rkw8w0E4wWG0N4zHRMvF3a4KSchM5FjeYwETE67yqsNhOgmvYGEUCb10r3lq25wpzx25ej_uuTbwphqKs7R4NtBPGYPLMLMmzX7Ahnp0KB1m1lJgKFpAH6LqLXAhLlIY-6qF9J5sSz1w97neVkPrWJOSB14WBP8JPiLixJS-dKjJyTDZJeoONqwvVZ0YYYZctnq5hdxFWwtfgMB5fUOiVQB3Gp3IqavjboVQc1JeQ10jTfNP77nAj1v0OwdM8gvnAA_fECn2le03DZpKwyhKiotpIvNBc1Wfsga9TxyaAVbPmmq3QekVCie7Wz5WUO9qYYoBQ_bHp0FfxROOD_5QbfdeIkIsYHpJJGxkcnnwaxsp8xZ1OvQobzaYoxu2DcXBch9hs1ac0Zi3qFLoVFDtNCsI6GGvbVu6j6vHZ-uqwXcBhbPAXrCOU" target="_blank">Looking for a quick source of brains?</a></h5>'+
''+
''+
'    <p class="description"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_vgtI54BjfIWq0eAuSht8F5s3G6f4eqVGINyBg-hFZabct27i-6qXX_foFoxhCAEoycI1M7pxnI2pKdyNL0IzW_pv9q_oSzsD573e3ASf18zfBNsLEqu1LvBHM9pVOXr4qJtsABqJu0Ya5AATQPsCUn3rD2YcKs7D2zg_p0-rG5544nEJqttHwMAWhda4R2OseiKkxanOj7d-aLaSEWQ-PBdEy8L42tisYX0O8T-v9WqcWTS3a3tBgnX0MXDkhwqb8Eqrtu2Ftoj2ZYM93mU9BBGyJ6lOs79jJ1NdCjVUNMn2UCgD1f_zO1ZZrZ5C2zU_A2HCFEpMK3Pn7YkFFx0GNDH1UEUgPk0S_gGtRwmVWPliwuyX80DLBZvtghrQZtOGrtZIBf66DH2Rkw8w0E4wWG0N4zHRMvF3a4KSchM5FjeYwETE67yqsNhOgmvYGEUCb10r3lq25wpzx25ej_uuTbwphqKs7R4NtBPGYPLMLMmzX7Ahnp0KB1m1lJgKFpAH6LqLXAhLlIY-6qF9J5sSz1w97neVkPrWJOSB14WBP8JPiLixJS-dKjJyTDZJeoONqwvVZ0YYYZctnq5hdxFWwtfgMB5fUOiVQB3Gp3IqavjboVQc1JeQ10jTfNP77nAj1v0OwdM8gvnAA_fECn2le03DZpKwyhKiotpIvNBc1Wfsga9TxyaAVbPmmq3QekVCie7Wz5WUO9qYYoBQ_bHp0FfxROOD_5QbfdeIkIsYHpJJGxkcnnwaxsp8xZ1OvQobzaYoxu2DcXBch9hs1ac0Zi3qFLoVFDtNCsI6GGvbVu6j6vHZ-uqwXcBhbPAXrCOU" target="_blank">Boost App Performance w/ Complete App Visibility. Free Trial! Free T-Shirt!</a></p>'+
'          '+
''+
''+
''+
'<p class="more"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_vgtI54BjfIWq0eAuSht8F5s3G6f4eqVGINyBg-hFZabct27i-6qXX_foFoxhCAEoycI1M7pxnI2pKdyNL0IzW_pv9q_oSzsD573e3ASf18zfBNsLEqu1LvBHM9pVOXr4qJtsABqJu0Ya5AATQPsCUn3rD2YcKs7D2zg_p0-rG5544nEJqttHwMAWhda4R2OseiKkxanOj7d-aLaSEWQ-PBdEy8L42tisYX0O8T-v9WqcWTS3a3tBgnX0MXDkhwqb8Eqrtu2Ftoj2ZYM93mU9BBGyJ6lOs79jJ1NdCjVUNMn2UCgD1f_zO1ZZrZ5C2zU_A2HCFEpMK3Pn7YkFFx0GNDH1UEUgPk0S_gGtRwmVWPliwuyX80DLBZvtghrQZtOGrtZIBf66DH2Rkw8w0E4wWG0N4zHRMvF3a4KSchM5FjeYwETE67yqsNhOgmvYGEUCb10r3lq25wpzx25ej_uuTbwphqKs7R4NtBPGYPLMLMmzX7Ahnp0KB1m1lJgKFpAH6LqLXAhLlIY-6qF9J5sSz1w97neVkPrWJOSB14WBP8JPiLixJS-dKjJyTDZJeoONqwvVZ0YYYZctnq5hdxFWwtfgMB5fUOiVQB3Gp3IqavjboVQc1JeQ10jTfNP77nAj1v0OwdM8gvnAA_fECn2le03DZpKwyhKiotpIvNBc1Wfsga9TxyaAVbPmmq3QekVCie7Wz5WUO9qYYoBQ_bHp0FfxROOD_5QbfdeIkIsYHpJJGxkcnnwaxsp8xZ1OvQobzaYoxu2DcXBch9hs1ac0Zi3qFLoVFDtNCsI6GGvbVu6j6vHZ-uqwXcBhbPAXrCOU" target="_blank">›</a></p>'+
''+
''+
''+
'    </div>'+
''+
''+
'    <div class="dad dad-1 wilogo">'+
''+
''+
'      <a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_0jOosKaoFfq2IIaY8YaHutGvUcPNTstiWtlY6DQak08cSexVhyY7v4eby8h2gdEqoo8IGIxv6R4JGjHyJHK1z_eyRyWWYvU_nwCKl0FDy3tdqUdf-6yGSZ-luX7RDtpC0p7BmVHB0V_ZKt09dqW8_c5JPMaIUTigyISGTyI07iO2v-oJlb_vZXVl7VU8QDKVS8t9Hgt3VW4J99CLnY1Ez8Jfz2RnhsfAY8SXGY7tFmw24keXkpzJAFYvqAx0d6lCdW56wcHZkz2ReHm_n2kcxaPeX-SKPsP5Kn7-yNeMyeoWiYEPLrJ60lXgeanmIWXG9ZQ_QiJQJCZDB78TkJWoGmZ3zWQNa3-vzRcJzTMHXon5Tw-nckZxODUNpL8y1Ssih7HcC_feFE69zNcJgXKapZgotdhJ2WbB7b5aGcHqsyPvCgesTGfz3QquQ7Ub8-MmHa0Oz-VPtiHRuGHGnlmBUdiWLxDh8topAWoR4_N6-Wzaht3UGVc0yTgvk_JNYNQcvrnaqKnSpDazbJLN59HpuO9wzKqiYXTo89t-PVmyMhO3eyzj8co5rHqV0hiwcEdauj6vHZ-uqwXcBhbPAXrCOU" target="_blank" class="logo">'+
'        <img src="https://media.licdn.com/mpr/mpr/shrink_50_50/p/1/000/1fd/33e/2a2e7d8.png" height="50" width="50" alt="Geekli.st">'+
'      </a>'+
'          '+
''+
''+
'    <h5 class="headline"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_0jOosKaoFfq2IIaY8YaHutGvUcPNTstiWtlY6DQak08cSexVhyY7v4eby8h2gdEqoo8IGIxv6R4JGjHyJHK1z_eyRyWWYvU_nwCKl0FDy3tdqUdf-6yGSZ-luX7RDtpC0p7BmVHB0V_ZKt09dqW8_c5JPMaIUTigyISGTyI07iO2v-oJlb_vZXVl7VU8QDKVS8t9Hgt3VW4J99CLnY1Ez8Jfz2RnhsfAY8SXGY7tFmw24keXkpzJAFYvqAx0d6lCdW56wcHZkz2ReHm_n2kcxaPeX-SKPsP5Kn7-yNeMyeoWiYEPLrJ60lXgeanmIWXG9ZQ_QiJQJCZDB78TkJWoGmZ3zWQNa3-vzRcJzTMHXon5Tw-nckZxODUNpL8y1Ssih7HcC_feFE69zNcJgXKapZgotdhJ2WbB7b5aGcHqsyPvCgesTGfz3QquQ7Ub8-MmHa0Oz-VPtiHRuGHGnlmBUdiWLxDh8topAWoR4_N6-Wzaht3UGVc0yTgvk_JNYNQcvrnaqKnSpDazbJLN59HpuO9wzKqiYXTo89t-PVmyMhO3eyzj8co5rHqV0hiwcEdauj6vHZ-uqwXcBhbPAXrCOU" target="_blank">Join the fastest growing horde in the Bay Area!</a></h5>'+
''+
''+
'    <p class="description"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_0jOosKaoFfq2IIaY8YaHutGvUcPNTstiWtlY6DQak08cSexVhyY7v4eby8h2gdEqoo8IGIxv6R4JGjHyJHK1z_eyRyWWYvU_nwCKl0FDy3tdqUdf-6yGSZ-luX7RDtpC0p7BmVHB0V_ZKt09dqW8_c5JPMaIUTigyISGTyI07iO2v-oJlb_vZXVl7VU8QDKVS8t9Hgt3VW4J99CLnY1Ez8Jfz2RnhsfAY8SXGY7tFmw24keXkpzJAFYvqAx0d6lCdW56wcHZkz2ReHm_n2kcxaPeX-SKPsP5Kn7-yNeMyeoWiYEPLrJ60lXgeanmIWXG9ZQ_QiJQJCZDB78TkJWoGmZ3zWQNa3-vzRcJzTMHXon5Tw-nckZxODUNpL8y1Ssih7HcC_feFE69zNcJgXKapZgotdhJ2WbB7b5aGcHqsyPvCgesTGfz3QquQ7Ub8-MmHa0Oz-VPtiHRuGHGnlmBUdiWLxDh8topAWoR4_N6-Wzaht3UGVc0yTgvk_JNYNQcvrnaqKnSpDazbJLN59HpuO9wzKqiYXTo89t-PVmyMhO3eyzj8co5rHqV0hiwcEdauj6vHZ-uqwXcBhbPAXrCOU" target="_blank">Geeklist is where developers brag in peace about your great achievements</a></p>'+
'          '+
''+
''+
''+
'<p class="more"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_0jOosKaoFfq2IIaY8YaHutGvUcPNTstiWtlY6DQak08cSexVhyY7v4eby8h2gdEqoo8IGIxv6R4JGjHyJHK1z_eyRyWWYvU_nwCKl0FDy3tdqUdf-6yGSZ-luX7RDtpC0p7BmVHB0V_ZKt09dqW8_c5JPMaIUTigyISGTyI07iO2v-oJlb_vZXVl7VU8QDKVS8t9Hgt3VW4J99CLnY1Ez8Jfz2RnhsfAY8SXGY7tFmw24keXkpzJAFYvqAx0d6lCdW56wcHZkz2ReHm_n2kcxaPeX-SKPsP5Kn7-yNeMyeoWiYEPLrJ60lXgeanmIWXG9ZQ_QiJQJCZDB78TkJWoGmZ3zWQNa3-vzRcJzTMHXon5Tw-nckZxODUNpL8y1Ssih7HcC_feFE69zNcJgXKapZgotdhJ2WbB7b5aGcHqsyPvCgesTGfz3QquQ7Ub8-MmHa0Oz-VPtiHRuGHGnlmBUdiWLxDh8topAWoR4_N6-Wzaht3UGVc0yTgvk_JNYNQcvrnaqKnSpDazbJLN59HpuO9wzKqiYXTo89t-PVmyMhO3eyzj8co5rHqV0hiwcEdauj6vHZ-uqwXcBhbPAXrCOU" target="_blank">›</a></p>'+
''+
''+
''+
'    </div>'+
''+
''+
'    <div class="dad dad-2 wilogo">'+
''+
''+
'      <a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_zMVzY3ERoGLS62SuZ-q7_Aylhl-9urvl8j10buLQ_RREzOKFM8BYeQjRI2_QXdeKQ9xnvJr-5acg87Gen-kHBtyBbvbZHIUrf4fOffOr2RlfL1h0UwfP7xVE17W1ZyvEgF1ZVRBbMWSe6TUvHsL3dubEFQX-ouKr8s_6bDkEKmS9ygElDwbZi3DSH4u0nuRI-JZ47-yjrGpEog9zO3rqNKS3NNH9g8G75P5-0HYQdKg5KUrwRenawgNfamSfHzMg65K9t_6pp98ZLERzs0eVbuyxkRIJoaMM-J7Evq1JJ0xvSGt8zyG-DZdsB2nWuDuVhsrgDtXLgNT2BfTEoPEgxz1KGoac1k36Dfmud0poSeugRq91UjBYQnhnSPMC5_I53uYcaIiUkJnwK2VgRkR6yxglC2KzIDKLfcfKC5hQs5nXc6moo12eeZ5sl8okSrUGxnt-86TTK8WOlgGA2MgMMkrwX5JqF-cOeCpDOAscmfDJKmK8kbgvKwlRkK8PjuhR6GVUdaVwWO3ST4YYoc0u3WFW0dWd95743kS5ub9-0rFshu6hzrxXGZlURmxfAyAOz4gqTYYPG4MWNDsdi7x7-Nv2L8z0isi7nxuwra70uZImSjMxFjWTjx7nVX96Smg515TbW0vVSviP6foboP5IfTOOuBlGjMZaCMCNKuT_dm-j6vHZ-uqwXcBhbPAXrCOU" target="_blank" class="logo">'+
'        <img src="https://media.licdn.com/mpr/mpr/shrink_50_50/p/4/000/164/21e/179b01f.png" height="50" width="50" alt="Deseret Book">'+
'      </a>'+
'          '+
''+
''+
'    <h5 class="headline"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_zMVzY3ERoGLS62SuZ-q7_Aylhl-9urvl8j10buLQ_RREzOKFM8BYeQjRI2_QXdeKQ9xnvJr-5acg87Gen-kHBtyBbvbZHIUrf4fOffOr2RlfL1h0UwfP7xVE17W1ZyvEgF1ZVRBbMWSe6TUvHsL3dubEFQX-ouKr8s_6bDkEKmS9ygElDwbZi3DSH4u0nuRI-JZ47-yjrGpEog9zO3rqNKS3NNH9g8G75P5-0HYQdKg5KUrwRenawgNfamSfHzMg65K9t_6pp98ZLERzs0eVbuyxkRIJoaMM-J7Evq1JJ0xvSGt8zyG-DZdsB2nWuDuVhsrgDtXLgNT2BfTEoPEgxz1KGoac1k36Dfmud0poSeugRq91UjBYQnhnSPMC5_I53uYcaIiUkJnwK2VgRkR6yxglC2KzIDKLfcfKC5hQs5nXc6moo12eeZ5sl8okSrUGxnt-86TTK8WOlgGA2MgMMkrwX5JqF-cOeCpDOAscmfDJKmK8kbgvKwlRkK8PjuhR6GVUdaVwWO3ST4YYoc0u3WFW0dWd95743kS5ub9-0rFshu6hzrxXGZlURmxfAyAOz4gqTYYPG4MWNDsdi7x7-Nv2L8z0isi7nxuwra70uZImSjMxFjWTjx7nVX96Smg515TbW0vVSviP6foboP5IfTOOuBlGjMZaCMCNKuT_dm-j6vHZ-uqwXcBhbPAXrCOU" target="_blank">From fingers to brains in 30 minutes!</a></h5>'+
''+
''+
'    <p class="description"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_zMVzY3ERoGLS62SuZ-q7_Aylhl-9urvl8j10buLQ_RREzOKFM8BYeQjRI2_QXdeKQ9xnvJr-5acg87Gen-kHBtyBbvbZHIUrf4fOffOr2RlfL1h0UwfP7xVE17W1ZyvEgF1ZVRBbMWSe6TUvHsL3dubEFQX-ouKr8s_6bDkEKmS9ygElDwbZi3DSH4u0nuRI-JZ47-yjrGpEog9zO3rqNKS3NNH9g8G75P5-0HYQdKg5KUrwRenawgNfamSfHzMg65K9t_6pp98ZLERzs0eVbuyxkRIJoaMM-J7Evq1JJ0xvSGt8zyG-DZdsB2nWuDuVhsrgDtXLgNT2BfTEoPEgxz1KGoac1k36Dfmud0poSeugRq91UjBYQnhnSPMC5_I53uYcaIiUkJnwK2VgRkR6yxglC2KzIDKLfcfKC5hQs5nXc6moo12eeZ5sl8okSrUGxnt-86TTK8WOlgGA2MgMMkrwX5JqF-cOeCpDOAscmfDJKmK8kbgvKwlRkK8PjuhR6GVUdaVwWO3ST4YYoc0u3WFW0dWd95743kS5ub9-0rFshu6hzrxXGZlURmxfAyAOz4gqTYYPG4MWNDsdi7x7-Nv2L8z0isi7nxuwra70uZImSjMxFjWTjx7nVX96Smg515TbW0vVSviP6foboP5IfTOOuBlGjMZaCMCNKuT_dm-j6vHZ-uqwXcBhbPAXrCOU" target="_blank">Ferevo offers a highly targeted and effective way to market via Text/SMS.</a></p>'+
'          '+
''+
''+
''+
'<p class="more"><a href="https://ad.doubleclick.net/click;h=v8/3e07/3/0/*/d;270052761;1-0;1;13401948;4307-300/250;50928422/50899270/1;u=0Od4VgkmNCt39eqBlljjBe;~aopt=2/2/65/0;~sscs=?https://www.linkedin.com/csp/crd?v=1&amp;cs=0_zMVzY3ERoGLS62SuZ-q7_Aylhl-9urvl8j10buLQ_RREzOKFM8BYeQjRI2_QXdeKQ9xnvJr-5acg87Gen-kHBtyBbvbZHIUrf4fOffOr2RlfL1h0UwfP7xVE17W1ZyvEgF1ZVRBbMWSe6TUvHsL3dubEFQX-ouKr8s_6bDkEKmS9ygElDwbZi3DSH4u0nuRI-JZ47-yjrGpEog9zO3rqNKS3NNH9g8G75P5-0HYQdKg5KUrwRenawgNfamSfHzMg65K9t_6pp98ZLERzs0eVbuyxkRIJoaMM-J7Evq1JJ0xvSGt8zyG-DZdsB2nWuDuVhsrgDtXLgNT2BfTEoPEgxz1KGoac1k36Dfmud0poSeugRq91UjBYQnhnSPMC5_I53uYcaIiUkJnwK2VgRkR6yxglC2KzIDKLfcfKC5hQs5nXc6moo12eeZ5sl8okSrUGxnt-86TTK8WOlgGA2MgMMkrwX5JqF-cOeCpDOAscmfDJKmK8kbgvKwlRkK8PjuhR6GVUdaVwWO3ST4YYoc0u3WFW0dWd95743kS5ub9-0rFshu6hzrxXGZlURmxfAyAOz4gqTYYPG4MWNDsdi7x7-Nv2L8z0isi7nxuwra70uZImSjMxFjWTjx7nVX96Smg515TbW0vVSviP6foboP5IfTOOuBlGjMZaCMCNKuT_dm-j6vHZ-uqwXcBhbPAXrCOU" target="_blank">›</a></p>'+
''+
''+
''+
'    </div>'+
''+
'      '+
''+
''+
'  </div>'+
''+
''+
'</div>'+
''+
'          </div>'+
'        </div>');

$('.insights-wvmp>h3>a').text('Who\'s Hunting You Down');

$($('.background-experience').children()[1]).find('h4>a').text('Zombie');
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

