function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtDW"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACC.c",
	size: 16};
	 this.metricsArray.var["rtU"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACC.c",
	size: 24};
	 this.metricsArray.var["rtY"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACC.c",
	size: 16};
	 this.metricsArray.fcn["ACCClassical"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACCClassical.c",
	stack: 16,
	stackTotal: 16};
	 this.metricsArray.fcn["ACC_initialize"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACC.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["ACC_step"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACC.c",
	stack: 0,
	stackTotal: 16};
	 this.metricsArray.fcn["fmax"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACCClassical.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["fmin"] = {file: "C:\\Users\\Public\\Documents\\CarSim2019.1_Data\\ACC_ert_rtw\\ACCClassical.c",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="ACC_metrics.html">Global Memory: 56(bytes) Maximum Stack: 16(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
