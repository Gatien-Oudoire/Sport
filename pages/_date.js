export function dans(a, tab) {
    for (let x = 0; x < tab.length; ++x) {
        if (a == tab[x]) return true;
    }
    return false;
}

export function trierDate(tableau) {
    let resultat = [];
    let utilise = [];
    let petite = [tableau[0], 0];
    for (let j = 0; j < tableau.length; ++j) {
        for (let i = 0; i < tableau.length; ++i) {
            if (i == petite[1]) continue;
            if (dans(i, utilise)) continue;
            if (tableau[i] < petite[1]) petite = [tableau[i], i];
        }

        resultat[resultat.length] = petite[0];
        utilise[utilise.length] = petite[1];

        for (let z = 0; z < tableau.length; ++z) {
            if (dans(z, utilise)) continue;
            petite = [tableau[z], z];
        }
    }
    console.log(utilise);
    return [resultat.reverse(), utilise.reverse()];
}

// OK
export function trierValeur(tabA, tabB) {
    // A [62, 61 ,62.5]
    // B [2, 0, 1]

    // A = les valeurs
    // B = les index

    let resultat = [];

    for (let i = 0; i < tabA.length; ++i) {
        for (let j = 0; j < tabB.length; ++j) {
            if (tabB[j] == i) resultat[i] = tabA[j];
        }
    }
    return resultat;
}
