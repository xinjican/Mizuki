// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Vivo: [
		{
			name: "vivo X200 Pro mini",
			image: "/images/device/vivo X200 Pro mini.webp",
			specs: "Light Purple / 16G + 512G",
			description:
				"Flagship performance, Zeiss optics, 90W FlashCharge.",
			link: "https://www.vivo.com.cn/vivo/x200promini/",
		},
	],
	Lenovo: [
		{
			name: "ThinkBook 14 Gen 4 Intel",
			image: "/images/device/thinkbook14gen4intel.webp",
			specs: "Mineral Grey  / 16G + 512G",
			description:
				"Dual-tone elegance, 12th Gen Intel power, versatile connectivity.",
			link: "https://www.lenovo.com.cn/thinkbook/thinkbook-14-gen-4-intel/",
		},
	],
};
