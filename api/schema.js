module.exports = function (mongoose) {
	const Card = mongoose.model('Card', // http://mongoosejs.com/docs/guide.html
		{
			"coulCardId": String,
			"soulCardTitle": String,
			"soulCardSoulencje": [
				{
					"soulIdParent": String,
					"soulType": String,
					"language": String,
					"text": String,
					"source": {
						"author": String,
						"created": Date,
						"source": String,
						"sourceLink": String
					}
				}
			],
			owner: String
		});

	const Habit = mongoose.model('Habit', {
		"frequency": String,
		"interval": Number,
		"name": String,
		"times": Number,
		"type": String,
		"lastCompleted": [Date],
		"habitId": String
	});

	const User = mongoose.model('User', {
		"loginId": String,
		"loginType": String,
		"email": String,
		"password": String,
		"personalInfo": [
			{
				"firstName": String,
				"lastName": String,
			}
		],
		"habits": [{type: mongoose.Schema.Types.ObjectId, ref: 'Habit'}]
	});
	return {
		Habit,
		User,
		Card
	}
};
