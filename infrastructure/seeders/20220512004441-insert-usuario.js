module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert('Usuarios', [
			{
				nombre: 'john1',
				apellido: 'doe1',
				email: 'john1@doe.com',
				password: '$2a$08$6480tT/SYQCWsJvdyKMAl.lVWFXQoo1omLPlXXaBckX/D/xgW5N0W', //123456
				rolId: 1, //ADMINISTRADOR
			},
			{
				nombre: 'john2',
				apellido: 'doe2',
				email: 'john2@doe.com',
				password: '$2a$08$BOgDba1dBz/mf679m7lCpu3bgM59AhLt0DVC6m6N.Nio8BjiRJQfu', //654321
				rolId: 2, //OPERADOR
			},
			{
				nombre: 'john3',
				apellido: 'doe3',
				email: 'john3@doe.com',
				password: '$2a$08$P0p9pUN4VH3ID1XF5Jfbd.uMo2JcqIoSYfPE2.wfIR8YEkPmVYtXS',
				rolId: 2,
			},
		], {});
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Usuarios', null, {});

	},
};