(function(){
	function loadTitle() {
		if (window.location.href.includes('#')) {
			const h = window.location.hash.substring(1);
			const p = new URLSearchParams(h);
			
			if (p.has("gsc.q"))
				document.title = `${p.get("gsc.q")} - Family Search Engine`;
		}
	}

	var st=null;
	function enableSafeSearch() {
try {
	    var p = document.getElementsByClassName("gcsc-more-maybe-branding-root")[0];
	if (p==null)
		p = document.getElementsByClassName("gcsc-more-maybe-branding-box")[0];
	
		if (p!=null) {
		    const a = p.children[0];
			if (a!=null) {
				const url = `${a.getAttribute("href")}&safe=strict`;
		    		a.setAttribute("href", url);
clearInterval(st);
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
