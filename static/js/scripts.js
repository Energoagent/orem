const HOST = "http://192.168.22.11:9797";
var currentMonth = '';    
var currentYear = '';
var currentGTP = '';

function energyRequest() {
	var req = new XMLHttpRequest();
	req.open("GET", HOST + '/energy?Gtp=' + currentGTP + '&year=' + currentYear +'&month=' + currentMonth);
	req.onreadystatechange = 
		function() {
			if(this.readyState === 4 && this.status === 200) {
				recordSet = JSON.parse(this.response);
				if (recordSet) {
					energyTable = document.getElementById('energyTable');
					tableBody = energyTable.getElementsByTagName('tbody')[0];
					if(tableBody){
						energyTable.removeChild(tableBody);
					};
					tableBody = document.createElement('tbody');
					for (r1 of recordSet) {
						let newRow = tableBody.insertRow();
						newRow.insertCell().appendChild(document.createTextNode(r1.No));
						newRow.insertCell().appendChild(document.createTextNode(r1.report_name));
						newRow.insertCell().appendChild(document.createTextNode(r1.v_kvt_hr));
						newRow.insertCell().appendChild(document.createTextNode(r1.v_before));
						newRow.insertCell().appendChild(document.createTextNode(r1.correction));
						newRow.insertCell().appendChild(document.createTextNode(r1.conditional_price));
						newRow.insertCell().appendChild(document.createTextNode(r1.price_wo_vat));
					};
					energyTable.appendChild(tableBody);
				}
			}
		};
	req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	req.send();
};

function energyFileListRequest() {
	var req = new XMLHttpRequest();
	req.open("GET", HOST + '/energyFileList?Gtp=' + currentGTP + '&year=' + currentYear +'&month=' + currentMonth);
	req.onreadystatechange = 
		function() {
			if(this.readyState === 4 && this.status === 200) {
				recordSet = JSON.parse(this.response);
				if (recordSet) {
					energyFileTable = document.getElementById('energyFileTable');
					tableBody = energyTable.getElementsByTagName('tbody')[0];
					if(tableBody){
						energyFileTable.removeChild(tableBody);
					};
					tableBody = document.createElement('tbody');
					for (r1 of recordSet) {
						let newRow = tableBody.insertRow();
						newRow.insertCell().appendChild(document.createTextNode(r1.No));
						newRow.insertCell().appendChild(document.createTextNode(r1.report_name));
					};
					energyFileTable.appendChild(tableBody);
				}
			}
		};
	req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	req.send();
};


function powerRequest() {
	var req = new XMLHttpRequest();
	req.open("GET", HOST + '/power?Gtp=' + currentGTP + '&year=' + currentYear +'&month=' + currentMonth);
	req.onreadystatechange = 
		function() {
			if(this.readyState === 4 && this.status === 200) {
				recordSet = JSON.parse(this.response);
				if (recordSet) {
					let powerTable = document.getElementById('powerTable');
					let tableBody = powerTable.getElementsByTagName('tbody')[0];
					if(tableBody){
						powerTable.removeChild(tableBody);
					};
					tableBody = document.createElement('tbody');
					for (r1 of recordSet) {
						let newRow = tableBody.insertRow();
						newRow.insertCell().appendChild(document.createTextNode(r1.No));
						newRow.insertCell().appendChild(document.createTextNode(r1.report_name));
						newRow.insertCell().appendChild(document.createTextNode(r1.dog_no));
						newRow.insertCell().appendChild(document.createTextNode(r1.dog_data));
						newRow.insertCell().appendChild(document.createTextNode(r1.seller_name));
						newRow.insertCell().appendChild(document.createTextNode(r1.seller_code));
						newRow.insertCell().appendChild(document.createTextNode(r1.gtp_seller_code));
						newRow.insertCell().appendChild(document.createTextNode(r1.vp_dog));
						newRow.insertCell().appendChild(document.createTextNode(r1.vp_att));
						newRow.insertCell().appendChild(document.createTextNode(r1.vp_fact));
						newRow.insertCell().appendChild(document.createTextNode(r1.p_price));
						newRow.insertCell().appendChild(document.createTextNode(r1.p_value));
						newRow.insertCell().appendChild(document.createTextNode(r1.p_value_w_vat));
						newRow.insertCell().appendChild(document.createTextNode(r1.p_vat));
					};
					powerTable.appendChild(tableBody);
				};
			};
		};
	req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	req.send();
};


function GTPRequest() {
	var req = new XMLHttpRequest();
	req.open("GET", HOST + '/GTPList?year=' + currentYear +'&month=' + currentMonth);
	req.onreadystatechange = 
		function() {
			if(this.readyState === 4 && this.status === 200) {
				GTPList = JSON.parse(this.response);
				if (GTPList) {
					GTPSelect = document.getElementById('input_GTP');
					if (GTPSelect.options.length > 0) {
						GTPSelect.options.length = 0;
					};
					for (g1 of GTPList) {
						GTPSelect.options[GTPSelect.options.length]= new Option(g1.GtpCode);
					};
				};
			};
		};
	req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	req.send();
};

function yearRequest() {
	var req = new XMLHttpRequest();
	req.open("GET", HOST + '/year');
	req.onreadystatechange = 
		function() {
			if(this.readyState === 4 && this.status === 200) {
				let yearList = JSON.parse(this.response);
				if (yearList) {
					yearSelect = document.getElementById('input_year');
					if (yearSelect.options.length > 0) {
						yearSelect.options.length = 0;
					};
					for (y1 of yearList) {
						yearSelect.options[yearSelect.options.length]= new Option(y1.year);
					};
				};
			};
		};
	req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	req.send();
};


function monthRequest() {
	var req = new XMLHttpRequest();
	req.open("GET", HOST + '/month?year=' + currentYear);
	req.onreadystatechange = 
		function() {
			if(this.readyState === 4 && this.status === 200) {
				let monthList = JSON.parse(this.response);
				if (monthList) {
					monthSelect = document.getElementById('input_month');
					if (monthSelect.options.length > 0) {
						monthSelect.options.length = 0;
					};
					for (m1 of monthList) {
						monthSelect.options[monthSelect.options.length]= new Option(m1.month);
					};
				};
			};
		};
	req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	req.send();
};

