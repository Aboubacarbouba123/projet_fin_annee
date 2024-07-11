const ReceptionParcRupture = require('../models/ReceptionParcRupture');

exports.checkParcRupture = async (req, res) => {
    try {
        // Récupérez toutes les réceptions de parc de rupture
        const receptions = await ReceptionParcRupture.find();

        // Structure de données pour stocker les résultats par essence et bille
        const parcRuptureCheck = {};

        // Parcourez toutes les réceptions
        receptions.forEach(reception => {
            const { date, code_a_barre, longueur, diametre_gros_bout, diametre_petit_bout, volume_bille, essences } = reception;

            // Vérifiez si l'essence existe dans le tableau, sinon initialisez-la
            if (!parcRuptureCheck[essences]) {
                parcRuptureCheck[essences] = [];
            }

            // Ajoutez les détails nécessaires au tableau pour chaque essence
            parcRuptureCheck[essences].push({
                dateLivraison: date,
                codeBarre: code_a_barre,
                longueur,
                dg_dp: `${diametre_gros_bout} / ${diametre_petit_bout}`,
                volume: volume_bille
            });
        });

        res.json(parcRuptureCheck);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
