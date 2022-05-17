/*eslint linebreak-style: ['off', 'windows']*/

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert('Rols', [
			{
				id: '1',
				denominacion: 'ADMINISTRADOR',
			},
			{
				id: '2',
				denominacion: 'OPERADOR',
			},
		], {});
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Rols', null, {});
	},
};