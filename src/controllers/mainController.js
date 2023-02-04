const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller = {
	index: (req, res) => {
		return res.render('index',{
			visited: products.filter(product=>{
				return product.category==="visited"
			}),
			inSale: products.filter(product=>{
				return product.category==="in-sale"
			}),toThousand
		})
	},
	search: (req, res) => {
		
		const {keywords}= req.query;
		console.log(keywords);
		const arrayKeywords= keywords.split(' ');
		console.log(arrayKeywords);
		/* arrayKeywords.forEach(keyword => {
			product.name.includes(keyword)
		}); */ 
		

		return res.render('results',{
			searched: products.find( product =>  product.name.toLowerCase().includes(keywords) || product.price===+keywords|| product.description.includes(keywords)),
			keywords,
			toThousand
		})
	},
};


module.exports = controller;
