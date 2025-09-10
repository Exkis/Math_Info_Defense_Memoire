const searchInput = document.getElementById('searchInput');
const professeurFilter = document.getElementById('professeurFilter');
const sujetFilter = document.getElementById('sujetFilter');
const memoireList = document.getElementById('memoireList');
const memoires = memoireList.getElementsByClassName('memoire-card');

function filterMemoires() {
    const searchText = searchInput.value.toLowerCase();
    const professeurValue = professeurFilter.value;
    const sujetValue = sujetFilter.value;

    for (let memoire of memoires) {
        const name = memoire.querySelector('h3').textContent.toLowerCase();
        const sujet = memoire.dataset.sujet.toLowerCase();
        const professeur = memoire.dataset.professeur;

        const matchesSearch = name.includes(searchText) || sujet.includes(searchText);
        const matchesProfesseur = professeurValue === "" || professeur === professeurValue;
        const matchesSujet = sujetValue === "" || sujet === sujetValue;

        memoire.style.display = (matchesSearch && matchesProfesseur && matchesSujet) ? "flex" : "none";
    }
}

searchInput.addEventListener('input', filterMemoires);
professeurFilter.addEventListener('change', filterMemoires);
sujetFilter.addEventListener('change', filterMemoires);
