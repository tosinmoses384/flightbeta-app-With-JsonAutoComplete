const originFrom = document.getElementById('originFrom');
const destinationTo = document.getElementById('destinationTo');
const matchList1 = document.getElementById('match-list1');
const matchList2 = document.getElementById('match-list2');

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//   SEARCH STATES.JSON AND FILTER IT
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const searchStates1 = async searchText => {
    const res = await fetch('../data2/states.json');
    const states = await res.json();

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // GET MATCHES TO CURRENT TEXT INPUT
    // g IS GLOBAL i IS CASE INSENSITIVE
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList1.innerHTML = '';
    }

    outputHtml1(matches);
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%
// SHOW RESULTS IN FIRST INPUT.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%
    const outputHtml1 = matches => {
        if(matches.length > 0) {
                const html = matches.map(match => `
                    <div class="card card-body mb-1">
                        <h4>${match.name} (${match.abbr}) <span 
                        class="text-primary">${match.capital}</span></h4>
                        <small>Lat: ${match.lat} / Long: ${match.long}</small>
                        </div>
                `).join('');

                matchList1.innerHTML = html;
        }
    };
originFrom.addEventListener('input', () => searchStates1(originFrom.value));



              //SECOND INPUT
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//   SEARCH STATES.JSON AND FILTER IT
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const searchStates2 = async searchText => {
    const res = await fetch('../data2/states.json');
    const states = await res.json();

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // GET MATCHES TO CURRENT TEXT INPUT
    // g IS GLOBAL i IS CASE INSENSITIVE
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList2.innerHTML = '';
    }

    outputHtml2(matches);
};
// %%%%%%%%%%%%%%%%%%%%%%%%%%%
// SHOW RESULTS IN SECOND INPUT.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%
const outputHtml2 = matches => {
    if(matches.length > 0) {
            const html = matches.map(match => `
                <div class="card card-body mb-1">
                    <h4>${match.name} (${match.abbr}) <span 
                    class="text-primary">${match.capital}</span></h4>
                    <small>Lat: ${match.lat} / Long: ${match.long}</small>
                    </div>
            `).join('');

            matchList2.innerHTML = html;
    }
};

destinationTo.addEventListener('input', () => searchStates2(destinationTo.value));