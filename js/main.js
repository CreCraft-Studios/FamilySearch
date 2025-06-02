(function(){

	function loadTitle() {
		if (window.location.href.includes('#')) {
			const h = window.location.hash.substring(1);
			const p = new URLSearchParams(h);
			
			if (p.has("gsc.q"))
				document.title = `${p.get("gsc.q")} - Family Search`;
		}
	}
	
	const t = document.getElementById("___gcse_0");
	const o = new MutationObserver(()=>{
		loadTitle();
	});
	
	o.observe(t, {
		childList: true,
		subtree: true
	});
	
	window.addEventListener('hashchange'()=>{loadTitle();});

})();
