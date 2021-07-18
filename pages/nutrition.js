let laDate = new Date();
let poids = 62;
let taille = 1.78;
let age = laDate.getFullYear() - 2004;

const formule = (p, t, a) => {
    return 13.7516 * p + 500.33 * t - 6.755 * a + 66.473;
};

const metaboBase = formule(poids, taille, age);

export default function Nutrition() {
    return (
        <>
            <main>
                <h1 className="title"> Nutrition </h1>
                <div className="lesExercices">
                    <div className="card">
                        <h2>Calories</h2>
                        <p>Sèche: {Math.round(metaboBase * 1.2)}kcal</p>
                        <p>
                            Normal: {Math.round(metaboBase * 1.55)}
                            kcal
                        </p>
                    </div>
                    <div className="card">
                        <h2> Protéines</h2>
                        <p> Valeur : {poids * 2} g </p>
                    </div>
                    <div className="card">
                        <h2> Lipides </h2>
                        <p> Valeur : {poids} g </p>
                    </div>
                    <div className="card">
                        <h2> Glucides </h2>
                        <p> Valeur : {poids * 3} g </p>
                    </div>
                </div>
            </main>
        </>
    );
}
