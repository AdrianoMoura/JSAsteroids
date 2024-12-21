!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.heading=-p5.PI/2,this.rotation=0,this.pos=p5.createVector(p5.windowWidth/2,p5.windowHeight/2),this.vel=p5.createVector(0,0),this.accel=0}return r(e,[{key:"draw",value:function(){this.move(),this.render()}},{key:"move",value:function(){this.heading+=this.rotation;var e=p5.createVector(Math.cos(this.heading),Math.sin(this.heading));e.mult(this.accel),this.vel.add(e),this.pos.add(this.vel),this.pos.x>p5.windowWidth+this.radius?this.pos.x=0-this.radius:this.pos.x<0-this.radius&&(this.pos.x=p5.windowWidth+this.radius),this.pos.y>p5.windowHeight+this.radius?this.pos.y=0-this.radius:this.pos.y<0-this.radius&&(this.pos.y=p5.windowHeight+this.radius)}},{key:"setRotation",value:function(e){this.rotation=e}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(5));var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.total=t,this.asteroids=[],this.createAsteroids()}return r(e,[{key:"createAsteroids",value:function(){for(var e=0;e<this.total;e++)this.asteroids.push(new o.default)}},{key:"draw",value:function(){for(var e=0;e<this.asteroids.length;e++)this.asteroids[e].draw()}},{key:"addAsteroids",value:function(e){var t;(t=this.asteroids).push.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))}},{key:"splitAsteroid",value:function(e,t){t&&this.addAsteroids(t),this.asteroids=this.asteroids.filter(function(t){return t!==e})}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(0)),i=s(n(7));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.keyboardListener(),e.lasers=[],e.radius=10,e.died=!1,e.dieTimeout=2e3,e.isSafe=!0,e.safeCheck=0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"keyboardListener",value:function(){var e=this;p5.keyPressed=function(){p5.keyCode===p5.LEFT_ARROW&&e.rotate("LEFT"),p5.keyCode===p5.RIGHT_ARROW&&e.rotate("RIGHT"),p5.keyCode===p5.UP_ARROW&&e.thrust()," "===p5.key&&e.shoot(),p5.keyCode===p5.ENTER&&e.warp()},p5.keyReleased=function(){p5.keyCode!==p5.LEFT_ARROW&&p5.keyCode!==p5.RIGHT_ARROW||e.rotate(),p5.keyCode===p5.UP_ARROW&&e.thrust(!1)}}},{key:"shoot",value:function(){soundController.laser(),this.lasers.push(new i.default(this.pos,this.heading))}},{key:"rotate",value:function(e){this.rotation="LEFT"===e?-.08:"RIGHT"===e?.08:0}},{key:"thrust",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.accel=e?.1:0}},{key:"warp",value:function(){this.pos=p5.createVector(p5.random(0,p5.windowWidth),p5.random(0,p5.windowHeight))}},{key:"hits",value:function(e){var t=this,n=e.pos.copy(),r=p5.dist(n.x,n.y,this.pos.x,this.pos.y);r<this.radius+e.radius&&(this.died||(this.die(),e.split())),r<this.radius+2*e.radius&&(this.isSafe=!1,clearTimeout(this.safeCheck),this.safeCheck=0,this.safeCheck=setTimeout(function(){return t.isSafe=!0},2e3))}},{key:"die",value:function(){var e=this;gameController.removeLife(),this.brokenParts=Array.from({length:4},function(){return{pos:e.pos.copy(),vel:p5.createVector(p5.random(-1,1),p5.random(-1,1)),heading:0,rotation:p5.random(-.1,.1),opacity:p5.random(.8,1)}}),this.died=!0,this.pos=p5.createVector(p5.windowWidth/2,p5.windowHeight/2),this.vel=p5.createVector(0,0),this.accel=0,this.startDie=p5.millis()}},{key:"render",value:function(){var e=this;if(this.died)return this.died=!(p5.millis()-this.startDie>this.dieTimeout&&this.isSafe),void this.brokenParts.forEach(function(t){t.pos.add(t.vel),t.heading+=t.rotation,p5.push(),p5.stroke(255*t.opacity),t.opacity-=.01,p5.translate(t.pos.x,t.pos.y),p5.rotate(t.heading),p5.line(-e.radius/2,-e.radius/2,e.radius/2,e.radius/2),p5.pop()});this.accel>0&&soundController.thrust(),p5.push(),p5.noFill(),p5.stroke(255),p5.translate(this.pos.x,this.pos.y),p5.rotate(this.heading+p5.PI/2),p5.beginShape(),p5.vertex(0,-this.radius),p5.vertex(this.radius,this.radius),p5.vertex(0,this.radius/2),p5.vertex(-this.radius,this.radius),p5.endShape(p5.CLOSE),this.accel>0&&p5.frameCount%5>2&&(p5.beginShape(),p5.vertex(.4*this.radius,.8*this.radius),p5.vertex(0,1.5*this.radius),p5.vertex(.4*-this.radius,.8*this.radius),p5.endShape()),p5.pop(),this.lasers.forEach(function(e){return e.draw()})}}]),t}();t.default=a},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(4));n(11),new p5(r.default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(1)),o=u(n(6)),i=u(n(2)),s=u(n(8)),a=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){window.p5=e,e.preload=function(){window.font=e.loadFont("Hyperspace.otf"),window.soundController=new a.default},e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),window.gameController=new o.default,window.player=new i.default,window.asteroidsCollection=new r.default(5),window.dustCollection=new s.default,e.textFont(font),e.keyPressed=function(){e.keyCode===e.ENTER&&gameController.gameStart()}},e.draw=function(){e.background(0),asteroidsCollection.draw(),dustCollection.draw(),e.textSize(28),e.fill(255),e.textAlign(e.LEFT),e.text(gameController.score,100,100),e.textSize(28),e.fill(255),e.textAlign(e.CENTER),e.text(gameController.maxScore,e.windowWidth/2,100);for(var t=0;t<gameController.lifes-1;t++)e.push(),e.noFill(),e.stroke(255),e.translate(25*t+108,130),e.beginShape(),e.vertex(0,-10),e.vertex(10,10),e.vertex(0,5),e.vertex(-10,10),e.endShape(e.CLOSE),e.pop();if(gameController.isStarted){if(player.draw(),0===asteroidsCollection.asteroids.length)return void gameController.nextLevel();asteroidsCollection.asteroids.forEach(function(e){player.hits(e),player.lasers.every(function(t,n){return e.hits(t)?(player.lasers.splice(n,1),!1):(t.expire()&&player.lasers.splice(n,1),!0)})})}else gameController.gameOver?(e.textSize(48),e.fill(255),e.textAlign(e.CENTER),e.text("GAME OVER",e.windowWidth/2,e.windowHeight/2-200)):(e.textSize(48),e.fill(255),e.textAlign(e.CENTER),e.text("START",e.windowWidth/2,e.windowHeight/2-200))},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var i=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.size=n||3,r.vel=p5.createVector(p5.random(-3,3),p5.random(-3,3)),r.vel.mult(p5.map(r.size,1,3,1,.8)),r.radius=p5.map(r.size,1,3,10,50),r.pos=e?e.copy():r.generateRandomPos(),r.sides=p5.floor(p5.random(8,15)),r.shape=Array.from({length:r.sides},function(){return p5.random(.3*-r.radius,.3*r.radius)}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"generateRandomPos",value:function(){for(var e=!0,t=void 0;e;)t=p5.createVector(p5.random(p5.windowWidth),p5.random(p5.windowHeight)),player?p5.dist(t.x,t.y,player.pos.x,player.pos.y)>player.radius+2*this.radius&&(e=!1):e=!1;return t}},{key:"split",value:function(){var e=void 0;switch(this.size>1&&(e=[new t(this.pos,this.size-1),new t(this.pos,this.size-1)]),this.size){case 1:soundController.smallExplosion();break;case 2:soundController.mediumExplosion();break;case 3:soundController.bigExplosion()}gameController.makePoint(this.size),dustCollection.addDust(this.pos,this.radius),asteroidsCollection.splitAsteroid(this,e)}},{key:"hits",value:function(e){var t=e.pos.copy();return p5.dist(t.x,t.y,this.pos.x,this.pos.y)<this.radius+e.radius&&(this.split(),!0)}},{key:"render",value:function(){var e=this;p5.push(),p5.noFill(),p5.stroke(255),p5.translate(this.pos.x,this.pos.y),p5.beginShape(),this.shape.forEach(function(t,n){var r=p5.map(n,0,e.sides,0,p5.TWO_PI),o=e.radius+t;p5.vertex(o*p5.cos(r),o*p5.sin(r))}),p5.endShape(p5.CLOSE),p5.pop()}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(1)),i=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isStarted=!1,this.gameOver=!1,this.calledNextLevel=!1,this.score=0,this.maxScore=localStorage.getItem("maxscore")||0,this.lifes,this.totalAsteroids}return r(e,[{key:"gameStart",value:function(){this.isStarted=!0,this.totalAsteroids=5,this.lifes=3,this.score=0,this.gameOver=!1,window.player=new i.default,window.asteroidsCollection=new o.default(this.totalAsteroids)}},{key:"doGameOver",value:function(){var e=this;this.gameOver=!0,this.isStarted=!1,p5.keyPressed=function(){p5.keyCode===p5.ENTER&&e.gameStart()}}},{key:"removeLife",value:function(){this.lifes--,0===this.lifes&&this.doGameOver()}},{key:"nextLevel",value:function(){var e=this;this.calledNextLevel||(this.calledNextLevel=!0,setTimeout(function(){e.calledNextLevel=!1,e.makePoint(0,1e3),e.totalAsteroids++,window.asteroidsCollection=new o.default(e.totalAsteroids)},1e3))}},{key:"makePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;switch(e){case 1:this.score+=100;break;case 2:this.score+=50;break;case 3:this.score+=20}this.score+=t,this.score>this.maxScore&&(this.maxScore=this.score,localStorage.setItem("maxscore",this.maxScore))}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var i=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.pos=e.copy(),r.vel=p5.createVector(Math.cos(n),Math.sin(n)),r.vel.mult(10),r.heading=n,r.radius=2,r.lifeTime=1200,r.startTime=p5.millis(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"expire",value:function(){return p5.millis()-this.startTime>this.lifeTime}},{key:"render",value:function(){p5.push(),p5.stroke(255),p5.strokeWeight(this.radius),p5.point(this.pos.x,this.pos.y),p5.pop()}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dusts=[]}return r(e,[{key:"draw",value:function(){for(var e=0;e<this.dusts.length;e++)this.dusts[e].draw(),this.dusts[e].opacity<=0&&this.dusts.splice(e,1)}},{key:"addDust",value:function(e,t){for(var n=0;n<t;n++)this.dusts.push(new o.default(e.copy()))}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.pos=e.copy(),n.vel=p5.createVector(p5.random(-1,1),p5.random(-1,1)),n.opacity=p5.random(.5,1),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"render",value:function(){p5.stroke(255*this.opacity),p5.point(this.pos.x,this.pos.y),this.opacity-=.01}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p5.soundFormats("wav"),this.laserSound=p5.loadSound("sounds/fire.wav"),this.bigExplosionSound=p5.loadSound("sounds/bangLarge.wav"),this.mediumExplosionSound=p5.loadSound("sounds/bangMedium.wav"),this.smallExplosionSound=p5.loadSound("sounds/bangSmall.wav"),this.thrustSound=p5.loadSound("sounds/thrust.wav")}return r(e,[{key:"laser",value:function(){this.laserSound.setVolume(.3),this.laserSound.play()}},{key:"bigExplosion",value:function(){this.bigExplosionSound.setVolume(.5),this.bigExplosionSound.play()}},{key:"mediumExplosion",value:function(){this.mediumExplosionSound.setVolume(.5),this.mediumExplosionSound.play()}},{key:"smallExplosion",value:function(){this.smallExplosionSound.setVolume(.5),this.smallExplosionSound.play()}},{key:"thrust",value:function(){this.thrustSound.setVolume(.1),this.thrustSound.play()}}]),e}();t.default=o},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(13)(!1)).push([e.i,"body {\n  margin: 0;\n  overflow: hidden;\n  background: #000;\n  cursor: none; }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,a=0,u=[],l=n(15);function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(y(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(y(o.parts[s],t));r[o.id]={id:o.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),p(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=a++;n=s||(s=h(t)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return c(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var s=n[i];(a=r[s.id]).refs--,o.push(a)}e&&c(f(e,t),t);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
//# sourceMappingURL=bundle.js.map