fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${this.state.numDecks}`)
.then(response => response.json())
.then(json => this.setState({deckId: json.deck_id, hasId: true}))