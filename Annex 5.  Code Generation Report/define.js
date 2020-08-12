function CodeDefine() { 
this.def = new Array();
this.def["rt_OneStep"] = {file: "ert_main_c.html",line:35,type:"fcn"};
this.def["main"] = {file: "ert_main_c.html",line:71,type:"fcn"};
this.def["rtDW"] = {file: "ACC_c.html",line:22,type:"var"};
this.def["rtU"] = {file: "ACC_c.html",line:25,type:"var"};
this.def["rtY"] = {file: "ACC_c.html",line:28,type:"var"};
this.def["ACC_step"] = {file: "ACC_c.html",line:31,type:"fcn"};
this.def["ACC_initialize"] = {file: "ACC_c.html",line:49,type:"fcn"};
this.def["DW"] = {file: "ACC_h.html",line:35,type:"type"};
this.def["ExtU"] = {file: "ACC_h.html",line:42,type:"type"};
this.def["ExtY"] = {file: "ACC_h.html",line:48,type:"type"};
this.def["ACCClassical"] = {file: "ACCClassical_c.html",line:25,type:"fcn"};
this.def["DW_ACCClassical"] = {file: "ACCClassical_h.html",line:32,type:"type"};
this.def["int8_T"] = {file: "rtwtypes_h.html",line:49,type:"type"};
this.def["uint8_T"] = {file: "rtwtypes_h.html",line:50,type:"type"};
this.def["int16_T"] = {file: "rtwtypes_h.html",line:51,type:"type"};
this.def["uint16_T"] = {file: "rtwtypes_h.html",line:52,type:"type"};
this.def["int32_T"] = {file: "rtwtypes_h.html",line:53,type:"type"};
this.def["uint32_T"] = {file: "rtwtypes_h.html",line:54,type:"type"};
this.def["int64_T"] = {file: "rtwtypes_h.html",line:55,type:"type"};
this.def["uint64_T"] = {file: "rtwtypes_h.html",line:56,type:"type"};
this.def["real32_T"] = {file: "rtwtypes_h.html",line:57,type:"type"};
this.def["real64_T"] = {file: "rtwtypes_h.html",line:58,type:"type"};
this.def["real_T"] = {file: "rtwtypes_h.html",line:64,type:"type"};
this.def["time_T"] = {file: "rtwtypes_h.html",line:65,type:"type"};
this.def["boolean_T"] = {file: "rtwtypes_h.html",line:66,type:"type"};
this.def["int_T"] = {file: "rtwtypes_h.html",line:67,type:"type"};
this.def["uint_T"] = {file: "rtwtypes_h.html",line:68,type:"type"};
this.def["ulong_T"] = {file: "rtwtypes_h.html",line:69,type:"type"};
this.def["ulonglong_T"] = {file: "rtwtypes_h.html",line:70,type:"type"};
this.def["char_T"] = {file: "rtwtypes_h.html",line:71,type:"type"};
this.def["uchar_T"] = {file: "rtwtypes_h.html",line:72,type:"type"};
this.def["byte_T"] = {file: "rtwtypes_h.html",line:73,type:"type"};
this.def["pointer_T"] = {file: "rtwtypes_h.html",line:94,type:"type"};
}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["ert_main_c.html"] = "../ert_main.c";
	this.html2Root["ert_main_c.html"] = "ert_main_c.html";
	this.html2SrcPath["ACC_c.html"] = "../ACC.c";
	this.html2Root["ACC_c.html"] = "ACC_c.html";
	this.html2SrcPath["ACC_h.html"] = "../ACC.h";
	this.html2Root["ACC_h.html"] = "ACC_h.html";
	this.html2SrcPath["ACC_private_h.html"] = "../ACC_private.h";
	this.html2Root["ACC_private_h.html"] = "ACC_private_h.html";
	this.html2SrcPath["ACC_types_h.html"] = "../ACC_types.h";
	this.html2Root["ACC_types_h.html"] = "ACC_types_h.html";
	this.html2SrcPath["ACCClassical_c.html"] = "../ACCClassical.c";
	this.html2Root["ACCClassical_c.html"] = "ACCClassical_c.html";
	this.html2SrcPath["ACCClassical_h.html"] = "../ACCClassical.h";
	this.html2Root["ACCClassical_h.html"] = "ACCClassical_h.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "rtwtypes_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"ert_main_c.html","ACC_c.html","ACC_h.html","ACC_private_h.html","ACC_types_h.html","ACCClassical_c.html","ACCClassical_h.html","rtwtypes_h.html"];
