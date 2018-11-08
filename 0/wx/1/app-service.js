	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20181016_syb_scopedata*/global.__wcc_version__='v0.5vv_20181016_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isIphoneX']])
Z([[7],[3,'floatShare']])
Z([[6],[[7],[3,'backAppInfo']],[3,'wxAppId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wx0ee0272e9d3ef0b6'])
Z([3,'宝宝学数学比较'])
Z([3,'rgba(126,219,255,.68)'])
Z([3,'rgba(0,186,255,.5)'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'threesuccess']])
Z(z[1])
Z([[2,'||'],[[7],[3,'onesuccess']],[[7],[3,'twosuccess']]])
Z([[7],[3,'onesuccess']])
Z([[7],[3,'twosuccess']])
Z([[2,'||'],[[7],[3,'threesuccess']],[[2,'&&'],[[7],[3,'shownextmini']],[[7],[3,'navflag']]]])
Z([[2,'||'],[[7],[3,'twosuccess']],[[7],[3,'onesuccess']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/nav/nav.wxml','./pages/comparecheck/comparecheck.wxml','./pages/index/index.wxml','./pages/newindex.wxml','./pages/newindex/newindex.wxml','./pages/pluscheck/pluscheck.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(r,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
oB.wxXCkey=1
xC.wxXCkey=1
oD.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cI=_mz(z,'nav',['appId',0,'appName',1,'bubbleColor',1,'shadowColor',2],[],e,s,gg)
_(r,cI)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lK=_n('view')
_rz(z,lK,'class',0,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,1,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,2,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(lK,eN)
if(_oz(z,3,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(lK,bO)
if(_oz(z,4,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(lK,oP)
if(_oz(z,5,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(lK,xQ)
if(_oz(z,6,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(lK,oR)
if(_oz(z,7,e,s,gg)){oR.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(r,lK)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/nav/nav.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/nav/nav.wxml'] = $gwx( './components/nav/nav.wxml' );
		__wxAppCode__['pages/newindex/newindex.json'] = {"usingComponents":{"nav":"/components/nav/nav"}};
		__wxAppCode__['pages/newindex/newindex.wxml'] = $gwx( './pages/newindex/newindex.wxml' );
	
	define("components/nav/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},r=void 0,e=Page;Page=function(a){e(a.onShareAppMessage?t({},a,{onShareAppMessage:function(t){return r&&t&&("button"!==t.from||"button"===t.from&&t.target&&t.target.dataset&&t.target.dataset.isFromNav)?r:a.onShareAppMessage.call(this,t)}}):a)},module.exports={compareVersion:function(t,r){t=t.split("."),r=r.split(".");for(var e=Math.max(t.length,r.length);t.length<e;)t.push("0");for(;r.length<e;)r.push("0");for(var a=0;a<e;a++){var n=parseInt(t[a]),o=parseInt(r[a]);if(n>o)return 1;if(n<o)return-1}return 0},setShareConfig:function(t){r=t}}; 
 			}); 
		define("libs/babybus/dataAnalysis/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=require("../../../utils/dataAnalysis/config.js");r.sendToWx||console.debug("[DA] 不发往微信");var t=void 0;r.tdConfig?(console.debug("[DA] 上报TD"),t=require("../../tdweapp.js")):console.debug("[DA] 不上报TD");var o=Page;Page=function(r){o(r.onShareAppMessage?e({},r,{onShareAppMessage:function(e){var o=r.onShareAppMessage.call(this,e);try{if(o)t&&(console.debug("[DA] 上报分享",o),getApp().tdsdk.share({title:o.title,path:o.path}));else{var n=getCurrentPages();console.error("[DA] 设置了分享但是没返回有效值",n.length>0&&n[0].route)}}catch(e){console.error("上报分享失败",e)}return o}}):r)};module.exports={reportAnalytics:function(e,o){if(!e)throw new Error("参数无效，事件名为空");try{console.debug("[DA] 上报事件",e,o),r.sendToWx&&wx.reportAnalytics(e,o),t&&getApp().tdsdk.event({id:e,params:o})}catch(e){console.error("上报事件失败",e)}}}; 
 			}); 
		define("libs/babybus/network/ajax.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t,o,s,u){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"json",d=arguments[6],l=arguments[7];console.debug("#### "+o+" 开始请求...");var f=+new Date,g=r(e,t,o,s);return wx.request({url:g.url,data:g.data,header:g.header,method:u,dataType:c,success:function(t){return n(e,t,d,l,o,s)},fail:function(e){console.error("#### "+o+" 请求失败：",e),i.isConnected()&&a("request_failed",{url:o,data:JSON.stringify(s),fail_type:"请求失败",info:JSON.stringify(e)}),l&&l(new Error("网络不给力，请检查网络设置！"))},complete:function(){console.debug("#### "+o+" 请求完成！"),console.debug("#### "+o+" 本次请求耗时：",+new Date-f,"ms")}})}function r(e,t,r,n){var a=e.concatSortParams(t.getUserAgent()),s=e.encryptXxTea(a),i=e.signMd5(s,!1),u=(+new Date).toString(),c="",d="";if(n){var l=JSON.stringify(n);d=e.encryptXxTea(l),c=e.signMd5(d,!1)}var f={ProductID:t.getProductID(),HeaderMD5:i,SignatureStamp:u,EncryptType:1,AccessToken:o(),ContentMD5:c},g=e.concatSortParams(f),p=e.signMd5(g.toLocaleLowerCase(),!0);f.SignatureMD5=p;var x=e.concatSortParams(f),y={ClientHeaderInfo:s,"Content-Type":"application/octet-stream"},v=t.userAgent.Authorization;return v&&v.length>10&&(a.Authorization=v),{url:r+(r.indexOf("?")>-1?"&":"?")+x,data:d,header:y}}function n(e,t,r,n,o,s){if(200===t.statusCode)try{var i=e.decryptXxTea(t.data),u=JSON.parse(i);"0"==u.resultCode?(console.debug("#### 请求返回数据：",u.data),r&&r(u.data)):(console.error("#### "+o+" 请求失败：",{resultCode:u.resultCode,resultMessage:u.resultMessage}),a("request_failed",{url:o,data:JSON.stringify(s),fail_type:"非0结果码",info:JSON.stringify({resultCode:u.resultCode,resultMessage:u.resultMessage})}),n&&n(new Error("服务器错误（"+u.resultCode+"），请稍后再试！")))}catch(e){console.error("#### "+o+" 解密失败：",e),a("request_failed",{url:o,data:JSON.stringify(s),fail_type:"解密失败",info:JSON.stringify({result:t.data,error:e})}),n&&n(new Error("数据解析失败，请稍后再试！"))}else console.error("#### "+o+" 请求失败：",t.statusCode),a("request_failed",{url:o,data:JSON.stringify(s),fail_type:"非200状态码",info:JSON.stringify({statusCode:t.statusCode})}),n&&n(new Error("服务器异常（"+t.statusCode+"），请稍后再试！"))}function o(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:3&r|8).toString(16)})}function a(e,t){wx.reportAnalytics&&wx.reportAnalytics(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=require("./networkObserver.js"),u=function(){function r(t,n){e(this,r),this.signature=t,this.userAgent=n}return s(r,[{key:"get",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this;return new Promise(function(o,a){if(!i.isConnected())return console.debug("网络已断开，"+e+" 无需请求"),void a(new Error("当前网络已断开，请检查网络设置！"));t(n.signature,n.userAgent,e,r,"GET","json",o,a)})}},{key:"post",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this;return new Promise(function(o,a){if(!i.isConnected())return console.debug("网络已断开，"+e+" 无需请求"),void a(new Error("当前网络已断开，请检查网络设置！"));t(n.signature,n.userAgent,e,r,"POST","json",o,a)})}}],[{key:"setupAppUpdateListener",value:function(){var e=null;wx.getUpdateManager&&((e=wx.getUpdateManager()).onCheckForUpdate(function(e){console.debug("是否有新版本：",e.hasUpdate)}),e.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",confirmText:"重 启",success:function(t){t.confirm&&e.applyUpdate()}})}),e.onUpdateFailed(function(){console.error("新的版本下载失败！")}))}}]),r}();exports.default=u; 
 			}); 
		define("libs/babybus/network/cloud/ajax-cloud.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t,o,a,u){console.debug("#### "+t+" 开始请求...");var s=+new Date;return wx.request({url:t,success:function(r){return n(o?e:void 0,r,a,u,t)},fail:function(e){console.error("#### "+t+" 请求失败：",e),i.isConnected()&&r("request_failed",{url:t,data:JSON.stringify(data),fail_type:"请求失败",info:JSON.stringify(e)}),u&&u(e)},complete:function(){console.debug("#### "+t+" 请求完成！"),console.debug("#### "+t+" 本次请求耗时：",+new Date-s,"ms")}})}function n(e,t,n,o,i){if(200===t.statusCode){if(!e)return console.debug("#### 请求返回数据：",t.data),void(n&&n(t.data));try{var a=e.decryptXxTea(t.data),u=JSON.parse(a);console.debug("#### 请求返回数据：",u),n&&n(u)}catch(e){console.error("#### "+i+" 解密失败：",e),r("request_failed",{url:i,fail_type:"解密失败",info:JSON.stringify({result:t.data,error:e})}),o&&o(e)}}else console.error("#### "+i+" 请求失败：",t.statusCode),r("request_failed",{url:i,data:JSON.stringify(data),fail_type:"非200状态码",info:JSON.stringify({statusCode:t.statusCode})}),o&&o()}function r(e,t){wx.reportAnalytics&&wx.reportAnalytics(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=require("../networkObserver.js"),a=function(){function n(t){e(this,n),this.signature=t}return o(n,[{key:"get",value:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(o,a){if(!i.isConnected())return console.debug("网络已断开，"+e+" 无需请求"),void a();t(n.signature,e,r,o,a)})}}]),n}();exports.default=a; 
 			}); 
		define("libs/babybus/network/networkObserver.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n,o){if(o)if(e)switch(n){case"wifi":o.wifi&&t(o.wifi);break;case"2g":o["2g"]&&t(o["2g"]);break;case"3g":o["3g"]&&t(o["3g"]);break;case"4g":o["4g"]&&t(o["4g"])}else o.disconnected&&t(o.disconnected)}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;wx.showToast({icon:"none",title:e,duration:t})}var n=!0,o={disconnected:"网络已断开",wifi:void 0,"2g":"正在使用2g网络，有点慢","3g":"正在使用流量","4g":"正在使用流量"},i=void 0;module.exports={isConnected:function(){return n},setupNetworkStatusChangeListener:function(t,s){"function"==typeof wx.getNetworkType&&"function"==typeof wx.onNetworkStatusChange?(i=t?s||o:void 0,wx.getNetworkType({success:function(t){n="none"!==t.networkType,console.debug("当前网络状态",t.networkType,n),i&&e(n,t.networkType,i)}}),wx.onNetworkStatusChange(function(t){n=!!t.isConnected,console.debug("连接状态更新",n),i&&e(n,t.networkType,i)})):console.debug("Network status listener not support")}}; 
 			}); 
		define("libs/babybus/network/old/ajax-old.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t,o,s,i){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"json",l=arguments[6],f=arguments[7],d=arguments[8];console.debug("#### "+o+" 开始请求...");var c=+new Date;return wx.request({url:o,data:s,header:{"content-type":"application/json",ClientHeaderInfo:t.getClientHeaderInfo()},method:i,dataType:u,success:function(t){return r(e,d,t,l,f,o,s)},fail:function(e){console.error("#### "+o+" 请求失败：",e),a.isConnected()&&n("request_failed",{url:o,data:JSON.stringify(s),fail_type:"请求失败",info:JSON.stringify(e)}),f&&f(new Error("网络不给力，请检查网络设置！"))},complete:function(){console.debug("#### "+o+" 请求完成！"),console.debug("#### "+o+" 本次请求耗时：",+new Date-c,"ms")}})}function r(e,t,r,o,a,s,i){if(200===r.statusCode)if("0"!=r.data.ResultCode)console.error("#### "+s+" 服务端异常，非0结果码",r.data.ResultCode),n("request_failed",{url:s,data:JSON.stringify(i),fail_type:"非0结果码",info:JSON.stringify({resultCode:r.data.ResultCode,resultMessage:r.data.ResultMessage})}),a&&a(new Error("服务器错误（"+r.data.ResultCode+"），请稍后再试！"));else if("string"!=typeof r.data.Data)console.error("#### "+s+" 解密失败，Data不是字符串",r.data.Data),n("request_failed",{url:s,data:JSON.stringify(i),fail_type:"Data不是字符串",info:JSON.stringify({result:r.data})}),a&&a(new Error("数据异常，请稍后再试！"));else try{var u=e.decryptResult(r.data.Data);t&&(u=JSON.parse(u)),console.debug("#### 请求返回数据：",u),o&&o(u)}catch(e){console.error("#### "+s+" 解密失败：",e),n("request_failed",{url:s,data:JSON.stringify(i),fail_type:"解密失败",info:JSON.stringify({result:r.data,error:e})}),a&&a(new Error("数据解析失败，请稍后再试！"))}else console.error("#### "+s+" 请求失败：",r.statusCode),n("request_failed",{url:s,data:JSON.stringify(i),fail_type:"非200状态码",info:JSON.stringify({statusCode:r.statusCode})}),a&&a(new Error("服务器异常（"+r.statusCode+"），请稍后再试！"))}function n(e,t){wx.reportAnalytics&&wx.reportAnalytics(e,t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=require("../networkObserver.js"),s=function(){function r(t,n){e(this,r),this.signature=t,this.userAgent=n}return o(r,[{key:"get",value:function(e,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this;return new Promise(function(s,i){if(!a.isConnected())return console.debug("网络已断开，"+e+" 无需请求"),void i(new Error("当前网络已断开，请检查网络设置！"));t(o.signature,o.userAgent,e,r,"GET","json",s,i,n)})}},{key:"post",value:function(e,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this;return new Promise(function(s,i){if(!a.isConnected())return console.debug("网络已断开，"+e+" 无需请求"),void i(new Error("当前网络已断开，请检查网络设置！"));t(o.signature,o.userAgent,e,r,"POST","json",s,i,n)})}}]),r}();exports.default=s; 
 			}); 
		define("libs/babybus/network/old/signature-old.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=e(require("../../../base64.js")),u=e(require("../../../gibberish-aes.js")),i=function(){function e(r){t(this,e),this.decryptKey=r}return r(e,[{key:"decryptResult",value:function(e){return u.default.GibberishAES.size(256),u.default.GibberishAES.aesDecrypt(e,this.decryptKey)}}],[{key:"encryptClientHeaderInfo",value:function(e){return"1"+n.default.encode(JSON.stringify(e))}}]),e}();exports.default=i; 
 			}); 
		define("libs/babybus/network/old/userAgent-old.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),t=function(e){return e&&e.__esModule?e:{default:e}}(require("./signature-old.js")),r={AccountID:0,AccountIDSignature:"",AppLang:"zh",BSSID:"",CHCode:"WechatApp",CHID:0,DataType:1,DeviceLang:"zh",DeviceModel:"",DeviceType:0,IDFA:"",IDFV:"",IMEI:"",JbFlag:"",LoginCode:"",LoginSignature:"",LoginStamp:0,Mac:"",Net:1,OSType:2,OSVer:"",OpenID:"",PlatForm:21,ProductID:0,ProjectID:0,RTime:"",Screen:"1920*1080",Serial:"",SessionID:"",SimIDFA:"",Token:"",TokenType:1,VerCode:"",VerID:""},o=function(){function o(n){e(this,o),this.headerInfo=t.default.encryptClientHeaderInfo(Object.assign(r,n))}return n(o,[{key:"getClientHeaderInfo",value:function(){return this.headerInfo}}]),o}();exports.default=o; 
 			}); 
		define("libs/babybus/network/signature.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e){var n=[];for(var t in e)n.push(t);return n.sort().reverse(),n}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=e(require("../../xxtea.v3.js")),a=e(require("../../md5.min.js")),i=u.default.XxteaHelper,o=function(){function e(t,r,u){n(this,e),this.signKey=t,this.xxTeaKey=r,this.signAccountKey=u}return r(e,[{key:"signMd5",value:function(e,n){return n&&(e=e.concat(this.signKey)),(0,a.default)(e)}},{key:"signAccountMd5",value:function(e){return e=e.concat(this.signAccountKey),(0,a.default)(e)}},{key:"encryptXxTea",value:function(e){return i.encryptToBase64(e,this.xxTeaKey)}},{key:"decryptXxTea",value:function(e){return i.decryptFromBase64(e,this.xxTeaKey)}},{key:"concatSortParams",value:function(e){for(var n=t(e),r=[],u=[],a=n.length;a--;)r.push(n[a]+"="+e[n[a]]),u.push(n[a]+"="+e[n[a]]);return u.join("&")}}]),e}();exports.default=o; 
 			}); 
		define("libs/babybus/network/userAgent.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){var e="";return e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),e}function n(e){var t=e.toLocaleLowerCase();return t.indexOf("iphone")>-1||t.indexOf("ipad")>-1||t.indexOf("itouch")>-1||t.indexOf("iwatch")>-1?1:2}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i={none:0,wifi:1,"2g":2,"3g":3,"4g":4,"5g":5,unknown:2},s=function(){function s(t,n){e(this,s),this.cacheKey=t,this.defaultUserAgent=n,this.currentNetworkType=i.wifi,this.userAgent={},this.initUserAgent(),this.updateSystemInfo()}return r(s,[{key:"initUserAgent",value:function(){this.userAgent=Object.assign(this.userAgent,this.defaultUserAgent)}},{key:"getUserAgent",value:function(){return this.userAgent=Object.assign(this.userAgent,this.defaultUserAgent),this.userAgent}},{key:"getClientID",value:function(){return this.userAgent.ClientID}},{key:"getAccountID",value:function(){return this.userAgent.AccountID}},{key:"getProductID",value:function(){return this.userAgent.ProductID}},{key:"updateSystemInfo",value:function(){var e=wx.getSystemInfoSync(),r={ClientID:t(),Device:e.brand,DeviceModel:e.model,AppLang:e.language,PixelRatio:e.pixelRatio,Screen:e.windowWidth+"*"+e.windowHeight,DeviceScreen:e.screenWidth+"*"+e.screenHeight,Width:e.windowWidth,Height:e.windowHeight,OSVer:e.system,PT:e.platform,WeChatVersion:e.version,WeChatSDKVersion:e.SDKVersion,OSType:n(e.model),Net:this.getNetworkType(),Token:wx.getStorageSync("UserCode"),OpenID:wx.getStorageSync("UserCode")};this.setUserAgent(r)}},{key:"setUserAgent",value:function(e,t){(e||t)&&(e instanceof Object?this.userAgent=Object.assign(this.userAgent,e):this.userAgent[e]=t)}},{key:"getNetworkType",value:function(){var e=this;return wx.getNetworkType({success:function(t){e.currentNetworkType=i[t.networkType]}}),this.currentNetworkType}}]),s}();exports.default=s; 
 			}); 
		define("libs/base64.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r={encode:function(e){for(var o,r,n=String(e),f=t,i=0,c="",d=.75;!isNaN(o=n.charCodeAt(d))||63&i||(f="=",(d-.75)%1);d+=.75)if(o>127){(r=encodeURI(n.charAt(d)).split("%")).shift();for(var a,l=d%1;a=r[0|l];l+=.75)i=i<<8|parseInt(a,16),c+=f.charAt(63&i>>8-l%1*8);d=.75===d?0:d,d+=.75*r.length%1}else i=i<<8|o,c+=f.charAt(63&i>>8-d%1*8);return c},decode:function(e){var o,r=String(e),n=t.slice(0,-1),f=[6,4,2,0],i="",c=0,d=0,a="";try{for(var l=0;(o=n.indexOf(r[l]))>-1;l++)c=c<<6|o,l%4&&((d=255&c>>f[l%4])<128?(i+=a?decodeURI(a):"",i+=String.fromCharCode(d),a=""):a+="%"+("0"+d.toString(16)).slice(-2));return i+=a?decodeURI(a):""}catch(e){throw new Error("base64 malformed!")}}};if("function"==typeof define&&define.amd)define(function(){return r});else if("object"===("undefined"==typeof exports?"undefined":e(exports)))for(var n in r)r.hasOwnProperty(n)&&(exports[n]=r[n]);else o.base64=r}("object"===("undefined"==typeof global?"undefined":e(global))&&global||void 0); 
 			}); 
		define("libs/gibberish-aes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var r=function(){var n=14,e=8,t=!1,o=function(r){try{return unescape(encodeURIComponent(r))}catch(r){throw"Error on UTF-8 encode"}},c=function(r){try{return decodeURIComponent(escape(r))}catch(r){throw"Bad Key"}},f=function(r){var n,e,t=[];for(r.length<16&&(t=[n=16-r.length,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n]),e=0;e<r.length;e++)t[e]=r[e];return t},u=function(r,n){var e,t,o="";if(n){if((e=r[15])>16)throw"Decryption error: Maybe bad key";if(16==e)return"";for(t=0;t<16-e;t++)o+=String.fromCharCode(r[t])}else for(t=0;t<16;t++)o+=String.fromCharCode(r[t]);return o},a=function(r,n){var e,t=[];for(n||(r=o(r)),e=0;e<r.length;e++)t[e]=r.charCodeAt(e);return t},i=function(r){var n,e=[];for(n=0;n<r;n++)e=e.concat(Math.floor(256*Math.random()));return e},h=function(t,o){var c,f=n>=12?3:2,u=[],a=[],i=[],h=[],l=t.concat(o);for(i[0]=r.Hash.MD5(l),h=i[0],c=1;c<f;c++)i[c]=r.Hash.MD5(i[c-1].concat(l)),h=h.concat(i[c]);return u=h.slice(0,4*e),a=h.slice(4*e,4*e+16),{key:u,iv:a}},l=function(n,e){n=r.s2a(n);var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e=C(r.s2a(e));var o,c=Math.ceil(n.length/16),u=[],a=[];for(o=0;o<c;o++)u[o]=f(n.slice(16*o,16*o+16));for(n.length%16==0&&(u.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]),c++),o=0;o<u.length;o++)u[o]=0===o?k(u[o],t):k(u[o],a[o-1]),a[o]=v(u[o],e);return r.Base64.encode(a)},s=function(n,e){var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e=C(r.s2a(e));var o,f=n.length/16,a=[],i=[],h="";for(o=0;o<f;o++)a.push(n.slice(16*o,16*(o+1)));for(o=a.length-1;o>=0;o--)i[o]=d(a[o],e),i[o]=0===o?k(i[o],t):k(i[o],a[o-1]);for(o=0;o<f-1;o++)h+=u(i[o]);return h+=u(i[o],!0),c(h)},v=function(r,e){t=!1;var o,c=M(r,e,0);for(o=1;o<n+1;o++)c=g(c),c=p(c),o<n&&(c=y(c)),c=M(c,e,o);return c},d=function(r,e){t=!0;var o,c=M(r,e,n);for(o=n-1;o>-1;o--)c=p(c),c=g(c),c=M(c,e,o),o>0&&(c=y(c));return c},g=function(r){var n,e=t?A:x,o=[];for(n=0;n<16;n++)o[n]=e[r[n]];return o},p=function(r){var n,e=[],o=t?[0,13,10,7,4,1,14,11,8,5,2,15,12,9,6,3]:[0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11];for(n=0;n<16;n++)e[n]=r[o[n]];return e},y=function(r){var n,e=[];if(t)for(n=0;n<4;n++)e[4*n]=I[r[4*n]]^O[r[1+4*n]]^E[r[2+4*n]]^D[r[3+4*n]],e[1+4*n]=D[r[4*n]]^I[r[1+4*n]]^O[r[2+4*n]]^E[r[3+4*n]],e[2+4*n]=E[r[4*n]]^D[r[1+4*n]]^I[r[2+4*n]]^O[r[3+4*n]],e[3+4*n]=O[r[4*n]]^E[r[1+4*n]]^D[r[2+4*n]]^I[r[3+4*n]];else for(n=0;n<4;n++)e[4*n]=m[r[4*n]]^w[r[1+4*n]]^r[2+4*n]^r[3+4*n],e[1+4*n]=r[4*n]^m[r[1+4*n]]^w[r[2+4*n]]^r[3+4*n],e[2+4*n]=r[4*n]^r[1+4*n]^m[r[2+4*n]]^w[r[3+4*n]],e[3+4*n]=w[r[4*n]]^r[1+4*n]^r[2+4*n]^m[r[3+4*n]];return e},M=function(r,n,e){var t,o=[];for(t=0;t<16;t++)o[t]=r[t]^n[e][t];return o},k=function(r,n){var e,t=[];for(e=0;e<16;e++)t[e]=r[e]^n[e];return t},C=function(r){var t,o,c,f,u=[],a=[],i=[];for(t=0;t<e;t++)o=[r[4*t],r[4*t+1],r[4*t+2],r[4*t+3]],u[t]=o;for(t=e;t<4*(n+1);t++){for(u[t]=[],c=0;c<4;c++)a[c]=u[t-1][c];for(t%e==0?(a=S(b(a)))[0]^=B[t/e-1]:e>6&&t%e==4&&(a=S(a)),c=0;c<4;c++)u[t][c]=u[t-e][c]^a[c]}for(t=0;t<n+1;t++)for(i[t]=[],f=0;f<4;f++)i[t].push(u[4*t+f][0],u[4*t+f][1],u[4*t+f][2],u[4*t+f][3]);return i},S=function(r){for(var n=0;n<4;n++)r[n]=x[r[n]];return r},b=function(r){var n,e=r[0];for(n=0;n<4;n++)r[n]=r[n+1];return r[3]=e,r},x=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],A=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],B=[1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],m=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],w=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],D=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],O=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],E=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],I=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141],K=function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=r.split("");return"function"==typeof Array.indexOf&&(r=n),{encode:function(r,e){var t,o,c=[],f="";for(totalChunks=Math.floor(16*r.length/3),t=0;t<16*r.length;t++)c.push(r[Math.floor(t/16)][t%16]);for(t=0;t<c.length;t+=3)f+=n[c[t]>>2],f+=n[(3&c[t])<<4|c[t+1]>>4],void 0!==c[t+1]?f+=n[(15&c[t+1])<<2|c[t+2]>>6]:f+="=",void 0!==c[t+2]?f+=n[63&c[t+2]]:f+="=";for(o=f.slice(0,64)+"\n",t=1;t<Math.ceil(f.length/64);t++)o+=f.slice(64*t,64*t+64)+(Math.ceil(f.length/64)==t+1?"":"\n");return o},decode:function(n){n=n.replace(/\n/g,"");var e,t=[],o=[],c=[];for(e=0;e<n.length;e+=4)o[0]=r.indexOf(n.charAt(e)),o[1]=r.indexOf(n.charAt(e+1)),o[2]=r.indexOf(n.charAt(e+2)),o[3]=r.indexOf(n.charAt(e+3)),c[0]=o[0]<<2|o[1]>>4,c[1]=(15&o[1])<<4|o[2]>>2,c[2]=(3&o[2])<<6|o[3],t.push(c[0],c[1],c[2]);return t=t.slice(0,t.length-t.length%16)}}}();return{size:function(r){switch(r){case 128:n=10,e=4;break;case 192:n=12,e=6;break;case 256:n=14,e=8;break;default:throw"Invalid Key Size Specified:"+r}},h2a:function(r){var n=[];return r.replace(/(..)/g,function(r){n.push(parseInt(r,16))}),n},expandKey:C,encryptBlock:v,decryptBlock:d,Decrypt:t,s2a:a,rawEncrypt:l,aesEncrypt:function(n,e){n=r.s2a(n);var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e=C(r.s2a(e));var o,c=Math.ceil(n.length/16),u=[],a=[];for(o=0;o<c;o++)u[o]=f(n.slice(16*o,16*o+16));for(n.length%16==0&&(u.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]),c++),o=0;o<u.length;o++)u[o]=0===o?k(u[o],t):k(u[o],a[o-1]),a[o]=v(u[o],e);return r.Base64.encode(a)},aesDecrypt:function(n,e){var t=r.Base64.decode(n),o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e=C(r.s2a(e));var f,a=t.length/16,i=[],h=[],l="";for(f=0;f<a;f++)i.push(t.slice(16*f,16*(f+1)));for(f=i.length-1;f>=0;f--)h[f]=d(i[f],e),h[f]=0===f?k(h[f],o):k(h[f],i[f-1]);for(f=0;f<a-1;f++)l+=u(h[f]);return l+=u(h[f],!0),c(l)},dec:function(r,n,e){var t=K.decode(r),o=t.slice(8,16),c=h(a(n,e),o),f=c.key;c.iv;return t=t.slice(16,t.length),r=s(t,f)},openSSLKey:h,a2h:function(r){var n,e="";for(n=0;n<r.length;n++)e+=(r[n]<16?"0":"")+r[n].toString(16);return e},enc:function(r,n,e){var t,o=i(8),c=h(a(n,e),o),f=c.key,u=(c.iv,[[83,97,108,116,101,100,95,95].concat(o)]);return r=a(r,e),t=l(r,f),t=u.concat(t),K.encode(t)},Hash:{MD5:function(r){function n(r,n){return r<<n|r>>>32-n}function e(r,n){var e,t,o,c,f;return o=2147483648&r,c=2147483648&n,e=1073741824&r,t=1073741824&n,f=(1073741823&r)+(1073741823&n),e&t?2147483648^f^o^c:e|t?1073741824&f?3221225472^f^o^c:1073741824^f^o^c:f^o^c}function t(r,n,e){return r&n|~r&e}function o(r,n,e){return r&e|n&~e}function c(r,n,e){return r^n^e}function f(r,n,e){return n^(r|~e)}function u(r,o,c,f,u,a,i){return r=e(r,e(e(t(o,c,f),u),i)),e(n(r,a),o)}function a(r,t,c,f,u,a,i){return r=e(r,e(e(o(t,c,f),u),i)),e(n(r,a),t)}function i(r,t,o,f,u,a,i){return r=e(r,e(e(c(t,o,f),u),i)),e(n(r,a),t)}function h(r,t,o,c,u,a,i){return r=e(r,e(e(f(t,o,c),u),i)),e(n(r,a),t)}function l(r){var n,e,t=[];for(e=0;e<=3;e++)n=r>>>8*e&255,t=t.concat(n);return t}var s,v,d,g,p,y,M,k,C,S=[];for(S=function(r){for(var n,e=r.length,t=e+8,o=16*((t-t%64)/64+1),c=[],f=0,u=0;u<e;)f=u%4*8,c[n=(u-u%4)/4]=c[n]|r[u]<<f,u++;return n=(u-u%4)/4,f=u%4*8,c[n]=c[n]|128<<f,c[o-2]=e<<3,c[o-1]=e>>>29,c}(r),y=1732584193,M=4023233417,k=2562383102,C=271733878,s=0;s<S.length;s+=16)v=y,d=M,g=k,p=C,M=h(M=h(M=h(M=h(M=i(M=i(M=i(M=i(M=a(M=a(M=a(M=a(M=u(M=u(M=u(M=u(M,k=u(k,C=u(C,y=u(y,M,k,C,S[s+0],7,3614090360),M,k,S[s+1],12,3905402710),y,M,S[s+2],17,606105819),C,y,S[s+3],22,3250441966),k=u(k,C=u(C,y=u(y,M,k,C,S[s+4],7,4118548399),M,k,S[s+5],12,1200080426),y,M,S[s+6],17,2821735955),C,y,S[s+7],22,4249261313),k=u(k,C=u(C,y=u(y,M,k,C,S[s+8],7,1770035416),M,k,S[s+9],12,2336552879),y,M,S[s+10],17,4294925233),C,y,S[s+11],22,2304563134),k=u(k,C=u(C,y=u(y,M,k,C,S[s+12],7,1804603682),M,k,S[s+13],12,4254626195),y,M,S[s+14],17,2792965006),C,y,S[s+15],22,1236535329),k=a(k,C=a(C,y=a(y,M,k,C,S[s+1],5,4129170786),M,k,S[s+6],9,3225465664),y,M,S[s+11],14,643717713),C,y,S[s+0],20,3921069994),k=a(k,C=a(C,y=a(y,M,k,C,S[s+5],5,3593408605),M,k,S[s+10],9,38016083),y,M,S[s+15],14,3634488961),C,y,S[s+4],20,3889429448),k=a(k,C=a(C,y=a(y,M,k,C,S[s+9],5,568446438),M,k,S[s+14],9,3275163606),y,M,S[s+3],14,4107603335),C,y,S[s+8],20,1163531501),k=a(k,C=a(C,y=a(y,M,k,C,S[s+13],5,2850285829),M,k,S[s+2],9,4243563512),y,M,S[s+7],14,1735328473),C,y,S[s+12],20,2368359562),k=i(k,C=i(C,y=i(y,M,k,C,S[s+5],4,4294588738),M,k,S[s+8],11,2272392833),y,M,S[s+11],16,1839030562),C,y,S[s+14],23,4259657740),k=i(k,C=i(C,y=i(y,M,k,C,S[s+1],4,2763975236),M,k,S[s+4],11,1272893353),y,M,S[s+7],16,4139469664),C,y,S[s+10],23,3200236656),k=i(k,C=i(C,y=i(y,M,k,C,S[s+13],4,681279174),M,k,S[s+0],11,3936430074),y,M,S[s+3],16,3572445317),C,y,S[s+6],23,76029189),k=i(k,C=i(C,y=i(y,M,k,C,S[s+9],4,3654602809),M,k,S[s+12],11,3873151461),y,M,S[s+15],16,530742520),C,y,S[s+2],23,3299628645),k=h(k,C=h(C,y=h(y,M,k,C,S[s+0],6,4096336452),M,k,S[s+7],10,1126891415),y,M,S[s+14],15,2878612391),C,y,S[s+5],21,4237533241),k=h(k,C=h(C,y=h(y,M,k,C,S[s+12],6,1700485571),M,k,S[s+3],10,2399980690),y,M,S[s+10],15,4293915773),C,y,S[s+1],21,2240044497),k=h(k,C=h(C,y=h(y,M,k,C,S[s+8],6,1873313359),M,k,S[s+15],10,4264355552),y,M,S[s+6],15,2734768916),C,y,S[s+13],21,1309151649),k=h(k,C=h(C,y=h(y,M,k,C,S[s+4],6,4149444226),M,k,S[s+11],10,3174756917),y,M,S[s+2],15,718787259),C,y,S[s+9],21,3951481745),y=e(y,v),M=e(M,d),k=e(k,g),C=e(C,p);return l(y).concat(l(M),l(k),l(C))}},Base64:K}}();"function"==typeof define&&define(function(){return r}),module.exports={GibberishAES:r}; 
 			}); 
		define("libs/md5.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(t){function r(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n,t){return n<<t|n>>>32-t}function e(n,t,e,u,f,c){return r(o(r(r(t,n),r(u,c)),f),e)}function u(n,t,r,o,u,f,c){return e(t&r|~t&o,n,t,u,f,c)}function f(n,t,r,o,u,f,c){return e(t&o|r&~o,n,t,u,f,c)}function c(n,t,r,o,u,f,c){return e(t^r^o,n,t,u,f,c)}function i(n,t,r,o,u,f,c){return e(r^(t|~o),n,t,u,f,c)}function d(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var o,e,d,l,a,h=1732584193,m=-271733879,y=-1732584194,p=271733878;for(o=0;o<n.length;o+=16)e=h,d=m,l=y,a=p,m=i(m=i(m=i(m=i(m=c(m=c(m=c(m=c(m=f(m=f(m=f(m=f(m=u(m=u(m=u(m=u(m,y=u(y,p=u(p,h=u(h,m,y,p,n[o],7,-680876936),m,y,n[o+1],12,-389564586),h,m,n[o+2],17,606105819),p,h,n[o+3],22,-1044525330),y=u(y,p=u(p,h=u(h,m,y,p,n[o+4],7,-176418897),m,y,n[o+5],12,1200080426),h,m,n[o+6],17,-1473231341),p,h,n[o+7],22,-45705983),y=u(y,p=u(p,h=u(h,m,y,p,n[o+8],7,1770035416),m,y,n[o+9],12,-1958414417),h,m,n[o+10],17,-42063),p,h,n[o+11],22,-1990404162),y=u(y,p=u(p,h=u(h,m,y,p,n[o+12],7,1804603682),m,y,n[o+13],12,-40341101),h,m,n[o+14],17,-1502002290),p,h,n[o+15],22,1236535329),y=f(y,p=f(p,h=f(h,m,y,p,n[o+1],5,-165796510),m,y,n[o+6],9,-1069501632),h,m,n[o+11],14,643717713),p,h,n[o],20,-373897302),y=f(y,p=f(p,h=f(h,m,y,p,n[o+5],5,-701558691),m,y,n[o+10],9,38016083),h,m,n[o+15],14,-660478335),p,h,n[o+4],20,-405537848),y=f(y,p=f(p,h=f(h,m,y,p,n[o+9],5,568446438),m,y,n[o+14],9,-1019803690),h,m,n[o+3],14,-187363961),p,h,n[o+8],20,1163531501),y=f(y,p=f(p,h=f(h,m,y,p,n[o+13],5,-1444681467),m,y,n[o+2],9,-51403784),h,m,n[o+7],14,1735328473),p,h,n[o+12],20,-1926607734),y=c(y,p=c(p,h=c(h,m,y,p,n[o+5],4,-378558),m,y,n[o+8],11,-2022574463),h,m,n[o+11],16,1839030562),p,h,n[o+14],23,-35309556),y=c(y,p=c(p,h=c(h,m,y,p,n[o+1],4,-1530992060),m,y,n[o+4],11,1272893353),h,m,n[o+7],16,-155497632),p,h,n[o+10],23,-1094730640),y=c(y,p=c(p,h=c(h,m,y,p,n[o+13],4,681279174),m,y,n[o],11,-358537222),h,m,n[o+3],16,-722521979),p,h,n[o+6],23,76029189),y=c(y,p=c(p,h=c(h,m,y,p,n[o+9],4,-640364487),m,y,n[o+12],11,-421815835),h,m,n[o+15],16,530742520),p,h,n[o+2],23,-995338651),y=i(y,p=i(p,h=i(h,m,y,p,n[o],6,-198630844),m,y,n[o+7],10,1126891415),h,m,n[o+14],15,-1416354905),p,h,n[o+5],21,-57434055),y=i(y,p=i(p,h=i(h,m,y,p,n[o+12],6,1700485571),m,y,n[o+3],10,-1894986606),h,m,n[o+10],15,-1051523),p,h,n[o+1],21,-2054922799),y=i(y,p=i(p,h=i(h,m,y,p,n[o+8],6,1873313359),m,y,n[o+15],10,-30611744),h,m,n[o+6],15,-1560198380),p,h,n[o+13],21,1309151649),y=i(y,p=i(p,h=i(h,m,y,p,n[o+4],6,-145523070),m,y,n[o+11],10,-1120210379),h,m,n[o+2],15,718787259),p,h,n[o+9],21,-343485551),h=r(h,e),m=r(m,d),y=r(y,l),p=r(p,a);return[h,m,y,p]}function l(n){var t,r="",o=32*n.length;for(t=0;t<o;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var o=8*n.length;for(t=0;t<o;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return l(d(a(n),8*n.length))}function m(n,t){var r,o,e=a(n),u=[],f=[];for(u[15]=f[15]=void 0,e.length>16&&(e=d(e,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^e[r],f[r]=1549556828^e[r];return o=d(u.concat(a(t)),512+8*t.length),l(d(f.concat(o),640))}function y(n){var t,r,o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return o}function p(n){return unescape(encodeURIComponent(n))}function g(n){return h(p(n))}function v(n){return y(g(n))}function b(n,t){return m(p(n),p(t))}function s(n,t){return y(b(n,t))}function S(n,t,r){return t?r?b(t,n):s(t,n):r?g(n):v(n)}"function"==typeof define&&define.amd?define(function(){return S}):"object"==("undefined"==typeof module?"undefined":n(module))&&module.exports?module.exports=S:t.md5=S}(void 0); 
 			}); 
		define("libs/tdweapp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=e[t];e[t]=function(e){a&&a.call(this,e),n.call(this,e)}}var t=App,n=Page,a=require("../utils/dataAnalysis/config.js"),i=!1,o={device:!0,network:!0,uid:!0},s={sdk:{version:"3",minorVersion:"0",build:"3",platform:"Weapp",partner:""},app:{versionCode:a.tdConfig.versionCode||"1",versionName:a.tdConfig.versionName||"1.0.0",installTime:0,displayName:a.tdConfig.appName,appKey:a.tdConfig.appkey,uniqueId:a.tdConfig.wxAppid,channel:""},device:{type:"mobile",softwareConfig:{},hardwareConfig:{},deviceId:{}},networks:[{type:"wifi",available:!1,connected:!1},{type:"cellular",available:!1,connected:!1,current:[]},{type:"unknown",available:!1,connected:!1}],locations:[{}],appContext:{}},r={firstInit:!1,initTime:0,sessionId:"",sessionStartTime:0,appLaunchInfo:null,sendFailTimes:0,Store:{set:function(e,t){return wx.setStorageSync("TDSDK_"+e,t),!0},get:function(e){return wx.getStorageSync("TDSDK_"+e)},remove:function(e){return wx.removeStorageSync("TDSDK_"+e),!0}},random:function(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",t=e.length,n="",a=0;a<12;a++)n+=e.charAt(Math.floor(Math.random()*t));return n},timestamp:function(){return(new Date).getTime()},deviceId:function(){return"weapp-"+this.timestamp()+"-"+this.random()},getEventId:function(e){if(!e&&!/0{1}/.test(e))return"";var t="";try{t=e.toString()}catch(n){try{t=JSON.stringify(e)}catch(e){}}return t.split(" ")[0].slice(0,64)},addStoreData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="EVENT_"+r.sessionId,n=r.Store.get(t);n=n&&n.length?n.concat(e):e,r.Store.set(t,n),n.length>=30&&(d.sessionContinue(),d.startLoop())},eventHandle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e){var n=getCurrentPages(),a=n[n.length-1],i={eventId:e,label:a.__route__,count:1,startTime:r.timestamp()};if("WeappShare"===e){i.shareTickets=t.shareTickets;var o=JSON.parse(JSON.stringify(a.options||{}));o.user=r.deviceId,o.title=t.title,o.desc=t.desc,o.path=t.path,i.params=o}r.addStoreData([i])}},getCacheData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.keys(e),n=[],a=[];return t.length&&t.forEach(function(t){var i=e[t];i&&i.sendFail&&i.data&&(n=n.concat(i.data),a.push(t))}),{data:n,keys:a}},sendCacheList:{},updateSendTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.forEach(function(n,a){n.action&&n.action.data&&(e[a].action.data.start=t)}),e},getRequestData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=JSON.parse(JSON.stringify(e)),n=r.sendCacheList;if(Object.keys(n).length){var a=r.getCacheData(n);t=t.concat(a.data),a.keys.forEach(function(e){return delete n[e]})}var i=t.length;if(i){var o=[];i>=30?(JSON.stringify(t)>61440&&o.push(t.splice(0,i/2)),o.push(t)):o.push(t),o.forEach(function(e){var t=r.timestamp();n[t]={data:e,sendFail:!1};var a=r.updateSendTime(e,r.timestamp());r.request(t,a)})}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];wx.request({url:"https://h5.udrig.com/app/wx/v1",data:JSON.stringify(t),method:"POST",success:function(t){200===t.statusCode&&(delete r.sendCacheList[e],r.sendFailTimes=0,p.appIsHide||(clearTimeout(d.timeout),d.timeout=null,d.startLoop()))},fail:function(){p.appIsHide?(r.Store.set("RESEND_"+e,t),delete r.sendCacheList[e]):(r.sendCacheList[e].sendFail=!0,r.sendFailTimes<5&&r.sendFailTimes++)}})}},c={isFirst:!0,init:function(){var e=this,t=r.Store.get("deviceId"),n=r.Store.get("uid");if(n){var a=t||n;e.setData(a,n)}else new Promise(this.getOpenid).then(function(n){var a=void 0;t?a=t:(a=n,r.Store.set("deviceId",n)),e.setData(a,n),r.Store.set("uid",n)}).catch(function(n){var a=void 0;a=t||r.deviceId(),e.setData(a,""),r.Store.set("deviceId",a)})},setData:function(e,t){s.device.deviceId={tid:e,uid:t},o.uid=!1,d.getAppProfile()},getOpenid:function(e,t){function n(){i.isFirst?i.reGetOpenid(e,t):t("error")}var i=c;(new Date).getTime(),wx.login({timeout:3e3,success:function(t){t.code?wx.request({url:"https://api.talkingdata.com/mpopenid/"+a.tdConfig.appkey+"/"+t.code,success:function(t){var a=t.data;a&&200===a.code&&a.openId?e(a.openId):n()},fail:function(e){n()}}):n()},fail:function(e){n()}})},reGetOpenid:function(e,t){c.isFirst=!1,c.getOpenid(e,t)}},u={sendTime:0,statusType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],n=JSON.parse(JSON.stringify(s)),a={domain:e.domain,name:e.name,data:e.data};n.ts=e.data.start||r.timestamp(),n.action=a,t.push(n),r.getRequestData(t)},dataType:function(e,t){var n=this.getStoreList(e,t);r.getRequestData(n)},getEventType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.pageEvent)return{domain:"page",name:"leave"};if(e.eventId){var t={};switch(e.eventId){case"WeappShare":t={domain:"user",name:"share"};break;case"WeappPullDownRefresh":t={domain:"page",name:"pullDownRefresh"};break;case"WeappReachBottom":t={domain:"page",name:"reachBottom"};break;default:t={domain:"appEvent",name:""}}return t}},getStoreList:function(e,t){var n=this,a=[],i=e||r.sessionId,o=JSON.stringify(s),c=r.Store.get("EVENT_"+i);return c&&c.length&&(c.forEach(function(e){var i=n.getEventType(e),s=JSON.parse(o);t&&s.appContext&&(s.appContext.sessionStartTime=t);var c=JSON.parse(JSON.stringify(e));c.pageEvent&&delete c.pageEvent,c.status=2;var u={domain:i.domain,name:i.name,data:c};s.ts=c.startTime?c.startTime:r.timestamp(),s.action=u,a.push(s)}),r.Store.remove("EVENT_"+i)),a}},d={timeout:null,init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.appLaunchInfo=e,r.appLaunchInfo.scene=e.scene?e.scene.toString():"",c.init(),d.judgeRequireData(),d.getLocalParams(),a.tdConfig.getLocation&&d.getLocation(),d.getSystemInfo(),d.getNetwork()},launchRequest:function(){var e={first:!0};u.statusType({domain:"app",name:"init",data:e})},sessionStart:function(e){var t=r.appLaunchInfo||{},n={status:1,duration:0,name:t.path,scene:t.scene,query:t.query||{},shareTicket:t.shareTicket};e&&d.setNewSession(),n.start=r.Store.get("session_time")||r.timestamp(),n.url=d.getUrl(n.name,n.query),u.statusType({domain:"session",name:"begin",data:n})},getUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t).sort(function(e,t){return e>t})||[],a=n.length?e+"?":e;return n.forEach(function(e,n){0!==n&&(a+="&"),a+=e+"="+t[e]}),a},sessionContinue:function(){u.dataType()},sessionEnd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={status:3,start:e.startTime,duration:e.duration};u.statusType({domain:"session",name:"end",data:t})},sendTmpSession:function(){d.sessionContinue(),d.startLoop()},startLoop:function(){d.timeout&&(clearTimeout(d.timeout),d.timeout=null);var e=3e3*(r.sendFailTimes+1);d.timeout=setTimeout(function(){d.sendTmpSession()},e)},judgeRequireData:function(){s.app.appKey||(s.app.appKey="",console.error("请填写您在TalkingData申请的App ID")),s.app.displayName||(s.app.displayName="appname",console.error("请填写您的小程序名称"))},getLocalParams:function(){var e=r.Store.get("initTime");e?r.initTime=e:(r.initTime=r.timestamp(),r.Store.set("initTime",r.initTime),r.firstInit=!0),s.app.installTime=r.initTime;var t=r.appLaunchInfo.query||{},n=t.TDChannelId?t.TDChannelId:"";s.app.channel=n,d.setNewSession()},setNewSession:function(){r.sessionId=r.deviceId(),r.sessionStartTime=r.timestamp(),r.Store.set("session_time",r.sessionStartTime),s.appContext.sessionId=r.sessionId,s.appContext.sessionStartTime=r.sessionStartTime},getLaunchInfo:function(){var e=JSON.parse(JSON.stringify(d.launchOptions));return e.type="appLaunch",e},getAppProfile:function(){if(!i){var e=!0;["device","network","uid"].forEach(function(t){o[t]&&(e=!1)}),e&&(i=!0,this.startRequest())}},startRequest:function(){r.firstInit&&d.launchRequest(),this.sessionStart(),this.startLoop()},getLocation:function(){wx.getLocation({type:"wgs84",complete:function(e){if(e.longitude||e.latitude||e.horizontalAccuracy||e.verticalAccuracy){var t=s.locations[0];t.lng=e.longitude,t.lat=e.latitude,t.hAccuracy=e.horizontalAccuracy,t.vAccuracy=e.verticalAccuracy,t.speed=e.speed,t.altitude=e.altitude,t.ts=(new Date).getTime()}}})},getNetwork:function(){wx.getNetworkType({complete:function(e){var t=s.networks,n=e.networkType;"wifi"===n?(t[0].available=!0,t[0].connected=!0):"unknown"===n?(t[2].available=!0,t[2].connected=!0):"none"!==n&&(t[1].available=!0,t[1].connected=!0,t[1].current.push({type:n})),o.network=!1,d.getAppProfile()}})},getSystemInfo:function(){wx.getSystemInfo({complete:function(e){if(e.model||e.system||e.SDKVersion){var t={model:e.model,pixel:e.screenWidth+"*"+e.screenHeight+"*"+e.pixelRatio,densityDpi:e.pixelRatio,brand:e.brand},n={os:e.system,local:e.language,language:"zh_CN",osVersionCode:e.version,timezone:-(new Date).getTimezoneOffset()/60,mpVersion:e.SDKVersion};s.device.hardwareConfig=t,s.device.softwareConfig=n}o.device=!1,d.getAppProfile()}})}},p={isHide2Show:!1,appIsHide:!1,show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(p.appIsHide=!1,p.getlastTmpData(),p.isHide2Show){var t=r.Store.get("TMP_time_end_"+r.sessionId),n=e.scene?e.scene.toString():"";e.scene&&n===r.appLaunchInfo.scene?r.timestamp()-t>3e4?p.sessionRestart(t):r.Store.remove("TMP_time_end_"+r.sessionId):(r.appLaunchInfo=e,r.appLaunchInfo.scene=n,p.sessionRestart(t)),p.isHide2Show=!1,d.startLoop()}},sessionRestart:function(e){var t=r.Store.get("TMP_time_start_"+r.sessionId),n={startTime:t,duration:parseInt((e-t)/1e3)};d.sessionEnd(n),r.Store.remove("TMP_time_start_"+r.sessionId),r.Store.remove("TMP_time_end_"+r.sessionId),r.Store.remove("session_time"),d.sessionStart(!0)},hide:function(){p.appIsHide=!0,clearTimeout(d.timeout),d.timeout=null,d.sessionContinue(),p.isHide2Show=!0,r.Store.set("TMP_time_start_"+r.sessionId,r.Store.get("session_time")),r.Store.set("TMP_time_end_"+r.sessionId,r.timestamp())},getlastTmpData:function(){var e=[],t=wx.getStorageInfoSync().keys||[],n=void 0,a=void 0;t&&t.length&&(n=t.filter(function(e){return e.indexOf("TDSDK_EVENT")>-1}),a=t.filter(function(e){return e.indexOf("TDSDK_RESEND")>-1})),n&&n.length&&(n.forEach(function(t){var n={};t.split("_")[2],n.id=t.split("_")[2],n.time=n.id.split("-")[1],e.push(n)}),p.sendLastTmpData(e)),a&&a.length&&a.forEach(function(e){wx.getStorage({key:e,success:function(t){r.getRequestData(t.data),wx.removeStorage({key:e,success:function(e){}})}})})},sendLastTmpData:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(e){u.dataType(e.id,e.time)})}},l={event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.getEventId(e.id);if(t){var n={};n.eventId=t,n.label=r.getEventId(e.label),n.count=e.count||1,n.params=e.params,n.startTime=r.timestamp(),r.addStoreData([n])}},share:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.eventHandle("WeappShare",e)},pullDownRefresh:function(){r.eventHandle("WeappPullDownRefresh")},reachBottom:function(){r.eventHandle("WeappReachBottom")},setAccount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.accountId||/0{1}/.test(e.accountId)?e.accountType||/0{1}/.test(e.accountType)?void(s.appContext.account=e):void console.warn("accountType为必填字段！"):void console.warn("accountId为必填字段！")}};App=function(n){var a={onLaunch:d.init,onShow:p.show,onHide:p.hide};Object.keys(a).forEach(function(t){e(n,t,a[t])}),n.tdsdk=l,t(n)};var f={curPagePath:"",refer:"",pageTime:0,pageQuery:{},show:function(){var e=getCurrentPages(),t=e[e.length-1];""!==f.curPagePath&&(f.refer=f.curPagePath),f.curPagePath=t.__route__,f.pageTime=r.timestamp(),f.pageQuery=t.options},hide:function(){var e=[{name:f.curPagePath,from:f.refer||"",query:f.pageQuery,scene:r.appLaunchInfo.scene,duration:parseInt((r.timestamp()-f.pageTime)/1e3),startTime:f.pageTime,pageEvent:!0}];r.addStoreData(e)}};Page=function(t){var i={onShow:f.show,onHide:f.hide,onUnload:f.hide};a.tdConfig.autoOnPullDownRefresh&&(i.onPullDownRefresh=l.pullDownRefresh),a.tdConfig.autoOnReachBottom&&(i.onReachBottom=l.reachBottom),Object.keys(i).forEach(function(n){e(t,n,i[n])}),n(t)}}(); 
 			}); 
		define("libs/xxtea.v3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),t=function(){function t(){r(this,t)}return e(t,null,[{key:"btoa",value:function(r){return this.btoaEncode(r)}},{key:"btoaEncode",value:function(r){var e,t,n,o,a,i,c,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");for(t=n=0,o=r.length,i=(o-=a=o%3)/3<<2,a>0&&(i+=4),e=new Array(i);t<o;)c=r.charCodeAt(t++)<<16|r.charCodeAt(t++)<<8|r.charCodeAt(t++),e[n++]=h[c>>18]+h[c>>12&63]+h[c>>6&63]+h[63&c];return 1==a?(c=r.charCodeAt(t++),e[n++]=h[c>>2]+h[(3&c)<<4]+"=="):2==a&&(c=r.charCodeAt(t++)<<8|r.charCodeAt(t++),e[n++]=h[c>>10]+h[c>>4&63]+h[(15&c)<<2]+"="),e.join("")}},{key:"atob",value:function(r){return this.atobDecode(r)}},{key:"atobDecode",value:function(r){var e,t,n,o,a,i,c,h,u,f,s=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];if((c=r.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(r))return"";for(u=c,(h="="==r.charAt(c-2)?1:"="==r.charAt(c-1)?2:0)>0&&(u-=4),u=3*(u>>2)+h,f=new Array(u),a=i=0;a<c&&-1!=(e=s[r.charCodeAt(a++)])&&-1!=(t=s[r.charCodeAt(a++)])&&(f[i++]=String.fromCharCode(e<<2|(48&t)>>4),-1!=(n=s[r.charCodeAt(a++)]))&&(f[i++]=String.fromCharCode((15&t)<<4|(60&n)>>2),-1!=(o=s[r.charCodeAt(a++)]));)f[i++]=String.fromCharCode((3&n)<<6|o);return f.join("")}},{key:"toBinaryString",value:function(r,e){var t=r.length,n=t<<2;if(e){var o=r[t-1];if(n-=4,o<n-3||o>n)return null;n=o}for(var a=0;a<t;a++)r[a]=String.fromCharCode(255&r[a],r[a]>>>8&255,r[a]>>>16&255,r[a]>>>24&255);var i=r.join("");return e?i.substring(0,n):i}},{key:"toUint32Array",value:function(r,e){var t=r.length,n=t>>2;0!=(3&t)&&++n;var o;e?(o=new Array(n+1))[n]=t:o=new Array(n);for(var a=0;a<t;++a)o[a>>2]|=r.charCodeAt(a)<<((3&a)<<3);return o}},{key:"int32",value:function(r){return 4294967295&r}},{key:"mx",value:function(r,e,t,n,o,a){return(t>>>5^e<<2)+(e>>>3^t<<4)^(r^e)+(a[3&n^o]^t)}},{key:"fixk",value:function(r){return r.length<4&&(r.length=4),r}},{key:"encryptUint32Array",value:function(r,e){var t,n,o,a,i,c,h=r.length,u=h-1;for(n=r[u],o=0,c=0|Math.floor(6+52/h);c>0;--c){for(a=(o=this.int32(o+2654435769))>>>2&3,i=0;i<u;++i)t=r[i+1],n=r[i]=this.int32(r[i]+this.mx(o,t,n,i,a,e));t=r[0],n=r[u]=this.int32(r[u]+this.mx(o,t,n,u,a,e))}return r}},{key:"decryptUint32Array",value:function(r,e){var t,n,o,a,i,c,h=r.length,u=h-1;for(t=r[0],c=Math.floor(6+52/h),o=this.int32(2654435769*c);0!==o;o=this.int32(o-2654435769)){for(a=o>>>2&3,i=u;i>0;--i)n=r[i-1],t=r[i]=this.int32(r[i]-this.mx(o,t,n,i,a,e));n=r[u],t=r[0]=this.int32(r[0]-this.mx(o,t,n,0,a,e))}return r}},{key:"utf8Encode",value:function(r){if(/^[\x00-\x7f]*$/.test(r))return r;for(var e=[],t=r.length,n=0,o=0;n<t;++n,++o){var a=r.charCodeAt(n);if(a<128)e[o]=r.charAt(n);else if(a<2048)e[o]=String.fromCharCode(192|a>>6,128|63&a);else{if(!(a<55296||a>57343)){if(n+1<t){var i=r.charCodeAt(n+1);if(a<56320&&56320<=i&&i<=57343){var c=65536+((1023&a)<<10|1023&i);e[o]=String.fromCharCode(240|c>>18&63,128|c>>12&63,128|c>>6&63,128|63&c),++n;continue}}throw new Error("Malformed string")}e[o]=String.fromCharCode(224|a>>12,128|a>>6&63,128|63&a)}}return e.join("")}},{key:"utf8DecodeShortString",value:function(r,e){for(var t=new Array(e),n=0,o=0,a=r.length;n<e&&o<a;n++){var i=r.charCodeAt(o++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[n]=i;break;case 12:case 13:if(!(o<a))throw new Error("Unfinished UTF-8 octet sequence");t[n]=(31&i)<<6|63&r.charCodeAt(o++);break;case 14:if(!(o+1<a))throw new Error("Unfinished UTF-8 octet sequence");t[n]=(15&i)<<12|(63&r.charCodeAt(o++))<<6|63&r.charCodeAt(o++);break;case 15:if(!(o+2<a))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&i)<<18|(63&r.charCodeAt(o++))<<12|(63&r.charCodeAt(o++))<<6|63&r.charCodeAt(o++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));t[n++]=c>>10&1023|55296,t[n]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return n<e&&(t.length=n),String.fromCharCode.apply(String,t)}},{key:"utf8DecodeLongString",value:function(r,e){for(var t=[],n=new Array(32768),o=0,a=0,i=r.length;o<e&&a<i;o++){var c=r.charCodeAt(a++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[o]=c;break;case 12:case 13:if(!(a<i))throw new Error("Unfinished UTF-8 octet sequence");n[o]=(31&c)<<6|63&r.charCodeAt(a++);break;case 14:if(!(a+1<i))throw new Error("Unfinished UTF-8 octet sequence");n[o]=(15&c)<<12|(63&r.charCodeAt(a++))<<6|63&r.charCodeAt(a++);break;case 15:if(!(a+2<i))throw new Error("Unfinished UTF-8 octet sequence");var h=((7&c)<<18|(63&r.charCodeAt(a++))<<12|(63&r.charCodeAt(a++))<<6|63&r.charCodeAt(a++))-65536;if(!(0<=h&&h<=1048575))throw new Error("Character outside valid Unicode range: 0x"+h.toString(16));n[o++]=h>>10&1023|55296,n[o]=1023&h|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+c.toString(16))}if(o>=32766){var u=o+1;n.length=u,t[t.length]=String.fromCharCode.apply(String,n),e-=u,o=-1}}return o>0&&(n.length=o,t[t.length]=String.fromCharCode.apply(String,n)),t.join("")}},{key:"utf8Decode",value:function(r,e){return(void 0===e||null===e||e<0)&&(e=r.length),0===e?"":/^[\x00-\x7f]*$/.test(r)||!/^[\x00-\xff]*$/.test(r)?e===r.length?r:r.substr(0,e):e<65535?this.utf8DecodeShortString(r,e):this.utf8DecodeLongString(r,e)}},{key:"encrypt",value:function(r,e){return void 0===r||null===r||0===r.length?r:(r=this.utf8Encode(r),e=this.utf8Encode(e),this.toBinaryString(this.encryptUint32Array(this.toUint32Array(r,!0),this.fixk(this.toUint32Array(e,!1))),!1))}},{key:"encryptToBase64",value:function(r,e){return this.btoa(this.encrypt(r,e))}},{key:"decrypt",value:function(r,e){return void 0===r||null===r||0===r.length?r:(e=this.utf8Encode(e),this.utf8Decode(this.toBinaryString(this.decryptUint32Array(this.toUint32Array(r,!1),this.fixk(this.toUint32Array(e,!1))),!0)))}},{key:"decryptFromBase64",value:function(r,e){return void 0===r||null===r||0===r.length?r:this.decrypt(this.atob(r),e)}}]),t}();module.exports={XxteaHelper:t}; 
 			}); 
		define("utils/dataAnalysis/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={sendToWx:!0,tdConfig:{appkey:"BE196B5B84C94A108756E88D9718EE1E",appName:"宝宝学数学比较",versionName:1,versionCode:1,wxAppid:" wx0ee0272e9d3ef0b6",getLocation:!1,autoOnPullDownRefresh:!1,autoOnReachBottom:!1},eventNames:{HOME_BOX_CLICK:"home_box_click",GAME_WIN:"game_win",GAME_PASSBOX_SHARE:"game_passbox_share",GAME_PASSBOX_NEXT:"game_passbox_next"}}; 
 			}); 
		define("utils/network/adService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=e(require("../../libs/babybus/network/ajax.js")),a=e(require("../../libs/babybus/network/signature")),u=e(require("../../libs/babybus/network/userAgent")),o=e(require("./config")),s=e(require("./api")),i=o.default.dataKey,c=o.default.ad.defaultUserAgent,l=o.default.ad.sign,f=function(){function e(){t(this,e);var n=new a.default(l.signKey,l.xxTeaKey,l.signAccountKey);this.userAgent=new u.default("Ad_UserAgent",c),this.userAgent.setUserAgent({Token:wx.getStorageSync(i.code),OpenID:wx.getStorageSync(i.code)}),this.ajax=new r.default(n,this.userAgent)}return n(e,[{key:"getConfig",value:function(){return this.ajax.post(s.default.GetPlace,{PlaceID:"146, 157, 158, 147"})}},{key:"sendStat",value:function(e){return this.userAgent.setUserAgent({Token:wx.getStorageSync(i.code),OpenID:wx.getStorageSync(i.code)}),this.ajax.post(s.default.Stat,e).catch(function(e){console.error("上报广告统计失败",e.message)})}}]),e}();exports.default=new f; 
 			}); 
		define("utils/network/analysisService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)})}function n(e){setTimeout(e,1)}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=e(require("../../libs/babybus/network/ajax.js")),u=e(require("../../libs/babybus/network/signature")),s=e(require("../../libs/babybus/network/userAgent")),l=e(require("./config")),g=e(require("./api")),i=l.default.dataKey,c=l.default.analysis.defaultUserAgent,d=l.default.analysis.sign,v=+new Date,f=a(),h={App:{source:"appSrcEventData",target:"appTgtEventData"},Page:{source:"pageSrcEventData",target:"pageTgtEventData"},Common:{source:"sourceEventData",target:"targetEventData"}},p=function(){function e(){var a=this;t(this,e);var r=new u.default(d.signKey,d.xxTeaKey,d.signAccountKey);this.userAgent=new s.default("Analysis_UserAgent",c),this.ajax=new o.default(r,this.userAgent),this.eventsPool=wx.getStorageSync(i.StorageEventKey)||[],this.eventsPool.length>0&&n(function(){a._postEventsToSystem()}),this.appSrcEventData=null,this.appTgtEventData=null,this.pageSrcEventData=null,this.pageTgtEventData=null,this.sourceEventData=null,this.targetEventData=null}return r(e,[{key:"reportDeviceMsg",value:function(){var e=this;g.default.Production&&n(function(){e.userAgent.setUserAgent({Token:wx.getStorageSync(i.code),OpenID:wx.getStorageSync(i.code)});var t=parseInt((+new Date-v)/1e3);e.ajax.post(g.default.StatRegister,[{SessionID:f,CreateDate:v,Seconds:t}]).catch(function(e){console.error("上报设备信息失败",e.message)})})}},{key:"reportAnalyticsToWX",value:function(e,t){g.default.Production&&n(function(){wx.reportAnalytics(e,t)})}},{key:"onAppShow",value:function(e,t){var a=this;g.default.Production&&n(function(){a._setSourceEventData("App",e,t)})}},{key:"onAppHide",value:function(e,t){var a=this;g.default.Production&&n(function(){a._setTargetEventData("App",e,t),a._postEventsToSystem()})}},{key:"onPageShow",value:function(e,t){var a=this;g.default.Production&&n(function(){a._setSourceEventData("Page",e,t)})}},{key:"onPageHide",value:function(e,t){var a=this;g.default.Production&&n(function(){a._setTargetEventData("Page",e,t)})}},{key:"registerSourceEventData",value:function(e,t){var a=this;g.default.Production&&n(function(){a._setSourceEventData("Common",e,t)})}},{key:"registerTargetEventData",value:function(e,t){var a=this;g.default.Production&&n(function(){a._setTargetEventData("Common",e,t)})}},{key:"_setSourceEventData",value:function(e,t,a){this[h[e].source]={code:t,pathData:{Source:{SectionCode:a.channelName||"",PageCode:a.pageName||"",AreaCode:a.moduleName||"",NavCode:a.navName||""}},dataArgs:{Source:{DataCode:a.dataName,Args:{Arg1:a.arg1||null,Arg2:a.arg2||null,Arg3:a.arg3||null,Arg4:a.arg4||null,Arg5:a.arg5||null,Arg6:a.arg6||null,Arg7:a.arg7||null,Arg8:a.arg8||null,Arg9:a.arg9||null,Arg10:a.arg10||null}}},readData:{ReadSecond:+new Date}}}},{key:"_setTargetEventData",value:function(e,t,a){this[h[e].target]={code:t,pathData:{Target:{SectionCode:a.channelName||"",PageCode:a.pageName||""}},dataArgs:{Target:{DataCode:a.dataName||"",Args:{Arg1:a.arg1||null,Arg2:a.arg2||null,Arg3:a.arg3||null,Arg4:a.arg4||null,Arg5:a.arg5||null,Arg6:a.arg6||null,Arg7:a.arg7||null,Arg8:a.arg8||null,Arg9:a.arg9||null,Arg10:a.arg10||null}}},readData:{ReadSecond:+new Date,ScrollCount:a.scrollCount||0,PageNo:a.pageNumber||0,State:a.readState||0}},this._registerPathEvent(e)}},{key:"_registerPathEvent",value:function(e){var t=this[h[e].source],n=this[h[e].target];n.readData.ReadSecond-=t.readData.ReadSecond;var r={SesssionID:a(),EventCode:t.code+"To"+n.code,CreateDate:+new Date,PathData:Object.assign(t.pathData,n.pathData),DataArgs:Object.assign(t.dataArgs,n.dataArgs),Read:Object.assign({},n.readData)};this._addEventToEventPool(r),this[h[e].source]=null,this[h[e].target]=null}},{key:"reportSingleEvent",value:function(e,t){var r=this;g.default.Production&&n(function(){var n={SesssionID:a(),EventCode:e,CreateDate:+new Date,EventArg:{Args:{Arg1:t.arg1||null,Arg2:t.arg2||null,Arg3:t.arg3||null,Arg4:t.arg4||null,Arg5:t.arg5||null,Arg6:t.arg6||null,Arg7:t.arg7||null,Arg8:t.arg8||null,Arg9:t.arg9||null,Arg10:t.arg10||null}},Read:{ReadSecond:parseInt(t.readTime||0),ScrollCount:t.scrollCount||0,PageNo:t.pageNumber||0,State:t.state||""}};r._addEventToEventPool(n)})}},{key:"_addEventToEventPool",value:function(e){this.eventsPool.push(e),wx.setStorageSync(i.StorageEventKey,this.eventsPool),console.debug("Current eventsPool: ",this.eventsPool),this.eventsPool.length>=5&&this._postEventsToSystem()}},{key:"_postEventsToSystem",value:function(){this.userAgent.setUserAgent({Token:wx.getStorageSync(i.code),OpenID:wx.getStorageSync(i.code)});var e=[].concat(this.eventsPool);return this.eventsPool=[],wx.setStorageSync(i.StorageEventKey,this.eventsPool),this.ajax.post(g.default.StatUserPath,e).then(function(e){console.log("StatUserPath",e)}).catch(function(e){console.error("StatUserPath",e)})}}]),e}();exports.default=new p; 
 			}); 
		define("utils/network/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./config")),t=e.default.environment,n=e.default.common.host[t],o=e.default.business.host[t],a=e.default.ad.host[t],d=e.default.analysis.host[t],r=e.default.baidu.host[t];console.debug("Environment",t),exports.default={Production:"production"===t,GetOpenId:n+"/TempleteMsg/GetOpenID",CollectFormId:n+"/TempleteMsg/CollectFormID",GetColumnList:o+"/Index/GetColumnList",GetRecommendPage:o+"/Index/GetRecommendPage",GetColumnDetail:o+"/Index/GetColumnDetail",GetTopicContent:o+"/Index/Play",GetPlayUrl:o+"/Index/CdnUrl",GetSearchWordInfo:o+"/Index/GetSearchWordInfo",Search:o+"/Index/Search",GetPlace:a+"/Ad/GetPlace",Stat:a+"/Ad/Stat",StatRegister:d+"/Stat/Register",StatUserPath:d+"/Stat/UserPath",Encrypt:r+"/cards%2Fmath%2Fcompare.json",UnEncrypt:r+"/network-demo%2Funencrypt.json"}; 
 			}); 
		define("utils/network/baiduService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=e(require("../../libs/babybus/network/cloud/ajax-cloud.js")),u=e(require("../../libs/babybus/network/signature.js")),a=e(require("./config")),i=e(require("./api")),o=a.default.baidu.sign,l=function(){function e(){t(this,e);var n=new u.default(void 0,o.xxTeaKey,void 0);this.ajax=new r.default(n)}return n(e,[{key:"getUnEncrypt",value:function(){return this.ajax.get(i.default.UnEncrypt)}},{key:"getEncrypt",value:function(){return this.ajax.get(i.default.Encrypt,!0)}}]),e}();exports.default=new l; 
 			}); 
		define("utils/network/businessService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),u=e(require("../../libs/babybus/network/old/ajax-old.js")),a=e(require("../../libs/babybus/network/old/signature-old.js")),r=e(require("../../libs/babybus/network/old/userAgent-old.js")),i=e(require("./config")),o=e(require("./api")),s=i.default.business.defaultUserAgent,l=i.default.business.sign,f=function(){function e(){t(this,e);var n=new a.default(l.decryptKey);this.userAgent=new r.default(s),this.ajax=new u.default(n,this.userAgent)}return n(e,[{key:"getColumnList",value:function(){return this.ajax.post(o.default.GetColumnList)}},{key:"getRecommendPage",value:function(){return this.ajax.post(o.default.GetRecommendPage)}},{key:"getColumnDetail",value:function(e,t,n){return this.ajax.post(o.default.GetColumnDetail+"/"+e+"/"+t+"/"+n)}},{key:"getSearchWordInfo",value:function(){return this.ajax.get(o.default.GetSearchWordInfo)}},{key:"search",value:function(e){return this.ajax.post(o.default.Search,{name:e})}},{key:"getTopicContent",value:function(e){return this.ajax.get(o.default.GetTopicContent+"/"+e)}},{key:"getPlayUrl",value:function(e,t,n){return this.ajax.post(o.default.GetPlayUrl,{videoID:e,policyID:t,definitionKey:n},!1).then(function(e){return e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,e.length-1):e})}}]),e}();exports.default=new f; 
 			}); 
		define("utils/network/commonService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),r=e(require("../../libs/babybus/network/old/ajax-old.js")),u=e(require("../../libs/babybus/network/old/signature-old.js")),o=e(require("../../libs/babybus/network/old/userAgent-old.js")),i=e(require("./config")),a=e(require("./api")),s=i.default.business.defaultUserAgent,l=i.default.business.sign,f=i.default.common.originId,c=function(){function e(){n(this,e);var t=new u.default(l.decryptKey);this.userAgent=new o.default(s),this.ajax=new r.default(t,this.userAgent)}return t(e,[{key:"getOpenId",value:function(e){return this.ajax.post(a.default.GetOpenId,{Code:e,OriginID:f})}},{key:"collectFormId",value:function(e,n){return this.ajax.post(a.default.CollectFormId,{OpenID:e,OriginID:f,FormID:n},!1).then(function(e){console.debug("收集成功",e)}).catch(function(e){console.error("收集失败",e.message)})}}]),e}();exports.default=new c; 
 			}); 
		define("utils/network/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="hCOTTnue28X2mUlEoPVLVgDIW8BICqZ0",o="ma08VKzQuyHn48rahxPuuAFNoo5k3Dej";exports.default={environment:"production",minWxSDKVersion:"1.9.9",common:{host:{production:"https://api-xcx-msg.babybus.com"},sign:{decryptKey:"BabyBusRecommendBabyBusRecommend"},defaultUserAgent:{ProductID:3168,ProjectID:9},originId:"gh_74e55db0d6bd"},business:{host:{production:"https://api-nursery-xcx.babybus.com"},sign:{decryptKey:"BabyBusRecommendBabyBusRecommend"},defaultUserAgent:{ProductID:3168,ProjectID:9}},ad:{host:{production:"https://showapi.babybus.com"},sign:{signKey:e,xxTeaKey:o,signAccountKey:"暂时没用到"},defaultUserAgent:{ProductID:118,CHID:1,VerID:11,VerCode:"1.6.4",CHCode:"WechatApp",ProjectID:9,PlatForm:21,DeviceType:1}},analysis:{host:{production:"https://tj.babybus.com"},sign:{signKey:e,xxTeaKey:o,signAccountKey:"暂时没用到"},defaultUserAgent:{ProductID:118,CHID:1,VerID:11,VerCode:"1.6.4",CHCode:"WechatApp",ProjectID:9,PlatForm:21,DeviceType:1}},baidu:{host:{production:"https://wx-xcx-jzsyb.gz.bcebos.com"},sign:{xxTeaKey:o}},dataKey:{code:"openid",StorageEventKey:"StorageEvent"}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,i,a].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("./libs/babybus/network/networkObserver.js"),o=require("./libs/babybus/dataAnalysis/reporter.js");App(function(a,o,n){return o in a?Object.defineProperty(a,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[o]=n,a}({globalData:{backgroundAudioManager:""},onLaunch:function(n){this.reporter=o;var e=n.query.TDChannelId;"bbsong"===e&&(this.globalData.backAppInfo={wxAppId:"wxde9ed62a5d2ffe71",path:"/pages/index/index"}),"zjdq"===e&&(this.globalData.backAppInfo={wxAppId:"wxd94a8a624064687d",path:"/pages/index/index"}),(0,a.setupNetworkStatusChangeListener)()},onShow:function(){var a=this;this.globalData.backgroundAudioManager=wx.getBackgroundAudioManager(),this.globalData.backgroundAudioManager.title="宝宝学数学背景音乐",this.globalData.backgroundAudioManager.epname="",this.globalData.backgroundAudioManager.singer="",this.globalData.backgroundAudioManager.src="https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2FBGM00.mp3",this.globalData.backgroundAudioManager.onEnded(function(){a.globalData.backgroundAudioManager.src="https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2FBGM00.mp3",a.globalData.backgroundAudioManager.play(),console.log("开始播放")}),this.globalData.backgroundAudioManager.play()},onHide:function(){console.log("aaaaaaaa bbbbbbbbbbbb"),this.globalData.backgroundAudioManager.stop()}},"globalData",{backAppInfo:{}})); 
 			}); 	require("app.js");
 		__wxRoute = 'components/nav/nav';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/nav/nav.js';	define("components/nav/nav.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=e(require("../../libs/babybus/network/ajax.js")),a=e(require("../../libs/babybus/network/signature")),r=e(require("../../libs/babybus/network/userAgent")),o=require("./utils.js"),n="/Program/MiniprogramConfig",p=wx.getSystemInfoSync(),i=(0,o.compareVersion)(p.SDKVersion,"2.0.7")>=0,s=p.model.indexOf("iPhone X")>=0,d={ajax:void 0,requestFailed:!1},g=getApp();Component({properties:{env:{type:String,value:"prod"},appId:String,appName:String,productId:{type:Number,value:3642},signKey:{type:String,value:"VR1BtITxk1oNSh4nQUVdlKUgJTg4sQOp"},xxTeaKey:{type:String,value:"TVYo5XPpl7ckK4MfCmCkCsR88hqilrDG"},bubbleColor:{type:String,value:"rgba(255,255,255,.68)"},shadowColor:{type:String,value:"rgba(0,0,0,.2)"}},data:{navigatorAvailable:i,isIphoneX:s,popupHidden:!0,keyWord:void 0,downloadPath:void 0,downloadIcon:void 0,nav:void 0,floatShare:void 0,backAppInfo:{}},created:function(){var e=new a.default(this.properties.signKey,this.properties.xxTeaKey,""),o=new r.default("",{ProductID:this.properties.productId,CHID:1,VerID:1,VerCode:1,CHCode:"WechatApp",ProjectID:3642,PlatForm:21,DeviceType:1});d.ajax=new t.default(e,o),d.requestFailed=!1},ready:function(){this.requestData(),g.globalData.backAppInfo.wxAppId&&this.setData({backAppInfo:g.globalData.backAppInfo})},pageLifetimes:{show:function(){d.requestFailed&&(d.requestFailed=!1,console.debug("之前获取导航配置失败，页面可见后重新请求"),this.requestData())}},methods:{requestData:function(){var e=this,t="prod"===this.properties.env?"https://spg.babybus.com"+n:"http://test.spg.babybus.co"+n;d.ajax.post(t,{AppID:this.properties.appId}).then(function(t){return e.processResult(t)}).catch(function(e){console.error("获取导航配置失败",e),d.requestFailed=!0})},processResult:function(e){console.debug("开始处理导航配置数据");var t={nav:[]};if(e){var a=void 0;if(1===e.isDownaLoadApp&&(t.keyWord=e.downaLoadApp.keywordList[0].keyword,t.downloadPath="?ServiceMsgID="+e.downaLoadApp.keywordList[0].keywordID,t.downloadIcon=e.downaLoadApp.logo,t.nav.push({kind:"download",appImg:e.downaLoadApp.logo})),1===e.isTargetApp&&(a={kind:"toEdu",appId:e.targetApp.appID,appImg:e.targetApp.logo,appPath:e.targetApp.defaultUrl}),Array.isArray(e.refProgramList)&&e.refProgramList.length>0)for(var r=5-t.nav.length-(a?1:0),n=Math.min(r,e.refProgramList.length),p=0;p<n;p++){var i=e.refProgramList[p];t.nav.push({kind:"toOther",appId:i.appID,appImg:i.logo,appPath:i.defaultUrl})}a&&t.nav.push(a),e.shareConfig&&(e.shareConfig.shareIcon&&(t.floatShare={icon:e.shareConfig.shareIcon,width:e.shareConfig.iconWidth,height:e.shareConfig.iconHeight,right:e.shareConfig.rightPadding,bottom:e.shareConfig.bottomPadding}),e.shareConfig.shareContent&&e.shareConfig.sharePic&&(0,o.setShareConfig)({title:e.shareConfig.shareContent,imageUrl:e.shareConfig.sharePic,path:"/pages/index/index?TDChannelId=share"})),this.setData(t),console.debug("导航配置数据处理完毕")}else console.error("服务端没数据返回")},navigate:function(e){console.debug("代码跳转到小程序 "+e.currentTarget.dataset.appId),wx.navigateToMiniProgram({appId:e.currentTarget.dataset.appId,path:e.currentTarget.dataset.path,success:function(){console.debug("跳转成功")},fail:function(e){console.error("跳转失败",e)}}),g&&g.reporter&&"function"==typeof g.reporter.reportAnalytics&&g.reporter.reportAnalytics("nav_click",{index:e.currentTarget.dataset.index,appId:e.currentTarget.dataset.appId,iconType:e.currentTarget.dataset.type})},onNavigatorTrigger:function(e){console.debug("控件跳转到小程序 "+e.currentTarget.dataset.appId),g&&g.reporter&&"function"==typeof g.reporter.reportAnalytics&&g.reporter.reportAnalytics("nav_click",{index:e.currentTarget.dataset.index,appId:e.currentTarget.dataset.appId,iconType:e.currentTarget.dataset.type})},popupHide:function(){this.setData({popupHidden:!0})},popupShow:function(){this.setData({popupHidden:!1}),g&&g.reporter&&"function"==typeof g.reporter.reportAnalytics&&g.reporter.reportAnalytics("nav_click",{index:0,iconType:"download"})}}}); 
 			}); 	require("components/nav/nav.js");
 		__wxRoute = 'pages/newindex/newindex';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/newindex/newindex.js';	define("pages/newindex/newindex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("../../utils/network/config.js")),n=(t(require("../../utils/network/adService.js")),t(require("../../utils/network/businessService.js")),t(require("../../utils/network/baiduService.js"))),o=(e.default.dataKey,getApp()),a=wx.createInnerAudioContext();a.autoplay=!0,Page({data:{score:0,commonaudioUrl:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2F005.mp3",result:"",navflag:!0},onLoad:function(t){},onReady:function(){},onShow:function(){var t=this;wx.getStorage({key:"score",success:function(e){t.setData({score:parseInt(e.data)}),console.log(e.data)},fail:function(){t.setData({score:0})}}),this.getEncrypt()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return o.reporter.reportAnalytics("index_share",{}),{title:"高矮长短大小，快带宝宝来学习比较吧~",path:"/pages/newindex/newindex",imageUrl:"../../img/share.jpg"}},tocheck:function(t){o.reporter.reportAnalytics("customspass_click",{nth:t.currentTarget.dataset.test}),a.src=this.data.commonaudioUrl,a.play(),a.seek(0);var e=t.currentTarget.dataset.test;console.log(e),wx.navigateTo({url:"../pluscheck/pluscheck?test="+e})},showmusic:function(t){o.reporter.reportAnalytics("nav_click",{appname:t.currentTarget.dataset.name}),a.src=this.data.commonaudioUrl,a.play(),a.seek(0)},share:function(){commoninnerAudioContext.src=this.data.commonaudioUrl,commoninnerAudioContext.play(),commoninnerAudioContext.seek(0)},getEncrypt:function(){var t=this;n.default.getEncrypt().then(function(e){t.setData({result:e,navflag:e.navflag}),console.log(e)}).catch(function(e){t.setData({result:"请求失败\n"+JSON.stringify(e,null,2)}),wx.hideLoading()})}}); 
 			}); 	require("pages/newindex/newindex.js");
 		__wxRoute = 'pages/pluscheck/pluscheck';__wxRouteBegin = true; 	define("pages/pluscheck/pluscheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var a,o,s=t(require("../../utils/network/config.js")),n=(t(require("../../utils/network/adService.js")),t(require("../../utils/network/businessService.js")),t(require("../../utils/network/baiduService.js"))),i=getApp(),r=(s.default.dataKey,void 0),c=void 0,u=wx.createInnerAudioContext();u.autoplay=!0;var l=wx.createInnerAudioContext();l.autoplay=!0;var d=wx.createInnerAudioContext();d.autoplay=!0;var h=wx.createInnerAudioContext();h.autoplay=!0;var f=wx.createInnerAudioContext();f.autoplay=!0;var p=wx.createInnerAudioContext();p.autoplay=!0;var g=void 0,m=void 0,x=void 0;Page((o={data:(a={starAnimationData:{},showAnimationData:{},changeAnimationData:{},isback:1,testAnimationData:{},currentPage:"show",disabled:!1,data:"",showdata:"",testdata:"",answerarr:[],activeIndex:0,rightvalue:"",randomplus:"",testsum:"",duration:600,onesuccess:!1,result:"",onetest:"",twotest:"",threetest:"",fourtest:"",randomindexarray:[],realonetest:"",realtwotest:"",realthreetest:"",realfourtest:"",test:"",score:0,rightaudioUrl:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FSound%2F%E7%AD%94%E5%AF%B9%E4%BA%86.mp3",successaudioUrl:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FSound%2F%E6%81%AD%E5%96%9C.mp3",nextappaudioUrl:"https://wx-xcx-tools.gz.bcebos.com/Babycard%2FAudio%2FSoundeffect%2Fmm%2Fwin.mp3",wrongaudioUrl:"https://wx-xcx-tools.gz.bcebos.com/Babycard%2FAudio%2FSoundeffect%2Fmm%2Fwrong.mp3",staraudioUrl:"https://wx-xcx-tools.gz.bcebos.com/Babycard%2FAudio%2FSoundeffect%2Fmm%2FtipStar.mp3",righttwoaudio:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2F003.mp3",successtwoaudio:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2F004.mp3",changecardaudio:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2F006.mp3",commonaudioUrl:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FMusic%2F005.mp3",nextnextaudioURrl:"https://wx-xcx-tools.gz.bcebos.com/BabyMath%2FAudio%2FSound%2F%E8%AE%A4%E8%AF%86%E5%9B%BE%E5%BD%A2.mp3",isplayaudio:!1,rightflag:!1,currenttestdata:""},e(a,"rightflag",[!1,!1]),e(a,"wrongflag",[!1,!1]),e(a,"navflag",!1),e(a,"foursuccess",!1),e(a,"nextflag",!1),e(a,"ishide",!1),e(a,"nowClick",-1),a),localData:{canClick:!0},onLoad:function(t){wx.getNetworkType({success:function(t){"none"==t.networkType&&wx.showToast({title:"无网络，请检查网络连接",icon:"none",duration:3e3})}}),this.setData({test:t.test});var e=this;wx.getStorage({key:"score",success:function(t){e.setData({score:parseInt(t.data)})},fail:function(){e.setData({score:0})}}),this.getEncrypt(),u.onPause(function(){e.setData({isplayaudio:!1}),console.log("开始播放")}),u.onPlay(function(){e.setData({isplayaudio:!0}),console.log("开始播放")}),u.onEnded(function(){e.setData({isplayaudio:!1}),console.log("开始播放")}),u.onStop(function(){e.setData({isplayaudio:!1}),console.log("开始播放")})},initAnimation:function(){wx.getSystemInfo({success:function(t){g=t.windowWidth,m=t.windowHeight,x=t.windowWidth/375}})},onReady:function(){this.initAnimation()},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return i.reporter.reportAnalytics("test_share",{}),{title:"高矮长短大小，快带宝宝来学习比较吧~",path:"pages/newindex/newindex"}},nexttest:function(t){var a=this;if(this.localData.canClick){this.setData({nowClick:t.currentTarget.dataset.index}),this.localData.canClick=!1;var o=this,s=this.data.activeIndex;if(this.data.data[s].rightValue[0]==t.currentTarget.dataset.value){o.setData({ishide:!0});w="rightflag["+(d=t.currentTarget.dataset.index)+"]";this.setData(e({},w,!0)),setTimeout(function(){o.setData(e({},w,!1))},1e3),u.stop(),p.src=o.data.staraudioUrl,p.play(),p.seek(0),r=wx.createAnimation({duration:80,timingFunction:"linear"});for(var n=0,i=[[46,-305,375],[-52,270,-50],[-10,23,135]][[1]];n<=5;)!function(){var t=i[0]*x*n*n+i[1]*x*n+i[2]*x;5==n&&(t=0);var e=m-m/5*n,o=-.08*n*n+.4*n+1;n++,setTimeout(function(){r.translate(t,e).scale(o,o).step(),a.setData({starAnimationData:r.export()})},80*n)}();if(setTimeout(function(){(r=wx.createAnimation({duration:400,timingFunction:"ease-out"})).scale(.01,.01).opacity(0).rotate(180).step(),a.setData({starAnimationData:r.export()})},800),setTimeout(function(){for(var t=a.data.score,e=0;e<20;e++)setTimeout(function(){t++,this.setData({score:t})}.bind(a),30*e);wx.setStorage({key:"score",data:t+20})},800),setTimeout(function(){(r=wx.createAnimation({duration:0,timingFunction:"linear"})).translate(g,m).scale(1,1).opacity(1).rotate(0).step(),a.setData({starAnimationData:r.export(),gCoverHide:!0})},1800),s<this.data.testsum-1)setTimeout(function(){l.src=o.data.changecardaudio,l.play(),l.seek(0);var t=o.data.activeIndex+1;o.setData({activeIndex:t,nowClick:-1});var e=1*g;(c=wx.createAnimation({duration:1e3,timingFunction:"ease"})).translateX(-e*t).step(),o.setData({changeAnimationData:c.export()}),setTimeout(function(){var t=o.data.activeIndex,e=o.data.data[t];setTimeout(function(){u.stop(),u.src=e.audioUrl,u.play(),u.seek(0)},0),o.setData({ishide:!1}),o.localData.canClick=!0},1200)},2500);else if(setTimeout(function(){o.setData({nextflag:!0})},4e3),"onetest"==o.data.test){o=this;setTimeout(function(){o.setData({onesuccess:!0}),l.src=o.data.successtwoaudio,l.play(),l.seek(0),f.src=o.data.successaudioUrl,f.play(),f.seek(0)},2e3)}else if("twotest"==o.data.test){o=this;setTimeout(function(){o.setData({twosuccess:!0}),l.src=o.data.successtwoaudio,l.play(),l.seek(0),f.src=o.data.successaudioUrl,f.play(),f.seek(0)},2e3),u.onPlay(function(){console.log("开始播放")})}else if("threetest"==o.data.test){o=this;setTimeout(function(){o.setData({threesuccess:!0}),l.src=o.data.successtwoaudio,l.play(),l.seek(0),f.src=o.data.nextappaudioUrl,f.play(),f.seek(0)},2e3),u.onPlay(function(){console.log("开始播放")})}else o.data.test}else{var o=this,d=t.currentTarget.dataset.index,w="wrongflag["+d+"]";this.setData(e({},w,!0)),o.localData.canClick=!0,setTimeout(function(){o.setData(e({},w,!1))},1e3),u.stop(),h.src=o.data.wrongaudioUrl,h.play(),h.seek(0),console.log("fffff")}}},getEncrypt:function(){var t=this;wx.showLoading({title:"正在加载中"}),n.default.getEncrypt().then(function(e){t.setData({result:e,navflag:e.navflag}),console.log(t.data.result),t.randomtesttocache();var a=t;if("onetest"==a.data.test)e=a.data.realonetest;else if("twotest"==a.data.test)e=a.data.realtwotest;else if("threetest"==a.data.test)e=a.data.realthreetest;else if("fourtest"==a.data.test)var e=a.data.realfourtest;console.log(e),a.setData({data:e,testsum:e.length});var o=a.data.activeIndex,s=a.data.data[o];setTimeout(function(){u.src=s.audioUrl,u.play(),u.seek(0)},500)}).catch(function(e){t.setData({result:"请求失败\n"+JSON.stringify(e,null,2)}),wx.hideLoading()})},randomtesttocache:function(){var t=this.data.result.one,e=this.data.result.two,a=this.data.result.three;this.setData({onetest:t,twotest:e,threetest:a});var o=this;this.setData({realonetest:o.convertrealtest(this.data.onetest),realtwotest:o.convertrealtest(this.data.twotest),realthreetest:o.convertrealtest(this.data.threetest)}),wx.hideLoading()},generateRandom:function(t,e){for(var a=new Array,o=0;o<100&&a.length<t;o++){var s=Math.floor(Math.random()*e);if(0==a.length)a.push(s);else{for(var n=!0,i=0;i<a.length;i++)a[i]==s&&(n=!1);n&&a.push(s)}}return a},convertrealtest:function(t){var e=[];return this.generateRandom(4,t.length).forEach(function(a){e.push(t[a])}),e},tocheck:function(t){i.reporter.reportAnalytics("customspass_click",{nth:t.currentTarget.dataset.test}),d.src=this.data.commonaudioUrl,d.play(),d.seek(0);var e=t.currentTarget.dataset.test;console.log(e),wx.redirectTo({url:"../pluscheck/pluscheck?test="+e})},returnindex:function(){d.src=this.data.commonaudioUrl,d.play(),d.seek(0),wx.reLaunch({url:"../newindex/newindex"})},hideall:function(){d.src=this.data.commonaudioUrl,d.play(),d.seek(0),console.log("1111111111111")},no:function(){i.reporter.reportAnalytics("test_jump",{}),d.src=this.data.commonaudioUrl,d.play(),d.seek(0)},cardAudioPlay:function(){var t=this,e=t.data.activeIndex,a=t.data.data[e];u.src=a.audioUrl,u.play(),u.seek(0)},catchTouchMove:function(){return!1},finish:function(){console.log("aaaaaaaaaaa")}},e(o,"onUnload",function(){u.stop(),l.stop(),f.stop()}),e(o,"hasno",function(){console.log("1111111111111")}),o)); 
 			}); 	require("pages/pluscheck/pluscheck.js");
 		__wxRoute = 'pages/comparecheck/comparecheck';__wxRouteBegin = true; 	define("pages/comparecheck/comparecheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=void 0,a=void 0,n=0,i=0,e=0,o=void 0;Page({data:{starAnimationData:{},showAnimationData:{},isback:1,testAnimationData:{},currentPage:"show",disabled:!1},onLoad:function(t){},initAnimation:function(){wx.getSystemInfo({success:function(t){n=t.windowWidth,i=t.windowHeight,e=t.windowWidth/375}})},onReady:function(){var a=this;this.initAnimation(),t=wx.createAnimation({duration:100,timingFunction:"linear"});for(var n=0,o=[[46,-305,375],[-52,270,-50],[-10,23,135]][[Math.floor(3*Math.random())]];n<=5;)!function(){var s=o[0]*e*n*n+o[1]*e*n+o[2]*e;5==n&&(s=0);var r=i-i/5*n,c=-.08*n*n+.4*n+1;n++,setTimeout(function(){t.translate(s,r).scale(c,c).step(),a.setData({starAnimationData:t.export()})},100*n)}();setTimeout(function(){(t=wx.createAnimation({duration:400,timingFunction:"ease-out"})).scale(.01,.01).opacity(0).rotate(180).step(),a.setData({starAnimationData:t.export()})},900)},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},nexttest:function(){nextAnimation=wx.createAnimation({duration:1e3,timingFunction:"ease"}),o=wx.createAnimation({duration:1e3,timingFunction:"ease"});var t=.804*n;nextAnimation.translateX(-t).step(),o.translateX(0).step(),this.setData({nextAnimationData:nextAnimation.export(),testAnimationData:o.export()});var a=this;setTimeout(function(){a.setData({isback:0})},1e3)},showTest2:function(){var t=.804*n;if(this.setData({disabled:!0}),a=wx.createAnimation({duration:1e3,timingFunction:"ease"}),o=wx.createAnimation({duration:1e3,timingFunction:"ease"}),"show"==this.data.currentPage){i=this;a.translateX(-t).step(),o.translateX(-t).step(),setTimeout(function(){i.setData({disabled:!1}),(a=wx.createAnimation({duration:10,timingFunction:"step-start"})).translateX(t).step(),i.setData({showAnimationData:a.export(),testAnimationData:o.export()})},1e3),this.setData({currentPage:"test"})}else{console.log("test"),a.translateX(0).step(),o.translateX(2*-t).step(),this.setData({currentPage:"show"});var i=this;setTimeout(function(){i.setData({disabled:!1}),(o=wx.createAnimation({duration:10,timingFunction:"step-start"})).translateX(0).step(),i.setData({showAnimationData:a.export(),testAnimationData:o.export()})},1e3)}this.setData({showAnimationData:a.export(),testAnimationData:o.export()})}}); 
 			}); 	require("pages/comparecheck/comparecheck.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var n=t(require("../../utils/network/config.js")),e=t(require("../../utils/network/adService.js")),i=t(require("../../utils/network/businessService.js")),a=t(require("../../utils/network/baiduService.js")),u=n.default.dataKey;getApp();Page({data:{},onLoad:function(){wx.setStorageSync(u.code,"testOpenId")},getAdConfig:function(){var t=this;wx.showLoading({title:"请求中"}),e.default.getConfig().then(function(n){t.setData({result:JSON.stringify(n,null,2)}),wx.hideLoading()}).catch(function(n){t.setData({result:"请求失败\n"+JSON.stringify(n,null,2)}),wx.hideLoading()})},getRecommendPage:function(){var t=this;wx.showLoading({title:"请求中"}),i.default.getRecommendPage().then(function(n){t.setData({result:JSON.stringify(n,null,2)}),wx.hideLoading()}).catch(function(n){t.setData({result:"请求失败\n"+JSON.stringify(n,null,2)}),wx.hideLoading()})},getUnEncrypt:function(){var t=this;wx.showLoading({title:"请求中"}),a.default.getUnEncrypt().then(function(n){t.setData({result:JSON.stringify(n,null,2)}),wx.hideLoading()}).catch(function(n){t.setData({result:"请求失败\n"+JSON.stringify(n,null,2)}),wx.hideLoading()})},getEncrypt:function(){var t=this;wx.showLoading({title:"请求中"}),a.default.getEncrypt().then(function(n){t.setData({result:JSON.stringify(n,null,2)}),wx.hideLoading()}).catch(function(n){t.setData({result:"请求失败\n"+JSON.stringify(n,null,2)}),wx.hideLoading()})}}); 
 			}); 	require("pages/index/index.js");
 	