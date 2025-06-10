const ratioPresets = {
	"1:1": { width: 1024, height: 1024 },
	"4:3": { width: 1600, height: 1200 },
	"3:2": { width: 1440, height: 960 },
	"16:9": { width: 1920, height: 1080 },
};

function getWidthHeight(ratio) {
	return ratioPresets[ratio];
}

function detectRatio(width, height) {
	const w = Number(width);
	const h = Number(height);
	for (const [key, { width: rw, height: rh }] of Object.entries(ratioPresets)) {
		if (rw === w && rh === h) {
			return key;
		}
	}
	return "";
}

const presetsRatio = Object.keys(ratioPresets);

export { getWidthHeight, presetsRatio, detectRatio };
