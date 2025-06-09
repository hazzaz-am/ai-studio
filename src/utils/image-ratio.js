const ratioPresets = {
	"1:1": { width: "1024", height: "1024" },
	"4:3": { width: "1600", height: "1200" },
	"3:2": { width: "1440", height: "960" },
	"16:9": { width: "1920", height: "1080" },
};

function getWidthHeight(ratio) {
	return ratioPresets[ratio];
}

function detectRatio(width, height) {
	for (const [key, value] of Object.entries(ratioPresets)) {
		if (value.width === width && value.height === height) {
			return key;
		}
	}
	return "";
}

const presetsRatio = [];

for (const key in ratioPresets) {
	presetsRatio.push(key);
}

export { getWidthHeight, presetsRatio, detectRatio };
