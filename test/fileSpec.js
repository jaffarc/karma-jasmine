describe('APP', function() {
	
	it('test value and type', function() {
		console.log(APP);
		expect(APP.getName()).toEqual('APP');
		
	});

	describe('APP extend', function() {
		var expected = { '0': 'A', '1': 'P', '2': 'P', test: 45 };
		
		it('return object', function() {
			expect(APP.extend("APP", {'test': jasmine.any(Number)})).toEqual(expected);
		});
	});



	describe('getStockSymbols', function() {

		var symbols = APP.getStockSymbols([
			{symbol:  "PRD", price:  "240.50", volume: 66545},
			{symbol:  "VIY", price:  "980.50", volume: 1145},
			{symbol:  "APQ", price:  "11.50", volume: 45454},
		]);

		it('return array name symbols', function() {
			
			expect(symbols).toEqual([ 'PRD', 'VIY', 'APQ' ]);
		});

	});

	describe('reduce votes', function() {
		
		var votes = [
			"angular",
			"jquery",
			"angular",
			"nodejs",
			"boostrap",
			"angular",
			"jquery",
			"nodejs",
			"angular"

		];
		var initValue = {};
		
		var result  = APP.reduce(votes,[ this, initValue]);
		
		it('reduce value array votes', function() {
			expect(result).toEqual(
				jasmine.objectContaining(
					{ angular: jasmine.any(Number), jquery: jasmine.any(Number), nodejs: jasmine.any(Number), boostrap: jasmine.any(Number) }
				)
			);
		});

	});
	
	describe('Test struct retorn  CEP json', function() {
		var Cep = {
			    "status": {
			        "success": true,
			        "error": [],
			        "msg": "CEP localizado"
			    },
			    "result": {
			        "zipquery": [
			            {
			                "id_suppliers_location": 8,
			                "id_suppliers": 1,
			                "loc_district": "Jardim Faculdade",
			                "loc_city": "Itu",
			                "loc_state": "SP",
			                "zipcode_range_start": "13300-001",
			                "zipcode_range_end": "13314-999",
			                "loc_zipcode": "13300-400",
			                "radius": 50,
			                "latitude": "-23.2652376",
			                "longitude": "-47.2997218",
			                "dt_create": "2015-10-28 18:38:46",
			                "dt_update": null
			            }
			        ]
			    }
			};

		it('struct name status', function() {
			
			var expected, status;
		
			expected = ['success', 'error', 'msg'];

			status = APP.getstatusJson(Cep);

			expect(status).toEqual(expected);
		});

		it('struct zipquery', function() {
			var expected, status;
			expected = [ 
				'id_suppliers_location', 
				'id_suppliers', 
				'loc_district',  
				'loc_city', 
				'loc_state', 
				'zipcode_range_start',
				'zipcode_range_end',
				'loc_zipcode',
				'radius',
				'latitude',
				'longitude',
				'dt_create',
				'dt_update' 
			];

			status = APP.getZipQueryJson(Cep);
			
			expect(status).toEqual(expected);
		});

	});
});


