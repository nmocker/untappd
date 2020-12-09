class UntappdApi {
	API_URL_BASE = 'https://api.untappd.com/v4';
	API_KEY =
		'4321368B7A86DE27FA0394FD2DDC37AAE179B0B9';

	businessSearch(parameters) {
		axios
			.get(this.API_URL_BASE, {
				params: {
					_ep: 'https://api.untappd.com/v4',

					...parameters,
				},
				headers: {
					Authorization: `Bearer ${this.API_KEY}`,
				},
			})
			.then(this.handleResponse)
			.catch(this.handleError);
	}

	handleResponse(response) {
		console.log('response', response);
		const event = new CustomEvent('got-results', {
			detail: response.data.businesses,
		});
		document.dispatchEvent(event);
	}
}
