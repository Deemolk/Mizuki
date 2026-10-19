// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement" | "autodidacticism";
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "曾就读太平洋大学本科音乐与媒体双专业",
		description:
			"",
		type: "education",
		startDate: "2021-08-21",
		endDate: "2025-05-28",
		location: "美国，加州，斯托克顿",
		organization: "太平洋大学University of Pacific",
		skills: ["音乐理论", "对位法", "流行作曲", "基础管弦乐", "世界音乐历史", "世界民族音乐", "平面设计", "电影制作", "绘画", "C++"],
		achievements: [
			"当前GPA: 3.74/4.0",
			"专攻于媒体行业制作人",
			"参与多个影视创作与音乐创作项目",
			"作为全能媒体制作人对媒体各行业都具备一定能力"
		],
		icon: "material-symbols:school",
		color: "#059669", 
		featured: true,
	},
	{
		id: "programming-contest",
		title: "大学校内流行音乐多人创作中荣获嘉奖",
		description: "第一次参与多人音乐创作项目，并在参与过程中提升了合作沟通的能力",
		type: "achievement",
		startDate: "2023-8-27",
		endDate: "2023-8-27",
		location: "太平洋大学",
		organization: "太平洋大学音乐学院",
		skills: ["流行作曲"],
		achievements: [
			"流行音乐多人创作中获得最佳创意奖"
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
	},
	{
		id: "high-school-graduation",
		title: "高中毕业",
		description: "",
		type: "education",
		startDate: "2018-09-01",
		endDate: "2021-06-30",
		location: "广东中山",
		organization: "中山市第一中学国际部",
		achievements: [
			"",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "first-programming-experience",
		title: "初次接触编程",
		description: "大学GE课程中选修C++，开始对编程显露兴趣",
		type: "education",
		startDate: "2023-08-27",
		skills: ["Python", "基础编程概念"],
		achievements: [
			'完成了第一个"Hello World"程序',
			"学会了基本的循环和条件语句",
			"培养了对编程的兴趣",
			"为后来自学其他语言的编程提供了基础"
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},
	{
		id: "smart-contract-learning",
		title: "开始接触并学习DeFi智能合约",
		type: "autodidacticism",
				startDate: "2025-08-24",
		skills: ["Solidity", "加密货币", "智能合约", "Web3"],
		achievements: [
			""
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},
	{
		id: "english-certificate",
		title: "英语四级证书",
		description: "通过了大学英语四级考试，具备了基本的英语读写能力。",
		type: "achievement",
		startDate: "2023-06-15",
		organization: "全国大学英语四、六级考试委员会",
		achievements: [
			"四级成绩：550分",
			"提升了英语技术文档阅读能力",
			"为后续学习国外技术资料打下基础",
		],
		links: [
			{
				name: "CET-4 Certificate",
				url: "https://certificates.example.com/cet4",
				type: "certificate",
			},
		],
		icon: "material-symbols:translate",
		color: "#059669",
	},
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement").length,
		自学经历: timelineData.filter((item) => item.type === "autodidacticism").length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
