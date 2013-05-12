function SalaryCalculator(){
	var _basic=0,_hra=0,_da=0,_tax=0;
	this.basic = function(){
		if (arguments.length === 0) return _basic;
		//do basic data validation
		_basic = arguments[0];
		this.calculateSalary();
	}
	this.hra = function(){
		if (arguments.length === 0) return _hra;
		//do basic data validation
		_hra = arguments[0];
		this.calculateSalary();
	}
	this.da = function(){
		if (arguments.length === 0) return _da;
		//do basic data validation
		_da = arguments[0];
		this.calculateSalary();
	}
	this.tax = function(){
		if (arguments.length === 0) return _tax;
		//do basic data validation
		_tax = arguments[0];
		this.calculateSalary();
	}

	this.salary = function(){
		return _salary;
	}

	this.calculateSalary = function(){
		var gross = _basic + _hra + _da;
		 _salary = gross - (gross * (_tax /100));
		 if (this.onSalaryChanged) 
		 	this.onSalaryChanged();
	}
	this.onSalaryChanged = function(){};
}