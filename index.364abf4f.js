!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var r=a("bpxeT"),c=a("2TvXO"),i=a("6JpON"),s=a("dIxxU");i=a("6JpON");var l=a("5IjG7"),d=new(e(l))(".photo-card a",{captionsData:"alt",captionDelay:250});document.addEventListener("scroll",(function(){(document.documentElement||document.body).scrollTop>100?f.top.classList.remove("hidden"):f.top.classList.add("hidden")}));var u,p,f={input:document.querySelector("input"),form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),load:document.querySelector(".load-more"),searchBar:document.querySelector(".full-search"),top:document.querySelector(".back-to-top"),sorting:document.querySelector(".sorting"),sortlabel:document.querySelector(".sort-label")},m=(p=e(r)(e(c).mark((function t(n){var o,a,r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e(i).Loading.standard({backgroundColor:"transparent",cssAnimationDuration:800}),o=f.input.value,a=f.sorting.value,"submit"===n.type||"change"===n.type?(f.gallery.innerHTML="",currentPage=1,f.searchBar.classList.remove("full-search"),f.sortlabel.classList.remove("hide")):u+=1,t.prev=5,t.next=8,s.default.get("".concat("https://pixabay.com/api/","?").concat("key=34409732-2eb98e59aad866aa53f09776f").concat("&image_type=photo&orientation=horizontal&safesearch=true&per_page=40","&q=").concat(o,"&page=").concat(u,"&order=").concat(a));case 8:r=t.sent,f.load.classList.remove("hide"),0==r.data.total&&(f.load.classList.add("hide"),e(i).Notify.warning("Sorry, there are no images matching your search query. Please try again.")),"submit"===n.type&&0!==r.data.total&&e(i).Notify.success("Hooray! We found ".concat(r.data.totalHits," images.")),u>r.data.totalHits/40&&0!==r.data.total&&(f.load.classList.add("hide"),e(i).Notify.info("We're sorry, but you've reached the end of search results.")),l=r.data.hits,p=void 0,p=function(e){return e.reduce((function(e,t){return e+function(e){return'<div class="photo-card" data-id="'.concat(e.id,'">\n  <button class="save" onclick="onClickSave()"></button>\n  <a href="').concat(e.largeImageURL,'">\n  <img src="').concat(e.webformatURL,'" alt="').concat(e.tags,'" loading="lazy" width="320" height="200"/>\n  <div class="info">\n  \n    <p class="info-item">\n      <b>Likes</b>').concat(e.likes,'\n    </p>\n    <p class="info-item">\n      <b>Views</b>').concat(e.views,'\n    </p>\n    <p class="info-item">\n      <b>Comments</b>').concat(e.comments,'\n    </p>\n    <p class="info-item">\n      <b>Downloads</b>').concat(e.downloads,"\n    </p>\n  </div>\n  </a>\n</div>")}(t)}),"")}(l),f.gallery.insertAdjacentHTML("beforeend",p),d.refresh(),"click"===n.type&&(c=void 0,c=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height,window.scrollBy({top:2*c,behavior:"smooth"})),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(5),console.log(t.t0);case 21:return t.prev=21,e(i).Loading.remove(),t.finish(21);case 24:case"end":return t.stop()}var c,l,p}),t,null,[[5,18,21,24]])}))),function(e){return p.apply(this,arguments)});f.top.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth"})})),f.form.addEventListener("submit",m),f.load.addEventListener("click",m),f.sorting.addEventListener("change",m)}();
//# sourceMappingURL=index.364abf4f.js.map
