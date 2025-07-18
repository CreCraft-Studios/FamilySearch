(function(){

	function loadTitle() {
		if (window.location.href.includes('#')) {
			const h = window.location.hash.substring(1);
			const p = new URLSearchParams(h);
			
			if (p.has("gsc.q"))
				document.title = `${p.get("gsc.q")} - Family Search Engine`;
		}
	}

	function enableSafeSearch() {
try {
if (window.location.href.includes("log=true"))
alert("Function was called");
	
	    const p = document.getElementsByClassName("gcsc-more-maybe-branding-root")[0];
		if (p!=null) {
if (window.location.href.includes("log=true"))
alert("p not null");
		    const a = p.children[0];
			if (a!=null) {
if (window.location.href.includes("log=true"))
alert("a not null");
				const url = `${a.getAttribute("href")}&safe=strict`;
		    		a.setAttribute("href", url);
clearInterval(st);
			}
		}
} catch(e) {
console.error(e);

if (window.location.href.includes("log=true"))
alert(`Error Message: ${e}`);
}
	}

	const st = setInterval(function(){enableSafeSearch();}, 1000);

	setTimeout(function(){
		const t = document.getElementById("___gcse_0");
		const o = new MutationObserver(()=>{
			loadTitle();
			enableSafeSearch();
		});
		
		o.observe(t, {
			childList: true,
			subtree: true
		});
	}, 2000);
	
	window.addEventListener('hashchange',()=>{loadTitle();});
	window.addEventListener('DOMContentLoaded',()=>{loadTitle();});
})();
