function SalaryCalculatorView(template){
	var calculator,spanTax;
	var _template = template;
	this.initialize = function(model){
		this.$root = $("<div>");
		
		calculator = model;
		
		calculator.onSalaryChanged = getUpdateSalaryInUIHandler(this);
		spanTax = document.getElementById("spanTax");

		this.$root.on('change','#txtBasic',function(){
			calculator.basic(parseFloat(this.value))
		});
		
		this.$root.on('change','#txtHra',function(){
			calculator.hra(parseFloat(this.value))
		});
		this.$root.on('change','#txtDa',function(){
			calculator.da(parseFloat(this.value))
		});
		this.$root.on('change','#rangeTax',function(){
			calculator.tax(this.value);
			//$spanTax.text(this.value);
		});
		
	
	}

	this.render = function(){
		this.$root.append($(_template).html());
		return this;
	}

	function getUpdateSalaryInUIHandler(context){
		var that = context;
		return function(){

			var $salaryNode = that.$root.find("#spanSalary");
			$salaryNode.text(calculator.salary());
			if (calculator.tax() >= 30){
				$salaryNode.removeClass('underTaxed');
				$salaryNode.addClass('overTaxed');
			} else {
				$salaryNode.addClass('underTaxed');
				$salaryNode.removeClass('overTaxed');
			}
		}
	}
	
	
}