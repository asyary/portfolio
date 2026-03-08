window.onload = () => {
	const container = document.getElementById('dynamic-container');
	const firstTab = document.getElementById('about');

	setTimeout(() => { document.getElementById('term-box').style.opacity = 1; }, 200);

	setTimeout(() => {
		let i = 0;
		const text = "./about.sh";
		const typeInterval = setInterval(() => {
			if (i < text.length) {
				document.getElementById('cmd-text').innerHTML += text.charAt(i);
				i++;
			} else {
				clearInterval(typeInterval);

				setTimeout(() => {
					firstTab.style.display = 'block';
					container.style.height = container.scrollHeight + 'px';

					setTimeout(() => { firstTab.classList.add('active'); }, 50);
					setTimeout(() => { container.style.height = 'auto'; }, 400);
				}, 200);
			}
		}, 100);
	}, 1000);
};

function switchTab(tabId, el) {
	const container = document.getElementById('dynamic-container');
	const activeTab = document.querySelector('.tab-pane.active');
	const newTab = document.getElementById(tabId);

	if (!activeTab || activeTab === newTab) return;

	document.getElementById('cmd-text').innerText = `./${tabId}.sh`;
	document.querySelectorAll('.tab-btn').forEach(btn => btn.className = 'tab-btn text-secondary');
	el.className = 'tab-btn text-success fw-bold';

	// I'm... not really sure how this next part works..., but oh well :D
	container.style.height = container.offsetHeight + 'px';
	activeTab.classList.remove('active');

	setTimeout(() => {
		activeTab.style.display = 'none';
		newTab.style.display = 'block';

		const lockedHeight = container.style.height;
		container.style.height = 'auto';
		const targetHeight = container.scrollHeight + 'px';

		container.style.height = lockedHeight;
		container.offsetHeight;

		container.style.height = targetHeight;

		setTimeout(() => { newTab.classList.add('active'); }, 50);
		setTimeout(() => { container.style.height = 'auto'; }, 400);

	}, 300);
}