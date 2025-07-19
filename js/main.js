(function(){
var safeApplied=false;
	
function needToRejectSearch(query) {
	try {
		if (query.includes("porn") || query.includes("xnxx") || query.includes("xvideos")) {
			const d = document.getElementsByClassName("gsc-expansionArea")[0];
			if (d!=null) {
				if (d.children.length<0) {
					setTimeout(function(){needToRejectSearch(query);}, 1000);
				} else {
					while (d.children.length>0) {
					    d.removeChild(d.firstChild);
					}
					const p = document.createElement("div");
					p.setAttribute("class", "gsc-webResult gsc-result");
					const p2 = document.createElement("div");
					p2.setAttribute("class", "gs-webResult gs-result gs-no-results-result");
					const p3 = document.createElement("div");
					p3.setAttribute("class", "gs-snippet");
					p3.innerText = "No Results Found. (Could be due to restrictions)";
					
					p2.appendChild(p3);
					p.appendChild(p2);
					d.appendChild(p);
				}
			} else setTimeout(function(){needToRejectSearch(query);}, 1000);
		}
	} catch(e) {
		console.error(e);
	}
}
	
	function loadTitle() {
		if (window.location.href.includes('#')) {
			const h = window.location.hash.substring(1);
			const p = new URLSearchParams(h);
			
			if (p.has("gsc.q")) {
				document.title = `${p.get("gsc.q")} - SafeQuery`;
				safeApplied=false;
				setTimeout(function(){
					needToRejectSearch(decodeURIComponent(p.get("gsc.q").toLocaleLowerCase()));
				}, 2000);
			}
		}
	}

	var st=null;
	function enableSafeSearch() {
try {
if (safeApplied) {
	clearInterval(st);
	return;
}
	
	    var p = document.getElementsByClassName("gcsc-more-maybe-branding-root")[0];
	if (p==null)
		p = document.getElementsByClassName("gcsc-more-maybe-branding-box")[0];
	
		if (p!=null) {
		    const a = p.children[0];
			if (a!=null) {
				const url = `${a.getAttribute("href")}&safe=strict`;
		    		a.setAttribute("href", url);
clearInterval(st);
safeApplied=true;
			}
		}
} catch(e) {
console.error(e);
}
	}

	function startTimer() {
	st = setInterval(function(){enableSafeSearch();}, 1000);
	}

	setTimeout(function(){
		const t = document.getElementById("___gcse_0");
		const o = new MutationObserver(()=>{
			loadTitle();
			startTimer();
		});
		
		o.observe(t, {
			childList: true,
			subtree: true
		});
	}, 2000);
	
	window.addEventListener('hashchange',()=>{loadTitle();});
	window.addEventListener('DOMContentLoaded',()=>{loadTitle(); startTimer();});
})();
