const _0xd9da2b=_0x4782;(function(_0x3dfee7,_0x51f051){const _0x92fd97=_0x4782,_0x5c5980=_0x3dfee7();while(!![]){try{const _0x3dd215=-parseInt(_0x92fd97(0x89))/0x1+-parseInt(_0x92fd97(0x80))/0x2*(parseInt(_0x92fd97(0x87))/0x3)+parseInt(_0x92fd97(0x8a))/0x4+-parseInt(_0x92fd97(0x70))/0x5*(parseInt(_0x92fd97(0x6f))/0x6)+-parseInt(_0x92fd97(0x8f))/0x7*(parseInt(_0x92fd97(0x97))/0x8)+-parseInt(_0x92fd97(0x8e))/0x9+parseInt(_0x92fd97(0x7c))/0xa;if(_0x3dd215===_0x51f051)break;else _0x5c5980['push'](_0x5c5980['shift']());}catch(_0x5ebaa8){_0x5c5980['push'](_0x5c5980['shift']());}}}(_0x45bc,0xbaa14));import{unlinkSync,readFileSync}from'fs';import{join}from'path';import{exec}from'child_process';function _0x45bc(){const _0x384f7a=['-af\x20volume=12','fast','random','tupai','28158320uNkvja','-filter:a\x20atempo=1.06,asetrate=44100*1.25','quoted','command','42800EwOJBD','-filter:v\x20\x22minterpolate=\x27mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\x27\x22','-af\x20acrusher=.1:1:64:0:log','-filter:a\x20\x22atempo=1.6,asetrate=22100\x22','../tmp/','sendFile','ffmpeg\x20-i\x20','15lGLQfE','bass','1018961MWyCyq','5917532EPLdxP','test','map','download','8034102yKGjoP','1106BwWuLv','\x20[vn]','*Reply\x20your\x20audio\x20or\x20vn\x20that\x20will\x20be\x20modified,\x20using\x20the\x20command\x20','tags','-filter:a\x20\x22atempo=0.7,asetrate=44100\x22','msg','chat','blown','4856SpzFwU','robot','floor','help','smooth','audioMessage','2832468NEydzX','15QwbQoG','-af\x20equalizer=f=94:width_type=o:width=2:g=30','-filter_complex\x20\x22areverse\x22','-filter:a\x20\x22atempo=0.5,asetrate=65100\x22','-filter:a\x20\x22atempo=1.63,asetrate=44100\x22','slow','audio','mimetype'];_0x45bc=function(){return _0x384f7a;};return _0x45bc();}let handler=async(_0x42130b,{conn:_0x4d4ec5,args:_0x477596,__dirname:_0x3bcd5d,usedPrefix:_0x599cdd,command:_0x56face})=>{const _0x3d92c9=_0x4782;try{let _0x5df916=_0x42130b[_0x3d92c9(0x7e)]?_0x42130b[_0x3d92c9(0x7e)]:_0x42130b,_0x2e9d08=(_0x42130b['quoted']?_0x42130b[_0x3d92c9(0x7e)]:_0x42130b[_0x3d92c9(0x94)])[_0x3d92c9(0x77)]||'',_0x540eb8;if(/bass/['test'](_0x56face))_0x540eb8=_0x3d92c9(0x71);if(/blown/['test'](_0x56face))_0x540eb8=_0x3d92c9(0x82);if(/deep/[_0x3d92c9(0x8b)](_0x56face))_0x540eb8='-af\x20atempo=4/4,asetrate=44500*2/3';if(/earrape/['test'](_0x56face))_0x540eb8=_0x3d92c9(0x78);if(/fast/[_0x3d92c9(0x8b)](_0x56face))_0x540eb8=_0x3d92c9(0x74);if(/fat/[_0x3d92c9(0x8b)](_0x56face))_0x540eb8=_0x3d92c9(0x83);if(/nightcore/[_0x3d92c9(0x8b)](_0x56face))_0x540eb8=_0x3d92c9(0x7d);if(/reverse/['test'](_0x56face))_0x540eb8=_0x3d92c9(0x72);if(/robot/[_0x3d92c9(0x8b)](_0x56face))_0x540eb8='-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22';if(/slow/['test'](_0x56face))_0x540eb8=_0x3d92c9(0x93);if(/smooth/[_0x3d92c9(0x8b)](_0x56face))_0x540eb8=_0x3d92c9(0x81);if(/tupai|squirrel|chipmunk/['test'](_0x56face))_0x540eb8=_0x3d92c9(0x73);if(/audio/[_0x3d92c9(0x8b)](_0x2e9d08)){let _0x22c849=getRandom('.mp3'),_0x2d8a0f=join(_0x3bcd5d,_0x3d92c9(0x84)+_0x22c849),_0x5e8849=await _0x5df916[_0x3d92c9(0x8d)](!![]);exec(_0x3d92c9(0x86)+_0x5e8849+'\x20'+_0x540eb8+'\x20'+_0x2d8a0f,async(_0x1c698d,_0x3eb4e7,_0x20dee3)=>{const _0x2ade70=_0x3d92c9;await unlinkSync(_0x5e8849);if(_0x1c698d)throw'Error';let _0x8fc301=await readFileSync(_0x2d8a0f);_0x4d4ec5[_0x2ade70(0x85)](_0x42130b[_0x2ade70(0x95)],_0x8fc301,_0x22c849,null,_0x42130b,!![],{'type':_0x2ade70(0x9c),'ptt':!![]});});}else throw _0x3d92c9(0x91)+(_0x599cdd+_0x56face)+'*';}catch(_0x2f0e5c){throw _0x2f0e5c;}};handler[_0xd9da2b(0x9a)]=[_0xd9da2b(0x88),_0xd9da2b(0x96),'deep','earrape',_0xd9da2b(0x79),'fat','nightcore','reverse',_0xd9da2b(0x98),_0xd9da2b(0x75),_0xd9da2b(0x9b),_0xd9da2b(0x7b)][_0xd9da2b(0x8c)](_0x3375c0=>_0x3375c0+_0xd9da2b(0x90)),handler[_0xd9da2b(0x92)]=[_0xd9da2b(0x76)],handler[_0xd9da2b(0x7f)]=/^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk)$/i;export default handler;function _0x4782(_0x3cbf8c,_0x4a3d89){const _0x45bcf1=_0x45bc();return _0x4782=function(_0x478260,_0x1aa8d7){_0x478260=_0x478260-0x6f;let _0x52f79c=_0x45bcf1[_0x478260];return _0x52f79c;},_0x4782(_0x3cbf8c,_0x4a3d89);}const getRandom=_0x1e4392=>{const _0x35bee6=_0xd9da2b;return''+Math[_0x35bee6(0x99)](Math[_0x35bee6(0x7a)]()*0x2710)+_0x1e4392;};