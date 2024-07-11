const ReceptionParcRupture = require('../models/ReceptionParcRupture');

exports.preparationBilles = async (req, res) => {
    try {
        // Récupérez toutes les réceptions de parc de rupture
        const receptions = await ReceptionParcRupture.find();

        // Calcul de la perte de matière (2%)
        const perteMatiere = 0.02;

        // Structure de données pour stocker les résultats préparés des billes
        const preparedBilles = [];

        // Parcourez toutes les réceptions
        receptions.forEach(reception => {
            const { code_a_barre, longueur, diametre_gros_bout, diametre_petit_bout } = reception;

            // Calcul des nouvelles valeurs
            const newId = `${code_a_barre}-${Date.now()}`; // Exemple simple d'attribution d'un nouvel ID
            const newLongueur = longueur * (1 - perteMatiere);
            const newDp = diametre_petit_bout * (1 - perteMatiere);
            const newDg = diametre_gros_bout * (1 - perteMatiere);

            // Ajoutez les détails de la bille préparée à la structure de données
            preparedBilles.push({
                codeBarreBille: code_a_barre,
                newId,
                newLongueur,
                newDp,
                newDg
            });
        });

        res.json(preparedBilles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
